import prisma from "../config/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface User {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

const userService = {
  getUserById: async (id: string) => {
    return await prisma.user.findUnique({
      where: { id },
    });
  },
  createUser: async (data: User) => {
    // check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      throw new Error("User already exists with this email");
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    // create the user
    await prisma.user.create({
      data,
    });

    // generate a JWT token
    const payload = { 
        email: data.email,
        name: data.name,
        avatar: data.avatar || null
     };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1d" });

    return { token };
  },
};

export default userService;

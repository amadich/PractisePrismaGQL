import userService from "../../services/userService";

const userResolver = {
    Query: {
        getUser: async (_: any, { id }: { id: string }) => {
            return await userService.getUserById(id).then(user => {
                if (!user) throw new Error("User not found");
                return user;
            });
        }
    },
    Mutation: {
        createUser: async (_: any, { input }: { input: { name: string, email: string, password: string, avatar?: string } }) => {
            return await userService.createUser(input);
        }
    }
};

export default userResolver;
# PractisePrismaGQL

This is a server-side application built with Node.js, TypeScript, Prisma, and GraphQL. It provides a backend for managing user data and includes features like authentication, database interaction, and GraphQL API.

<img width="1099" height="597" alt="image" src="https://github.com/user-attachments/assets/15114c39-3072-4a16-90df-e5364a9f068a" />


## Project Structure

```
servre/
├── package.json
├── tsconfig.json
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── server.ts
│   ├── config/
│   │   ├── db.ts
│   │   └── prismaClient.ts
│   ├── graphql/
│   │   ├── schema.ts
│   │   ├── resolvers/
│   │   │   └── userResolver.ts
│   │   └── typeDefs/
│   │       └── userTypeDefs.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── models/
│   │   └── userModel.ts
│   ├── services/
│   │   └── userService.ts
│   └── utils/
│       ├── errorHandler.ts
│       └── responseHandler.ts
```

## Features

- **Prisma ORM**: For database schema management and migrations.
- **GraphQL API**: Provides a flexible and efficient way to interact with the backend.
- **Authentication Middleware**: Handles user authentication.
- **Error Handling**: Centralized error handling for better debugging.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amadich/PractisePrismaGQL.git
   ```

2. Navigate to the project directory:
   ```bash
   cd PractisePrismaGQL/servre
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

## Usage

1. Set up the database:
   - Update the `DATABASE_URL` in the `.env` file.
   - Run Prisma migrations:
     ```bash
     yarn prisma migrate dev
     ```

2. Start the server:
   ```bash
   yarn start
   ```

3. Access the GraphQL Playground at `http://localhost:4000`.

## Creating the `server.ts`

The `server.ts` file is the entry point of the application. It initializes the server and sets up middleware, routes, and GraphQL schema. Below is an example of how to create it:

```typescript
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql/schema';
import { context } from './config/prismaClient';
import { authMiddleware } from './middleware/authMiddleware';

const app = express();

// Apply authentication middleware
app.use(authMiddleware);

// Initialize Apollo Server
const server = new ApolloServer({
  schema,
  context,
});

await server.start();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});
```

## Scripts

- `npm run start`: Starts the server.
- `npm run dev`: Starts the server in development mode with hot-reloading.
- `npm run build`: Compiles TypeScript to JavaScript.
- `npm run lint`: Lints the codebase.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";

// Set up Objects and Providers
// Providers we import and use in our application -> In here Providers given in Array
export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "UserName:",
          type: "text",
          placeholder: "username",
        },
        password: {
            label: "Password",
            type: "password",
            placeholder: "password" // Not need a place holder for a password
        }
      },
      async authorize(credentials) {
        // This is where we need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "25", name: "Ahtshayan", password: "johnwick" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        } 
      },
    }),
  ],
};

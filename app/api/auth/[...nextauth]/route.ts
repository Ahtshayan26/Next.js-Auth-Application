import NextAuth from "next-auth";
import { options } from "./options";

// Define Handler
// This where Next Auth will receive the options
const handler = NextAuth(options);

export { handler as GET, handler as POST };

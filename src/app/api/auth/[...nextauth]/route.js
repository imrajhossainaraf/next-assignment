import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23ligXvDDbClNhJ3iI",
      clientSecret: "556402852b74ed125f8f4aa61d703c84f29e14c3",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

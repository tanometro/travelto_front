import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogin from "@/src/requests/postLoginUser";

const handler = NextAuth({
    providers: [
        CredentialsProvider({

            name: "Credentials",

            credentials: {
                email: { label: "email", type: "email", placeholder: "abc123@example.com" },
                password: { label: "Password", type: "password" }
            },
            //authorize(credentials, req) {
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                try {
                    const user = await userLogin(credentials);
                    return user;
                } catch (error) {
                    return (null);
                }

            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Persist the OAuth access_token to the token right after signin
            return { ...token, ...user }
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;

            return session;
        }
    },
    pages: {
        signIn: "/login",
    }
});

export { handler as GET, handler as POST };
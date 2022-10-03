import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
import {createUser} from "../../../helpers/user";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: "https://discord.com/api/oauth2/authorize?scope=identify+connections",
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }

            await createUser(token)

            return token
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            session.discordId = token.sub
            return session
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}`
            return baseUrl
        }
    }
}

export default NextAuth(authOptions)
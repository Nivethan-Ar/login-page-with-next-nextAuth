import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import { customVerficationRequest } from "../../../utils/customVerficationRequest";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: customVerficationRequest,
    }),
  ],

  secret: process.env.SECRET,
  jwt: {
    // secret: process.env.SECRET,
    // maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: '/login'
  },
  callbacks: {
    session: async (session, user) => {
      session.userId = user.sub
      return Promise.resolve(session)
    }
  }
});
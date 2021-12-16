import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // session: {
  //   strategy: "jwt",
  // },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
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
    // session: async (session, user) => {
    //   session.userId = user.sub
    //   return Promise.resolve(session)
    // }
  }
});
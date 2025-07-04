import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import client from "../../../db"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
          name: "Email",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "Type your username here !" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            
            if(!credentials?. username || !credentials?.password) {
              return null;
            }

            const user = await client.user.findUnique({
              where: {
                username: credentials.username,     
              }
            })
      
            if (!user) {
              return null;
            }
            if (user.password !== credentials.password) {
              return null;
            }
            return {
              id: user.id.toString(),
              name: user.username,
              // password: user.password,
              
            }
          }
        }),
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
          })

      ],
      secret: process.env.NEXTAUTH_SECRET,

      callbacks: {
       async jwt({token, user}){
        if(user){
          token.id = user.id;
        }
        return token;
       },

        async session({ session, token }) {
          if (session.user) {
            (session.user as any).id = token.id;
            // (session.token as any) = token; // Add the token to the session
          }
          return session;
        },
    
      }
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
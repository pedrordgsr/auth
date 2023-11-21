import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'password'}
            },

            async authorize(credentials){
                const user = {email: "teste", password: "123"}
                
                if (credentials?.email === user.email && credentials?.password == user.password){
                    return user
                }else {
                    return null
                }
           
            }

        })
    ],
    pages: {
        signIn: '/'
    }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
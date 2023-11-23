import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
    // No caso, faço uso aqui apenas de um provider, o credentials.
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'password'}
            },
            // O usuário é hardcoded, ou seja, não possui conexão com banco e está declarado aqui.
            async authorize(credentials){
                const user = {email: "teste", password: "123"}
                // Autenticação simples para entrada
                if (credentials?.email === user.email && credentials?.password == user.password){
                    return user
                }else {
                    return null
                }
           
            }

        })
    ],
    // Setei a página inicial como página de signIn
    pages: {
        signIn: '/'
    },
    // Callbacks da sessão para pegar as informações dela e exibir ao cliente
    callbacks: {
        async jwt({ token, user}){
            user && (token.user = user)
            return token
        },
        async session({ session, token}){
            session.user
            return session
        }
    }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
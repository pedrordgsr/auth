import NextAuth from 'next-auth'
    // Tipagem dos dados da sessão
    declare module 'next-auth' {
        interface Session {
            user: {
                id: string
                email: string
                name: string
            }
        }
    }
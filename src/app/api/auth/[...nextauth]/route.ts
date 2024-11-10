import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const clientId = process.env.GOOGLE_CLIENT_ID as string
const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string

const handler = NextAuth({
  providers: [GoogleProvider({
    clientId,
    clientSecret
  })],
  callbacks: {
    async signIn({ user, account, profile }) {
      const isAllowedToSignIn = true
      const access_token = account?.access_token
      if (access_token) {
        try {
          const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
              Accept: 'application/json'
            }
          })
          const data = await response.json()
          user.image = data.picture
          if (profile) {
            profile.image = data.picture
          }
        } catch (error) {
          console.error(error)
        }
      }
      if (isAllowedToSignIn) {
        return true
      } else {
        return false
      }
    },
    async session({ session }) {
      return session
    }
  }
})

export {
  handler as GET, handler as POST
}
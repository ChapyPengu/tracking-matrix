import type { Metadata } from 'next';
import SessionProvider from '@/providers/session-provider';
import ThemeProvider from '@/providers/theme-provider';
import { UserStoreProvider } from '@/providers/user-store-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tracking Matrix',
  description: 'Tracking matris is a project manager so light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className='antialiased'
      >
        <SessionProvider>
          <UserStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </UserStoreProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
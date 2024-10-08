import StreamVideoProvider from '@/providers/StreamClientProvider'
import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Yoom Meet",
  description: "Video calling app",
  icons:{
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout

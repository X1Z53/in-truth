"use client"
import Header from "@/components/Header"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <CacheProvider>
          <ChakraProvider>
            <Header />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}

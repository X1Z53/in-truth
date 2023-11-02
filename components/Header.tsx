import { Center, Image } from "@chakra-ui/react"
import NavBar from "./NavBar"

export default function Header() {
  return (
    <Center as="header" width={"100dvw"} height={"15dvh"}>
      <Center paddingX={"5dvw"} height={"15dvw"}>
        <Image alt="logo" src={"/logo.svg"} />
      </Center>
      <Center width={"100%"} height={"100%"} backgroundColor={"lightblue"}>
        <NavBar />
      </Center>
    </Center>
  )
}

import Main from "@/components/Main"
import getDatabase from "@/modules/getDatabase"
import { Center, Flex, Heading, Image } from "@chakra-ui/react"

export default function Page() {
  const performances = getDatabase()

  return (
    <Flex flexDirection={"column"}>
      <Main
        items={performances.map((item, index) => (
          <Flex
            key={index}
            width={"100%"}
            height={"100%"}
            padding={"1dvh 1dvw"}
          >
            <Image src={item.poster} alt={"poster " + index} />
            <Center
              height={"100%"}
              width={"100%"}
              flexDirection={"column"}
              gap={5}
            >
              {Object.values(item)
                .slice(0, -2)
                .map((string, index) => (
                  <Heading size={!index ? "lg" : "md"} key={index}>
                    {string}
                  </Heading>
                ))}
            </Center>
          </Flex>
        ))}
      />
    </Flex>
  )
}

"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Card, Center, Flex, IconButton } from "@chakra-ui/react"
import { useState } from "react"

export default function Slider({ items }: { items: any[] }) {
  const [itemIndex, setItemIndex] = useState(0)

  return (
    <Flex
      flexDirection={"column"}
      width={"100dvw"}
      position={"relative"}
      height={"75dvh"}
    >
      <Flex
        position={"absolute"}
        right={0}
        border={"blue 5px solid"}
        width={"80dvw"}
        height={"100%"}
        overflow={"hidden"}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            borderRadius={0}
            border={"gray 2px solid"}
            transform={`translate(${-100 * itemIndex}%)`}
            transition={"all .5s"}
            minWidth={"100%"}
            textAlign={"center"}
          >
            <Center height={"100%"}>{item}</Center>
          </Card>
        ))}
      </Flex>
      <Flex position={"absolute"} right={5} bottom={-4}>
        <IconButton
          backgroundColor={"blue"}
          borderRadius={0}
          aria-label="prev"
          icon={<ChevronLeftIcon color={"white"} />}
          onClick={() =>
            setItemIndex((value) => (value != 0 ? value - 1 : items.length - 1))
          }
        />
        <IconButton
          backgroundColor={"blue"}
          borderRadius={0}
          aria-label="next"
          icon={<ChevronRightIcon color={"white"} />}
          onClick={() => setItemIndex((value) => (value + 1) % items.length)}
        />
      </Flex>
    </Flex>
  )
}

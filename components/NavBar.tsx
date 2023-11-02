import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { BsDot } from "react-icons/bs"

export default function NavBar() {
  const sections: { [key: string]: string } = {
    poster: "Афиша",
    performances: "Спектакли",
    tickets: "Билеты",
    actors: "Актёры",
    about: "О театре",
  }

  return (
    <Breadcrumb separator={<BsDot />}>
      {Object.keys(sections).map((key, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink href={key}>{sections[key]}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

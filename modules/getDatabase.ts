import { load } from "cheerio"
import got from "got"
import { chunk } from "lodash"

const response = (await got("https://gikit.ru/afisha")).body
const html = load(response)
const links = html("table a")
  .get()
  .filter((item) => item.attribs.class !== "button")
  .map((item) => item.attribs.href)
const pages: any[] = []
for (const linkIndex in links) {
  pages.push(load((await got(links[linkIndex])).body))
}
const posters = pages.map((page) =>
  page(".event_img")
    .get()
    .map((item: any) => item.attribs.src)
)

export default function getDatabase() {
  const fields = [
    "title",
    "description",
    "troupe",
    "address",
    "auditorium",
    "date",
    "link",
    "poster",
  ]
  const table = html("table td").text().split("\n").slice(1)
  const raw_data = chunk(table, 7).map((title, index) =>
    [
      title[4]
        .replace("[", "(")
        .replace("Премьера", "")
        .split("]")
        .map((item, index) =>
          !index ? item + ")" : item.split("₽").map((item) => item.trim())
        )
        .flat(),
      title[5].slice(0, -1),
      title[6].slice(0, -6),
      `${title[0]} ${title[1]} (${title[2]}), ${title[3]}`,
      links[index],
      posters[index],
    ].flat()
  )
  const performances: { [key: string]: string }[] = raw_data.map((data) =>
    data.reduce(
      (result, value, index) => ({ ...result, [fields[index]]: value }),
      {}
    )
  )
  return performances
}

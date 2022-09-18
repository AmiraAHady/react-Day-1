import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";
export default function Tv() {
  //react Hooks
  let [tvShows, setTvshows] = useState([
    {
      backdrop_path: "/pdfCr8W0wBCpdjbZXSxnKhZtosP.jpg",
      first_air_date: "2022-09-01",
      genre_ids: [10765, 10759, 18],
      id: 84773,
      name: "The Lord of the Rings: The Rings of Power",
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Lord of the Rings: The Rings of Power",
      overview:
        "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
      popularity: 6073.331,
      poster_path: "/suyNxglk17Cpk8rCM2kZgqKdftk.jpg",
      vote_average: 7.6,
      vote_count: 619,
    },
    {
      backdrop_path: "/9GvhICFMiRQA82vS6ydkXxeEkrd.jpg",
      first_air_date: "2022-08-18",
      genre_ids: [35, 10765],
      id: 92783,
      name: "She-Hulk: Attorney at Law",
      origin_country: ["US"],
      original_language: "en",
      original_name: "She-Hulk: Attorney at Law",
      overview:
        "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.",
      popularity: 4325.43,
      poster_path: "/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg",
      vote_average: 7.3,
      vote_count: 709,
    },
    {
      backdrop_path: "/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg",
      first_air_date: "2022-08-21",
      genre_ids: [10765, 18, 10759],
      id: 94997,
      name: "House of the Dragon",
      origin_country: ["US"],
      original_language: "en",
      original_name: "House of the Dragon",
      overview:
        "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
      popularity: 6507.597,
      poster_path: "/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
      vote_average: 8.6,
      vote_count: 1192,
    },
    {
      backdrop_path: "/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg",
      first_air_date: "2018-05-02",
      genre_ids: [10759, 18, 35],
      id: 77169,
      name: "Cobra Kai",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Cobra Kai",
      overview:
        "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.",
      popularity: 3262.312,
      poster_path: "/6POBWybSBDBKjSs1VAQcnQC1qyt.jpg",
      vote_average: 8.2,
      vote_count: 4979,
    },
    {
      backdrop_path: "/uGy4DCmM33I7l86W7iCskNkvmLD.jpg",
      first_air_date: "2013-12-02",
      genre_ids: [16, 35, 10765, 10759],
      id: 60625,
      name: "Rick and Morty",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Rick and Morty",
      overview:
        "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
      popularity: 2021.373,
      poster_path: "/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
      vote_average: 8.7,
      vote_count: 6963,
    },
    {
      backdrop_path: "/rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg",
      first_air_date: "2011-04-17",
      genre_ids: [10765, 18, 10759],
      id: 1399,
      name: "Game of Thrones",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Game of Thrones",
      overview:
        "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      popularity: 1264.957,
      poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      vote_average: 8.4,
      vote_count: 19104,
    },
    {
      backdrop_path: "/8aJjd7X4UfpxqtV7ukiAqBgTaQz.jpg",
      first_air_date: "2022-08-24",
      genre_ids: [],
      id: 208883,
      name: "The Investigator",
      origin_country: ["CN"],
      original_language: "zh",
      original_name: "简言的夏冬",
      overview:
        "A story about risk management follows a team of investigators who work together to eliminate fraud.\n\nXia Dong who works as an investigator for a global company that specializes in risk management has always considered professional ethics to be his life's mission. In order to complete a job that was assigned to him and to uncover the truth behind an incident that got him framed while studying abroad, Xia Dong transfers from US headquarters to the Shanghai branch. In his new office, he encounters Jian Yan, his junior at school who now works as an investigator.  In the following days and nights, Xia Dong's righteousness and kindness shines through and easily helps in resolving the misunderstandings from the past. Soon after, Xia Dong and Jian Yan are conducting a background check on a company and find themselves facing repeated threats on their life after they helped Lin Jun Wen, an old classmate.",
      popularity: 1314.24,
      poster_path: "/74Z6Ka23i1lKd4ytqXY1nzqVBz.jpg",
      vote_average: 7,
      vote_count: 1,
    },
    {
      backdrop_path: "/kOkmTrD8kWLeTXcAEwctg6GwW7t.jpg",
      first_air_date: "2017-02-20",
      genre_ids: [10751, 35],
      id: 91759,
      name: "Come Home Love: Lo and Behold",
      origin_country: ["HK"],
      original_language: "cn",
      original_name: "Come Home Love: Lo and Behold",
      overview:
        "Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.",
      popularity: 1206.128,
      poster_path: "/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg",
      vote_average: 4.3,
      vote_count: 10,
    },
    {
      backdrop_path: "/6Z2lcLK2E4pfsjgmYK3KHlqgHSI.jpg",
      first_air_date: "2022-09-07",
      genre_ids: [18],
      id: 208925,
      name: "Diary of a Gigolo",
      origin_country: ["AR", "MX"],
      original_language: "es",
      original_name: "Diario de un Gigoló",
      overview:
        "A male escort's life begins to unravel when he gets involved in a client's family affairs and breaks the cardinal rule of his work: Don't fall in love.",
      popularity: 1177.841,
      poster_path: "/xuqszO6iQXqBsD4kP2xhlBN5ggc.jpg",
      vote_average: 8.2,
      vote_count: 22,
    },
    {
      backdrop_path: "/iV0B1eQHEh5vazHikfAx8OuSrCC.jpg",
      first_air_date: "2022-09-08",
      genre_ids: [9648, 10765],
      id: 128384,
      name: "Tierra Incognita",
      origin_country: ["AR"],
      original_language: "es",
      original_name: "Tierra incógnita",
      overview:
        "Eric returns to Cape Qwert to solve the mystery of his parents' disappearance. Back in this town, he will meet friends and foes and will have to unveil the mysteries of the town's horror-themed amusement park.",
      popularity: 914.033,
      poster_path: "/l07AXl7V2GfOy4zeiFQ77CoyHJv.jpg",
      vote_average: 7.5,
      vote_count: 20,
    },
    {
      backdrop_path: "/eqhKMZTLcieAvoH6CBqknTTfNby.jpg",
      first_air_date: "2022-08-05",
      genre_ids: [10765, 18],
      id: 90802,
      name: "The Sandman",
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Sandman",
      overview:
        "After years of imprisonment, Morpheus — the King of Dreams — embarks on a journey across worlds to find what was stolen from him and restore his power.",
      popularity: 965.833,
      poster_path: "/q54qEgagGOYCq5D1903eBVMNkbo.jpg",
      vote_average: 8.2,
      vote_count: 883,
    },
    {
      backdrop_path: "/jW61BMd1ZVWPXI7Ts4iC2BTx8Qj.jpg",
      first_air_date: "2022-04-11",
      genre_ids: [18],
      id: 196572,
      name: "The Secret House",
      origin_country: ["KR"],
      original_language: "ko",
      original_name: "The Secret House",
      overview:
        "A story about quitting being a good boy and chasing evil to the end for the sake of the mother and sister who sacrificed for themselves.\n\nA revenge play in which a dirt spoon lawyer chasing the traces of his missing mother walks into the secret surrounding him to fight the world.",
      popularity: 544.675,
      poster_path: "/wNN9hJDV45BF2PiJQQVwBCiqLIl.jpg",
      vote_average: 5.6,
      vote_count: 13,
    },
    {
      backdrop_path: "/xZUZ9i6vVayjyhR1vRo9Bjku4h.jpg",
      first_air_date: "2016-01-25",
      genre_ids: [80, 10765],
      id: 63174,
      name: "Lucifer",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Lucifer",
      overview:
        "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
      popularity: 853.752,
      poster_path: "/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
      vote_average: 8.5,
      vote_count: 12452,
    },
    {
      backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      first_air_date: "2016-07-15",
      genre_ids: [18, 10765, 9648],
      id: 66732,
      name: "Stranger Things",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Stranger Things",
      overview:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      popularity: 907.512,
      poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      vote_average: 8.6,
      vote_count: 13605,
    },
    {
      backdrop_path: "/escBySi78E2rcrphN973x7txmJq.jpg",
      first_air_date: "2022-08-15",
      genre_ids: [10759, 10765, 18],
      id: 121750,
      name: "Darna",
      origin_country: ["PH"],
      original_language: "tl",
      original_name: "Darna",
      overview:
        "When fragments of a green crystal scatter in the city and turn people into destructive monsters, Narda embraces her destiny as Darna—the mighty protector of the powerful stone from Planet Marte.",
      popularity: 512.601,
      poster_path: "/CFOce6pbb3FRNaBaVdvNsCv5kR.jpg",
      vote_average: 3,
      vote_count: 5,
    },
    {
      backdrop_path: "/hLi5umdYp8VyoQqPE9QXCUsW0Ps.jpg",
      first_air_date: "2000-07-03",
      genre_ids: [10764],
      id: 911,
      name: "Kaun Banega Crorepati",
      origin_country: ["IN"],
      original_language: "hi",
      original_name: "कौन बनेगा करोड़पति",
      overview:
        "Hosted by India's biggest superstar, Amitabh Bachchan, one of the biggest shows is here to entertain millions, change lives and make dreams come true.",
      popularity: 507.817,
      poster_path: "/8srHjzgZq9V9sgsTkIwGARDyADj.jpg",
      vote_average: 7.3,
      vote_count: 20,
    },
    {
      backdrop_path: "/bPeKdWGiYdY3qrTtrHG3Ydu0GJG.jpg",
      first_air_date: "2013-09-12",
      genre_ids: [18, 80],
      id: 60574,
      name: "Peaky Blinders",
      origin_country: ["GB"],
      original_language: "en",
      original_name: "Peaky Blinders",
      overview:
        "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
      popularity: 777.268,
      poster_path: "/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
      vote_average: 8.6,
      vote_count: 7401,
    },
    {
      backdrop_path: "/7J5d7K4JBDZ4IDODNX3THLggtM5.jpg",
      first_air_date: "2005-03-27",
      genre_ids: [18],
      id: 1416,
      name: "Grey's Anatomy",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Grey's Anatomy",
      overview:
        "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
      popularity: 782.727,
      poster_path: "/zPIug5giU8oug6Xes5K1sTfQJxY.jpg",
      vote_average: 8.3,
      vote_count: 8394,
    },
    {
      backdrop_path: "/FbUIi5WeDU5j1EtipQ274tts1E.jpg",
      first_air_date: "2022-04-11",
      genre_ids: [35, 18, 10751],
      id: 197352,
      name: "Bravo, My Life",
      origin_country: ["KR"],
      original_language: "ko",
      original_name: "으라차차 내 인생",
      overview:
        "Even though Seo Dong Hee comes from a poor family background, she has a bright and positive personality. She dreams of becoming a designer and slowly works her way to achieve her dream. She decides to become the mother of her nephew and raise him by herself. She also gets involved with Kang Cha Yeol. Kang Cha Yeol’s father runs a big company. His father wants him to work for his company, but Kang Cha Yeol doesn't want to. He wants to go back to the U.S., but he realizes he can't do anything without his father's financial support. His father tells Kang Cha Yeol to work for 1 year at his company.",
      popularity: 477.151,
      poster_path: "/3ehMAk8E9zETA9r2ZydwVrgUoP3.jpg",
      vote_average: 7,
      vote_count: 3,
    },
    {
      backdrop_path: "/o8zk3QmHYMSC7UiJgFk81OFF1sc.jpg",
      first_air_date: "2022-08-22",
      genre_ids: [10766, 18],
      id: 204095,
      name: "Mar do Sertão",
      origin_country: ["BR"],
      original_language: "pt",
      original_name: "Mar do Sertão",
      overview: "",
      popularity: 777.517,
      poster_path: "/ixgnqO8xhFMb1zr8RRFsyeZ9CdD.jpg",
      vote_average: 4.8,
      vote_count: 6,
    },
  ]);
  let [isAuth, setIsAuth] = useState(true);
  let [showDetails, setShowDetails] = useState(true);

  let nextPage = () => {
    setTvshows([
      {
        backdrop_path: "/hNwopoqRDazw1uPHY2jSNmV2gS2.jpg",
        first_air_date: "2005-06-06",
        genre_ids: [10763, 10764, 99],
        id: 203599,
        name: "Scoop",
        origin_country: ["HK"],
        original_language: "cn",
        original_name: "東張西望",
        overview:
          'Scoop is a comprehensive information programme of Television Broadcasts Limited.\n\nThe content of the program is mainly based on entertainment news and personal follow-up of the artists, and will also be interspersed with the latest trends of TVB dramas and artists. Some entertainment news content clips will be rebroadcast on the next day\'s "Entertainment Live".\n\nThis program will be broadcast on Jade Channel from 19:30-20:00 (Hong Kong time) from June 6, 2005, and will be broadcast every day from March 3, 2019, and will be broadcast on myTV (later myTV SUPER) to provide "Program Review".',
        popularity: 752.535,
        poster_path: "/qo6y0XvSBlKM3XCbYVdcR3a6qyQ.jpg",
        vote_average: 8.8,
        vote_count: 6,
      },
      {
        backdrop_path: "/xlKKD1TXJvh0YYlVPqqQ3g3ZUjM.jpg",
        first_air_date: "2018-07-01",
        genre_ids: [16, 10759, 10765],
        id: 80020,
        name: "Super Dragon Ball Heroes",
        origin_country: ["JP"],
        original_language: "ja",
        original_name: "スーパードラゴンボールヒーローズ",
        overview:
          "Trunks returns from the future to train with Goku and Vegeta. However, it disappears without warning. Then the mysterious Fu bursts in, telling them that Trunks has been imprisoned in the Prison Planet, a mysterious complex in an unknown place in the universes. The group seeks the dragon balls to free Trunks, but an endless battle awaits them! Will Goku and the others rescue Trunks and escape the Prison Planet?",
        popularity: 727.571,
        poster_path: "/8jq6xv5c1WK7KAPOXCsodm8eUxp.jpg",
        vote_average: 7.6,
        vote_count: 2752,
      },
      {
        backdrop_path: "/68sanslplXryiJWzv0uMuXjJBmB.jpg",
        first_air_date: "2019-07-25",
        genre_ids: [10765, 10759],
        id: 76479,
        name: "The Boys",
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Boys",
        overview:
          "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
        popularity: 740.087,
        poster_path: "/stTEycfG9928HYGEISBFaG1ngjM.jpg",
        vote_average: 8.5,
        vote_count: 7368,
      },
      {
        backdrop_path: "/zaulpwl355dlKkvtAiSBE5LaoWA.jpg",
        first_air_date: "2010-10-31",
        genre_ids: [10759, 18, 10765],
        id: 1402,
        name: "The Walking Dead",
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Walking Dead",
        overview:
          "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
        popularity: 718.478,
        poster_path: "/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg",
        vote_average: 8.1,
        vote_count: 13631,
      },
      {
        backdrop_path: "/vyeinv45uSomASVnW2uS0oWjntp.jpg",
        first_air_date: "2022-08-25",
        genre_ids: [18],
        id: 135250,
        name: "Mike",
        origin_country: ["US"],
        original_language: "en",
        original_name: "Mike",
        overview:
          "Explore the wild, tragic and controversial life and career of heavyweight champion Mike Tyson - one of the most polarizing figures in sports culture.",
        popularity: 699.552,
        poster_path: "/dF997CwJNM1953E45BfWPB5MffY.jpg",
        vote_average: 7.9,
        vote_count: 28,
      },
      {
        backdrop_path: "/tdBaI1SOU1ZjqBXO7VAu8fjGcNi.jpg",
        first_air_date: "2022-09-02",
        genre_ids: [80, 18, 9648],
        id: 133700,
        name: "Devil in Ohio",
        origin_country: ["US"],
        original_language: "en",
        original_name: "Devil in Ohio",
        overview:
          "Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger.",
        popularity: 668.324,
        poster_path: "/AsdjYB61U8zVAsEyQgOebAjCoUN.jpg",
        vote_average: 6.7,
        vote_count: 57,
      },
      {
        backdrop_path: "/1qpUk27LVI9UoTS7S0EixUBj5aR.jpg",
        first_air_date: "2022-03-24",
        genre_ids: [10759, 10765],
        id: 52814,
        name: "Halo",
        origin_country: ["US"],
        original_language: "en",
        original_name: "Halo",
        overview:
          "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.",
        popularity: 681.517,
        poster_path: "/nJUHX3XL1jMkk8honUZnUmudFb9.jpg",
        vote_average: 8.5,
        vote_count: 1323,
      },
      {
        backdrop_path: "/qsTlD6rYb5vXOlBTT9Lj2hBp44X.jpg",
        first_air_date: "2013-04-15",
        genre_ids: [80, 18, 10766],
        id: 44953,
        name: "The Lord of the Skies",
        origin_country: ["MX"],
        original_language: "es",
        original_name: "El señor de los cielos",
        overview:
          "Set in the 1990s, these are the life and times of Amado Carrillo Fuentes, a man who became the head of the Juárez cartel. Nicknamed “El Señor de los Cielos” (Lord of the Skies) because of the large fleet of airplanes he used to transport drugs, he was also known for washing more than $200 million through Colombia to finance his huge fleet. He is described as the most powerful drug trafficker of his time.",
        popularity: 637.091,
        poster_path: "/Ag7VUdnrRz5Qpq3Yn3E5OCvFnu0.jpg",
        vote_average: 7.8,
        vote_count: 2041,
      },
      {
        backdrop_path: "/zJNEXWx3YyWGQioCbutFd5dcNYS.jpg",
        first_air_date: "2022-03-21",
        genre_ids: [10766, 10759, 10751],
        id: 157059,
        name: "Poliana Moça",
        origin_country: ["BR"],
        original_language: "pt",
        original_name: "Poliana Moça",
        overview: "",
        popularity: 385.593,
        poster_path: "/17yQZnnodzS1ZrKcpqHnQV8eQGN.jpg",
        vote_average: 7.9,
        vote_count: 5,
      },
      {
        backdrop_path: "/84XPpjGvxNyExjSuLQe0SzioErt.jpg",
        first_air_date: "2008-01-20",
        genre_ids: [18],
        id: 1396,
        name: "Breaking Bad",
        origin_country: ["US"],
        original_language: "en",
        original_name: "Breaking Bad",
        overview:
          "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
        popularity: 600.502,
        poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        vote_average: 8.8,
        vote_count: 9807,
      },
      {
        backdrop_path: "/5o2T1IFyNwe88vWXm3WkpitK9gt.jpg",
        first_air_date: "2022-09-08",
        genre_ids: [16, 35, 10751],
        id: 114502,
        name: "Cars on the Road",
        origin_country: ["US"],
        original_language: "en",
        original_name: "Cars on the Road",
        overview:
          "Lightning McQueen and his best friend Mater head east from Radiator Springs on a cross-country road trip to meet up with Mater’s sister.",
        popularity: 588.18,
        poster_path: "/6QXirTPUQecr1BAEfgVSXPD1np0.jpg",
        vote_average: 8,
        vote_count: 39,
      },
      {
        backdrop_path: "/zI8Qk7Eozl99rZhjAklJ2zSIPil.jpg",
        first_air_date: "2019-10-08",
        genre_ids: [10759, 16, 18],
        id: 89456,
        name: "Primal",
        origin_country: ["US"],
        original_language: "en",
        original_name: "Primal",
        overview:
          "A caveman forms a bond with a dinosaur as they struggle to survive in a hostile world.",
        popularity: 577.159,
        poster_path: "/9jIatSC61s5Y3d5Q63yIeZFvP7u.jpg",
        vote_average: 8.7,
        vote_count: 1004,
      },
      {
        backdrop_path: "/41yaWnIT8AjIHiULHtTbKNzZTjc.jpg",
        first_air_date: "2014-10-07",
        genre_ids: [18, 10765],
        id: 60735,
        name: "The Flash",
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Flash",
        overview:
          'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash.',
        popularity: 546.765,
        poster_path: "/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
        vote_average: 7.8,
        vote_count: 9936,
      },
      {
        backdrop_path: "/i3GAgdr3adKPMI8FVxdXZuqiAQl.jpg",
        first_air_date: "2017-09-25",
        genre_ids: [18],
        id: 71712,
        name: "The Good Doctor",
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Good Doctor",
        overview:
          "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, Shaun uses his extraordinary medical gifts to save lives and challenge the skepticism of his colleagues.",
        popularity: 525.284,
        poster_path: "/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg",
        vote_average: 8.5,
        vote_count: 10813,
      },
      {
        backdrop_path: "/x0RRnWdYeczF4KXDqW8blda7SKS.jpg",
        first_air_date: "2022-03-28",
        genre_ids: [18, 10766],
        id: 158415,
        name: "Pantanal",
        origin_country: ["BR"],
        original_language: "pt",
        original_name: "Pantanal",
        overview:
          "After the mysterious disappearance of his father, Joventino, the cowboy José Leôncio becomes a wealthy farm owner in Pantanal. Over twenty years have passed and, bitter-hearted because of his father vanishing and the escape of his wife to Rio de Janeiro with his baby, José Leôncio has the chance to make amends with the boy, now a young man raised in the big city with very different values and habits than his own.",
        popularity: 535.325,
        poster_path: "/4Ru1BwcAKWtpM345dWe8YgHf35V.jpg",
        vote_average: 5.7,
        vote_count: 49,
      },
      {
        backdrop_path: "/ry9SsBPOShH7eEL2dJc1coCBh8X.jpg",
        first_air_date: "2022-03-07",
        genre_ids: [35, 18],
        id: 157936,
        name: "For You",
        origin_country: ["PT"],
        original_language: "pt",
        original_name: "Por Ti",
        overview:
          "In the parish of Rio Meandro, two villages are at war over the construction of a dam that will submerge one of them: either Aldeia Velha or Aldeia Nova.",
        popularity: 318.172,
        poster_path: "/7GmlOYoR2GNiBRFs47azHIcqncR.jpg",
        vote_average: 5.3,
        vote_count: 10,
      },
      {
        backdrop_path: "/wNKwOtq27yfN13SKKV07NwkpBA3.jpg",
        first_air_date: "2019-11-01",
        genre_ids: [18, 10765, 10759],
        id: 80752,
        name: "See",
        origin_country: ["US"],
        original_language: "en",
        original_name: "See",
        overview:
          "A virus has decimated humankind. Those who survived emerged blind. Centuries later when twins are born with the mythic ability to see, their father must protect his tribe against a threatened queen.",
        popularity: 512.769,
        poster_path: "/lKDIhc9FQibDiBQ57n3ELfZCyZg.jpg",
        vote_average: 8.2,
        vote_count: 1743,
      },
      {
        backdrop_path: "/hLi5umdYp8VyoQqPE9QXCUsW0Ps.jpg",
        first_air_date: "2000-07-03",
        genre_ids: [10764],
        id: 911,
        name: "Kaun Banega Crorepati",
        origin_country: ["IN"],
        original_language: "hi",
        original_name: "कौन बनेगा करोड़पति",
        overview:
          "Hosted by India's biggest superstar, Amitabh Bachchan, one of the biggest shows is here to entertain millions, change lives and make dreams come true.",
        popularity: 507.817,
        poster_path: "/8srHjzgZq9V9sgsTkIwGARDyADj.jpg",
        vote_average: 7.3,
        vote_count: 20,
      },
      {
        backdrop_path: "/hpU2cHC9tk90hswCFEpf5AtbqoL.jpg",
        first_air_date: "1989-12-17",
        genre_ids: [10751, 16, 35],
        id: 456,
        name: "The Simpsons",
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Simpsons",
        overview:
          "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
        popularity: 505.441,
        poster_path: "/k5UALlcA0EnviaCUn2wMjOWYiOO.jpg",
        vote_average: 8,
        vote_count: 8205,
      },
      {
        backdrop_path: "/iux1vKPT7Vw1AzetZb4Jz6wfYsm.jpg",
        first_air_date: "2022-03-30",
        genre_ids: [10759, 10765, 9648],
        id: 92749,
        name: "Moon Knight",
        origin_country: ["US"],
        original_language: "en",
        original_name: "Moon Knight",
        overview:
          "When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc’s enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.",
        popularity: 491.067,
        poster_path: "/YksR65as1ppF2N48TJAh2PLamX.jpg",
        vote_average: 8.1,
        vote_count: 1568,
      },
    ]);
  };

  let toggleDetails = (tvid) => {
    let newTvs = tvShows.filter((tv) => {
      if (tv.id == tvid) {
        tv.isVisable = !tv.isVisable;
      }
      return tv;
    });
    setTvshows(newTvs);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {tvShows.map((singleTv) => (
            <div
              className="card col-3"
              // style={{ width: 300, marginLeft: 10, marginBottom: 10 }}
            >
              <img
                class="card-img-top"
                src={
                  "https://image.tmdb.org/t/p/original" + singleTv.poster_path
                }
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">{singleTv.name}</h4>
                {singleTv.isVisable && (
                  <p class="card-text">{singleTv.overview}</p>
                )}
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    toggleDetails(singleTv.id);
                  }}
                >
                 {singleTv.isVisable? 'Hide Details':'See Details'} 
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextPage} class="btn btn-primary">
          page 2
        </button>
      </div>
    </>
  );
}

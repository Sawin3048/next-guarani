import { Chapter } from "@/app/ui/levels/chapter-store"
import { auth } from "@/auth"
import { NextRequest } from "next/server"
import { leve4 } from "./level4"

const chapters: Chapter[] = [
  {
    id: 'NymsQz0MvUCY2XqDQEnRJ',
    nextChapterId: 'Osr4xJtV1X9H41Db6vYOR',
    levels: [
      {
        "type": "complete",
        "data": {
          "imageSrc": "/niña-comiendo.png",
          "words": [
            {
              "type": "space"
            },
            {
              "type": "word", "word": "akaru."
            }
          ],
          "options": ["Nde", "Ha'e", "Che", "Ore"],
          "correctOption": ["Che"],
        },
        "id": "z4UsgrXc48G1Ky4NDGwPC"
      }, {
        "type": "complete",
        "data": {
          "imageSrc": "/public/level-souces/fTMPGWzisgFt4ilgC31vo.png",
          "words": [
            {
              "type": "space"
            },
            {
              "type": "word", "word": "rekaru."
            }
          ],
          "options": ["Peẽ", "Nde", "Che", "Ore"],
          "correctOption": ["Nde"],
        },
        "id": "eGrLlvqu2T7b0FtCtiUSx"
      }, {
        "type": "complete",
        "data": {
          "imageSrc": "/public/level-souces/s0cU5mFKpP7rgxEteD4OS.png",
          "words": [
            {
              "type": "space"
            },
            {
              "type": "word", "word": "okaru."
            }
          ],
          "options": ["Ha'e", "Ñande", "Che", "Nde",],
          "correctOption": ["Ha'e"],
        },
        "id": "qHkUqb1M5s9A2GS0ZbOKj",
      }, {
        "type": "complete",
        "data": {
          "imageSrc": "/public/level-souces/fMj7L_MoiiYwG03Z1fFa5.png",
          "words": [
            {
              "type": "space"
            },
            {
              "type": "word", "word": "jakaru."
            }
          ],
          "options": ["Ha'eKuéra", "Ore", "Nde", "Ñande",],
          "correctOption": ["Ñande"],
        },
        "id": "Ry7MjnnayeT87m-TKgzgK",
      }, {
        "type": "complete",
        "data": {
          "imageSrc": "/public/level-souces/c96xd1E1YRK66y9WQ-igk.png",
          "words": [
            {
              "type": "space"
            },
            {
              "type": "word", "word": "rokaru."
            }
          ],
          "options": ["Nde", "Ore", "Che", "Peẽ",],
          "correctOption": ["Ore"],
        },
        "id": "jihbBkVtCM2mOJBNpO7-_",
      },
      {
        "type": "complete",
        "data": {
          "imageSrc": "/public/level-souces/FBtw_0gy2eBMB95irhp8E.png",
          "words": [
            {
              "type": "space"
            },
            {
              "type": "word", "word": "pekaru."
            }
          ],
          "options": ["Ha'e", "Peẽ", "Ha'ekuéra", "Nde",],
          "correctOption": ["Peẽ"],
        },
        "id": "0ApCzlsYu0zmfLGmfpU-f",
      }, {
        "type": "complete",
        "data": {
          "imageSrc": "/public/level-souces/1iJvJNXfO8xP2kIKLkWfS.png",
          "words": [
            {
              "type": "space"
            },
            {
              "type": "word", "word": "okaru."
            }
          ],
          "options": ["Nde", "Ha'ekuéra", "Che", "Ñande",],
          "correctOption": ["Ha'ekuéra"],
        },
        "id": "_V4LNoHfV0nr4U0eRHSVN",
      },
    ]
  },
  {
    id: 'Osr4xJtV1X9H41Db6vYOR',
    nextChapterId: 'fx1GsK8Jmk4rC6dgw53BM',
    levels: [{
      id: 'mmSkVnUuPcPKKacOGZyF3',
      type: 'audio-and-questions',
      data: {
        imageSrc: '/niña-comiendo.png',
        question: "¿Mba'e ojapo?",
        options: ['Puka', 'Guata', 'Purahei', 'Jahu'],
        keywords: [{ type: 'required', word: 'puka' }, { type: 'optional', word: "hae" }],
        expected: "Ha'e opuka"
      }
    }]
  },
  {
    id: 'fx1GsK8Jmk4rC6dgw53BM',
    nextChapterId: 'JutTOC_DYbvJoFrt3Cr62',
    levels: []
  },
  {
    id: 'JutTOC_DYbvJoFrt3Cr62',
    nextChapterId: 'chapter4',
    levels: []
  }, leve4
]

export async function GET(req: NextRequest) {
  const a = await auth()
  console.log('peticion a GET', a)
  console.log(req.url)
  const id = req.url.split("/").pop()


  const chapter = chapters.find(chapter => chapter.id === id)
  console.log({ id, chapter })
  if (!!chapter) return Response.json(chapter)
  else throw new Error('Ese nivel no existe')
}
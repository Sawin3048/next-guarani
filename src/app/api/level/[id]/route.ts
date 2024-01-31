import { auth } from "@/auth"
import { error } from "console"
import { NextRequest, NextResponse } from "next/server"

const chapters = [{
  id: 'jksdlflkjdfsjklfds',
  nextChapterId: 'asewoijkldoj',
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
            "type": "word", "word": "akaru"
          },
          {
            "type": "word", "word": "bori-bori,"
          },
          {
            "type": "word", "word": "ko"
          },
          {
            "type": "word", "word": "ka'aru."
          },],
        "options": ["Che", "Nde", "Ha'e", "Ore", "juan", "pedro", "jaime", "nadie"],
        "correctOption": ["Che"],
      },
      "id": "kalsdjflsdñfkasdjfñ"
    }, {
      "type": "complete",
      "data": {
        "imageSrc": "/niña-comiendo.png",
        "words": [
          {
            "type": "space"
          },
          {
            "type": "word", "word": "opelukea."
          }
        ],
        "options": ["No se", "quien sabe", "Ha'e", "tambien"],
        "correctOption": ["Ha'e"],
      },
      "id": "dfasdfsd"
    }, {
      "type": "complete",
      "data": {
        "imageSrc": "/niña-comiendo.png",
        "words": [
          {
            "type": "space"
          },
          {
            "type": "word", "word": "puede ser?"
          }
        ],
        "options": ["adsfdf", "quien", "por?", "para", "cual", "Cual"],
        "correctOption": ["Cual"],
      },
      "id": "erer",
    }
  ]
}]

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
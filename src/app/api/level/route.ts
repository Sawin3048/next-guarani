import { auth } from "@/auth"

const levels = [{
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
      }, {
        "type": "space"
      },
    ],
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
  "id": "erer"
}]

export async function GET() {
  const a = await auth()
  console.log('peticion a GET', a)
  return Response.json(levels)
}
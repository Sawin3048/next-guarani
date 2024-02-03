const levelTypes = {
  complete: "complete",
  selectPair: "selectPair",
  questionsAndAudio: "audio-and-questions",
} as const


// ---------------------- \\
type BaseLevel = {
  id: string

}

// ---------------------- \\
export type Words = {
  type: "space"
} | {
  type: "word",
  word: string
}

export type CompleteLevel = BaseLevel & {
  type: typeof levelTypes.complete;
  data: {
    imageSrc: string;
    words: Words[];
    options: string[];
    correctOption: string[];
  };
}
// ---------------------- \\

type keywords = {
  type: 'required'
  word: string
} |
{
  type: 'optional'
  word: string
}


export type QuestionAndAudioLevel = BaseLevel & {
  type: typeof levelTypes.questionsAndAudio
  data: {
    question: string
    options: string[]
    imageSrc: string
    keywords: keywords[],
    expected: string
  }
}

export type ILevel =
  | CompleteLevel
  | QuestionAndAudioLevel

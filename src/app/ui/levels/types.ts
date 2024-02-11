const levelTypes = {
  complete: "complete",
  selectPair: "selectPair",
  questionsAndAudio: "audio-and-questions",
  completeWithAudio: "complete-with-audio"
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

export type CompleteWithAudio = BaseLevel & {
  type: typeof levelTypes.completeWithAudio;
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
  | CompleteWithAudio
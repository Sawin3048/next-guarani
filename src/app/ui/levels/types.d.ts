const levelTypes = {
  complete: "complete",
  selectPair: "selectPair",
};

type LevelType = (typeof levelTypes)[keyof typeof levelTypes];

export type Words = {
  type: "space"
} | {
  type: "word",
  word: string
}

export interface ILevel {
  type: LevelType;
  data: {
    imageSrc: string;
    words: Words[];
    options: string[];
    correctOption: string;
  };
  id: string
}

import { useAudioRecorder } from "@/app/utils/context";
import { useCompleteWithAudio } from "./context";
import { useState } from "react";
import { sendAudio } from "@/app/utils/upload-audio";

function normalizeWord(word: string) {
  let palabraModificada = word.replace(/'/g, "");

  let palabraSinAcentos = palabraModificada
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  let cadena = palabraSinAcentos
    .normalize("NFD")
    .replace(/[\u0300-\u036f']+/g, "")
    .replace("’", "");
  let result = cadena.toLowerCase();
  console.log({ result });
  return result;
}

function useRecordAudio() {
  const [id, setId] = useState<NodeJS.Timeout>();
  const levelStore = useCompleteWithAudio();
  const recorder = useAudioRecorder();

  async function handleAudio(audio: Blob) {
    clearTimeout(id);
    const text = (await sendAudio(audio)) as string;
    levelStore.toggleTranscripting();
    const { options } = levelStore.level.data;
    const normalizeOptions = options.map((o) => normalizeWord(o));
    const selected = options.find((option, i) =>
      normalizeWord(text).includes(normalizeOptions[i])
    );
    if (selected) levelStore.addWord(selected);
  }

  const timerToRecord = () => {
    console.log("timeOut");
    const id = setTimeout(async () => {
      await recorder
        .stop()
        .then((r) => {
          levelStore.setRecording(false);
          levelStore.toggleTranscripting();
          handleAudio(r);
        })
        .catch((r) => {});
    }, 7000);
    setId(id);
  };

  const toggleRecord = async () => {
    if (!levelStore.recording) {
      await recorder.start();
      levelStore.setRecording(true);
      timerToRecord();
    } else {
      const audio = await recorder.stop();
      levelStore.setRecording(false);
      levelStore.toggleTranscripting();
      handleAudio(audio);
    }
  };

  return { toggleRecord };
}

export default useRecordAudio;

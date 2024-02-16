import { transcriptorApiUrl } from "@/../env";


export async function sendAudio(audio: Blob) {
  const formData = new FormData();
  formData.append('file', audio, 'audio.mp3');
  console.log(transcriptorApiUrl)
  const req = await fetch(transcriptorApiUrl, {
    method: 'POST',
    body: formData
  })
  const res = await req.json()
  console.log(res)
  return res?.message
}

"use client"


type Params = { audio: { deviceId: string } } | { audio: boolean }

// Objeto para manejar mejor
export class RecordAudio {
  private isRecording = false
  private mediaRecorder: MediaRecorder | null = null
  private audioFragments: Blob[] = []
  private audio: Blob | null = null
  private stream: MediaStream | null = null
  private params: Params

  constructor(audioDeviceId?: string) {
    audioDeviceId
      ? this.params = { audio: { deviceId: audioDeviceId } }
      : this.params = { audio: true }
  }

  async start() {
    await navigator.mediaDevices.getUserMedia({ audio: true }).then(
      (stream) => {
        this.stream = stream
        this.mediaRecorder = new MediaRecorder(stream)

        this.mediaRecorder.addEventListener("dataavailable", (evt) => this.audioFragments.push(evt.data))

      })
    if (this.mediaRecorder === null) return console.error('mediaRecorder no lo encuentro')
    if (this.isRecording) console.error('Ya se esta grabando')

    this.isRecording = true

    this.mediaRecorder.start()
    // this.mediaRecorder.addEventListener("dataavailable", (evt) => this.audioFragments.push(evt.data))

  }

  stop(): Promise<Blob> {

    return new Promise((resolve, reject) => {
      if (!this.isRecording) return reject('No se esta grabando')

      if (this.mediaRecorder === null) return reject('MediaRecorder no esta disponible, esto no deberia de pasar')

      this.mediaRecorder.addEventListener("stop", () => {
        this.stream?.getTracks().forEach(track => track.stop())

        this.audio = new Blob(this.audioFragments, { type: 'audio/mpeg' })

        resolve(this.audio)
        this.audio = null
      })

      // Restarting values
      this.audioFragments = []
      this.mediaRecorder.stop()
      this.isRecording = false
      // console.log('esto se sigue ejecutando')
    })
  }
}


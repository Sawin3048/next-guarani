// Ejemplo "https://2a4a-34-106-9-117.ngrok-free.app/upload"

export const transcriptorApiUrl = "https://6d90-34-73-20-23.ngrok-free.app/upload"
let url = ''

if (process.env.NODE_ENV === 'development') {
  // En modo de desarrollo
  url = 'http://localhost:3000';
} else {
  // Producción
  url = 'https://next-guarani.vercel.app'
}

export const serverURL = url
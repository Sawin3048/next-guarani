export function capitalize(str: string) {
  const letters = str.split('')
  const first = letters.shift()?.toLocaleUpperCase()
  return first + letters.join('')
}
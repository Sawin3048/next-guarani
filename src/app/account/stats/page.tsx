import { auth } from "@/auth"

async function StatsPage() {
  const sesion = await auth()
  const userId = sesion?.user?.name

  if (!userId) return <h1>Algo salio mal</h1>

  const logs = await prisma?.try.findMany({
    where: {
      authorId: userId
    }
  })
  console.log(logs)

  return (
    <div>StatsPage</div>
  )
}

export default StatsPage
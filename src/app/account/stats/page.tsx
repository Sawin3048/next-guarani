import { ButtonLink } from "@/app/ui/buttond"
import Arrow from "@/app/ui/svg/arrow"
import { auth } from "@/auth"
import Link from "next/link"

async function StatsList() {
  
  const sesion = await auth()
  const userId = sesion?.user?.name

  if (!userId) return <h1>Algo salio mal</h1>

  let logs = await prisma?.try.findMany({
    where: {
      authorId: userId
    }
  })
  logs= []
  if (logs === undefined || logs?.length <= 0) return (
    <div className="md:max-w-sm m-auto mt-12 max-w-xs rounded-3xl p-4 select-none">
      <h2 className="text-center md:text-4xl text-2xl font-bold mb-4 text-gray-900">No hay Registros</h2>
      <img src="/not-content.svg" className="rounded-3xl"></img>
    </div>
  )


  return (<>
    <p>{logs?.length}</p>
    <p>{JSON.stringify(logs)}</p>
  </>
  )
}

function StatsPage() {


  return (
    <main className="max-w-3xl m-auto bg-white pt-4 min-h-dvh">
      <div className=" ml-5">

      <Link href={'/level'}>
        <ButtonLink className="bg-white hover:bg-white"><Arrow /></ButtonLink>
      </Link>
      </div>
      
      <StatsList />
    </main>
  )
}

export default StatsPage
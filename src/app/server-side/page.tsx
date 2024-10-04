import Link from "next/link"
import { Suspense } from "react"

type IData = {
    results: {
        name: string,
        status: string,
        id: string
    }[]
}

const ServerSide = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data : IData = await res.json()
    console.log(data)

    return(
        <div className="bg-gray-900 text-white">
            <div className="pt-20">
                <h1 className="font-bold p-4 text-[20px]">Server Side Rendering</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    {data.results.map((item) => {
                        return(
                            <div key={item.id}>
                                <h2>{item.name}</h2>
                                <Link href={`/perso/${item.id}`}>ABRIR</Link>
                            </div>
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}

export default ServerSide;
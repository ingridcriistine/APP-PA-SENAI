"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface IData {
    name: string,
    id: number,
    image: string
}

const FetchPage = () => {

    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json();
            setCharacters(data.results);
        }
        load();
    }, [])

    return (
        <div className="bg-gray-900 text-white">
            <h1 className="font-bold p-4 pt-32 flex justify-center text-[20px]">Fetch Nativo para requisições get</h1>
            <div className=" pt-10 pb-20 flex row flex-wrap justify-center">
                {characters.map((item) => {
                    return (
                        <div key={item.id} className="bg-white rounded m-4 text-black w-[250px] flex flex-col items-center justify-center]">
                            <h2 className="p-4 font-semibold">{item.name}</h2>
                            <Image className="w-[200px] h-auto mb-4 rounded" src={item.image} width={64} height={64} alt="foto" priority/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FetchPage;
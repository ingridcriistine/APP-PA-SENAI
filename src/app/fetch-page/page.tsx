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
            <div className=" pt-20 ">
                <h1 className="font-bold p-4 text-[20px]">Fetch Nativo para requisições get</h1>
                {characters.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2 className="p-4">{item.name}</h2>
                            <Image src={item.image} width={64} height={64} alt="foto"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FetchPage;
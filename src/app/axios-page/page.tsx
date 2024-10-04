"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";

interface IData {
    name: string,
    gender: string,
    status: string,
    species: string,
    image: string
}

const AxiosPage = () => {

    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possível buscar os dados");
    const [page, setPage] = useState<string>("")

    useEffect(() => {
        api.get(`/character/?page=${page}`).then((res) => {
            console.log(res.data.results)
            setErro(false)
            setData(res.data.results);
        }).catch((error) => {
            if(error.response.status === 404) {
                setErrorMessage("Página não encontrada")
            }
            setErro(true);
        })
    }, [page])

    return(
        <div className="bg-gray-900 text-white">
            <div className="pt-20">
                <h1 className="font-bold p-4 text-[20px]">Página com useEfect e Axios</h1>
                <input type="text" value={page} onChange={(e) => setPage(e.target.value)} placeholder="1/42 - insira a página" className="text-black"/>
                {erro && <h5>{errorMessage}</h5>}
                {data.map((item, index) => {
                    return(
                        <div>
                            <h2>{item.name}</h2>
                            <Image src={item.image} width={100} height={100} alt="imagem"/>
                            <p>{item.species}</p>
                            <p>{item.status}</p>
                            <p>{item.gender}</p>
                            <br/><br/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AxiosPage;
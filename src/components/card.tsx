import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

interface CardProps {
    imagem: number,
    time: string,
    title: string,
    text: string,
    n1: number,
    n2: number,
    n3: number 
}

const styleCard = {
    textoRosa: "flex justify-center mt-10 text-sm text-pink-600 font-bold",
    textoLaranja: "flex justify-center mt-10 text-sm text-orange-600 font-bold",
    textoVerde: "flex justify-center mt-10 text-sm text-green-600 font-bold",
    rosa: "flex flex-row absolute bottom-0 min-w-full h-20 align-center justify-center gbg-cyan-300 rounded-b-3xl bg-pink-600 text-white",
    laranja: "flex flex-row absolute bottom-0 min-w-full h-20 align-center justify-center bg-cyan-300 rounded-b-3xl bg-orange-600 text-white",
    verde: "flex flex-row absolute bottom-0 min-w-full h-20 align-center justify-center bg-cyan-300 rounded-b-3xl bg-green-600 text-white",
    bordaRosa: "border-pink-700 border-r-2 border-l-2 pl-10 pr-10 h-100 p-4 w-[33%]",
    bordaLaranja: "border-orange-700 border-r-2 border-l-2 pl-10 pr-10 h-100 p-4 w-[33%]",
    bordaVerde: "border-green-700 border-r-2 border-l-2 pl-10 pr-10 h-100 p-4 w-[33%]"
}

export const Card: React.FC<CardProps> = ({imagem, time, title, text, n1, n2, n3}) => {
    return(
        <div className="flex flex-col relative w-96 h-[700px] bg-white rounded-3xl align-center shadow-md shadow-slate-100 hover:scale-110 transition easy-in-out">
            <Image src={imagem === 1 ? img1 : imagem === 2 ? img2 : imagem === 3 ? img3 : "none"} alt="imagem" className="h-64 object-cover rounded-t-3xl"/>
            <div className="flex align-center justify-center flex-col bgCard">
                <h3 className={imagem === 1 ? styleCard.textoRosa : imagem === 2 ? styleCard.textoLaranja : imagem === 3 ? styleCard.textoVerde : "none"}>{time}</h3>
                <h2 className="flex justify-center text-3xl font-bold">{title}</h2>
                <p className="flex justify-center m-10 text-center">{text}</p>
            </div>
            <div className={imagem === 1 ? styleCard.rosa : imagem === 2 ? styleCard.laranja : imagem === 3 ? styleCard.verde : "none"}>
                <div className="pt-4 w-[33%]">
                    <h4 className="text-xl font-bold flex justify-center">{n1}</h4>
                    <h5 className="text-sm flex justify-center">READ</h5>
                </div>
                <div className={imagem === 1 ? styleCard.bordaRosa : imagem === 2 ? styleCard.bordaLaranja : imagem === 3 ? styleCard.bordaVerde : "none"}>
                    <h4 className="text-xl font-bold flex justify-center">{n2}</h4>
                    <h5 className="text-sm flex justify-center">VIEWS</h5>
                </div>
                <div className="pt-4 w-[33%]">
                    <h4 className="text-xl font-bold flex justify-center">{n3}</h4>
                    <h5 className="text-sm flex justify-center">COMMENTS</h5>
                </div>
            </div>
        </div>
    )
}
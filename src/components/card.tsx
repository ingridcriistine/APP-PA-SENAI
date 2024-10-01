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

const bgCard = {
    div: "bg-black"
}

export const Card: React.FC<CardProps> = ({imagem, time, title, text, n1, n2, n3}) => {
    return(
        <div className="flex flex-col w-96 h-full bg-white rounded align-center">
            <Image src={imagem === 1 ? img1 : imagem === 2 ? img2 : imagem === 3 ? img3 : "none"} alt="batata" className="max-h-80 rounded"/>
            <div className="flex align-center justify-center flex-col bgCard">
                <h3 className="flex justify-center mt-10 text-sm">{time}</h3>
                <h2 className="flex justify-center m-4 text-3xl font-bold">{title}</h2>
                <p className="flex justify-center m-10 text-center">{text}</p>
            </div>
            <div className="flex flex-row align-center justify-center gap-16">
                <div>
                    <h4 className="text-xl font-bold flex justify-center">{n1}</h4>
                    <h5 className="text-sm flex justify-center">READ</h5>
                </div>
                <div>
                    <h4 className="text-xl font-bold flex justify-center">{n2}</h4>
                    <h5 className="text-sm flex justify-center">VIEWS</h5>
                </div>
                <div>
                    <h4 className="text-xl font-bold flex justify-center">{n3}</h4>
                    <h5 className="text-sm flex justify-center">COMMENTS</h5>
                </div>
            </div>
        </div>
    )
}
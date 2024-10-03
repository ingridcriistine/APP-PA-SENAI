"use client"

import { useState } from "react";

// interface HandleProps {
//     a: string;
//     b: string;
// }

const GeneralFunction: React.FC = () => {

    const [numero1, setNumero1] = useState<string>("");
    const [numero2, setNumero2] = useState<string>("");

    const [respSoma, setRespSoma] = useState<number | undefined>();
    const [respSub, setRespSub] = useState<number | undefined>();
    const [respMult, setRespMult] = useState<number | undefined>();
    const [respDiv, setRespDiv] = useState<number | undefined>();

    const erro = "Digite direito por favor"

    const handleAll = ({a, b}: {a:string, b:string}) => {
        const n1= parseFloat(a);
        const n2= parseFloat(b);

        if(!isNaN(n1) && (!isNaN(n2))) {
            setRespSoma(n1+n2);
            setRespSub(n1-n2);
            setRespMult(n1*n2);
            setRespDiv(n2 !== 0 ? n1/n2: undefined);
        }
        else {
            setRespSoma(undefined);
            setRespSub(undefined);
            setRespMult(undefined);
            setRespDiv(undefined);
        }
    }

    const style = {
        label: "m-3 items-center",
        input: "border-[0.5px] border-black m-3 p-1 rounded",
        div: "flex justify-center",
        div2: "w-48 flex justify-between items-center mb-2",
        h2: "flex items-center w-24",
        p: "w-15 text-black",
        button: "text-white bg-cyan-700 rounded text-[13px] p-1 w-[100px] h-[30px] opacity-90 hover:opacity-100"
    }

    return (
        <div className="bg-gray-900 flex flex-col justify-center items-center h-screen">
            <div className="bg-white w-100 rounded h-auto p-14 flex flex-col justify-center items-center">
                <h1 className="mb-10 font-bold">Função Reaproveitada</h1>
                <div className={style.div}>
                    <input type="text" className={style.input} placeholder="Número 01" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                </div>
                <div className={style.div}>
                    <input type="text" className={style.input} placeholder="Número 02" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                </div>
                <div>
                    <button className={style.button} onClick={() => handleAll({a: numero1, b:numero2})}>Calcular todos</button>
                </div>
                <div className="flex justify-center flex-col mt-12 items-center ">
                    <div className={style.div2}>
                        <h2 className={style.h2}>Soma</h2>
                        <p className={style.p}>{!isNaN(respSoma ?? NaN) ? respSoma : erro}</p>
                    </div>
                    <div className={style.div2}>
                        <h2 className={style.h2}>Subtração</h2>
                        <p className={style.p}>{!isNaN(respSub ?? NaN) ? respSub : erro}</p>
                    </div>
                    <div className={style.div2}>
                        <h2 className={style.h2}>Multiplicação</h2>
                        <p className={style.p}>{!isNaN(respMult ?? NaN) ? respMult : erro}</p>
                    </div>
                    <div className={style.div2}>
                        <h2 className={style.h2}>Divisão</h2>
                        <p className={style.p}>{!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(1) : erro}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralFunction;
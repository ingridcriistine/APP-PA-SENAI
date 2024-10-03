'use client'

import React, { useState } from "react"

const Maths: React.FC = () => {

    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [respSoma, setRespSoma] = useState<number | undefined>(0)
    const [respSubtracao, setRespSubtracao] = useState<number | undefined>(0)
    const [respMultiplicacao, setRespMultiplicacao] = useState<number | undefined>(0)
    const [respDivisao, setRespDivisao] = useState<number | undefined>(0)
    const msgError = "Digite um número válido"

    console.log(numero1, numero2)
    console.log(typeof numero1, typeof numero2)

    const handleSoma = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!(isNaN(n1)) && !(isNaN(n2))) {
            setRespSoma(n1 + n2)
        }
        else {
            setRespSoma(undefined) 
        }
    }

    const handleSubtracao = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!(isNaN(n1)) && !(isNaN(n2))) {
            setRespSubtracao(n1 - n2)
        }
        else {
            setRespSubtracao(undefined) 
        }
    }


    const handleMultiplicacao = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!(isNaN(n1)) && !(isNaN(n2))) {
            setRespMultiplicacao(n1 * n2)
        }
        else {
            setRespMultiplicacao(undefined) 
        }
    }


    const handleDivisao = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!(isNaN(n1)) && !(isNaN(n2)) && (n2 != 0)) {
            setRespDivisao(n1 / n2)
        }
        else {
            setRespDivisao(undefined) 
        }
    }

    const style = {
        label: "m-3 items-center",
        input: "border-[0.5px] border-black m-3 p-1 rounded",
        div: "flex justify-center",
        div2: "flex gap-4 justify-between items-center mb-2",
        h2: "flex items-center w-24",
        h3: "w-10 pl-4 pr-4 text-black",
        button: "text-white bg-cyan-700 rounded text-[13px] p-1 w-[100px] h-[30px] opacity-90 hover:opacity-100"
    }


    return (
        <div className="bg-gray-900 flex flex-col justify-center items-center h-screen">
            <div className="bg-white w-100 rounded h-auto p-14 flex flex-col justify-center items-center">
                <h1 className="mb-10 font-bold">Calculadora</h1>
                <div className={style.div}>
                    <label htmlFor="n1" className={style.label}>Número 1</label>
                    <input id="n1" type="text" className={style.input} value={numero1} onChange={(e) => setNumero1(e.target.value)}></input>
                </div>
                <div className={style.div}>
                    <label htmlFor="n2" className={style.label}>Número 2</label>
                    <input id="n2" type="text" className={style.input} value={numero2} onChange={(e) => setNumero2(e.target.value)}></input>
                </div>
                <div className="flex justify-center flex-col mt-12 items-center ">
                    <div className={style.div2}>
                        <h2 className={style.h2}>Soma</h2>
                        <h3 className={style.h3}>{!isNaN(respSoma ?? NaN) ? respSoma : msgError}</h3>
                        <br/>
                        <button className={style.button} onClick={handleSoma}>SOMAR</button>
                        <br/><br/>
                    </div>
                    <div className={style.div2}>
                        <h2 className={style.h2}>Subtração</h2>
                        <h3 className={style.h3}>{!isNaN(respSubtracao ?? NaN) ? respSubtracao : msgError}</h3>
                        <br/>
                        <button className={style.button} onClick={handleSubtracao}>SUBTRAIR</button>
                        <br/><br/>
                    </div>
                    <div className={style.div2}>
                        <h2 className={style.h2}>Multiplicação</h2>
                        <h3 className={style.h3}>{!isNaN(respMultiplicacao ?? NaN) ? respMultiplicacao : msgError}</h3>
                        <br/>
                        <button className={style.button} onClick={handleMultiplicacao}>MULTIPLICAR</button>
                        <br/><br/>
                    </div>
                    <div className={style.div2}>
                        <h2 className={style.h2}>Divisão</h2>
                        <h3 className={style.h3}>{!isNaN(respDivisao ?? NaN) ? respDivisao?.toFixed(2) : msgError}</h3>
                        <br/>
                        <button className={style.button} onClick={handleDivisao}>DIVIDIR</button>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maths
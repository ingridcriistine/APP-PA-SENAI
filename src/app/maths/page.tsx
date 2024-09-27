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


    return (
        <>
            <h1>Use client com controle de estado</h1>
            <div>
                <label htmlFor="n1">Número 1</label>
                <input id="n1" type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="n2">Número 2</label>
                <input id="n2" type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}></input>
            </div>
            <div>
                <h2>Soma</h2>
                {!isNaN(respSoma ?? NaN) ? respSoma : msgError}
                <br/>
                <button onClick={handleSoma}>SOMAR</button>
                <br/><br/>
            </div>
            <div>
                <h2>Subtração</h2>
                {!isNaN(respSubtracao ?? NaN) ? respSubtracao : msgError}
                <br/>
                <button onClick={handleSubtracao}>SUBTRAIR</button>
                <br/><br/>
            </div>
            <div>
                <h2>Multiplicação</h2>
                {!isNaN(respMultiplicacao ?? NaN) ? respMultiplicacao : msgError}
                <br/>
                <button onClick={handleMultiplicacao}>MULTIPLICAR</button>
                <br/><br/>
            </div>
            <div>
                <h2>Divisão</h2>
                {!isNaN(respDivisao ?? NaN) ? respDivisao : msgError}
                <br/>
                <button onClick={handleDivisao}>DIVIDIR</button>
                <br/><br/>
            </div>
        </>
    )
}

export default Maths
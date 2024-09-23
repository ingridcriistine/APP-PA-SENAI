import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Next",
  description: "Aprendizagem técnica Bosch",
};

export default function Home() {

  const style = {
    label: "m-3",
    input: " border-2 border-black m-3",
    button: "w-[300px] bg-cyan-300 p-2 m-3 flex justify-center",
    login: "w-[800px] flex flex-col m-10 p-10 justify-center align-center bg-cyan-100",
    section: "w-full flex justify-center items-center h-screen"
  }

  return (
    <div className={style.section}>
      <div className={style.login}>
        <h1 className="flex justify-center text-medium m,-10">Login</h1>
        <label className={style.label}>Nome</label>
        <input type="text" placeholder="Nome completo" className={style.input}></input>
        <label className={style.label}>Email</label>
        <input type="text" placeholder="user@email.com" className={style.input}></input>
        <button className={style.button}>Enviar</button>
      </div>
    </div>
  );
}

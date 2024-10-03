import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Next",
  description: "Aprendizagem técnica Bosch",
};

export default function Home() {

  const style = {
    label: "m-3",
    input: " border-[0.5px] border-black m-3 p-1 rounded",
    button: "w-ful bg-cyan-700 text-white p-2 m-3 mt-10 flex justify-center rounded opacity-90 hover:opacity-100",
    login: "w-[600px] flex flex-col m-10 p-20 h-[500px] align-center bg-white rounded-md",
    section: "w-full flex justify-center items-center h-screen  bg-gray-900"
  }

  return (
    <div className={style.section}>
      <div className={style.login}>
        <h1 className="flex justify-center text-medium mb-4 font-semibold">Login</h1>
        <label className={style.label}>Nome</label>
        <input type="text" placeholder="Nome completo" className={style.input}></input>
        <label className={style.label}>Email</label>
        <input type="text" placeholder="user@email.com" className={style.input}></input>
        <button className={style.button}>Enviar</button>
      </div>
    </div>
  );
}

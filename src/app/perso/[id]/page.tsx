import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    id: string,
    name: string,
    status: string,
    species: string,
    image: string
}

const Perso = async ({params: {id}} : IPerso) => {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data: IData = await res.json()

    return(
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <p>{data.status}</p>
            <p>{data.species}</p>
            <Image className="w-[500px] h-auto" src={data.image} alt="photo" width={100} height={100} priority/>
        </div>
    )
}

export default Perso

export async function generateStaticParams() {
    return ["1", "2", "3", "4"]
}
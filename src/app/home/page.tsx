import { Card } from "@/components/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Next",
  description: "Aprendizagem técnica Bosch",
};

export default function Home() {

  const dados: { imagem: number; time: string; title: string; text: string; n1: number; n2: number; n3: number }[] = [
    {
      imagem: 1,
      time: "4 days ago",
      title: "Post One",
      text: "Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      n1: 4,
      n2: 5123,
      n3: 32
    },
    {
      imagem: 2,
      time: "1 week ago",
      title: "Post Two",
      text: "Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      n1: 7,
      n2: 7152,
      n3: 21
    },
    {
      imagem: 3,
      time: "3 weeks ago",
      title: "Post Three",
      text: "Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      n1: 5,
      n2: 3021,
      n3: 15
    },
  ]

  return (
    <div className="flex justify-center h-screen p-24 bg-gray-900">
      <div className="flex flex-row gap-36">
        {dados.map((post, index) => (
          <Card key={index} imagem={post.imagem} time={post.time} title={post.title} text={post.text} n1={post.n1} n2={post.n2} n3={post.n3}/>
        ))}
      </div>
    </div>
  );
}

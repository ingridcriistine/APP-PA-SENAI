import Link from "next/link";

interface FooterProps {
    telefone: string;
    email: string;
    copyright: string;
}

export const Footer: React.FC<FooterProps> = ({telefone, email, copyright}) => {
    return(
        <footer className="text-preto bg-cyan-700 gap-3 p-3 font-robFont flex flex-row justify-center align-center gap-8">
            <p>{telefone}</p>
            <p>{email}</p>
            <p>{copyright}</p>
        </footer>
    )
}
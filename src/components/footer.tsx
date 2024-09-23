import Link from "next/link";

interface FooterProps {
    telefone: string;
    email: string;
    copyright: string;
}

export const Footer: React.FC<FooterProps> = ({telefone, email, copyright}) => {
    return(
        <footer>
            <p>{telefone}</p>
            <p>{email}</p>
            <p>{copyright}</p>
        </footer>
    )
}
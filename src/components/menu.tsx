import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface MenuProps {
    op1: string;
    op2: string;
    op3?: boolean; //? opcional
    op4: number;
}

export const Menu: React.FC<MenuProps> = ({op1, op2, op3, op4}) => {
    return(
        <nav className="text-preto bg-cyan-700 gap-3 p-3 font-robFont text-large flex flex-row justify-center align-center gap-8">
          <Link href={ROUTES.home}>{op1}</Link>
          <Link href={ROUTES.maths}>{op2}</Link>
          <Link href={ROUTES.home}>{op3}</Link>
          <Link href={ROUTES.home}>{op4}</Link>
        </nav>
    )
}
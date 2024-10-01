import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface MenuProps {
    op1: string;
    op2: string;
    op3?: string; //? opcional
}

export const Menu: React.FC<MenuProps> = ({op1, op2, op3}) => {
    return(
        <nav className="text-preto bg-cyan-700 gap-3 p-3 font-robFont text-large flex flex-row justify-center align-center gap-8">
          <Link href={ROUTES.home}>{op1}</Link>
          <Link href={ROUTES.maths}>{op2}</Link>
          <Link href={ROUTES.generalFunction}>{op3}</Link>
        </nav>
    )
}
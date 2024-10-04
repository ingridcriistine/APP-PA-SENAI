import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface MenuProps {
    op1: string;
    op2: string;
    op3?: string; //? opcional
    op4: string; 
    op5: string;
    op6: string;
    op7: string;
}

const styleMenu = {
    link: "text-white text-[25px] hover:text-black transition easy-in-out"
}

export const Menu: React.FC<MenuProps> = ({op1, op2, op3, op4, op5, op6, op7}) => {
    return(
        <nav className="text-preto bg-cyan-700 justify-evenly p-3 fixed w-full z-10 font-robFont text-large flex flex-row justify-center align-center gap-8">
          <Link href={ROUTES.login} className={styleMenu.link}>{op1}</Link>
          <Link href={ROUTES.home} className={styleMenu.link}>{op2}</Link>
          <Link href={ROUTES.maths} className={styleMenu.link}>{op3}</Link>
          <Link href={ROUTES.generalFunction} className={styleMenu.link}>{op4}</Link>
          <Link href={ROUTES.fetchNativo} className={styleMenu.link}>{op5}</Link>
          <Link href={ROUTES.axiosPage} className={styleMenu.link}>{op6}</Link>
          <Link href={ROUTES.serverPage} className={styleMenu.link}>{op7}</Link>
        </nav>
    )
}
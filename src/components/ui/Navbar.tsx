import Link from "next/link";
import style from "./navbar.module.css";

export default function Navbar() {
    return (<>
            <div className={style["navbar-container"]}>
                <nav className={style["navbar"]}>
                    <Link href="/" className={style.heading}>
                        <h3 className={style.title}>UTTARAKHAND CULTURE</h3>
                    </Link>
                    <Link href="/login" className={style.link}>LOGIN</Link>
                </nav>
            </div>
            <div className={style["fade-navbar-effect"]}></div>
            <div className={style["empty-navbar"]}></div>
        </>
    )
        ;
}

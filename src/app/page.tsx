import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "@/components/ui/Card";

export default function Home() {
    return (
        <>


            <section className={styles["hero-container"]}>
                <div className={styles["text-container"]}>
                    <h1>Uttarakhand Culture</h1>
                    <p>Progress with the present, but respect your roots</p>
                </div>
                <div className={styles["img-container"]}>
                    {/*<Image src={"/heroMapImage.webp"} alt="TREKKING" width="484" height={"450"}></Image>*/}
                    <Image src={"./heroMapImage.webp"} alt="TREKKING" width="538" height={"500"}></Image>

                </div>
            </section>


            <div className={styles["div"]}>
                <Link href={"/trekking"}>Trekking</Link>
            </div>
        </>
    );
}

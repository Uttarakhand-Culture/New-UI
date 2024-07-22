import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.div}>
          <h1>Hello World</h1>
          <Link href={"/trekking"}>Trekking</Link>
      </div>
  );
}

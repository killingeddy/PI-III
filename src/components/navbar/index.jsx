import styles from "./styles.module.scss";
import Link from "next/link";
import React from "react";

export default function NavBar(props) {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_main}>
                <Link href={"/"}>
                    <h1>{props?.atual}</h1>
                </Link>
            </div>
            <div className={styles.navbar_buttons}>
                <div className={styles.navbar_button}>
                    {
                        props?.atual != "Home" &&
                        <Link href={"/"}>Home</Link>
                    }
                </div>
                <div className={styles.navbar_button}>
                    {
                        props?.atual != "Estudio" &&
                        <Link href={"/studio"}>Estudio</Link>
                    }
                </div>
                <div className={styles.navbar_button}>
                    {
                        props?.atual != "Cultura" &&
                        <Link href={"/cultura"}>Cultura</Link>
                    }
                </div>
                <div className={styles.navbar_button}>
                    {
                        props?.atual != "Sobre" &&
                        <Link href={"/about"}>Sobre</Link>
                    }
                </div>
                <div className={styles.navbar_button}>
                    {
                        props?.atual != "Contato" &&
                        <Link href={"/contact"}>Contato</Link>
                    }
                </div>
            </div>
        </div>
    )
}
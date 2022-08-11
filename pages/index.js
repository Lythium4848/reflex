import styles from '../styles/Home.module.css'
import IndexPage from "../components/IndexPage";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <IndexPage/>
      </main>

    </div>
  )
}

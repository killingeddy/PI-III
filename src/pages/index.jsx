import styles from '@/styles/Home.module.scss';
import NavBar from '@/components/navbar';
import React from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>HyperFunk</h1>
      </div>
    </div>
  )
}

import Object from '@/components/object';
import styles from '@/styles/Home.module.scss';
import React from 'react';

export default function Home() {

  const [firstPosition, setFirstPosition] = React.useState('15, 0, -10');
  const [secondPosition, setSecondPosition] = React.useState('-5, 10, 20');



  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.obejctone}>
          <Object model={'whale'} position={firstPosition} color={'0x61a5c2'} />
        </div>
        <div className={styles.obejcttwo}>
          <Object model={'whale'} position={secondPosition} color={'0x89c2d9'} />
        </div>
      </div>
    </div>
  )
}

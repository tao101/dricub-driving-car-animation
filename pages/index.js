import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  let [limitedPosX, setLimitedPosX] = useState(-300);
  let [roadPosx, setRoadPosx] = useState(-300);

  useEffect(() => {
    let interval = setInterval(() => {
      let width = typeof window != 'undefined' ? window.innerWidth + 300 : 2000;
      setLimitedPosX(limitedPosX < width ? limitedPosX + 1 : -300);
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, [limitedPosX]);

  useEffect(() => {
    let interval = setInterval(() => {
      let width = typeof window != 'undefined' ? window.innerWidth + 302 : 2000;
      setRoadPosx(roadPosx < width ? roadPosx + 1 : -300);
    }, 2);

    return () => {
      clearInterval(interval);
    };
  }, [roadPosx]);

  return (
    <main className={styles.main}>
      <div
        className="relative w-full  h-[446px] bg-red-300 road overflow-hidden "
        style={{ backgroundPosition: roadPosx + 'px bottom' }}
      >
        <div className="bg-[url('/car.png')] w-[790px] h-[440px] mx-auto">
          <img src="/car-wheel.png" className="wheel wheel1" />
          <img src="/car-wheel.png" className="wheel wheel2" />
        </div>
        <div
          className="mobilemiter w-full h-[115px]  "
          style={{ backgroundPosition: limitedPosX + 'px bottom' }}
        ></div>
      </div>
    </main>
  );
}

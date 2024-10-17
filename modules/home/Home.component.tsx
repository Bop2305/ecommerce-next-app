import React from 'react';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Home Page</h1>
      <div className={`${styles.bgRed} ${styles.box}`}></div>
      <br></br>
      <div className={`${styles.bgRed} ${styles.boxCenter}`}>
        <h2>Flex Box Center</h2>
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Your mic sounds really good right now Cardbordbot! 👍🏾
        </p>
        <p>I'm basically 95% done with my website... hahaha *sob*🤣</p>
      </header>
    </div>
  );
}

export default App;

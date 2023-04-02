import logo from '../assets/images/Print_Transparent.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styles from './App.module.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Your mic sounds really good right now Cardbordbot! 👍🏾
        </p>
        <p>I'm basically 95% done with my website... hahaha *sob*🤣</p>
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;

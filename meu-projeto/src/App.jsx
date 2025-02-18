import { useState } from "react";
import { Header } from './components/Header';
import { Sidebar } from "./components/SideBar";
import { Post } from "./components/Post";
import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App;

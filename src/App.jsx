import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MiguelViapiana.png",
      name: "Miguel Jung",
      role: "Auxiliar de Documentação e Dados @360erp",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de integrar as transportadoras Azul e AsapLog no sistema,",
      },
      {
        type: "paragraph",
        content:
          "Logo logo irei integrar a Shopee e o Mercado Livre no marketplace 🚀",
      },
      { type: "link", content: "miguel.backend/marketplace" },
    ],
    publishedAt: new Date("2025-02-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/MiguelViapiana.png",
      name: "Miguel Jung",
      role: "Auxiliar de Documentação e Dados @360erp",
    },
    content: [{ type: "paragraph", content: "Outro post de exemplo! 📝" }],
    publishedAt: new Date("2025-02-04 18:30:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;

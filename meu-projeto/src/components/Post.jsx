import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src="https://github.com/MiguelViapiana.png" />
          <div className={styles.authorInfo}>
            <strong>Miguel Jung</strong>
            <span>Auxiliar de Documentação de Dados</span>
          </div>
        </div>

        <time title="13 de Fevereiro às 08:37" dateTime="2025-05-11 08:37:42">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de integrar as transportadoras Azul e AsapLog no sistema,
          logo logo irei integrar a Shopee e o Mercado Livro no marketplace 🚀
        </p>
        <p>
          👉 <a href="">miguel.backend/marketplace </a>
        </p>
        <p>
          <a href="">#backend</a> <a href="">#integracao</a>{" "}
          <a href="">#marketplace</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}

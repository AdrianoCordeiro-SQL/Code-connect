import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { http } from "../../api";
import { CardPost } from "../../components/CardPost";
import styles from "./Perfil.module.css";

const defaultAvatar =
  "https://raw.githubusercontent.com/alura-cursos/codeconnect-api/main/public/avatars/default.png";

export const Perfil = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (user?.id) {
      http
        .get(`/blog-posts?authorId=${user.id}`)
        .then((response) => setPosts(response.data))
        .catch((err) => console.error("Erro ao buscar posts:", err));
    }
  }, [user]);

  if (!user) return <p className={styles.loading}>Carregando perfil...</p>;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.profileInfo}>
          <img
            src={user.avatar || defaultAvatar}
            alt={`Foto de perfil de ${user.name}`}
            className={styles.profileImage}
          />

          <div className={styles.textInfo}>
            <div className={styles.usernameRow}>
              <span className={styles.username}>
                @{user.username || user.name?.toLowerCase().replace(/\s/g, "")}
              </span>
              <button className={styles.followButton}>Editar</button>
            </div>

            <h1 className={styles.name}>{user.name}</h1>

            <p className={styles.bio}>
              {user.bio ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            </p>

            <div className={styles.stats}>
              <span>
                <strong>{posts.length}</strong> Projetos
              </span>
              <span>
                <strong>25</strong> Conexões
              </span>
            </div>
          </div>
        </div>
      </header>

      <hr className={styles.divider} />

      <nav className={styles.tabs}>
        <button className={styles.activeTab}>Meus projetos</button>
        <button>Aprovados</button>
        <button>Compartilhados</button>
      </nav>

      <div className={styles.grid}>
        {posts.length > 0 ? (
          posts.map((post) => <CardPost key={post.id} post={post} />)
        ) : (
          <p className={styles.empty}>Nenhum projeto encontrado.</p>
        )}
      </div>
    </section>
  );
};

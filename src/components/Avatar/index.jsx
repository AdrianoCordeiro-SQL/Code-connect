import styles from "./avatar.module.css";

export const Avatar = ({ author }) => {
  // Se author não existir, não renderiza nada ou renderiza um placeholder
  if (!author) return <div className={styles.container} />;

  // Usamos o operador ?. (optional chaining) por segurança
  const imgSrc = author.avatar;

  return (
    <div className={styles.container}>
      {imgSrc ? (
        <img
          src={imgSrc}
          width={32}
          height={32}
          alt={`Avatar do(a) ${author.name}`}
        />
      ) : (
        // Caso o usuário não tenha avatar na API, mostra a inicial do nome
        <div className={styles.placeholder}>{author.name?.charAt(0)}</div>
      )}
    </div>
  );
};

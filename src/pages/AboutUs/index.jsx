import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <img src="/assets/hero-sobre.png" alt="Ilustração CodeConnect" />
        <h1 className={styles.title}>Bem-Vindo ao CodeConnect!</h1>
        <p className={styles.subtitle}>Onde a comunidade e o código se unem!</p>
      </div>

      <article className={styles.content}>
        <p>No coração da revolução digital está a colaboração...</p>

        <div className={styles.missionSection}>
          <div>
            <h2>Nossa Missão</h2>
            <p>
              Na CodeConnect, acreditamos que a colaboração é a essência da
              inovação...
            </p>
          </div>
          <img
            src="/assets/mission-image.png"
            alt="Desenvolvedor trabalhando"
          />
        </div>

        <div className={styles.joinUs}>
          <h2>Junte-se a Nós!</h2>
          <p>
            Estamos animados para ter você conosco nesta jornada empolgante...
          </p>
        </div>
      </article>

      <footer className={styles.footerLogo}>
        <img src="/assets/logo-green.png" alt="Logo CodeConnect" />
        <p>
          Juntos, vamos transformar ideias em inovações e moldar o futuro
          digital.
        </p>
      </footer>
    </section>
  );
};

export default AboutUs;

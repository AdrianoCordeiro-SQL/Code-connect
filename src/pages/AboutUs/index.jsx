import styles from "./AboutUs.module.css";
import heroImage from "../../assets/heroImage.png";
import missionImage from "../../assets/missionImage.png";
import logo from "../../assets/logo.svg";

export const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <img src={heroImage} alt="Ilustração CodeConnect" />
        <h1 className={styles.title}>Bem-Vindo ao CodeConnect!</h1>
        <p className={styles.subtitle}>Onde a comunidade e o código se unem!</p>
      </div>

      <article className={styles.content}>
        <p>
          No coração da revolução digital está a colaboração. CodeConnect nasceu
          da visão de criar um espaço onde desenvolvedores, programadores e
          entusiastas da tecnologia podem se conectar, aprender e colaborar de
          maneira inigualável. Somos uma comunidade global apaixonada por código
          e estamos comprometidos em oferecer um ambiente inclusivo e inspirador
          para todos os níveis de habilidade.
        </p>

        <div className={styles.missionSection}>
          <div>
            <h2>Nossa Missão</h2>
            <p>
              Na CodeConnect, acreditamos que a colaboração é a essência da
              inovação. Nossa missão é fornecer uma plataforma onde os mentes
              criativas podem se unir, compartilhar conhecimento, e desenvolver
              projetos extraordinários. Quer você seja um novato ansioso para
              aprender ou um veterano experiente, você encontrará aqui um lar
              para suas aspirações tecnológicas.
            </p>
          </div>
          <img src={missionImage} alt="Desenvolvedor trabalhando" />
        </div>

        <div className={styles.joinUs}>
          <h2>Junte-se a Nós!</h2>
          <p>
            Estamos animados para ter você conosco nesta jornada empolgante.
            Junte-se à nossa comunidade vibrante e descubra o poder da
            colaboração no mundo do código.
          </p>
        </div>
      </article>

      <footer className={styles.footerLogo}>
        <img src={logo} alt="Logo CodeConnect" />
        <p>
          Juntos, vamos transformar ideias em inovações e moldar o futuro
          digital.
        </p>
      </footer>
    </section>
  );
};

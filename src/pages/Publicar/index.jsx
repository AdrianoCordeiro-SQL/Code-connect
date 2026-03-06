import { useState } from "react";
import { http } from "../../api"; // Ajuste o caminho conforme sua pasta
import styles from "./Publicar.module.css";

export const Publicar = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    tags: "",
  });
  const [cover, setCover] = useState(null); // Usando 'cover' em vez de 'imagem'

  const aoSubmeter = async (evento) => {
    evento.preventDefault();

    // Criamos o FormData para permitir o envio do arquivo binário
    const data = new FormData();
    data.append("title", formData.title);
    data.append("body", formData.body);
    data.append("tags", formData.tags);
    data.append("cover", cover); // O backend espera 'cover' para a imagem da capa

    try {
      // Verifique no Swagger se o endpoint é "/posts" ou "/blog-posts"
      await http.post("/blog-posts", data);
      alert("Projeto publicado com sucesso!");
      // Aqui você poderia usar o navigate("/") para voltar ao feed
    } catch (erro) {
      console.error("Erro ao publicar:", erro);
      alert("Erro ao publicar projeto.");
    }
  };

  return (
    <section className={styles.container}>
      <h2>Publicar novo projeto</h2>
      <form onSubmit={aoSubmeter} className={styles.form}>
        <div className={styles.field}>
          <label>Capa do Projeto</label>
          <input
            type="file"
            onChange={(e) => setCover(e.target.files[0])}
            required
          />
        </div>

        <input
          placeholder="Nome do projeto (title)"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <textarea
          placeholder="Descrição do projeto (body)"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          required
        />

        <input
          placeholder="Tags (separadas por vírgula)"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
        />

        <button type="submit" className={styles.button}>
          Publicar
        </button>
      </form>
    </section>
  );
};

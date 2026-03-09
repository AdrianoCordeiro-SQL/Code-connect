import { useState } from "react";
import { http } from "../../api";
import styles from "./Publicar.module.css";

export const Publicar = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    tags: "",
  });
  const [image, setImage] = useState(null);

  const aoSubmeter = async (evento) => {
    evento.preventDefault();

    // Criamos o FormData para o arquivo binário
    const data = new FormData();
    data.append("title", formData.title);
    data.append("body", formData.body);
    data.append("markdown", formData.tags);
    data.append("image", image);

    try {
      // Tenta buscar o token (verifique se no seu login você salvou como 'token' ou 'access_token')
      const token =
        localStorage.getItem("token") || localStorage.getItem("access_token");

      await http.post("/blog-posts", data, {
        headers: {
          // Envia o crachá de autorização para o servidor
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Projeto publicado com sucesso!");
    } catch (erro) {
      console.error("Erro ao publicar:", erro);
      if (erro.response?.status === 401) {
        alert("Sua sessão expirou ou você não está logado.");
      } else {
        alert("Erro ao publicar projeto.");
      }
    }
  };

  return (
    <section className={styles.container}>
      <form onSubmit={aoSubmeter} className={styles.formContent}>
        {/* COLUNA DA ESQUERDA: Preview e Upload */}
        <div className={styles.leftColumn}>
          <div className={styles.imagePreview}>
            {image ? (
              <img src={URL.createObjectURL(image)} alt="Preview da capa" />
            ) : (
              <div className={styles.placeholder}>Nenhuma imagem carregada</div>
            )}
          </div>

          <label className={styles.uploadButton}>
            Carregar imagem ⬆
            <input
              type="file"
              className={styles.hiddenInput}
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </label>

          {image && (
            <div className={styles.fileInfo}>
              <span>{image.name}</span>
              <button
                type="button"
                onClick={() => setImage(null)}
                className={styles.removeFileBtn}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* COLUNA DA DIREITA: Campos de Texto */}
        <div className={styles.rightColumn}>
          <h2 className={styles.title}>Novo projeto</h2>

          <div className={styles.field}>
            <label>Nome do projeto</label>
            <input
              placeholder="Ex: React zero to hero"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.field}>
            <label>Descrição</label>
            <textarea
              rows="5"
              placeholder="Escreva a descrição do projeto..."
              value={formData.body}
              onChange={(e) =>
                setFormData({ ...formData, body: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.field}>
            <label>Tags</label>
            <input
              placeholder="React, Front-end..."
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
            />
          </div>

          {/* Botões de Ação com o estilo do design */}
          <div className={styles.actionButtons}>
            <button type="button" className={styles.btnDiscard}>
              Descartar 🗑
            </button>
            <button type="submit" className={styles.btnPublish}>
              Publicar ⇪
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

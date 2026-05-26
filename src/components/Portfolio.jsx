import styles from './Portfolio.module.css'
import React from 'react'

export default function Portfolio() {
  return (
    <div className={styles.txt}>
      {/*<h1>Guillermo Rodríguez</h1>
      <p>
        Soy Egresado de la Licenciatura en Matemáticas Aplicadas y Computación por la Universidad Nacional Autónoma de México,
        poseo un nivel intermedio de inglés y he trabajado con diferentes tecnologías para la administración, captura,
        almacenamiento, análisis de datos; así como desarrollo de herramientas informáticas para eficientar procesos y
        apoyar la toma de decisiones.
      </p>
      <hr />
      <div className={styles.socialIcons}>
        Correo electrónico: <a className={styles.socialIcon} href="mailto:gmo.rodriguez@gmail.com"><i className="fa-regular fa-envelope" /></a><br />
        Linkedin: <a className={styles.socialIcon} href="https://www.linkedin.com/in/guillermo-rodr%C3%ADguez-74b10039/"><i className="fab fa-linkedin-in" /></a><br />
        GitHub: <a className={styles.socialIcon} href="https://github.com/MemoRodz"><i className="fab fa-github" /></a>
      </div>*/}
      <div className={styles.iframeContainer}>
        <iframe
          src="https://memorodz.github.io/portfolio/"
          className={styles.iframe}
          title="Portfolio"
        />
      </div>
    </div>
  )
}

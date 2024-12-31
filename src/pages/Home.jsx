import React from 'react'
import styles from './home.module.css';

function About() {

  const name = ["Alok Jha", "आलोक झा"]
  const greet = ["Hello ! ", "नमस्ते !"]
  
  return (
    <>
    <div className="h-screen">
    <h1 className={styles.title}>Hello ()</h1>
    <h2 className={styles.subtitle}>I'm Alok</h2>
    <p className={styles.paragraph}>I develop secure, scalable systems with elegant UIs.</p>
    </div>
    </>
  )
}

export default About
import type { Component } from 'solid-js';
import styles from '../styles/Island.module.css';

const Island: Component = () => {

  return (
    <div class={styles.main}>
      <h1 class={styles.toptext}>Hi, I'm <span class={styles.fancytext}>Nat</span></h1>
      <p class={styles.paragraph}>
        I'm a developer with a penchant for silly projects using Go and OpenGL. <br/>
        My background is in physics but I currently work as a Full Stack Developer Intern <br/>
        You've found my Work-In-Progress site which I am building using Astro and SolidJS <br/><br/>
        For now, if you like, here are some of my projects, or alternatively, some places you can find out more about me
      </p>
    </div>
  );
}

export default Island
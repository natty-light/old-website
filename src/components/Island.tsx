import type { Component } from 'solid-js';
import styles from '../styles/Island.module.css';

const Island: Component = () => {

  return (
    <div class={styles.main}>
      <h1 class={styles.toptext}>Hi, I'm <span class={styles.fancytext}>Nat</span></h1>
      <p>I'm a developer with a penchant for silly projects using Go and OpenGL</p>
      <p>You've found my Work-In-Progress site which I am building using Astro and SolidJS</p>
      <p>For now, if you like, here are some of my projects, or alternatively, some places you can find out more about me</p>
    </div>
  );
}

export default Island
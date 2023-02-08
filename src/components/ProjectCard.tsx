import type { Component } from 'solid-js';
import type { ProjectCardProps } from '../types';
import styles from '../styles/ProjectCard.module.css';
import Button from './Button';

const ProjectCard: Component<ProjectCardProps> = (props) => {

  return(
    <div class={styles.card}>
      <h3 class={styles.header}>{props.title}</h3>
      <p>{props.description}</p>
      <div class={styles.container}>
        <Button content={props.buttonText} link={props.link} icon="mdi:github"/>
      </div>
    </div>
  )
}

export default ProjectCard;
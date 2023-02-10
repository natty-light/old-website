import type { Component } from 'solid-js';
import type { ProjectProps } from '../../types';
import styles from '../../styles/Project.module.css';
import Button from '../Button';

const Project: Component<ProjectProps> = (props) => {

  return (
    <div class={styles.main}>
      <h3>
        {props.title}
      </h3>
      {props.text.map( (t) => <p>{t}</p>)}
      <Button link={props.link} icon={props.buttonIcon} content={props.buttonText}/>
    </div>
  )
}

export default Project;
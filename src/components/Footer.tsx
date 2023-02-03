import type { Component } from 'solid-js';
import type { FooterProps } from '../types';
import styles from '../styles/Footer.module.css';
import Button from './Button';

const Footer: Component<FooterProps> = (props) => {

  return (
    <div class={styles.footer}>
      {props.buttons.map( (button) => <Button link={button.link} content={button.content} />)}
    </div>
  );
}

export default Footer;
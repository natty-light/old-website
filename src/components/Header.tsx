import type { Component } from 'solid-js';
import type { HeaderProps } from '../types';
import styles from '../styles/Header.module.css';

const Header: Component<HeaderProps> = (props) => {

  return (
    <div class={styles.main}>
      {props.tabs.map( (tab) => <a class={styles.tab} href={tab.dest}> {tab.content} </a>)}
    </div>
  )
}

export default Header;
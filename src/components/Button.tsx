import type { Component } from 'solid-js';
import { Icon } from '@iconify-icon/solid';
import type { ButtonProps } from '../types';
import styles from '../styles/Button.module.css'

const Button: Component<ButtonProps> = (props) => {

  const clickHandler = (e:  MouseEvent & { currentTarget: HTMLAnchorElement; target: Element;}) => {
    e.preventDefault()
    window.open(props.link)
}

  return (
    <>
      <a
        class={styles.button}
        href={props.link}
        onClick={(e) => clickHandler(e)}
      >
        <Icon icon={props.icon}/>
        <div>
          {props.content}
        </div>
      </a>
    </>
  )
}

export default Button;
import type { Component } from 'solid-js';
import type { ButtonProps } from '../types';
import styles from './button.module.css'

const Button: Component<ButtonProps> = (props) => {

  const clickHandler = (e:  MouseEvent & { currentTarget: HTMLAnchorElement; target: Element;}) => {
    e.preventDefault()
    window.open(props.destination)
}

  return (
    <>
      <a
        class={styles.button}
        href='#'
        onClick={(e) => clickHandler(e)}
      >
        <div>
          {props.content}
        </div>
      </a>
    </>
  )
}

export default Button;
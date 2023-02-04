import { Component, createSignal } from 'solid-js';
import type { ResumeOverlayProps } from '../types';
import styles from '../styles/ResumeOverlay.module.css';

const ResumeOverlay: Component<ResumeOverlayProps> = (props) => {
  const [visible, setVisible] = createSignal(false);

  const handleButtonClick = (e: MouseEvent & {currentTarget: HTMLDivElement; target: Element;}) => {
    e.preventDefault();
    console.log(visible())
    setVisible( () => !visible())
  }

  return(
    <>
    {visible()
    ? <div class={styles.overlay}>
        <div class={styles.closebutton} onclick={(e) => handleButtonClick(e)}>
          X
        </div>
        <object data={props.file} class={styles.resume} type='application/pdf'></object>
      </div>
    : <div class={styles.container}>
        <div class={styles.button} onclick={(e) => handleButtonClick(e)}>
          {props.buttontext}
        </div>
      </div>
    }
    </> 
  )
}

export default ResumeOverlay;
import { Component, createSignal } from 'solid-js';
import type { CardCarouselProps } from '../types';
import ProjectCard from './ProjectCard';
import styles from '../styles/CardCarousel.module.css';

const CardCarousel: Component<CardCarouselProps> = (props) => {
  const [focused, setFocused] = createSignal(0);
  const [prev, setPrev] = createSignal(props.cards.length-1);
  const [next, setNext] = createSignal(1);

  const cycleBack = (e:  MouseEvent & { currentTarget: HTMLAnchorElement; target: Element;}) => {
    e.preventDefault();
  };

  const cycleForward = (e:  MouseEvent & { currentTarget: HTMLAnchorElement; target: Element;}) => {
    e.preventDefault();
  };

  return (
    <>
      <div class={styles.button} onClick={(e) => cycleBack}>
        &#2303;
      </div>
      <div class={styles.unfocused}>
        <ProjectCard
          link={props.cards[prev()].link} 
          description={props.cards[prev()].description} 
          buttonText={props.cards[prev()].buttonText} 
          title={props.cards[prev()].title}
          />
      </div>
      <div class={styles.focused}>
        <ProjectCard
          link={props.cards[focused()].link} 
          description={props.cards[focused()].description} 
          buttonText={props.cards[focused()].buttonText} 
          title={props.cards[focused()].title}
          />
      </div>
      <div class={styles.unfocused} onClick={ (e) => cycleForward}>
        <ProjectCard
          link={props.cards[next()].link} 
          description={props.cards[next()].description} 
          buttonText={props.cards[next()].buttonText} 
          title={props.cards[next()].title}
          />
      </div>
      <div class={styles.button}>
        &#2304;
      </div>
    </>
  )
}
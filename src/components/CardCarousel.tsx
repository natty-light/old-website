import { Component, createSignal } from 'solid-js';
import { CardCarouselProps, CardCarouselNode, ProjectCardProps } from '../types';
import ProjectCard from './ProjectCard';
import styles from '../styles/CardCarousel.module.css';

const generateLinkedList = (cards: ProjectCardProps[]): CardCarouselNode => {
  const nodes: CardCarouselNode[] = cards.map((card) => new CardCarouselNode(card))
  nodes.forEach( (node, i) => {
    node.next = i === nodes.length - 1 ? nodes[0] : nodes[i + 1];
    node.prev = i === 0 ? nodes[nodes.length - 1] : nodes[i - 1];
  });
  return nodes[0];
}

const CardCarousel: Component<CardCarouselProps> = (props) => {
  const head: CardCarouselNode = generateLinkedList(props.cards)
  const [focused, setFocused] = createSignal<CardCarouselNode>(head);
  const [prev, setPrev] = createSignal<CardCarouselNode>(head.prev);
  const [next, setNext] = createSignal<CardCarouselNode>(head.next);

  const cycleForward = (e: MouseEvent & {currentTarget: HTMLDivElement; target: Element;}) => {
    e.preventDefault();
    const ptr: CardCarouselNode = focused();
    if (ptr && ptr.next && ptr.prev) {
      setFocused(ptr.prev);
      setPrev(focused().prev);
      setNext(focused().next);
    }
  };

  const cycleBack = (e: MouseEvent & {currentTarget: HTMLDivElement; target: Element;}) => {
    e.preventDefault();
    const ptr: CardCarouselNode = focused();
    if (ptr && ptr.next && ptr.prev) {
      setFocused(ptr.next);
      setPrev(focused().prev);
      setNext(focused().next);
    }
  };

  return (
    <>
      <h3 class={styles.header}>
        {props.header}
      </h3>
      <div class={styles.container}>
        <div class={styles.button} onClick={(e) => cycleBack(e)}>
          &#x2303; &#x2303; &#x2303;
        </div>
        <div class={styles.unfocused}>
          <ProjectCard
            link={prev().card.link}
            description={prev().card.description}
            buttonText={prev().card.buttonText} 
            title={prev().card.title}
            />
        </div>
        <div class={styles.focused}>
          <ProjectCard
            link={focused().card.link} 
            description={focused().card.description} 
            buttonText={focused().card.buttonText} 
            title={focused().card.title}
            />
        </div>
        <div class={styles.unfocused}>
          <ProjectCard
            link={next().card.link} 
            description={next().card.description} 
            buttonText={next().card.buttonText} 
            title={next().card.title}
            />
        </div>
        <div class={styles.button} onClick={ (e) => cycleForward(e)}>
          &#x2304; &#x2304; &#x2304;
        </div>
      </div>
    </>
  )
}

export default CardCarousel;
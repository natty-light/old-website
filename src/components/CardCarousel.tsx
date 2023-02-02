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

  const cycleBack = (e: MouseEvent & {currentTarget: HTMLDivElement; target: Element;}) => {
    e.preventDefault();
    const ptr: CardCarouselNode = focused();
    if (ptr && ptr.next && ptr.prev) {
      setFocused(ptr.prev);
    }
  };

  const cycleForward = (e: MouseEvent & {currentTarget: HTMLDivElement; target: Element;}) => {
    e.preventDefault();
    const ptr: CardCarouselNode = focused();
    if (ptr && ptr.next && ptr.prev) {
      setFocused(ptr.next);
    }
  };

  return (
    <div class={styles.main}>
      <h3 class={styles.header}>
        {props.header}
      </h3>
      <div class={styles.button} onClick={(e) => cycleBack(e)}>
        &#x2303; &#x2303; &#x2303;
      </div>
      <div class={styles.container}>
        <div class={styles.unfocusedtop}>
          <ProjectCard
            link={focused().prev.card.link}
            description={focused().prev.card.description}
            buttonText={focused().prev.card.buttonText} 
            title={focused().prev.card.title}
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
        <div class={styles.unfocusedbottom}>
          <ProjectCard
            link={focused().next.card.link} 
            description={focused().next.card.description} 
            buttonText={focused().next.card.buttonText} 
            title={focused().next.card.title}
            />
        </div>
      </div>
      <div class={styles.button} onClick={ (e) => cycleForward(e)}>
        &#x2304; &#x2304; &#x2304;
      </div>
    </div>
  )
}

export default CardCarousel;
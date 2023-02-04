export interface FooterProps {
  header: string;
  buttons: ButtonProps[];
}
export interface ButtonProps {
  link: string;
  content: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

export interface CardCarouselProps {
  header: string;
  cards: ProjectCardProps[]
}

export class CardCarouselNode {

  card: ProjectCardProps;
  next: CardCarouselNode;
  prev: CardCarouselNode;

  constructor(card: ProjectCardProps) {
    this.card = card;
    this.next=this.prev=this;
  }
}

export interface ResumeOverlayProps {
  file: string;
  buttontext: string;
}
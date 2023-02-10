export type FooterProps = {
  header: string;
  buttons: ButtonProps[];
}
export type ButtonProps = {
  link: string;
  content: string;
  icon: string;
}

export type ProjectCardProps = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

export type CardCarouselProps = {
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

export type ResumeOverlayProps = {
  file: string;
  buttontext: string;
}

export type HeaderProps = {
  tabs: HeaderTab[];
}

export type HeaderTab = {
  content: string;
  dest: string;
}
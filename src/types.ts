import type ProjectCard from './components/ProjectCard';

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
  cards: ProjectCardProps[]
}

export interface BurgerMenuProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  color?:string
  strokeColor?:string
}

export interface IconProps {
  className?: string;
  view?:string
}
export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
export interface InputProps {
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | "email";
  id?: string;
  required?: boolean;
}

export interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export interface QuickQuestion {
  id: number;
  text: string;
}

export interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export interface BotResponses {
  hello: string;
  skills: string;
  experience: string;
  contact: string;
  projects: string;
  process: string;
  education: string;
  technologies: string;
  availability: string;
  timeline: string;
  pricing: string;
  services: string;
  default: string;
  [key: string]: string;
}
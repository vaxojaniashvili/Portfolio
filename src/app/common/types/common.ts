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
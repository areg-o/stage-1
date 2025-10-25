import type { JSX } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

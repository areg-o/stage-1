import type { PropsWithChildren } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: PropsWithChildren;
}

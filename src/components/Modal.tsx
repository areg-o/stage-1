import { createPortal } from "react-dom";

import type { ModalProps } from "@/types";

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-btn">
        <img onClick={onClose} src="public/x.svg" alt="x" />
      </div>
      <div className="modal-content">{children}</div>
    </div>,
    document.body
  );
}

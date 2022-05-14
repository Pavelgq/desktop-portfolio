import { ModalProps } from "./Modal.props";

import styles from './Modal.module.css';
import { useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../assets/svg/icons/close.svg";
import { HTag } from "../HTag/HTag";
import cn from "classnames";
export const Modal = ({
  visible = false,
  title = '',
  content = '',
  footer = '',
  onClose,
}: ModalProps) => {

  
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })
  if (!visible) return null
  return (
    <div className={styles.modal}>
    <div className={styles.hat} onClick={onClose}>
      <div className={styles.hatMenu}>
          <button
            className={cn(styles.hatButton, styles.close)}
            onClick={onClose}
            aria-label="Закрыть окно"
          >
            <CloseIcon />
          </button>
        </div>
        <div className={styles.hatHeader}>
          <HTag tag="h4">{title}</HTag>
        </div>

    </div>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
          <div className='modal-content'>{content}</div>
        {footer && <div className='modal-footer'>{footer}</div>}
      </div>
    </div>
  )
}
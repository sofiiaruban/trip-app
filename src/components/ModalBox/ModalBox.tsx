import { FC, MouseEventHandler, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'
import styles from './ModalBox.module.css'

interface ModalProps {
  isOpen: boolean
  children: ReactNode
  closeModal: MouseEventHandler<HTMLElement>
}

const ModalBox: FC<ModalProps> = ({ isOpen, children, closeModal }) => {
  if (!isOpen) return null

  const modalBoxPropagationHandle: MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    event.stopPropagation()
  }

  return createPortal(
    <div onClick={closeModal} className={styles.modalOverlay}>
      <div
        onClick={modalBoxPropagationHandle}
        className={styles.modalBox}
        role="dialog"
      >
        <button onClick={closeModal} className={styles.buttonClose}>
          <IoClose />
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default ModalBox

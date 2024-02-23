import { FC, MouseEventHandler, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'
import styles from './ModalBox.module.css'
import ButtonIcon from '../Buttons/ButtonIcon'

interface ModalProps {
  title: string
  isOpen: boolean
  children: ReactNode
  closeModal: MouseEventHandler<HTMLElement> 
}

const ModalBox: FC<ModalProps> = ({ isOpen, title, children, closeModal }) => {
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
        <div className={styles.modalBoxHead}>
          <p className={styles.modalBoxTitle}>{title}</p>
          <div className={styles.buttonClose}>
            <ButtonIcon onClick={closeModal}>
              <IoClose />
            </ButtonIcon>
          </div>
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default ModalBox

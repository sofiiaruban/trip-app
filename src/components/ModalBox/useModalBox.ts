import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useEffect, useState } from 'react'

interface ModalHookReturnType {
  openModal: () => void
  closeModal: () => void
  isOpen: boolean
}

const useModal = (): ModalHookReturnType => {
  const [isOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body)

      return () => {
        enableBodyScroll(document.body)
      }
    }
  }, [isOpen])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return {
    openModal,
    closeModal,
    isOpen
  }
}

export default useModal

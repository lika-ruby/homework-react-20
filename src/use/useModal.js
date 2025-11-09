import { useState } from "react"

export const useModal = (initalValue = false) => {
    const [isOpen, setIsOpen] = useState(initalValue)
    const openModal = () => {
        if (isOpen === false) {
            setIsOpen(true)
        }
    }
    const closeModal = () => {
        if (isOpen === true) {
            setIsOpen(false)
        }
    }
    return { isOpen, openModal, closeModal }
}
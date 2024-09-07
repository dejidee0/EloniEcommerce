import React from "react"
import { Box } from "theme-ui"

type ModalProps = {
    children?: React.ReactNode | undefined;
    style: {}
}

const Modal = ({ children, style }: ModalProps) => {

    return (
        <Box style={style}>
            {children}
        </Box>
    )
}

export default Modal
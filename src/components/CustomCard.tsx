/** @jsxImportSource theme-ui */
import { Box, Card, StylePropertyValue } from "theme-ui"

type CustomCardProps = {
    children: any
    width?: string | number
    height?: string | number
}

const CustomCard = ({ children, width = 'auto', height = 'auto' }: CustomCardProps) => {

    return (
        <Card py={'1.5rem'} px={'1.5rem'} style={{ boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.03)', background: 'white', width: width, height: height, borderRadius: '0.75rem' }}>
            {children}
        </Card>
    )
}

export default CustomCard
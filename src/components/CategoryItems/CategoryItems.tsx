/** @jsxImportSource theme-ui */
import { IonIcon } from "@ionic/react"
import { useState } from "react"
import { Box, Button, Paragraph } from "theme-ui"
import CategorySubitems from "../CategorySubitems/CategorySubitems"

type CategoryItemsProps = {
  image: string
  name: string
  addOutline: string
  subItems: {
    item: string;
    price: number;
  }[] | {
    item: string;
    price: string;
  }[]
}

const capitalizeFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const CategoryItems = (props: CategoryItemsProps) => {
  const { image, name, addOutline, subItems } = props
  const [visibility, setVisibiilty] = useState(false)

  const handleSubItems = () => {
    setVisibiilty(!visibility)
  }

  return (

    <li sx={{ 
        listStyleType: 'none', 
        height: visibility ? 'auto' : '40.66px',
        transition: "height 0.3s ease-in-out",
        overflow: 'hidden'
        }}>
      <Button
        onClick={handleSubItems}
        sx={{
          width: '100%',
          display: 'flex',
          padding: '7px 0',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          font: 'inherit'
        }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <img src={image} height={20} width={20} />
          <Paragraph
            sx={{
              fontSize: '0.941rem',
              color: '#0f1111',
              fontWeight: '500'
            }}>{capitalizeFirstLetter(name)}</Paragraph>
        </Box>
        <Box>
          <IonIcon icon={addOutline} role="img" aria-label="add outline"
            sx={{
              color: '#000',
              padding: '1',
              marginTop: 3,
              fontSize: 14,
              '--ionicon-stroke-width': '70px'
            }}
          />
        </Box>
      </Button>
      <CategorySubitems visibility={visibility} subItems={subItems} />
    </li>
  )
}

export default CategoryItems

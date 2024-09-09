/** @jsxImportSource theme-ui */

import { Link, Paragraph } from "theme-ui";

type CategoryItemsProps = {
 visibility: boolean
 subItems: {
  item: string;
  price: number;
  stockQuantity: string
 }[] | {
  item: string;
  price: string;
  stockQuantity: string
 }[]
}

const CategorySubitems = (props: CategoryItemsProps) => {
 const { visibility, subItems } = props

 return (
  <>
   {
    visibility && (
     <ul sx={{
      borderTop: '1px solid #ededed',
      maxHeight: '112px',
      padding: '13px 0 8px',
      transition: '0.5s ease-in-out',
      visibility: visibility ? 'visible' : 'hidden',
      overflow: 'hidden'
     }}>
      {
       subItems.map((subItem, index: number) => (
        <li sx={{ listStyleType: 'none', height: '40.66px' }} key={index}>
         <Link
          href="#"
          sx={{
           width: '100%',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-between',
           cursor: 'pointer',
           fontSize: '0.875rem',
           padding: '2px 0',
           color: '#0f1111',
           textDecoration: 'none'
          }}
         >
          <Paragraph
           sx={{
            fontSize: '0.941rem',
            color: '#0f1111',
            fontWeight: '500',
            textTransform: 'capitalize'
           }}
          >
           {subItem.productName}
          </Paragraph>
          <data>{subItem.stockQuantity}</data>
         </Link>
        </li>
       ))
      }
     </ul>
    )
   }
  </>
 )
}

export default CategorySubitems
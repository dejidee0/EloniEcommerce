/** @jsxImportSource theme-ui */

import { SubItem } from "@/type/SubItem";
import { Link, Paragraph } from "theme-ui";
import { Helmet } from 'react-helmet-async';

type CategoryItemsProps = {
 visibility: boolean
 subItems: SubItem[]
}

const CategorySubitems = (props: CategoryItemsProps) => {
 const { visibility, subItems } = props

 return (
  <>
  {/* Helmet for SEO optimization */}
<Helmet>
    <meta name="description" content="Shop from a wide selection of subcategories in electronics, fashion, home essentials, and more at EloniEcommerce. Find the right products tailored to your needs." />
    <meta name="keywords" content="EloniEcommerce, subcategories, electronics, fashion, home goods, online store, ecommerce, top brands, shop now" />
    <meta property="og:title" content="Discover Subcategories | EloniEcommerce" />
    <meta property="og:description" content="Explore a variety of product subcategories at EloniEcommerce, from electronics to fashion and more. Get the best products delivered fast!" />
</Helmet>

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
/** @jsxImportSource theme-ui */
import dress from '@/assets/dress.png';
import { theme } from '@/Theme/theme';
import { Box, Link } from 'theme-ui';
// import { Link } from 'react-router-dom';

const category = [
 {
  id: 1,
  categoryImage: dress,
  categoryTitle: 'DRESS',
  categoryItemAmount: 600,
  categoryButton: 'Show All'
 },
 {
  id: 2,
  categoryImage: dress,
  categoryTitle: 'DRESS',
  categoryItemAmount: 600,
  categoryButton: 'Show All'
 },
 {
  id: 3,
  categoryImage: dress,
  categoryTitle: 'DRESS',
  categoryItemAmount: 600,
  categoryButton: 'Show All'
 },
 {
  id: 4,
  categoryImage: dress,
  categoryTitle: 'DRESS',
  categoryItemAmount: 600,
  categoryButton: 'Show All'
 },
 {
  id: 5,
  categoryImage: dress,
  categoryTitle: 'DRESS',
  categoryItemAmount: 600,
  categoryButton: 'Show All'
 },
 {
  id: 6,
  categoryImage: dress,
  categoryTitle: 'DRESS',
  categoryItemAmount: 600,
  categoryButton: 'Show All'
 },
 {
  id: 7,
  categoryImage: dress,
  categoryTitle: 'DRESS',
  categoryItemAmount: 600,
  categoryButton: 'Show All'
 },
 {
  id: 8,
  categoryImage: dress,
  categoryTitle: 'DRESS',
  categoryItemAmount: 600,
  categoryButton: 'Show All'
 },
]

const ShowAll = () => {

 return (
  <Box sx={{
   ...theme.categoryStyles.category
  }}>

   <Box sx={{ ...theme.categoryStyles.container }}>
    <Box sx={{
     ...theme.categoryStyles.categoryItemContainer
    }}
    >
     {
      category.map(el => (
       <Box
        sx={{ ...theme.categoryStyles.categoryItem }}
       >
        <Box sx={{ ...theme.categoryStyles.categoryImgBox }}>
         <img src={el.categoryImage} alt="" sx={{ width: 30, }} />
        </Box>

        <Box sx={{ ...theme.categoryStyles.categoryContentBox }}>
         <Box sx={{ ...theme.categoryStyles.categoryContentFlex }}>
          <h3 sx={{ ...theme.categoryStyles.categoryItemTitle }}>{el.categoryTitle}</h3>
          <p sx={{ ...theme.categoryStyles.categoryItemAmount }}>{`(${el.categoryItemAmount})`}</p>
         </Box>
         <Link href="#" sx={{ ...theme.categoryStyles.categoryBtn }}>{el.categoryButton}</Link>
        </Box>
       </Box>
      ))
     }


     <Box
      sx={{ ...theme.categoryStyles.categoryItem }}
     >
      <Box sx={{ ...theme.categoryStyles.categoryImgBox }}>
       <img src={dress} alt="" sx={{ width: 30, }} />
      </Box>

      <Box sx={{ ...theme.categoryStyles.categoryContentBox }}>
       <Box sx={{ ...theme.categoryStyles.categoryContentFlex }}>
        <h3 sx={{ ...theme.categoryStyles.categoryItemTitle }}>DRESS</h3>
        <p sx={{ ...theme.categoryStyles.categoryItemAmount }}>(600)</p>
       </Box>
       <Link href="#" sx={{ ...theme.categoryStyles.categoryBtn }}>Show all</Link>
      </Box>
     </Box>

     <Box
      sx={{ ...theme.categoryStyles.categoryItem }}
     >
      <Box sx={{ ...theme.categoryStyles.categoryImgBox }}>
       <img src={dress} alt="" sx={{ width: 30, }} />
      </Box>

      <Box sx={{ ...theme.categoryStyles.categoryContentBox }}>
       <Box sx={{ ...theme.categoryStyles.categoryContentFlex }}>
        <h3 sx={{ ...theme.categoryStyles.categoryItemTitle }}>DRESS</h3>
        <p sx={{ ...theme.categoryStyles.categoryItemAmount }}>(600)</p>
       </Box>
       <Link href="#" sx={{ ...theme.categoryStyles.categoryBtn }}>Show all</Link>
      </Box>
     </Box>
    </Box>
   </Box>

  </Box>
 )
}

export default ShowAll
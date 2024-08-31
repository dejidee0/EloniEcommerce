/** @jsxImportSource theme-ui */
import { Box, Grid, Card, Text, Image } from 'theme-ui';

const AboveFooterSection = () => {
  const articles = [
    {
      category: 'Fashion',
      title: 'Fashion Retail KPIs Guide for Clothes Executives',
      author: 'Mr Sophia Anderson',
      date: 'Aug 20, 2023',
      imgSrc: 'https://monkshop.vercel.app/assets/images/blog-1.jpg',
    },
    {
      category: 'Clothes',
      title: 'Clothing Executives\' 2023 Guide to 3 Essential',
      author: 'Mr William Carter',
      date: 'Jun 15, 2023',
      imgSrc: 'https://monkshop.vercel.app/assets/images/blog-2.jpg',
    },
    {
      category: 'Shoes',
      title: 'Affordable Quality Shoe Buying Guide',
      author: 'Mr Victoria Thompson',
      date: 'Feb 16, 2023',
      imgSrc: 'https://monkshop.vercel.app/assets/images/blog-3.jpg',
    },
    {
      category: 'Electronics',
      title: 'Best Electronics Products Ultimate Guide.',
      author: 'Mr Olivia Bennett',
      date: 'Mar 25, 2023',
      imgSrc: 'https://monkshop.vercel.app/assets/images/blog-4.jpg',
    },
  ];

  return (
    <Box sx={{ backgroundColor: 'white', py: 4 }}>
      <Grid columns={[1, 2, 4]} gap={4}>
        {articles.map((article, index) => (
          <Card key={index} sx={{ p: 3, textAlign: 'center' }}>
            <Image src={article.imgSrc} sx={{ borderRadius: 4, mb: 3 }} />
            <Text sx={{ color: 'red', fontWeight: 'bold' }}>{article.category}</Text>
            <Text as="h3" sx={{ my: 2, fontSize: 2, color: 'black' }}>{article.title}</Text>
            <Text sx={{ color: 'black', fontSize: 1 }}>
              By {article.author} / {article.date}
            </Text>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default AboveFooterSection;

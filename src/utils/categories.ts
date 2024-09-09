import dress from "@/assets/dress.png"
import bag from '@/assets/bag.png'
import glasses from '@/assets/glasses.png'
import cosmetics from '@/assets/cosmetics.png'
import perfume from '@/assets/perfume.png'
import jewelry from '@/assets/jewelry.png'
import shoe from '@/assets/shoes.png'

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebaseConfig'; // Import your Firebase configuration

// Function to fetch products by category name from Firestore
export const fetchProductsByCategory = async (categoryName) => {
  let productList = []; // List to store all product data

  try {
    const productsRef = collection(db, 'products'); // Reference to the 'products' collection
    const q = query(productsRef, where('productCategory', '==', categoryName)); // Query to filter by category

    const querySnapshot = await getDocs(q); // Get documents based on the category query

    querySnapshot.forEach((doc) => {
      productList.push({
        id: doc.id,
        ...doc.data(), // Spread the document data
        subcategory: doc.data().subcategory // Assuming 'subcategory' is a field in your product document
      });
    });

  } catch (err) {
    console.error('Error fetching products by category:', err);
  }
  console.log(productList);
  return productList; // Return the list containing all products of the specified category
};



const Categories = [
 {
  image: dress,
  name: 'Clothes',
  subItems: fetchProductsByCategory('Clothes')
 },
 {
  image: bag,
  name: 'Bags',
  subItems: fetchProductsByCategory('Bags')
 },
 {
  image: glasses,
  name: 'Glasses',
  subItems: fetchProductsByCategory('Glasses')
 },
 {
  image: cosmetics,
  name: 'Cosmetics',
  subItems: fetchProductsByCategory('Cosmetics')
 },
 {
  image: perfume,
  name: 'Perfume',
  subItems: fetchProductsByCategory('perfume')
 },
 {
  image: jewelry,
  name: 'Jewelry',
  subItems: fetchProductsByCategory('Jewelry')
 },
 {
  image: shoe,
  name: 'footwear',
  subItems: fetchProductsByCategory('footwear')
 },
]

export default Categories;
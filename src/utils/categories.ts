import { addOutline } from "ionicons/icons";
import dress from "@/assets/dress.png"
import bag from '@/assets/bag.png'
import glasses from '@/assets/glasses.png'
import cosmetics from '@/assets/cosmetics.png'
import perfume from '@/assets/perfume.png'
import jewelry from '@/assets/jewelry.png'
import shoe from '@/assets/shoes.png'

const categories = [
 {
  image: dress,
  name: 'Clothes',
  addOutline: addOutline,
  subItems: [
   {
    item: 'Shirt',
    price: 300
   },
   {
    item: 'Short & Jeans',
    price: 60
   },
   {
    item: 'Jacket',
    price: 50
   },
   {
    item: 'Dress & Frock',
    price: 87
   },
  ]
 },
 {
  image: bag,
  name: 'Bags',
  addOutline: addOutline,
  subItems: [
   {
    item: 'Clothes Perfume',
    price: '12pcs'
   },
   {
    item: 'Deodorant',
    price: '60pcs'
   },
   {
    item: 'Jacket',
    price: '50pcs'
   },
   {
    item: 'Dress & Frock',
    price: '87pcs'
   },
  ]
 },
 {
  image: glasses,
  name: 'Glasses',
  addOutline: addOutline,
  subItems: [
   {
    item: 'Clothes Perfume',
    price: '12pcs'
   },
   {
    item: 'Deodorant',
    price: '60pcs'
   },
   {
    item: 'Jacket',
    price: '50pcs'
   },
   {
    item: 'Dress & Frock',
    price: '87pcs'
   },
  ]
 },
 {
  image: cosmetics,
  name: 'Cosmetics',
  addOutline: addOutline,
  subItems: [
   {
    item: 'Clothes Perfume',
    price: '12pcs'
   },
   {
    item: 'Deodorant',
    price: '60pcs'
   },
   {
    item: 'Jacket',
    price: '50pcs'
   },
   {
    item: 'Dress & Frock',
    price: '87pcs'
   },
  ]
 },
 {
  image: perfume,
  name: 'Perfume',
  addOutline: addOutline,
  subItems: [
   {
    item: 'Clothes Perfume',
    price: '12pcs'
   },
   {
    item: 'Deodorant',
    price: '60pcs'
   },
   {
    item: 'Jacket',
    price: '50pcs'
   },
   {
    item: 'Dress & Frock',
    price: '87pcs'
   },
  ]
 },
 {
  image: jewelry,
  name: 'Jewelry',
  addOutline: addOutline,
  subItems: [
   {
    item: 'Earrings',
    price: 46
   },
   {
    item: 'Couple Rings',
    price: 73
   },
   {
    item: 'Necklace',
    price: 61
   },
  ]
 },
 {
  image: shoe,
  name: 'footwear',
  addOutline: addOutline,
  subItems: [
   {
    item: 'Sports',
    price: 45
   },
   {
    item: 'Formal',
    price: 75
   },
   {
    item: 'Casual',
    price: 35
   },
   {
    item: 'Safety Shoes',
    price: 26
   },
  ]
 },
]

export default categories
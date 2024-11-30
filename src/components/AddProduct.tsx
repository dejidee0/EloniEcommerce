/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsxImportSource theme-ui */
import { Box, Message, Text, Flex } from '@theme-ui/components';
import { Heading } from 'theme-ui';
import React, { useEffect, useRef, useState } from 'react';
import { db, storage } from '@/firebaseConfig/firebaseConfig'; // Adjust the import path as needed
import { addDoc, collection } from 'firebase/firestore';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { firebaseErrorMessages } from '@/firebaseConfig/firebaseErrors';
import { FirebaseError } from '@/type/FirebaseError';
import CustomCard from './CustomCard';
import AdminHeader from './AdminHeader';
import ProductInformation from './ProductInfomation';
import PricingDetails from './PricingDetails';
import ProductCard from './ProductCard';

// Define categories with subitems
// const categories = [
//   { name: 'Clothes', subItems: ['Shirt', 'Shorts & Jeans', 'Jacket', 'Dress & Frock'] },
//   { name: 'Footwear', subItems: ['Sports', 'Formal', 'Casual', 'Safety Shoes'] },
//   { name: 'Jewelry', subItems: ['Earrings', 'Couple Rings', 'Necklace'] },
//   { name: 'Perfume', subItems: ['Clothes Perfume', 'Deodorant'] },
//   { name: 'Cosmetics', subItems: ['Shampoo', 'Sunscreen', 'Body Wash', 'Makeup Kit'] },
//   { name: 'Glasses', subItems: ['Sunglasses', 'Lenses'] },
//   { name: 'Bags', subItems: ['Shopping Bag', 'Gym Backpack', 'Purse', 'Wallet'] },
// ];

// Form validation schema
const validationSchema = Yup.object({
  productName: Yup.string().required('Product Name is required'),
  productDescription: Yup.string()
    .required('Product Description is required')
    .max(500, 'Max 500 characters allowed'),
  price: Yup.number()
    .typeError('Price must be a number')
    .required('Price is required')
    .positive('Price must be positive'),
  discount: Yup.number()
    .typeError('Discount must be a number')
    .positive('Discount must be positive')
    .nullable(),
  stockQuantity: Yup.number()
    .typeError('Stock Quantity must be a number')
    .positive('Stock Quantity must be positive')
    .nullable(),
  sku: Yup.string().nullable(),
  productVariants: Yup.string().nullable(),
  tags: Yup.string().nullable(),
  shippingInfo: Yup.string().nullable(),

  topSelection: Yup.string()
    .oneOf(['isTopRated', 'isTrending', 'isLatest'], 'Invalid selection')
    .nullable(),

  adminName: Yup.string().nullable(),
  seoTitle: Yup.string().nullable(),
  seoDescription: Yup.string().nullable(),
  seoKeywords: Yup.string().nullable(),
  productImages: Yup.array()
    .of(Yup.mixed())
    .min(1, 'At least one image is required')
    .required('At least one image is required'),
});

const AddProduct: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubItem, setSelectedSubItem] = useState<string>('');
  const [, setImagePreviews] = useState<string[]>([]);
  const [, setUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const formik = useFormik({
    initialValues: {
      productName: '',
      productDescription: '',
      price: '',
      discount: '',
      stockQuantity: '',
      sku: '',
      productVariants: '',
      tags: '',
      topSelection: '',
      status: false,
      shippingInfo: '',
      adminName: '',
      seoTitle: '',
      seoDescription: '',
      seoKeywords: '',
      productImages: [] as File[],
      productCategory: '',  // Fixed missing category
      productSubCategory: '',  // Fixed missing subcategory
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setUploading(true);
      try {
        const imageUrls = await uploadImages(values.productImages);
        await handleSubmit(values, imageUrls, resetForm);
      } catch (error) {
        console.log('error', error);

        if (typeof error === 'object' || error !== null || 'code' in error) {
          const firebaseError = error as FirebaseError
          const errorMessage = firebaseErrorMessages[firebaseError.code] || firebaseErrorMessages.default
          setErrorMessage(errorMessage); // Set the error message from Firebase
        }
      } finally {
        setUploading(false);
      }
    },
  });

  // const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedCategory(event.target.value);
  //   setSelectedSubItem('');
  //   formik.setFieldValue('productCategory', event.target.value);
  // };

  // const handleSubItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedSubItem(event.target.value);
  //   formik.setFieldValue('productSubCategory', event.target.value);
  // };

  // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files) {
  //     const files = Array.from(event.target.files);
  //     const imageUrls = files.map((file) => URL.createObjectURL(file));

  //     setImagePreviews(imageUrls);
  //     formik.setFieldValue('productImages', files);
  //   }
  // };

  const uploadImages = async (files: File[]): Promise<string[]> => {
    const uploadPromises = files.map(async (file) => {
      const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      return await getDownloadURL(storageRef);
    });
    return Promise.all(uploadPromises);
  };

  const handleSubmit = async (
    values: typeof formik.initialValues,
    imageURLs: string[],
    resetForm: () => void
  ) => {
    const productData = {
      ...values,
      productCategory: selectedCategory,
      productSubCategory: selectedSubItem,
      productImages: imageURLs,
    };

    try {
      await addDoc(collection(db, 'products'), productData);
      resetForm();
      setSelectedCategory('');
      setSelectedSubItem('');
      setImagePreviews([]);
    } catch (error: unknown) {
      if (typeof error === 'object' || error !== null || 'code' in error) {
        const firebaseError = error as FirebaseError
        const errorMessage = firebaseErrorMessages[firebaseError.code] || firebaseErrorMessages.default
        setErrorMessage(errorMessage); // Set the error message from Firebase
      }
    }
  };

  // const selectedCategoryObj = categories.find((cat) => cat.name === selectedCategory);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setErrorMessage(null); // Set the error message from Firebase
    }, 5000)

    return () => clearTimeout(timerId)
  }, [errorMessage])

  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e: { preventDefault: () => void; stopPropagation: () => void; type: string; }) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: { preventDefault: () => void; stopPropagation: () => void; dataTransfer: { files: any; }; }) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleChange = (e: { preventDefault: () => void; target: { files: any; }; }) => {
    e.preventDefault();
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files: any) => {
    // Handle your file upload logic here
    console.log("Files to upload:", files);
  };

  const onButtonClick = () => {
    if(inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      {errorMessage && (
        <Message variant="danger" sx={{
          width: 'fit-content',
          maxWidth: '80%',
          zIndex: 1,
          right: 0,
          top: 0,
          position: 'absolute',
          borderRadius: '4px',
          padding: '8px 16px',
          backgroundColor: 'red',
          color: 'white',
          transition: '0.2s ease-in',
          borderLeftColor: 'none'
        }}>
          {errorMessage}
        </Message>
      )}
      <>
        <AdminHeader title="CREATE PRODUCT" />

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '15%' }}>
          <Box sx={{
            width: ['100%', null, null, '33.33%', '25%'],
          }}>
            <ProductCard />
          </Box>

          <Box sx={{
            width: ['100%', null, null, '66.67%', '75%'],
            borderBottom: '1px solid #eaedf1'
          }}>
            <CustomCard>
              <Heading>Add Product Photo</Heading>
              <form
                onDragEnter={handleDrag}
                onSubmit={(e) => e.preventDefault()}
                sx={{ width: '100%' }}
              >
                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  accept="image/png, image/jpeg, image/gif"
                  onChange={handleChange}
                  sx={{ display: 'none' }}
                />

                <Box
                  onClick={onButtonClick}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  sx={{
                    border: '2px dashed',
                    borderColor: dragActive ? 'primary' : '#d8dfe7',
                    borderRadius: 'lg',
                    p: 5,
                    textAlign: 'center',
                    bg: dragActive ? 'highlight' : 'muted',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: 'primary',
                      bg: 'highlight'
                    }
                  }}
                >
                  <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <Box sx={{ color: 'orange' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                      </svg>
                    </Box>

                    <Text sx={{ fontSize: 3, color: 'text', fontWeight: 'bold' }}>
                      Drop your images here, or{' '}
                      <Text as="span" sx={{ color: 'orange', textDecoration: 'none' }}>
                        click to browse
                      </Text>
                    </Text>

                    <Text sx={{ color: 'gray.6', fontSize: 1 }}>
                      1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
                    </Text>
                  </Flex>
                </Box>
              </form>
            </CustomCard>

            <Box marginTop={20} />
            <CustomCard>
              <ProductInformation />
            </CustomCard>

            <Box marginTop={20} />
            <CustomCard>
              <PricingDetails />
            </CustomCard>

          </Box>
        </Box>
      </>
    </>
  );
};

export default AddProduct;

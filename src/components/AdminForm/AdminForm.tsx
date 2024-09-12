/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsxImportSource theme-ui */
import { Box, Button, Input, Label, Select, Textarea, Image, Message } from '@theme-ui/components';
import { Spinner, Heading,  Radio, Checkbox } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import { db, storage } from '@/firebaseConfig/firebaseConfig'; // Adjust the import path as needed
import { addDoc, collection } from 'firebase/firestore';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { firebaseErrorMessages } from '@/firebaseConfig/firebaseErrors';
import { FirebaseError } from '@/type/FirebaseError';

// Define categories with subitems
const categories = [
  { name: 'Clothes', subItems: ['Shirt', 'Shorts & Jeans', 'Jacket', 'Dress & Frock'] },
  { name: 'Footwear', subItems: ['Sports', 'Formal', 'Casual', 'Safety Shoes'] },
  { name: 'Jewelry', subItems: ['Earrings', 'Couple Rings', 'Necklace'] },
  { name: 'Perfume', subItems: ['Clothes Perfume', 'Deodorant'] },
  { name: 'Cosmetics', subItems: ['Shampoo', 'Sunscreen', 'Body Wash', 'Makeup Kit'] },
  { name: 'Glasses', subItems: ['Sunglasses', 'Lenses'] },
  { name: 'Bags', subItems: ['Shopping Bag', 'Gym Backpack', 'Purse', 'Wallet'] },
];

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

const AdminForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubItem, setSelectedSubItem] = useState<string>('');
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
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

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setSelectedSubItem('');
    formik.setFieldValue('productCategory', event.target.value);
  };

  const handleSubItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubItem(event.target.value);
    formik.setFieldValue('productSubCategory', event.target.value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const imageUrls = files.map((file) => URL.createObjectURL(file));

      setImagePreviews(imageUrls);
      formik.setFieldValue('productImages', files);
    }
  };

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

  const selectedCategoryObj = categories.find((cat) => cat.name === selectedCategory);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setErrorMessage(null); // Set the error message from Firebase
    }, 5000)

    return () => clearTimeout(timerId)
  }, [errorMessage])

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
      <Heading sx={{ marginBottom: 20, textAlign: 'center', marginTop: 20 }}>
        Add <span sx={{ color: '#ff0000' }}>Product</span>
      </Heading>

      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            maxWidth: 600,
            mx: 'auto',
            px: 3,
            py: 4,
            bg: '#F8F8F8',
            borderRadius: 8,
            boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Product Name */}
          <Box mb={3}>
            <Label htmlFor="productName">Product Name *</Label>
            <Input
              name="productName"
              id="productName"
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.productName && formik.errors.productName && (
              <Message sx={{ color: 'red' }}>{formik.errors.productName}</Message>
            )}
          </Box>

          {/* Product Description */}
          <Box mb={3}>
            <Label htmlFor="productDescription">Product Description *</Label>
            <Textarea
              name="productDescription"
              id="productDescription"
              value={formik.values.productDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={4}
              mb={1}
            />
            <Box sx={{ fontSize: 0, color: 'gray', mb: 1 }}>
              {formik.values.productDescription.length}/500 characters
            </Box>
            {formik.touched.productDescription && formik.errors.productDescription && (
              <Box sx={{ color: 'red' }}>{formik.errors.productDescription}</Box>
            )}
          </Box>

          {/* Product Category */}
          <Box mb={3}>
            <Label htmlFor="productCategory">Product Category *</Label>
            <Select
              id="productCategory"
              value={selectedCategory}
              onChange={handleCategoryChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
            {formik.touched.productCategory && formik.errors.productCategory && (
              <Box sx={{ color: 'red' }}>{formik.errors.productCategory}</Box>
            )}
          </Box>
        
        {/* Price */}
        <Box mb={3}>
          <Label htmlFor="price">Price *</Label>
          <Input
            name="price"
            id="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb={3}
          />
          {formik.touched.price && formik.errors.price ? (
            <div sx={{ color: 'red' }}>{formik.errors.price}</div>
          ) : null}
        </Box>
        {/* Discount */}
        <Box mb={3}>
          <Label htmlFor="discount">Discount</Label>
          <Input
            name="discount"
            id="discount"
            type="number"
            value={formik.values.discount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb={3}
          />
          {formik.touched.discount && formik.errors.discount ? (
            <div sx={{ color: 'red' }}>{formik.errors.discount}</div>
          ) : null}
        </Box>
        {/* Stock Quantity */}
        <Box mb={3}>
          <Label htmlFor="stockQuantity">Stock Quantity</Label>
          <Input
            name="stockQuantity"
            id="stockQuantity"
            type="number"
            value={formik.values.stockQuantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb={3}
          />
          {formik.touched.stockQuantity && formik.errors.stockQuantity ? (
            <div sx={{ color: 'red' }}>{formik.errors.stockQuantity}</div>
          ) : null}
        </Box>
        {/* SKU */}
        <Box mb={3}>
          <Label htmlFor="sku">SKU</Label>
          <Input
            name="sku"
            id="sku"
            value={formik.values.sku}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb={3}
          />
          {formik.touched.sku && formik.errors.sku ? (
            <div sx={{ color: 'red' }}>{formik.errors.sku}</div>
          ) : null}
        </Box>
        {/* Product Variants */}
        <Box mb={3}>
          <Label htmlFor="productVariants">Product Variants</Label>
          <Input
            name="productVariants"
            id="productVariants"
            value={formik.values.productVariants}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb={3}
          />
          {formik.touched.productVariants && formik.errors.productVariants ? (
            <div sx={{ color: 'red' }}>{formik.errors.productVariants}</div>
          ) : null}
        </Box>
        {/* Tags */}
        <Box mb={3}>
          <Label htmlFor="tags">Tags</Label>
          <Input
            name="tags"
            id="tags"
            value={formik.values.tags}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb={3}
          />
          {formik.touched.tags && formik.errors.tags ? (
            <div sx={{ color: 'red' }}>{formik.errors.tags}</div>
          ) : null}
        </Box>
        {/* Shipping Information */}
        <Box mb={3}>
          <Label htmlFor="shippingInfo">Shipping Information</Label>
          <Textarea
            name="shippingInfo"
            id="shippingInfo"
            value={formik.values.shippingInfo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={4}
            mb={3}
          />
          {formik.touched.shippingInfo && formik.errors.shippingInfo ? (
            <div sx={{ color: 'red' }}>{formik.errors.shippingInfo}</div>
          ) : null}
        </Box>
        {/* Admin Name */}
        <Box mb={3}>
          <Label htmlFor="adminName">Admin Name</Label>
          <Input
            name="adminName"
            id="adminName"
            value={formik.values.adminName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb={3}
          />
          {formik.touched.adminName && formik.errors.adminName ? (
            <div sx={{ color: 'red' }}>{formik.errors.adminName}</div>
          ) : null}
        </Box>
        {/* SEO Title */}
        <Box mb={3}>
          <Label htmlFor="seoTitle">SEO Title</Label>
          <Input
            name="seoTitle"
            id="seoTitle"
            value={formik.values.seoTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb={3}
          />
          {formik.touched.seoTitle && formik.errors.seoTitle ? (
            <div sx={{ color: 'red' }}>{formik.errors.seoTitle}</div>
          ) : null}
        </Box>
       


        {/* SEO Description */}
        <Box mb={3}>
          <Label htmlFor="seoDescription">SEO Description</Label>
          <Textarea
            name="seoDescription"
            id="seoDescription"
            value={formik.values.seoDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={4}
            mb={3}
          />
          {formik.touched.seoDescription && formik.errors.seoDescription ? (
            <div sx={{ color: 'red' }}>{formik.errors.seoDescription}</div>
          ) : null}
        </Box>
        {/* SEO Keywords */}
        <Box mb={3}>
          <Label htmlFor="seoKeywords">SEO Keywords</Label>
          <Input
            name="seoKeywords"
            id="seoKeywords"
            value={formik.values.seoKeywords}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb={3}
          />
          {formik.touched.seoKeywords && formik.errors.seoKeywords ? (
            <div sx={{ color: 'red' }}>{formik.errors.seoKeywords}</div>
          ) : null}
        </Box>
         {/* Top Selection */}
         <Box mb={3}>
          <Label htmlFor="TopSelection">Top Selection</Label>
          <Box sx={{
            display: 'flex', 
          }}>
             <Label sx={{cursor: 'pointer'}}>
            <Radio 
              name="topSelection"
              value="isLatest"
              checked={formik.values.topSelection === 'isLatest'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            Latest
          </Label>

          <Label sx={{cursor: 'pointer'}}>
            <Radio 
              name="topSelection"
              value="isTrending"
              checked={formik.values.topSelection === 'isTrending'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            Trending
          </Label>
          
          <Label sx={{cursor: 'pointer'}}>
            <Radio 
              name="topSelection"
              value="isTopRated"
              checked={formik.values.topSelection === 'isTopRated'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            Top Rated
          </Label>
          </Box>
          </Box>
        {/* Product Images */}
        <Box mb={3}>
          <Label htmlFor="productImages">Product Images *</Label>
          <Input
            type="file"
            id="productImages"
            name="productImages"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            mb={3}
          />
          {formik.touched.productImages && formik.errors.productImages ? (
            // @ts-ignore
            <div sx={{ color: 'red' }}>{formik?.errors?.productImages}</div>
          ) : null}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {imagePreviews.map((preview, index) => (
              <Image
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                sx={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 4 }}
              />
            ))}
          </Box>
        </Box>
        {/* Status */}
        <Box mb={3}>
          <Label>
            <Checkbox
              name="status"
              checked={formik.values.status}
            />
            </Label>
          {/* Product Sub Category */}
          {selectedCategory && (
            <Box mb={3}>
              <Label htmlFor="productSubCategory">Product Sub Category *</Label>
              <Select
                id="productSubCategory"
                value={selectedSubItem}
                onChange={handleSubItemChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Sub Category</option>
                {selectedCategoryObj?.subItems.map((subItem) => (
                  <option key={subItem} value={subItem}>
                    {subItem}
                  </option>
                ))}
              </Select>
              {formik.touched.productSubCategory && formik.errors.productSubCategory && (
                <Box sx={{ color: 'red' }}>{formik.errors.productSubCategory}</Box>
              )}
            </Box>
          )}

          {/* Price */}
          <Box mb={3}>
            <Label htmlFor="price">Price *</Label>
            <Input
              name="price"
              id="price"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.price && formik.errors.price && (
              <Box sx={{ color: 'red' }}>{formik.errors.price}</Box>
            )}
          </Box>

          {/* Discount */}
          <Box mb={3}>
            <Label htmlFor="discount">Discount</Label>
            <Input
              name="discount"
              id="discount"
              type="number"
              value={formik.values.discount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.discount && formik.errors.discount && (
              <Box sx={{ color: 'red' }}>{formik.errors.discount}</Box>
            )}
          </Box>

          {/* Stock Quantity */}
          <Box mb={3}>
            <Label htmlFor="stockQuantity">Stock Quantity</Label>
            <Input
              name="stockQuantity"
              id="stockQuantity"
              type="number"
              value={formik.values.stockQuantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.stockQuantity && formik.errors.stockQuantity && (
              <Box sx={{ color: 'red' }}>{formik.errors.stockQuantity}</Box>
            )}
          </Box>

          {/* SKU */}
          <Box mb={3}>
            <Label htmlFor="sku">SKU</Label>
            <Input
              name="sku"
              id="sku"
              value={formik.values.sku}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.sku && formik.errors.sku && (
              <Box sx={{ color: 'red' }}>{formik.errors.sku}</Box>
            )}
          </Box>

          {/* Product Variants */}
          <Box mb={3}>
            <Label htmlFor="productVariants">Product Variants</Label>
            <Input
              name="productVariants"
              id="productVariants"
              value={formik.values.productVariants}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.productVariants && formik.errors.productVariants && (
              <Box sx={{ color: 'red' }}>{formik.errors.productVariants}</Box>
            )}
          </Box>

          {/* Tags */}
          <Box mb={3}>
            <Label htmlFor="tags">Tags</Label>
            <Input
              name="tags"
              id="tags"
              value={formik.values.tags}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.tags && formik.errors.tags && (
              <Box sx={{ color: 'red' }}>{formik.errors.tags}</Box>
            )}
          </Box>

          {/* Shipping Information */}
          <Box mb={3}>
            <Label htmlFor="shippingInfo">Shipping Information</Label>
            <Textarea
              name="shippingInfo"
              id="shippingInfo"
              value={formik.values.shippingInfo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={3}
              mb={1}
            />
            {formik.touched.shippingInfo && formik.errors.shippingInfo && (
              <Box sx={{ color: 'red' }}>{formik.errors.shippingInfo}</Box>
            )}
          </Box>

          {/* Admin Name */}
          <Box mb={3}>
            <Label htmlFor="adminName">Admin Name</Label>
            <Input
              name="adminName"
              id="adminName"
              value={formik.values.adminName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.adminName && formik.errors.adminName && (
              <Box sx={{ color: 'red' }}>{formik.errors.adminName}</Box>
            )}
          </Box>

          {/* SEO Title */}
          <Box mb={3}>
            <Label htmlFor="seoTitle">SEO Title</Label>
            <Input
              name="seoTitle"
              id="seoTitle"
              value={formik.values.seoTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.seoTitle && formik.errors.seoTitle && (
              <Box sx={{ color: 'red' }}>{formik.errors.seoTitle}</Box>
            )}
          </Box>

          {/* SEO Description */}
          <Box mb={3}>
            <Label htmlFor="seoDescription">SEO Description</Label>
            <Textarea
              name="seoDescription"
              id="seoDescription"
              value={formik.values.seoDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={3}
              mb={1}
            />
            {formik.touched.seoDescription && formik.errors.seoDescription && (
              <Box sx={{ color: 'red' }}>{formik.errors.seoDescription}</Box>
            )}
          </Box>

          {/* SEO Keywords */}
          <Box mb={3}>
            <Label htmlFor="seoKeywords">SEO Keywords</Label>
            <Input
              name="seoKeywords"
              id="seoKeywords"
              value={formik.values.seoKeywords}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              mb={2}
            />
            {formik.touched.seoKeywords && formik.errors.seoKeywords && (
              <Box sx={{ color: 'red' }}>{formik.errors.seoKeywords}</Box>
            )}
          </Box>

          {/* Product Images */}
          <Box mb={3}>
            <Label htmlFor="productImages">Product Images *</Label>
            <Input
              type="file"
              id="productImages"
              name="productImages"
              onChange={handleImageUpload}
              multiple
              accept="image/*"
            />
            {formik.touched.productImages && formik.errors.productImages && (
              // @ts-expect-error
              <Box sx={{ color: 'red' }}>{formik?.errors?.productImages}</Box>
            )}
            {imagePreviews.length > 0 && (
              <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                {imagePreviews.map((preview, index) => (
                  <Image key={index} src={preview} alt={`preview-${index}`} sx={{ width: 100, height: 100, objectFit: 'cover' }} />
                ))}
              </Box>
            )}
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            sx={{
              borderRadius: 50,
              padding: 20,
              width: '100%',
              bg: '#192A41',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            disabled={uploading}
          >
            {uploading ? <Spinner /> : 'Submit'}
          </Button>
        </Box>
        {/* Submit Button */}
        <Button type="submit" sx={{ borderRadius: 50, padding: 20, width: '100%', bg: '#192A41', cursor: 'pointer' }}>
          Add Product
        </Button>
      
      </Box>
    
      </form>
    </>
  );
};

export default AdminForm;

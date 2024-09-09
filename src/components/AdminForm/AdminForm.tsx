/** @jsxImportSource theme-ui */
import { Box, Button, Input, Label, Select, Textarea, Image, Message } from '@theme-ui/components';
import { Spinner, Heading } from 'theme-ui';
import React, { useState } from 'react';
import { db, storage } from '@/firebaseConfig/firebaseConfig'; // Adjust the import path as needed
import { addDoc, collection } from 'firebase/firestore';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';

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
        console.error('Error adding product: ', error);
        alert('Error adding product to the database.');
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
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product: ', error);
      alert('Failed to add product. Please try again.');
    }
  };

  const selectedCategoryObj = categories.find((cat) => cat.name === selectedCategory);

  return (
    <>
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
              <Message variant="danger">{formik.errors.productName as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.productDescription as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.productCategory as React.ReactNode}</Message>
            )}
          </Box>

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
                <Message variant="danger">{formik.errors.productSubCategory as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.price as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.discount as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.stockQuantity as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.sku as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.productVariants as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.tags as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.shippingInfo as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.adminName as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.seoTitle as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.seoDescription as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.seoKeywords as React.ReactNode}</Message>
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
              <Message variant="danger">{formik.errors.productImages as React.ReactNode}</Message>
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
              display: 'block',
              mx: 'auto',
              bg: 'primary',
              color: 'white',
              '&:hover': {
                bg: 'secondary',
              },
            }}
            disabled={uploading}
          >
            {uploading ? <Spinner /> : 'Submit'}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AdminForm;

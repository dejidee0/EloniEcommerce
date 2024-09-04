/** @jsxImportSource theme-ui */
import { Box, Button, Input, Label, Select, Textarea, Checkbox, Image } from '@theme-ui/components';
import React, { useState } from 'react';
import { db, storage } from '@/firebaseConfig/firebaseConfig'; // Import the Firebase configuration
import { addDoc, collection } from 'firebase/firestore';
import { Heading } from 'theme-ui';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';

const categories = [
  {
    name: 'Clothes',
    subItems: [
      { item: 'Shirt' },
      { item: 'Shorts & Jeans' },
      { item: 'Jacket' },
      { item: 'Dress & Frock' },
    ],
  },
  {
    name: 'Footwear',
    subItems: [
      { item: 'Sports' },
      { item: 'Formal' },
      { item: 'Casual' },
      { item: 'Safety Shoes' },
    ],
  },
  {
    name: 'Jewelry',
    subItems: [
      { item: 'Earrings' },
      { item: 'Couple Rings' },
      { item: 'Necklace' },
    ],
  },
  {
    name: 'Perfume',
    subItems: [
      { item: 'Clothes Perfume' },
      { item: 'Deodorant' },
    ],
  },
  {
    name: 'Cosmetics',
    subItems: [
      { item: 'Shampoo' },
      { item: 'Sunscreen' },
      { item: 'Body Wash' },
      { item: 'Makeup Kit' },
    ],
  },
  {
    name: 'Glasses',
    subItems: [
      { item: 'Sunglasses' },
      { item: 'Lenses' },
    ],
  },
  {
    name: 'Bags',
    subItems: [
      { item: 'Shopping Bag' },
      { item: 'Gym Backpack' },
      { item: 'Purse' },
      { item: 'Wallet' },
    ],
  },
];

const validationSchema = Yup.object({
  productName: Yup.string().required('Product Name is required'),
  productDescription: Yup.string().required('Product Description is required').max(500, 'Max 500 characters allowed'),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
  discount: Yup.number().positive('Discount must be positive').nullable(),
  stockQuantity: Yup.number().positive('Stock Quantity must be positive').nullable(),
  sku: Yup.string().nullable(),
  productVariants: Yup.string().nullable(),
  tags: Yup.string().nullable(),
  shippingInfo: Yup.string().nullable(),
  adminName: Yup.string().nullable(),
  seoTitle: Yup.string().nullable(),
  seoDescription: Yup.string().nullable(),
  seoKeywords: Yup.string().nullable(),
  productImages: Yup.array().of(Yup.mixed()).required('At least one image is required'),
});

const AdminForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubItem, setSelectedSubItem] = useState<string>('');
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [_, setUploading] = useState(false);

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
    },
    validationSchema: validationSchema,
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
    setSelectedSubItem(''); // Reset sub-item selection when category changes
  };

  const handleSubItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubItem(event.target.value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const imageUrls = files.map(file => URL.createObjectURL(file));
      console.log('imageUrls', imageUrls);

      setImagePreviews(imageUrls);
      formik.setFieldValue('productImages', files);
    }
  };

  const uploadImages = async (files: File[]): Promise<string[]> => {
    const uploadPromises = files.map(async (file) => {
      const storageRef = ref(storage, `products/${file.name}`);
      await uploadBytes(storageRef, file);
      return await getDownloadURL(storageRef);
    });


    return Promise.all(uploadPromises);
  };

  const handleSubmit = async (values: typeof formik.initialValues, imageURLs: string[], resetForm: () => void) => {
    console.log('hello');

    console.log('imageURLs', imageURLs);
    const productData = {
      ...values,
      productCategory: selectedCategory,
      productSubCategory: selectedSubItem,
      productImages: imageURLs
    };
    console.log('productData', productData);

    try {
      await addDoc(collection(db, 'products'), productData);
      resetForm();
      setSelectedCategory('');
      setSelectedSubItem('');
      setImagePreviews([]); // Reset image previews
    } catch (error) {
      console.error('Error adding product: ', error);
    }
  };

  const selectedCategoryObj = categories.find((cat) => cat.name === selectedCategory);

  return (
    <>
      <Heading sx={{ marginBottom: 20, textAlign: 'center', marginTop: 20 }}>
        Add <span sx={{ color: '#ff0000' }}>Product</span>
      </Heading>

      <Box
        as="form"
        // @ts-ignore
        onSubmit={formik.handleSubmit}
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
            mb={3}
          />
          {formik.touched.productName && formik.errors.productName ? (
            <div sx={{ color: 'red' }}>{formik.errors.productName}</div>
          ) : null}
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
          <Box sx={{ fontSize: 0, color: 'gray' }}>{formik.values.productDescription.length}/500 characters</Box>
          {formik.touched.productDescription && formik.errors.productDescription ? (
            <div sx={{ color: 'red' }}>{formik.errors.productDescription}</div>
          ) : null}
        </Box>
        {/* Product Category */}
        <Box mb={3}>
          <Label htmlFor="productCategory">Product Category *</Label>
          <Select id="productCategory" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </Select>
        </Box>
        {/* Product Sub Category */}
        {selectedCategory && (
          <Box mb={3}>
            <Label htmlFor="productSubCategory">Product Sub Category *</Label>
            <Select id="productSubCategory" value={selectedSubItem} onChange={handleSubItemChange}>
              <option value="">Select Sub Category</option>
              {selectedCategoryObj?.subItems.map((subItem) => (
                <option key={subItem.item} value={subItem.item}>
                  {subItem.item}
                </option>
              ))}
            </Select>
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
              onChange={formik.handleChange}
            />
            Active
          </Label>
        </Box>
        {/* Submit Button */}
        <Button type="submit" sx={{ borderRadius: 50, padding: 20, width: '100%', bg: '#192A41', cursor: 'pointer' }}>
          Add Product
        </Button>
      </Box>
    </>
  );
};

export default AdminForm;

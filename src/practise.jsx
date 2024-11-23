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
      <Label sx={{ cursor: 'pointer' }}>
        <Radio
          name="topSelection"
          value="isLatest"
          checked={formik.values.topSelection === 'isLatest'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        Latest
      </Label>

      <Label sx={{ cursor: 'pointer' }}>
        <Radio
          name="topSelection"
          value="isTrending"
          checked={formik.values.topSelection === 'isTrending'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        Trending
      </Label>

      <Label sx={{ cursor: 'pointer' }}>
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
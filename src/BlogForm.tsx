/** @jsxImportSource theme-ui */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Input, Label, Text } from 'theme-ui';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // import Firebase configuration

const BlogForm = () => {
  const formik = useFormik({
    initialValues: {
      image: '',
      category: '',
      name: '',
      author: '',
    },
    validationSchema: Yup.object({
      image: Yup.string().required('Image URL is required'),
      category: Yup.string().required('Category is required'),
      name: Yup.string().required('Blog name is required'),
      author: Yup.string().required('Author name is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Add blog data to Firestore
        const docRef = await addDoc(collection(db, "blogs"), {
          image: values.image,
          category: values.category,
          name: values.name,
          author: values.author,
        });
        alert("Blog created with ID: " + docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  });

  return (
    <Box as="div" sx={{ variant: 'layout.container' }}>
      <form onSubmit={formik.handleSubmit}>
        <h2 sx={{ color: 'primary', textAlign: 'center', mb: 4 }}>Create a Blog</h2>

        <Box sx={{ mb: 3 }}>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            sx={{ variant: 'forms.input' }}
          />
          {formik.touched.image && formik.errors.image ? (
            <Text sx={{ variant: 'forms.error' }}>{formik.errors.image}</Text>
          ) : null}
        </Box>

        <Box sx={{ mb: 3 }}>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            name="category"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            sx={{ variant: 'forms.input' }}
          />
          {formik.touched.category && formik.errors.category ? (
            <Text sx={{ variant: 'forms.error' }}>{formik.errors.category}</Text>
          ) : null}
        </Box>

        <Box sx={{ mb: 3 }}>
          <Label htmlFor="name">Blog Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            sx={{ variant: 'forms.input' }}
          />
          {formik.touched.name && formik.errors.name ? (
            <Text sx={{ variant: 'forms.error' }}>{formik.errors.name}</Text>
          ) : null}
        </Box>

        <Box sx={{ mb: 3 }}>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            name="author"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
            sx={{ variant: 'forms.input' }}
          />
          {formik.touched.author && formik.errors.author ? (
            <Text sx={{ variant: 'forms.error' }}>{formik.errors.author}</Text>
          ) : null}
        </Box>

        <Button type="submit" sx={{ variant: 'buttons.primary' }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default BlogForm;

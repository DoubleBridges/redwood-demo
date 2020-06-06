import BlogPostCell from 'src/components/BlogPostCell'

import AppLayout from 'src/layouts/AppLayout/AppLayout'

const BlogPostPage = ({ id }) => {
  return (
    <AppLayout>
      <BlogPostCell id={id} />
    </AppLayout>
  )
}

export default BlogPostPage

import React from 'react'
import BlogPage from '../components/BlogPage'
import blogs from './blogData';
export const metadata = {
  title: "Indian Brass Utensils Blog - Wellness Tips, Herbal Insights & More",
  description:
    "Explore the Indian Brass Utensils blog for the latest wellness tips, herbal remedies, health guides, and product updates. Empower your natural wellness journey with trusted insights.",
};



export default function page() {
  return (
    <div>
      <BlogPage blogs={blogs}/>
      
    </div>
  )
}

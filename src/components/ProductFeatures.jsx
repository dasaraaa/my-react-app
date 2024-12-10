
import React from "react"
import d1 from "../assets/images/d1.jpg"
import d2 from "../assets/images/d2.jpg"
import d3 from "../assets/images/d3.jpg"
import d4 from "../assets/images/d4.jpg"
const features = [
    { name: 'Exotic and Unique Ingredients', description: 'Lilia Beauty perfumes often feature rare and exotic ingredients, such as Japanese cherry blossom, Indian rose, Himalayan peony, and Persian rose.' },
    { name: 'Layered Scents', description: 'The perfumes are designed to provide a layered experience, where the top notes are immediately noticeable, followed by heart notes that develop and deepen the scent.' },
    { name: 'Cultural Inspiration', description: 'Each perfume collection is often inspired by a specific ritual, tradition, or philosophy' },
    { name: 'Long-Lasting', description: 'The perfumes are known for their longevity, providing a lasting fragrance that can be enjoyed throughout the day.' },
    
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Features</h2>
            <p className="mt-4 text-gray-500">
             Inspired by ancient traditions from cultures around the world, Lilia Beauty offers a range of products for body care, skincare, home fragrances, and wellness. The brand emphasizes the importance of slowing down and finding beauty in the smallest details.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              
              src={d1}
              className="rounded-lg bg-gray-100"
            />
            <img
              
              src={d3}
              className="rounded-lg bg-gray-100"
            />
            <img
              
              src={d4}
              className="rounded-lg bg-gray-100"
            />
            <img
              
              src={d2}
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  
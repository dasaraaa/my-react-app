// Home.js
import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import foto2 from "../assets/images/foto2.jpg"
import "../index.css"
import ProductFeatures from "../components/ProductFeatures"
export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Background Image */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src={foto2}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover animated-bg"
        />
        {/* Overlay Text */}
        <div className="relative z-10 px-6 pt-14 lg:px-8">
          <div className="w-full max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-left px-6 text-black">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
                Embrace elegance with every scent.
              </h1>
              <p className="mt-6 text-lg leading-7">
                Transform your house into a home with the comforting, uplifting, and balancing power of fragrance.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/signup"
                  className="rounded-md bg-black hover:bg-white text-white px-3.5 py-2.5 text-sm font-semibold border border-black hover:text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="/about"
                  className="rounded-md bg-white hover:bg-black text-black px-3.5 py-2.5 text-sm font-semibold border border-white hover:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Read more
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <ProductFeatures/>
      <Footer />
    </div>
  );
}

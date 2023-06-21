import React from 'react'
import { Product, ProductBody, Footer, Map, CarouselSlide } from '../common'
import { slides } from '../common/productSlide'

const ProductPage = () =>
  <>
    <Product />
    <CarouselSlide />
    <ProductBody />
    <Map />
    <Footer />
  </>

export default ProductPage
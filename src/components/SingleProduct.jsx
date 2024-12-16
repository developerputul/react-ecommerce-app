import React, { useContext } from 'react'
import all_product from './../Utils/all_product';
import { Shopcontext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from './Breadcrum';
import ProductDisplay from './ProductDisplay';
import DescriptionBox from './DescriptionBox';

const SingleProduct = () => {
    const {all_product} = useContext(Shopcontext)
    const {productId} = useParams()
    const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div className='max-w-7xl mx-auto mb-32 mt-32'>
       <Breadcrum/>
       <ProductDisplay/>
       <DescriptionBox/>
    </div>
  )
}

export default SingleProduct
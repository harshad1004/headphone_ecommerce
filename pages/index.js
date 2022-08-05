import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client';
const Home = ({products,BannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={BannerData.length && BannerData[0] } /> 
       
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers Of many Variations</p>
      </div>
      <div  className='products-container'>
        {products.map(
          (product) => <Product 
            key={product._id}
            product={product}
           />
        )}
      </div>

      <FooterBanner footerBanner={BannerData && BannerData[0]} />
    </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products =  await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const BannerData =  await client.fetch(bannerQuery);

return {
 props:{products, BannerData}
}
}
export default Home;

 
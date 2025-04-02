 import React from 'react'
import ImageTrail from './ImageTrail'
 
 function SectionTrail() {
   return (
     
<div className=' bg-[#08080c] text-white h-[80vh] md:h-[70vh]' style={{ position: 'relative', overflow: 'hidden'}}>
<h2 className=' bg-[#08080c] text-white flex absolute  font-thin md:left-[40%] left-[10%] top-[40%] '>We are Here For Something Good !</h2>
  <ImageTrail
    
    items={[
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/images_9.png?v=1739616154',
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/images_8_jpg.png?v=1739616154',
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/image_1_jpg.png?v=1739616154',
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/image_2_jpg.png?v=1739616153',
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/images.png?v=1739616154',
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/image_3_jpg.png?v=1739616153',
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/images_6_jpg.png?v=1739616153',
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/image_5_jpg.png?v=1739616153',
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/image_4_jpg.png?v=1739616153',
      'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/images_7_jpg.png?v=1739616153',
      // ...
    ]}
    variant={1}
    
  />

</div>
   )
 }
 
 export default SectionTrail
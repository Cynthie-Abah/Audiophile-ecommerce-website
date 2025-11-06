import { CatBox } from './CatBox'

const CategoriesSection = () => {
  return (
    <div className="lg:max-w-[1110px] mx-auto md:pt-32 md:py-36 px-8 md:px-5 categories flex flex-col sm:flex-row gap-4 md:gap-7 justify-center md:justify-between">
      <CatBox link='/headphones' catName="Headphones" imageSrc={'/shared/desktop/image-category-thumbnail-headphones.png'} />
      <CatBox link='/speakers' catName="speakers" imageSrc={'/shared/desktop/image-category-thumbnail-speakers.png'} />
      <CatBox link='/earphones' catName="earphones" imageSrc={'/shared/desktop/image-category-thumbnail-earphones.png'} />
    </div>
  )
}

export default CategoriesSection

// import { CatBox } from './CatBox'

// const CategoriesSection = () => {
//   return (
//     <section className="w-full max-w-[1110px] mx-auto px-6 md:px-10 py-16 md:py-24">
//       <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 md:gap-8 justify-center md:justify-between items-center">
//         <CatBox
//           link="/headphones"
//           catName="Headphones"
//           imageSrc="/shared/desktop/image-category-thumbnail-headphones.png"
//         />
//         <CatBox
//           link="/speakers"
//           catName="Speakers"
//           imageSrc="/shared/desktop/image-category-thumbnail-speakers.png"
//         />
//         <CatBox
//           link="/earphones"
//           catName="Earphones"
//           imageSrc="/shared/desktop/image-category-thumbnail-earphones.png"
//         />
//       </div>
//     </section>
//   )
// }

// export default CategoriesSection

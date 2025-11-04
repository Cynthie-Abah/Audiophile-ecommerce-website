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
import { CatBox } from './CatBox'

const CategoriesSection = () => {
  return (
      <div className="w-[1110px] mx-auto py-36 categories flex gap-7 justify-between">
          <CatBox link='/headphones' catName="Headphones" imageSrc={'/shared/desktop/image-category-thumbnail-headphones.png'} />
          <CatBox link='/speakers' catName="speakers" imageSrc={'/shared/desktop/image-category-thumbnail-speakers.png'} />
          <CatBox link='/earphones' catName="earphones" imageSrc={'/shared/desktop/image-category-thumbnail-earphones.png'} />
        </div>
  )
}

export default CategoriesSection
import CategoryListInShop from "@/components/CategoryListAndSortBy/CategoryList"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { listCategory } from "@/seeds/listCategory"

const Shop = () => {
  return (  
    <MaxWidthWrapper>
      <div className="mt-2">
        <CategoryListInShop array={listCategory} />
        
      </div>
    </MaxWidthWrapper>
  )
}
 
export default Shop
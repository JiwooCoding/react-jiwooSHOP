import styles from './FiltersCategory.module.scss';
import CategoryTab from './category-tab/CategoryTab';
import { CategoriesName } from '../../../store/categories/categories.type';
import electronicsIcon from '../../../assets/free-icon-electronics-5819202.png';
import jewels from '../../../assets/free-icon-jewels-306776.png';
import male from '../../../assets/free-icon-male-clothes-6114809.png';
import woman from '../../../assets/free-icon-woman-clothes-6114779.png';
import all from '../../../assets/free-icon-all-5581143.png';


const FiltersCategory = () => {
  return (
    <div className={styles.filter_category}>
        <CategoryTab text={"모두"} categoryName={CategoriesName.All} icon={all}/>
        <CategoryTab text={"전자기기"} categoryName={CategoriesName.Electronics} icon={electronicsIcon}/>
        <CategoryTab text={"쥬얼리"} categoryName={CategoriesName.Jewelry} icon={jewels}/>
        <CategoryTab text={"남성의류"} categoryName={CategoriesName.MensClothing} icon={male}/>
        <CategoryTab text={"여성의류"} categoryName={CategoriesName.WomensClothing} icon={woman}/>
    </div>
  )
}

export default FiltersCategory
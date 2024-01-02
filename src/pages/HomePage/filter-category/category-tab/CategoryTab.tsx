import styles from './CategoryTab.module.scss';
import {FC} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import { useAppSelector, useAppdispatch } from '../../../../hooks/redux';
import { CategoriesName } from '../../../../store/categories/categories.type';

type CategoryTabProps = {
    text:string;
    categoryName: CategoriesName;
    icon: string;
}

const CategoryTab: FC<CategoryTabProps> = ({ text, categoryName, icon }) => {
    const dispatch = useAppdispatch();
    const category = useAppSelector((state) => state.CategoriesSlice);
    console.log(category)

    const getActiveCategory = () => {
        dispatch(setActiveCategory(categoryName))
    }

    return (
        <div className={styles.menu_container}>
            <button
                className={
                    categoryName === category
                        ? styles.active_category
                        : styles.category_button
                }
                onClick={getActiveCategory}
            >
                <div className={styles.icon_container}>
                    <img src={icon} alt={`${text} Icon`}/>
                </div>
                <span>{text}</span>
            </button>
            
        </div>
    )
}

export default CategoryTab
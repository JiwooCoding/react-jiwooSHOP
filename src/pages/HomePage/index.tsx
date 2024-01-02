import FiltersCategory from './filter-category/FiltersCategory'
import CardList from './card-list/CardList'
import CountProducts from './count-products/CountProducts'
import SlidePage from '../../components/slide/mainSlide/SlidePage'

const HomePage = () => {
  return (
    <div className='page'>
      <SlidePage/>
      <div className='container'>
        <FiltersCategory/>
        <CountProducts/>
        <CardList/>
      </div>
    </div>
  )
}

export default HomePage
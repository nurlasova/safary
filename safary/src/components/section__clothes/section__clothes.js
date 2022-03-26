import "./clothes.scss"

function SectionClothes(){
    return (
        <>
        <div className="clothes">
          <div className="container">
            <h1 className="clothes__title">Одежды</h1>
            <div className="clothes__menu col-3">
            <div className="clothes__menu-category-wrap">
  <h3 className="clothes__menu-title">Категории</h3>
  <ul>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Все</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Платье</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Джинсы</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Топики</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Куртки и пальто</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Брюки</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Шорты</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Юбки</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Нижнее белье</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Кожаные одежды</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">Свитера и трикотаж</a></li>
  </ul>
</div>

            </div>
          </div>
        </div>
        
        </>
    )
}

export default SectionClothes

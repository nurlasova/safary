import "./clothes.scss"
import { useTranslation } from 'react-i18next';
import  "../langs/lang.js"

function SectionClothes(){
  const {t} = useTranslation()
    return (
        <>
        <div className="clothes">
          <div className="container">
            <h1 className="clothes__title">{t('clothes.title')}</h1>
            <div className="clothes__main row">              
            <div className="clothes__menu col-2">
            <div className="clothes__menu-category-wrap">
  <h3 className="clothes__menu-title">{t('clothes__menu-title')}</h3>
  <ul>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list1')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list2')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list3')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list4')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list5')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list6')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list7')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list8')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list9')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list10')}</a></li>
    <li className="clothes__menu-list"><a href="#" className="clothes__menu-link">{t('clothes__menu-list11')}</a></li>
  </ul>
</div>
            </div>
            
            <div className="clothes__content col-10">
              <div className="clothes__sortMenu">
                <select className="clothes__sort"> 
                  <option className="clothes__sortItem">{t('clothes__sort-item1')}</option>
                  <option className="clothes__sortItem">{t('clothes__sort-item2')}</option>
                  <option className="clothes__sortItem">{t('clothes__sort-item3')}</option>
                  <option className="clothes__sortItem">{t('clothes__sort-item4')}</option>
                </select>
            </div>
            </div>

            </div>
          </div>
        </div>
        
        </>
    )
}

export default SectionClothes

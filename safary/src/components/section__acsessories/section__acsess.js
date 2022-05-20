import "./acsess.scss"
import { useTranslation } from 'react-i18next';
import  "../langs/lang.js"
import Img1 from "../../assets/img/png/acsess_1.png"
import Img2 from "../../assets/img/png/acsess_2.png"
import Img3 from "../../assets/img/png/acsess_3.png"
import Img4 from "../../assets/img/png/acsess_4.png"
import Img5 from "../../assets/img/png/acsess_5.png"
import Img6 from "../../assets/img/png/acsess_6.png"
import Img7 from "../../assets/img/png/acsess_7.png"
import Img8 from "../../assets/img/png/acsess_8.png"
import Img9 from "../../assets/img/png/acsess_9.png"
import Img10 from "../../assets/img/png/acsess_10.png"
import Img11 from "../../assets/img/png/acsess_11.png"
import Img12 from "../../assets/img/png/acsess_12.png"

function SectionAcsess(){
  const {t} = useTranslation()
    return (
        <>
        <div className="acsess">
          <div className="container">
            <h1 className="acsess__title">{t('acsess.title')}</h1>
            <div className="acsess__main row ">              
            <div className="acsess__menu col-3">
            <div className="acsess__menu-category-wrap">
  <h3 className="acsess__menu-title">{t('acsess__menu-title')}</h3>
  <ul>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list1')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list2')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list3')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list4')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list5')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list6')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list7')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list8')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list9')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list10')}</a></li>
    <li className="acsess__menu-list"><a href="#" className="acsess__menu-link">{t('acsess__menu-list11')}</a></li>
  </ul>
</div>
    </div>
            
            <div className="acsess__content col-9">
              <div className="acsess__sortMenu">
                <select className="acsess__sort"> 
                  <option className="acsess__sortItem">{t('acsess__sort-item1')}</option>
                  <option className="acsess__sortItem">{t('acsess__sort-item2')}</option>
                  <option className="acsess__sortItem">{t('acsess__sort-item3')}</option>
                  <option className="acsess__sortItem">{t('acsess__sort-item4')}</option>
                </select>
                <hr className="acsess__line"></hr> 
            </div>

            <div className="acsess__section">
            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img1} alt="Red lightweight gown" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle1')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img2} alt="Multicolored armless top" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle2')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img3} alt="Ladies bush pants" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle3')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img4} alt="Mini skirt" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle4')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img5} alt="Mini skirt" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle5')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img6} alt="Mini skirt" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle6')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img7} alt="Mini skirt" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle7')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>
            
            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img8} alt="Mini skirt" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle8')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img9} alt="Mini skirt" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle9')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img10} alt="Mini skirt" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle10')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img11} alt="Mini skirt" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle11')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>

            <div className="col-3 acsess__catalog">
           <div className="acsess__catalogImg">
           <img src = {Img12} alt="Mini skirt" className= "acsess__img"/>
           <div className="acsess__favourites">
                <button className="acsess__like"> 
                <svg className="acsess__iconLike" width="16" height="15" viewBox="0 0 16 15" fill="none" stroke="#ED165F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7307 1.39307C13.9025 0.494751 12.766 0 11.5304 0C10.6068 0 9.76099 0.291992 9.01636 0.867798C8.64062 1.15845 8.30017 1.51404 8 1.92908C7.69995 1.51416 7.35938 1.15845 6.98352 0.867798C6.23901 0.291992 5.39319 0 4.4696 0C3.23401 0 2.09741 0.494751 1.26917 1.39307C0.450806 2.28088 0 3.49377 0 4.80847C0 6.16162 0.504272 7.40027 1.58691 8.70667C2.55542 9.87524 3.94739 11.0615 5.55933 12.4352C6.10974 12.9043 6.73364 13.436 7.38147 14.0024C7.55261 14.1523 7.77222 14.2349 8 14.2349C8.22766 14.2349 8.44739 14.1523 8.61829 14.0027C9.26611 13.4362 9.89038 12.9042 10.441 12.4348C12.0527 11.0614 13.4447 9.87524 14.4132 8.70654C15.4958 7.40027 16 6.16162 16 4.80835C16 3.49377 15.5492 2.28088 14.7307 1.39307Z"/>
                    </svg>
 </button>
              <button className="acsess__cart">{t('shop.cart')}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 10.6667C9.92667 10.6667 9.33333 11.26 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3333 10.6667 13.3333C11.0203 13.3333 11.3594 13.1929 11.6095 12.9428C11.8595 12.6928 12 12.3536 12 12C12 11.6464 11.8595 11.3072 11.6095 11.0572C11.3594 10.8071 11.0203 10.6667 10.6667 10.6667ZM0 0V1.33333H1.33333L3.73333 6.39333L2.82667 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.02029 2.80714 9.35943 3.05719 9.60948C3.30724 9.85952 3.64638 10 4 10H12V8.66667H4.28C4.2358 8.66667 4.1934 8.64911 4.16215 8.61785C4.13089 8.5866 4.11333 8.5442 4.11333 8.5C4.11333 8.46667 4.12 8.44 4.13333 8.42L4.73333 7.33333H9.7C10.2 7.33333 10.64 7.05333 10.8667 6.64667L13.2533 2.33333C13.3 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.82319 13.2631 1.65362 13.1381 1.5286C13.013 1.40357 12.8435 1.33333 12.6667 1.33333H2.80667L2.18 0H0ZM4 10.6667C3.26 10.6667 2.66667 11.26 2.66667 12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1929 3.64638 13.3333 4 13.3333C4.35362 13.3333 4.69276 13.1929 4.94281 12.9428C5.19286 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.19286 11.3072 4.94281 11.0572C4.69276 10.8071 4.35362 10.6667 4 10.6667Z" fill="#ED165F"/>
<path d="M7.5 2.66675V5.66675M6 4.16675H9" stroke="white" stroke-width="0.5"/>
</svg>
</button>
               </div>
           </div>
           <h4 className="acsess__catalogTitle">{t('acsess__catalogTitle12')}</h4>
                <p className="acsess__catalogPrice">₦ 10,000</p>
            </div>             
       </div>
            </div>
            </div>
          </div>
        </div>
        
        </>
    )
}

export default SectionAcsess

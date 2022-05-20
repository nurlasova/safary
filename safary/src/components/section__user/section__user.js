import "./user.scss";
import { useTranslation } from 'react-i18next';
function SectionUser (){
    const {t} = useTranslation()
    return(
        <>
    <div className="user">
    <div className="container">
    <h1 className="user__title">{t('user__title')}</h1>
    <p className="user__description">{t('user__description')}</p>
      <div className="user__forms">
      <div class="col-6 row">
                    <div className="user__formfirst">
                        <h2 className="user__subtitle"></h2>
                       
                   
                   
                   
                   
                    </div>
                </div>
     
     
     
     
     
      </div>
    </div>
    </div>
</>
    )
}
export default SectionUser


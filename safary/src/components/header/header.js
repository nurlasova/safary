import "./header.scss"
import logo from '../../assets/img/svg/Logo.svg'
import search from '../../assets/img/svg/search.svg'
import user from '../../assets/img/svg/user.svg'
import card from '../../assets/img/svg/card.svg'
import favourite from '../../assets/img/svg/favourite.svg'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <>    
            <div className="container">
                <div className="header__row row">
                        <div className="header__nav col-4">
                        <ul className="header__menu">
                            <li className="header__list"><Link to="/" className="header__link">Home</Link> </li>
                            <li className="header__list"><Link to="/clothes" className="header__link">Clothes</Link></li>
                            <li className="header__list"><Link to='/shoes' className="header__link">Shoes</Link></li>
                            <li className="header__list"><Link to="/assec" className="header__link">Assecsories</Link></li>
                        </ul>
                    </div>
                    <div className="header__logo col-4">
                    <img src={logo}/>
                    </div>
                    <div className="header__icons col-4">
                    <img src={search}/>
                    <img src={user}/>
                    <img src={card}/>
                    <img src={favourite}/>
                    </div>
                </div>
                
            </div>
        </>

    )
}
export default Header

import "./hero.scss"
import BigLogo from "../../assets/img/svg/BigLogo.svg"
import Girl from "../../assets/img/svg/girl.svg"
import {SwiperSlide, Swiper} from "swiper/react"
import { Pagination } from "swiper";
import "swiper/components/pagination";
import SwiperCore  from 'swiper/core';
import "swiper/components/pagination";
import 'swiper/swiper-bundle.min.css';


function Hero(){
SwiperCore.use(Pagination)
   return(
       <div>
           <div className="hero">
               <div className="container">
               <img src = {BigLogo} className= "hero__logo"/> 
                    <div className="hero__content ">                
                   <Swiper className="hero__swiper container"
                         slidesPerView={1}
                         slidesPerGroup={1}
                         speed={1000}
                         spaceBetween = {50}
                         loop = {true}
                         pagination={true}
                         modules={[Pagination]}
                        >
                         <SwiperSlide className="hero__slide" >
                         <img src = {Girl} alt="girl"  className="hero__model"/>
                        </SwiperSlide>
                        <SwiperSlide className="hero__slide">
                        <img src = {Girl} alt="girl1"  className="hero__model"/>
                        </SwiperSlide>
                        <SwiperSlide className="hero__slide">
                         <img src = {Girl} alt="girl"  className="hero__model"/>
                        </SwiperSlide>
                          <SwiperSlide className="hero__slide">
                         <img src = {Girl} alt="girl1"  className="hero__model"/>
                        </SwiperSlide>
                    </Swiper>
                     </div>
                       <h2 className="hero__title"> Узнайте нашу коллекцию</h2>
                       <svg className="hero__bottomarr" width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="5.5" r="4" stroke="white" stroke-width="3"/>
<path d="M2 17L13.5 26L25 17" stroke="white" stroke-width="4"/>
</svg>                   
</div>
</div>
</div> 
)
}
export default Hero 
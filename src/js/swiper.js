import Swiper from "swiper";
import {Navigation,Pagination} from 'swiper/modules';
export const swiper = () => {
 if(document.querySelector('.reviews__slider')){
    new Swiper('.reviews__slider',{
      modules:[Navigation,Pagination],
      observer:true,
      observeParents:true,
      slidesPerView:1,
      spaceBetween:0,
      speed:800,
      pagination:{
        el:'.swiper-pagination',
        clickable:true,
      },
      navigation:{
         prevEl:'.reviews__arrow--left',
         nextEl:'.reviews__arrow--right',
      },
    })
 }
}
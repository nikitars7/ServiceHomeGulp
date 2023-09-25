import * as ndevFunctions from './modules/functions.js';
import { openMenu } from './burger.js';
import {useDynamicAdapt} from './dynamicAdapt.js'
import { smoothScrollTo } from './smoothAnchors.js';
import { isTitleAnimated, sectionInterObserver } from './sectionObserver.js';
import { swiper } from './swiper.js';
import { initRatings } from './rating.js';
import { fetchBlog } from './blog.js';
import { spoilerInit } from './spoiler.js';
import { formValidate } from './formValid.js';
ndevFunctions.isWebp();

openMenu();
useDynamicAdapt();
smoothScrollTo();
sectionInterObserver();
isTitleAnimated();
swiper();
initRatings();
fetchBlog();
spoilerInit();
formValidate();
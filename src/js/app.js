import * as ndevFunctions from './modules/functions.js';
import { openMenu } from './burger.js';
import {useDynamicAdapt} from './dynamicAdapt.js'
import { smoothScrollTo } from './smoothAnchors.js';
import { isTitleAnimated, sectionInterObserver } from './sectionObserver.js';
ndevFunctions.isWebp();

openMenu();
useDynamicAdapt();
smoothScrollTo();
sectionInterObserver();
isTitleAnimated();
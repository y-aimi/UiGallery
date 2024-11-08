import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faChevronRight, faClipboard, faClipboardCheck, faRotate, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronRight, faBars, faRotate, faXmark, faClipboard, faClipboardCheck);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});

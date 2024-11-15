import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdowMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js"
import initFuncionamento from "./modules/funcionamento.js"
import initFetchAnimais from "./modules/fetch-animais.js"
import iniAnimacaoScroll from "./modules/scroll-animacao.js";


const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('.js-accordion dt')
accordion.init()

initTabNav()
initModal()
initTooltip()
initDropdowMenu()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
iniAnimacaoScroll()

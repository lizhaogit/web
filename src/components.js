import Header from './components/lib/Header'
import Footer from './components/lib/Footer'
import Page from './components/lib/Page'
import NewsChart from './components/lib/NewsChart'
import EntSynopsis from './components/lib/EntSynopsis'
import Product from './components/lib/Product'
import ContactPoster from './components/lib/ContactPoster'
import Business from './components/lib/Business'
import RecruitPage from './components/lib/RecruitPage'
import Godajiaxinfu from './components/lib/Godajiaxinfu'

const template = {
  install: function (Vue) {
    Vue.component('header-view', Header);
    Vue.component('footer-view', Footer);
    Vue.component('page-view', Page);
    Vue.component('new-view', NewsChart);
    Vue.component('synopsis-view', EntSynopsis);
    Vue.component('product-view', Product);
    Vue.component('contact-view', ContactPoster);
    Vue.component('business-view', Business);
    Vue.component('recruit-view', RecruitPage);
    Vue.component('go-view', Godajiaxinfu);
  }
}

export default template;

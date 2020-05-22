import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Culture from '@/components/introduction/Culture'
import Team from '@/components/introduction/Team'
import Synopsis from '@/components/introduction/Synopsis'
import Dynamic from '@/components/new/Dynamic'
import Information from '@/components/new/Information'
import Policy from '@/components/new/Policy'
import Analysis from '@/components/new/Analysis'
import Details from '@/components/new/Details'
import InfoConsultation from '@/components/product/InfoConsultation'
import InfoConsultationService from '@/components/product/InfoConsultationService'
import ManageConsulting from '@/components/product/ManageConsulting'
import ConsultantConsultation from '@/components/product/ConsultantConsultation'
import Mode from '@/components/contact/Mode'
import Cooperation from '@/components/contact/Cooperation'
import MessageComments from '@/components/contact/MessageComments'
import Recruit from '@/components/contact/Recruit'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Index', component: Index},
    {path: '/home', name: 'Home', component: Home},
    {path: '/culture', name: 'cultureLink', component: Culture},
    {path: '/team', name: 'teamLink', component: Team},
    {path: '/synopsis', name: 'synopsisLink', component: Synopsis},
    {path: '/dynamic', name: 'dynamicLink', component: Dynamic},
    {path: '/information', name: 'informationLink', component: Information},
    {path: '/policy', name: 'policyLink', component: Policy},
    {path: '/analysis', name: 'analysisLink', component: Analysis},
    {path: '/details', name: 'detailsLink', component: Details},
    {path: '/infoConsultation', name: 'infoConsultationLink', component: InfoConsultation},
    {path: '/infoConsultationService', name: 'infoConsultationServiceLink', component: InfoConsultationService},
    {path: '/manageConsulting', name: 'manageConsultingLink', component: ManageConsulting},
    {path: '/consultantConsultation', name: 'consultantConsultationLink', component: ConsultantConsultation},
    {path: '/contactMode', name: 'modeLink', component: Mode},
    {path: '/cooperation', name: 'cooperationLink', component: Cooperation},
    {path: '/messageComments', name: 'messageCommentsLink', component: MessageComments},
    {path: '/recruit', name: 'recruitLink', component: Recruit},
    {path: '*', redirect: '/'}
  ],
  mode: 'history'
})

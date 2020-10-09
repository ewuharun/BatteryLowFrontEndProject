import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
import contactPage from './components/pages/contactPage'
import hooks from './components/pages/basic/hooks'


const routes = [
    /// basic tutorials routes...
    {
        path: '/my-new-vue-route',
        component: contactPage,

    },

    // vue hooks
    {
        path: '/hooks',
        component: hooks
    },
  


]



export default new Router({
    mode: 'history',
    routes

})
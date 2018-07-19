// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Contacts from './contacts.vue'
// import Header from "../../components/header/header.vue"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template:"<Contacts/>",
    components:{Contacts}
})

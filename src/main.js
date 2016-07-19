import Vue from 'vue';
import vueResource from 'vue-resource';
import App from './App';
import Home from './components/home';
import VueRouter from 'vue-router';
import Course from './components/course';
import Video from './components/video-page';
import Pdf from './components/pdf-page';
import MyTrain from './components/my-train';
import MyCourse from './components/my-course';
import wxauth from './utils/wxauth.js';

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false
});

router.map({
  '/': {
    component: Home
  },
  '/Course/:courseid': {
    component: Course
  },
  '/Course/:courseid/SectionVideo/:sectionid': {
    component: Video
  },
  '/Course/:courseid/SectionPDF/:sectionid': {
    component: Pdf
  },
  '/My': {
    component: MyTrain
  },
  '/MyCourse/:courseid/:userid': {
    component: MyCourse
  }
});
wxauth.goAuth(function () {
  router.start(App, '#app');
});


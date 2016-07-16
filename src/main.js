import Vue from 'vue';
import vueResource from 'vue-resource';
import App from './App';
import Home from './components/Home';
import VueRouter from 'vue-router';
import Course from './components/Course';
import Video from './components/videoPage';
import Pdf from './components/pdfPage';
import MyTrain from './components/MyTrain';

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter();

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
  }
});

router.start(App, '#app');

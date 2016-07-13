import Vue from 'vue';
import App from './App';
import Home from './components/Home';
import VueRouter from 'vue-router';
import Course from './components/Course';
import Video from './components/videoPage';
import Pdf from './components/pdfPage';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/': {
    component: Home
  },
  '/Course/:id': {
    component: Course
  },
  '/videoPage/:id': {
    component: Video
  },
  '/pdfPage/:id': {
    component: Pdf
  }
});

router.start(App, '#app');

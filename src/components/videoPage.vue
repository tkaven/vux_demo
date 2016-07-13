<template>
  <x-header :left-options="{showBack: true, backText: ''}">{{courseName}}</x-header>
  <article class="weui_article">
    <h1>汉拓培训</h1>
    <section>
      <h2 class="title">{{title}}</h2>
      <section>
        <h3>章节内容：</h3>
        <p>{{desc}}</p>
      </section>
      <video id="vid" width="400" controls="controls">
        <source src="static/video/movie.ogg">
      </video>
    </section>
  </article>
</template>
<script>
import XHeader from 'vux/src/components/x-header';
export default {
  components: {
    XHeader
  },
  data () {
    return {
      courseName: 'Linux教程',
      title: '简介',
      desc: 'Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的UNIX工具软件、应用程序和网络协议。'
    };
  }
};
</script>
<style>
@import '../assets/css/weui.css';
</style>

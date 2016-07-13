<template>
  <x-header :left-options="{showBack: true, backText: ''}">{{courseName}}</x-header>
  <div>
    <group title="课程列表">
      <cell v-for="item in items" :title="item.title" is-link :link="item.link"></cell>
    </group>
  </div>
</template>
<script>
import Group from 'vux/src/components/group';
import Cell from 'vux/src/components/cell';
import XHeader from 'vux/src/components/x-header';
const data = {
  list: [{
    courseName: 'Linux教程',
    items: [{
      title: '第一章: 简介',
      link: '/pdfPage/1'
    },
      {title: '第二章: Linux基础命令'},
      {title: '第三章: Linux高阶提高'},
      {title: '第四章: Linux数据相关指导'}
    ]
  }, {
    courseName: 'Javascrip教程',
    items: [{
      title: '第一章: 简介',
      link: '/videoPage/1'
    },
      {title: '第二章: javascript基础命令'},
      {title: '第三章: javascript高阶提高'},
      {title: '第四章: javascript数据相关指导'}
    ]
  }]
};
export default {
  components: {
    Group,
    Cell,
    XHeader
  },
  data () {
    return data.list[this.$route.params.id];
  }
};
console.log();
</script>

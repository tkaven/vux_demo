<template>
    <x-header :left-options="{showBack: true, backText: ''}">培训课程</x-header>
  <div>
    <group>
        <!-- <cell v-for="item in items" :title="item.title" is-link v-link="'vue-router'">
        </cell> -->
        <panel header="培训资料列表" :footer="footer" :list="list" :type="type"></panel>
    </group>
  </div>
</template>

<script>
import Group from 'vux/src/components/group';
import Panel from 'vux/src/components/panel';
import XHeader from 'vux/src/components/x-header';
export default {
  components: {
    Panel,
    Group,
    XHeader
  },
  data () {
    return {
      type: '1',
      list: [{
        src: 'static/image/pdf.png',
        title: 'Linux入门教程',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/Course/0'
      }, {
        src: 'static/image/bofangqi.jpg',
        title: 'Javascrip基础教程',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/Course/1',
          replace: false
        }
      }],
      footer: {
        title: '查看更多',
        url: ''
      }
    };
  }
};
</script>

<template>
  <x-header :left-options="{showBack: true, backText: ''}">{{training_name}}</x-header>
  <div>
    <group title="课程列表">
      <cell v-for="item in items" :title="item.section_name" is-link :link="item.link"></cell>
    </group>
  </div>
</template>
<script>
import config from '../utils/config.js';
import Group from 'vux/src/components/group';
import Cell from 'vux/src/components/cell';
import XHeader from 'vux/src/components/x-header';
export default {
  components: {
    Group,
    Cell,
    XHeader
  },
  ready: function () {
    let _routeId = this.$route.params.courseid;
    this.$http.get(config.SERVER_URL + _routeId, {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      emulateJSON: true
    }).then(function (response) {
      let data = response.data;
      this.training_name = data.training_name;
      this.items = data.TrainingSections;
    }, function (response) {
            // handle error
    });
  },
  data () {
    return {
      training_name: '',
      items: []
    };
  }
};
console.log();
</script>

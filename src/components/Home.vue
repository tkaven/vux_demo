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
import config from '../utils/config.js';
import Group from 'vux/src/components/group';
import Panel from 'vux/src/components/panel';
import XHeader from 'vux/src/components/x-header';
export default {
  components: {
    Panel,
    Group,
    XHeader
  },
  ready: function () {
    this.$http.get(config.SERVER_URL, {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      emulateJSON: true
    }).then(function (response) {
      let data = response.data;
      let jsonArray = [];
      for (let i = 0; i < data.length; i++) {
        let row = {};
        row.title = data[i].training_name;
        row.desc = data[i].training_desc;
        row.url = '/Course/' + data[i].training_id;
        jsonArray.push(row);
      }
      this.list = jsonArray;
    }, function (response) {
            // handle error
    });
  },
  data () {
    return {
      list: []
    };
  }
};
</script>

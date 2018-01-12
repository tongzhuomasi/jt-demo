<template>
  <mu-tabs :value="activeTab" @change="tabChange">
    <mu-tab value="home" icon="phone" title="RECENTS"></mu-tab>
    <mu-tab value="about" icon="favorite" title="FAVORITES"></mu-tab>
    <mu-tab value="orders" icon="person_pin" title="NEARBY"></mu-tab>
  </mu-tabs>
</template>

<script>
  export default {
    name: 'tabMenu',
    data () {
      return {
        activeTab: 'home' // 默认tab
      }
    },
    computed: {},
    methods: {
      // 切换tab
      tabChange: function (val) {
        this.$root.$router.push({name: val})
        this.activeTab = val
      }
    }
  }
</script>

<style scoped>

</style>

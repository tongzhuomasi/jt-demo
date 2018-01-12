<template>
  <div id="app">
    <router-view />
    <tab-menu />
  </div>
</template>

<script>
  import tabMenu from './components/tabMenu'
  export default {
    name: 'app',
    components: { tabMenu },
    // 生命周期
    mounted: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
      })
    },
    updated: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been re-rendered
      })
    },
    // 数据
    props: {},
    data () {
      return {
        dataValue: ''
      }
    },
    computed: {
      computedValue: {
        get () {},
        set () {}
      },
      title () { return this.$store.state.title }
    },
    methods: {
      method: function () {
        return ''
      }
    },
    watch: {
      watchedValue: {
        handler: function (val, oldVal) { /* ... */ },
        deep: true
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

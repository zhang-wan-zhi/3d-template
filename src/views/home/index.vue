<template>
  <div class="operation">
    <div class="title">数字孪生智慧台站</div>
    <HeaderNav></HeaderNav>
    <div class="cascader-home">
      <cascader :data="data"></cascader>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./components/header";
import cascader from "../../components/cascader/index.vue";
export default {
  components: {
    HeaderNav,
    cascader,
  },
  data() {
    return {
      data: [
        {
          label: "浙江省",
          checked: true,
          children: [
            {
              label: "杭州市",
              checked: false,
              children: [
                {
                  label: "西湖区",
                  checked: false,
                  children: [
                    {
                      label: "杭州老和山地震台",
                      checked: false,
                      children: [],
                    },
                    {
                      label: "杭州植物园地震台",
                      checked: false,
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              label: "建德市",
              checked: false,
              children: [],
            },
          ],
        },
      ],
    };
  },
  methods: {},
  created() {},
  mounted() {},
  deactivated() {},
};
</script>

<style lang="scss">
.operation {
  width: 100%;
  height: 100%;
  .title {
    position: absolute;
    height: 47px;
    left: 72px;
    top: 72px;
    color: #fff;
    letter-spacing: 2px;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 47px;
    z-index: 999;
  }
  .cascader-home {
    position: absolute;
    left: 72px;
    top: 175px;
    z-index: 999;
  }
}
</style>

<template>
  <div class="cascader">
    <div class="active-line">
      <dv-decoration-4 style="width: 5px; height: 130px; z-index: 9999" />
      <img src="../../assets/img/icon/cascader/Vector37.png" alt="" />
    </div>
    <div class="search">搜索</div>
    <div v-for="item in treeData" :key="item.label">
      <div class="cascader-1" @click="checked(item)">
        <img src="../../assets/img/icon/cascader/Vector28.png" />
        <div class="cascader-1-main">
          <div>{{ item.label + "(" + item.children.length + ")" }}</div>
          <i
            :class="item.checked ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
          ></i>
        </div>
      </div>
      <div
        v-for="item2 in item.children"
        :key="item2.label"
        v-show="item.checked"
      >
        <div class="cascader-2" @click="checked(item2)">
          <div class="cascader-2-main">
            {{ item2.label + "(" + item2.children.length + ")" }}
            <i
              :class="item2.checked ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
            ></i>
          </div>
        </div>
        <div
          v-for="item3 in item2.children"
          :key="item3.label"
          v-show="item2.checked"
        >
          <div class="cascader-3" @click="checked(item3)">
            <div class="cascader-3-main">
              {{ item3.label + "(" + item3.children.length + ")" }}
              <i
                :class="
                  item3.checked ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
                "
              ></i>
            </div>
          </div>
          <div
            :class="[
              'cascader-4',
              item4.label === activeLabel ? 'active-label' : '',
            ]"
            v-for="item4 in item3.children"
            :key="item4.label"
            v-show="item3.checked"
            @click="checked2(item4)"
          >
            <div class="quadrate"></div>
            <div class="cascader-4-main">
              {{ item4.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cascader",
  props: {
    data: [],
  },
  data() {
    return {
      treeData: [],
      activeLabel: "",
    };
  },
  methods: {
    checked(item) {
      if (item.children.length == 0) {
        return;
      }
      item.checked = !item.checked;
      // this.treeData[0].checked = !this.treeData[0].checked
    },
    checked2(item) {
      this.activeLabel = item.label
    },
  },
  created() {
    console.log(this.$parent.data);
    this.treeData = this.$parent.data;
  },
};
</script>

<style scoped lang="scss">
.cascader {
  position: relative;
  width: 268px;
  .search {
    width: 268px;
    height: 24px;
    line-height: 24px;
    background-color: #1f1f1f;
    color: #ccc;
    font-size: 14px;
  }
  .cascader-1 {
    display: flex;
    margin-top: 20px;
    .cascader-1-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 215px;
      height: 24px;
      background: #38393e;
      padding: 2px;
      margin-left: 12px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
  }
  .cascader-2 {
    display: flex;
    justify-content: end;
    margin-top: 15px;
    .cascader-2-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 197px;
      height: 24px;
      background: #1b1b1b;
      padding: 2px;
      margin-left: 55px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
  }
  .cascader-3 {
    display: flex;
    justify-content: end;
    margin-top: 15px;
    .cascader-3-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 179px;
      height: 24px;
      background: #1b1b1b;
      padding: 2px;
      margin-left: 72px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
  }
  .cascader-4 {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 15px;
    .quadrate {
      width: 10px;
      height: 10px;
      background-color: #fff;
      margin-left: 35px;
    }
    .cascader-4-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 197px;
      height: 24px;
      background: #1b1b1b;
      padding: 2px;
      margin-left: 10px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
  }
  .active-label {
    .quadrate {
      background-color: #10f492;
    }
    .cascader-4-main {
      color: #10f492;
    }
  }
  .active-line {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: -10px;
    img {
      margin-top: 10px;
      margin-left: 8px;
    }
  }
}
</style>
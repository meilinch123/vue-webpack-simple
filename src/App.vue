<template>
  <div id="app">

    <div class="custom-item">

      <label>Button:</label> 
      <custom-button class="custom-btn" @click="onClick">确定</custom-button>
      <custom-button class="custom-btn" @click="onClick" bgcolor="#409eff" color="#fff">确定</custom-button>
      <custom-button class="custom-btn" @click="onClick" bgcolor="#67c23a" color="#fff">成功</custom-button>
      <custom-button class="custom-btn" @click="onClick" bgcolor="#e6a23c" color="#fff">警告</custom-button>
      <custom-button class="custom-btn" @click="onClick" bgcolor="#f56c6c" color="#fff">危险</custom-button>
    </div>
    
    <div class="custom-item">
      <label>Input: </label>
      <custom-input
      v-model="input1"
      placeholder="请输入信息">
      </custom-input>

      <custom-input
        v-model="input2"
        placeholder="请输入信息">
      </custom-input>

      <custom-input
        placeholder="输入框禁用"
        :disabled="inputDisabled">
      </custom-input>
    </div>

  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      input1: '',
      input2: '这是默认值',
      inputDisabled: true,
    }
  },
  methods: {
    onClick: function (e) {
      console.log('click', e);
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-btn {
  margin: 10px 6px;
}
.custom-item {
  display: flex;
  align-items: center;
  label {
    width: 100px;
    display: inline-block;
  }
}
</style>
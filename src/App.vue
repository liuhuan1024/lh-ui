<template>
  <div id="app">
    <div class="row">
      <lh-button type="primary" @click="visible = true"
        >打开dialog窗口</lh-button
      >
      <lh-button
        icon="lh-icon-aixin"
        plain
        round
        circle
        type="primary"
      ></lh-button>
      <lh-button
        icon="lh-icon-aixin"
        plain
        round
        circle
        type="info"
      ></lh-button>
      <lh-button
        icon="lh-icon-aixin"
        plain
        round
        circle
        type="warning"
      ></lh-button>
      <lh-button
        icon="lh-icon-aixin"
        plain
        round
        circle
        type="danger"
      ></lh-button>
    </div>
    <lh-dialog :visible.sync="visible" width="500px" top="10vh" title="友情提示：">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <lh-button type="primary" @click="visible = false">提交</lh-button>
        <lh-button @click="visible = false">取消</lh-button>
      </template>
    </lh-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .lh-button {
    margin-right: 20px;
  }
}
</style>

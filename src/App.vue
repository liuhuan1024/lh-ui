<template>
  <div id="app">
    <div class="row">
      <lh-button @click="fn">按钮</lh-button>
      <lh-button type="primary">按钮</lh-button>
      <lh-button type="info">按钮</lh-button>
      <lh-button type="warning">按钮</lh-button>
      <lh-button type="danger">按钮</lh-button>
    </div>
    <div class="row">
      <lh-button>按钮</lh-button>
      <lh-button plain type="primary">按钮</lh-button>
      <lh-button plain type="info">按钮</lh-button>
      <lh-button plain type="warning">按钮</lh-button>
      <lh-button plain type="danger">按钮</lh-button>
    </div>
    <div class="row">
      <lh-button>按钮</lh-button>
      <lh-button plain round type="primary">按钮</lh-button>
      <lh-button plain round type="info">按钮</lh-button>
      <lh-button plain round type="warning">按钮</lh-button>
      <lh-button icon="lh-icon-aixin" plain round type="danger">按钮</lh-button>
    </div>
    <div class="row">
      <lh-button>按钮</lh-button>
      <lh-button plain round circle type="primary">按钮</lh-button>
      <lh-button plain round circle type="info">按钮</lh-button>
      <lh-button plain round circle type="warning">按钮</lh-button>
      <lh-button plain round circle type="danger">按钮</lh-button>
    </div>
    <div class="row">
      <lh-button icon="lh-icon-aixin"></lh-button>
      <lh-button icon="lh-icon-aixin" plain round circle type="primary"></lh-button>
      <lh-button icon="lh-icon-aixin" plain round circle type="info"></lh-button>
      <lh-button icon="lh-icon-aixin" plain round circle type="warning"></lh-button>
      <lh-button icon="lh-icon-aixin" plain round circle type="danger"></lh-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn () {
      console.log('123')
    }
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

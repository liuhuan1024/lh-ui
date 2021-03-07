<template>
  <transition name="dialog-fabe">
    <div class="lh-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="lh-dialog" :style="{ width: width, marginTop: top }">
        <div class="lh-dialog_header">
          <slot name="title">
            <!-- 将span放到slot内，这样不仅可以定义title文本，还可以定义样式等 -->
            <span class="lh-dialog_title">
              {{ title }}
            </span>
          </slot>
          <button class="lh-dialog_headerbtn" @click="handleClose">
            <i class="lh-icon-shanchu"></i>
          </button>
        </div>
        <div class="lh-dialog_body">
          <!-- 内容可能是除span以外的其他内容，比如列表等，所以在这里使用插槽，并且不规定插槽内具体的标签 -->
          <!-- 并且在这里使用匿名插槽，使用匿名插槽的好处就是不用指定名称，这样在不使用<template v-slot>指定插槽内容的时候，也可以自定义内容 -->
          <slot></slot>
        </div>
        <div class="lh-dialog_footer" v-if="$slots.footer">
          <!-- 如果footer不传递内容，则不显示footer -->
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LhDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '80%'
    },
    top: {
      type: String,
      default: '20vh'
    },
    isShow: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.lh-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .lh-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .lh-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .lh-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .lh-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 20px 10px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .lh-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fabe-enter-active {
  animation: fabe 0.3s;
}
.dialog-fabe-leave-active {
  animation: fabe 0.3s reverse;
}
@keyframes fabe {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>

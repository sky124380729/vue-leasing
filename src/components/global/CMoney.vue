/*
* 公用input转千分位组件
*
*/

<template>
    <div class="money_input_box" :class="[align,{'inline-block':inline}]">
        <el-input ref="realInput" v-show="!convertShow" :class="className" :size="size" :disabled="disabled" :placeholder="placeholder" :value="value" type="number"
                  @blur="convertShow = true" @input.native="$emit('input',$event.target.value)"></el-input>
        <el-input v-show="convertShow" :class="className" :size="size" :disabled="disabled" :placeholder="placeholder" @focus="realShow" v-model="convertedMoney"
                  :max="max"></el-input>
    </div>
</template>

<script>

import accounting from 'accounting'
export default {
    name: 'CMoney',
    props: {
        // v-model的绑定值，不用多提
        value: {
            required: false
        },
        // 样式名称
        className: {
            type: String,
            required: false
        },
        // 占位符
        placeholder: {
            type: String
        },
        // 是否可编辑
        disabled: {
            type: Boolean,
            default: false
        },
        // 大小
        size: {
            type: String,
            default: 'large'
        },
        initial: {
            type: [Number, String],
            default: ''
        },
        // 是否可清除(暂未支持)
        clearable: {
            type: Boolean,
            required: false
        },
        // 对齐方式
        align: {
            type: String, // ['left','center','right']
            required: false,
            default: 'left'
        },
        // 是否显示小数点
        point: {
            type: Boolean,
            default: false
        },
        // 是否是inline-block
        inline: {
            type: Boolean,
            default: false
        },
        // 输入框最大数值
        max: {
            type: Number
        }
    },
    data() {
        return {
            convertShow: true
        }
    },
    computed: {
        convertedMoney() {
            return (this.value || this.value === 0) ? accounting.formatMoney(this.value, '', String(this.value).includes('.')) : this.initial
        }
    },
    methods: {
        realShow() {
            this.convertShow = false
            this.$nextTick(() => {
                this.$refs['realInput'].focus()
            })
        }
    }
}
</script>

<style lang="scss">
.money_input_box {
  display: block;
  .el-input__inner {
    text-align: right;
  }
  &.inline-block {
    display: inline-block !important;
  }
  &.left .el-input__inner {
    text-align: left;
  }
  &.right .el-input__inner {
    text-align: right;
  }
  &.center .el-input__inner {
    text-align: center;
  }
  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    text-align: left;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    text-align: left;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    text-align: left;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    text-align: left;
  }
}
</style>

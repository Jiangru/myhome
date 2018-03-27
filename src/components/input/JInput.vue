<template lang="pug">
  div(:class="wrapClasses")
    template(v-if="type !== 'textarea'")
      input(
        :type="type"
        :placeholder="placeholder"
        :class="inputClass"
        v-model="value"
      )
</template>
<script>
import { oneOf } from '../../libs/utils'
const prefixCls = 'j-input'
export default {
  name: 'j-input',
  data () {
    return {
      value: ''
    }
  },
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['text', 'textarea'])
      },
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'enter something'
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large'])
      }
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size
        }
      ]
    },
    inputClass () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ]
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>


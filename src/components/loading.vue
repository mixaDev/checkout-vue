<template>
  <div :class="className">
    <div v-if="backdrop" class="f-loading-backdrop" />
    <div v-if="showCustom" class="f-loading-custom" :style="style" />
    <div v-else class="f-loading-loader">
      <f-svg name="sota" class="f-loading-item" />
      <f-svg name="sota" class="f-loading-item" />
      <f-svg name="sota" class="f-loading-item" />
    </div>
  </div>
</template>

<script>
import FSvg from '@/components/svg'
import { mapState } from '@/utils/store'
import { PROP_TYPE_BOOLEAN } from '@/constants/props'
import { makeProp } from '@/utils/props'

export default {
  components: {
    FSvg,
  },
  props: {
    backdrop: makeProp(PROP_TYPE_BOOLEAN, false),
  },
  computed: {
    ...mapState('options', ['loading']),
    className() {
      return [
        'f-loading',
        {
          'f-loading-wrapper': this.backdrop,
        },
      ]
    },
    showCustom() {
      return this.loading
    },
    style() {
      return {
        'background-image': `url("${this.loading.replace(/"/g, "'")}")`,
      }
    },
  },
}
</script>

<template>
  <div>
    <f-form-group
      v-for="field in list"
      :key="field.name"
      v-bind="field"
      v-model="params.form[field.name]"
    />
  </div>
</template>

<script>
import { mapState } from '@/utils/store'
import { PROP_TYPE_ARRAY } from '@/constants/props'
import { makeProp } from '@/utils/props'

export default {
  props: {
    fields: makeProp(PROP_TYPE_ARRAY, []),
  },
  computed: {
    ...mapState(['params']),
    list() {
      return this.fields.map(this.parseField)
    },
  },
  methods: {
    parseField({ label, placeholder, name, type, validate }) {
      return {
        name,
        description: placeholder ? label : '',
        label: placeholder ? placeholder : label,
        component: type === 'date' ? 'date' : 'input',
        rules: this.parseValidate(validate),
        autocomplete: 'on',
      }
    },
    parseValidate(validate) {
      if (!validate) return ''

      const map = {
        min_length: 'min',
        max_length: 'max',
      }
      return validate
        .split(';')
        .map(item => {
          let [name] = item.split(':')

          return item.replace(name, map[name] || name)
        })
        .join('|')
    },
  },
}
</script>

<template>
  <div>
    <div class="f-system">
      <f-icon :name="logo" :type="$route.params.method" class="f-system-icon" />
      <div class="f-system-name">{{ name }}</div>

      <div>{{ iban }}</div>
      <f-button-close class="f-system-close" @click="goMethod" />
    </div>
    <div class="f-bank-desc" v-text="$t('bank_desc')" />
    <div class="f-container-sm">
      <f-fields-bank :fields="form.fields" />
      <f-fields-customer />
      <f-fields-button />
      <f-fields-user />
      <f-offer />
      <f-button-pay />
    </div>
  </div>
</template>

<script>
import FIcon from '@/components/icon'
import { FButtonClose } from '@/components/button/button-close'
import FFieldsBank from '@/components/fields/bank'
import FFieldsCustomer from '@/components/fields/customer'
import FFieldsButton from '@/components/fields/button'
import FFieldsUser from '@/components/fields/user'
import FOffer from '@/components/offer'
import FButtonPay from '@/components/button/button-pay'
import { mapState } from '@/utils/store'

export default {
  components: {
    FIcon,
    FButtonClose,
    FFieldsBank,
    FFieldsCustomer,
    FFieldsButton,
    FFieldsUser,
    FOffer,
    FButtonPay,
  },
  data() {
    return {
      name: '',
      iban: '',
      logo: '',
      form: {},
    }
  },
  computed: {
    ...mapState(['tabs']),
  },
  watch: {
    $route: 'initSystem',
  },
  created() {
    this.initSystem()
  },
  methods: {
    goMethod() {
      this.$router.push({ name: this.$route.params.method }).catch(() => {})
    },
    initSystem() {
      let { name, iban, logo, form } =
        this.tabs[this.$route.params.method][this.$route.params.system]

      this.name = name
      this.iban = iban
      this.logo = logo
      this.form = form || {}
    },
  },
}
</script>

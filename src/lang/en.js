import countries from '@umpirsky/country-list/data/en/country.json'
import { messages as validateMessages } from 'vee-validate/dist/locale/en'

export const messages = Object.assign({}, countries, {
  card: 'Payment by card',
  card_number: 'Card number',
  card_number_p: 'XXXX XXXX XXXX XXXX',
  expiry_date: 'Expiry date',
  expiry_date_p: 'MM/YY',
  cvv2: 'CVV2',
  cvv2_p: 'XXX',
  cvv2_question: '{0} digits on the back of the card',
  email: 'Email',
  email_p: 'please enter your email',

  regular: 'Regular payment',
  regular_every: 'Periodicity',
  regular_every_p: '',
  regular_period: 'Interval',
  regular_amount: 'Regular payment amount',
  regular_amount_p: '',
  regular_start_time: 'Begin with',
  day: 'Day',
  week: 'Week',
  month: 'Month',

  emoney: 'Emoney',
  emoney_t: 'Choose the payment service from the list:',
  ibank: 'Internet banks',
  ibank_t: 'Select your bank:',
  trustly: 'Internet banks',
  trustly_t: 'Select your bank:',
  default_country: 'Choose your country or region',
  system_search: 'or start typing your',
  system_search_p: "bank's name, IBAN, BLZ",
  load_more: 'Load more...',
  cash: 'Cash',
  cash_t: 'What will you pay?',

  sepa: 'SEPA Direct Debit',
  sepa_t: 'Provide your bank account details',
  sender_name: 'Name',
  sender_name_p: '',
  sender_familyName: 'Surname',
  sender_familyName_p: '',
  bic: 'BIC',
  bic_p: '',
  iban: 'IBAN',
  iban_p: '',

  info: 'Order information',
  amount: 'Order amount:',
  fee: 'Commission:',
  methods: 'Payment methods',
  methods_m: 'Select a payment method',
  fast: 'Quick access to payment methods:',
  offer: 'offer',
  offer_t:
    'I agree with the <a href="{0}" target="_blank">offer conditions </a>',
  other: 'Other methods',
  declined: 'Payment is declined',
  approved: 'Payment is approved',
  pending: 'Your payment is being processed',
  number_payment: '№ of payment in {0}:',
  payment_system: 'payment system',
  continue: 'Continue',
  cancel: 'Cancel',
  verification_t: 'Card verification',
  verification_code_d: 'Amount is hold on your credit card account',
  verification_code: 'Please enter verification code',
  verification_code_p: '',
  verification_amount_d:
    'a random amount has been temporarily blocked on your card. To confirm that you are owner of the card - contact the bank, that issued it, to clarify this amount or check it by yourself through the online-banking service',
  verification_amount: 'Enter the verification amount',
  verification_amount_p: '',
  pay: 'Pay now {0} {1}',

  p24: 'Приват24',
  platba24: 'Platba24',
  raiffeisen: 'Raiffeisen Bank Aval',
  paypal: 'PayPal',
  qiwi: 'QIWI',
  webmoney: 'WebMoney',
  yamoney: 'Yandex.Money',
  liqpay: 'LiqPay',

  ru: 'Русский',
  en: 'English',
  uk: 'Українською',
  lv: 'Latviešu',
  fr: 'Français',
  cs: 'Čeština',
  sk: 'Slovenský',

  customer_name: 'Customer name',
  customer_address: 'Customer address',
  customer_zip: 'Customer zip',
  customer_city: 'Customer city',
  customer_country: 'Customer country',
  customer_state: 'Customer state',
  customer_phonemobile: 'Phone mobile',
  customer_email: 'Email',

  back: 'Back',
  submit3ds_title: 'Payment was not completed successfully',
  submit3ds_text: 'Please try again',
  submit3ds_submit: 'Repeat payment',
  submit3ds_wait: 'payment will be repeated in {0} sec.',
})

export const validate = Object.assign({}, validateMessages, {
  customer_field: field => `The ${field} field format is invalid.`,
  phone: field => `The ${field} field format is invalid.`,
  numrange: field => `Transfer amount limit exceeded.`,
  ccard: field => `The ${field} field format is invalid.`,
})

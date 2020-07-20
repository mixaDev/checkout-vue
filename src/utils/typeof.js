export const isExist = obj => typeof obj !== 'undefined' && obj !== null

export const isFunction = obj => typeof obj === 'function'

export const isNumber = obj => typeof obj === 'number'

export const isString = obj => typeof obj === 'string'

export const isBoolean = obj => typeof obj === 'boolean'

export const isObject = obj =>
  obj !== null && !Array.isArray(obj) && typeof obj === 'object'

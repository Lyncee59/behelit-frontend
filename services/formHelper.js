import { emailRegex } from './regex'

export const required = value => value ? undefined : "Required"

export const isEmail = value => emailRegex.test(value) ? undefined : "Invalid email"

'use strict'

// eslint-disable-next-line
const files = require.context('.', true, /\.\/[a-z]+\/Base[a-z]+\.vue/i)
const components = []

files.keys().forEach(key => {
	components.push(files(key).default)
})

export default components

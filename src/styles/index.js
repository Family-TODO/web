/* eslint-disable */
'use strict'

/** @see https://webpack.js.org/guides/dependency-management/ */
const files = require.context('./', true, /\.scss$/)

const baseFiles = require.context('../components/base', true, /\.scss$/)

// Execute files
files.keys().forEach(key => files(key))
baseFiles.keys().forEach(key => baseFiles(key))

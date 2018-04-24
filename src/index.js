const fs = require('fs')
const commander = require('commander')

commander
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-p, --pano', 'make panos by normal config')
  .option('-t, --tour', 'make tours by normal config')
  .option('-f, --flat', 'make panos by flat config, only work with --pano')
  .option('-m, --multires', 'make panos/tours by multires config')
  .option('-v, --vr', 'make tours by vr config, only word with --tour')
  .option('-c, --config <config file>', 'specify your custom config')
  .parse(process.argv)


const type = (commander.pano || !commander.tour) ? 'pano' : 'tour'

const defaultConfig = `${type}-`

const config = commander.config || defaultConfig

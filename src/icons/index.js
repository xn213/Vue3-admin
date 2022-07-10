import SvgIcon from '@/components/SvgIcon'

const svgRequire = require.context('./svg', false, /\.svg$/)

console.log(svgRequire.keys())
svgRequire.keys().forEach(svgIcon => {
  svgRequire(svgIcon)
})

export default app => {
  app.component('svg-icon', SvgIcon)
}

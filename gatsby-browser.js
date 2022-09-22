const React = require('react')

exports.wrapRootElement = ({
                             element,
                             props,
                           }) => {
  console.log('🚀 >>>> file:gatsby-browser method:wrapRootElement line:5 -----',)
  return (<>{element}</>)
}

exports.wrapPageElement = ({
                             element,
                             props,
                           }) => {
  console.log('🚀 >>>> file:gatsby-browser method:wrapPageElement line:12 -----',)
  return (<>{element}</>)

}

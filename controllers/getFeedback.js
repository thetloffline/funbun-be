const domain = require('../domain/domain')

function getFeedback () {
  return domain.feedbackArray
  /* domain.provideFeedbackStream.subscribe(
    aggregatedDataArr => console.log('aggregatedDataArr::::::::', aggregatedDataArr),
    err => console.error(err),
    () => console.log(' completed completed completed')
     )
    return aggregatedDataArr*/
  }
  
  module.exports = { getFeedback: getFeedback }
const Subject = require('rxjs').Subject
const feedbackStream$ = new Subject()
const cafeNameStream$ = new Subject()
const feedbackArrayStream$ = new Subject()
let feedbackArray = []
let cafeArray = []


function validateCafeName (cafe) {
  // console.log(cafeArray)
  for (let i = 0; i < cafeArray.length; i++) {
    if (cafe.name === cafeArray[i].name && cafe.address === cafeArray[i].address) {
  //    console.log('LEIDSIN', cafeArray[i])
      cafe = cafeArray[i]
      cafeNameStream$.next(cafe._id)
    } else {
 //     console.log('EI leidnud')
      cafeNameStream$.next(cafe)
    }
  }
  cafeArray.push(cafe)
}

function provideCafeNames (cafeArr) {
  for (let i = 0; i < cafeArr.length; i++) {
  } 
}

function validateFeedback (feedback) {
  // console.log('got new feedback', feedback)
  // do validation and stuff here
  
  const cafe = feedback.cafe;
  validateCafeName(cafe)
  
  feedbackArray.push(feedback)
  // create a stream
  feedbackStream$.next(feedback)
}

// get data from db
function provideFeedback (feedbackArr) {
  // feedbackArrayStream$.next(feedbackArr)
  
  for (let i = 0; i < feedbackArr.length; i++) {
    const feedback = feedbackArr[i];
    validateFeedback(feedback)
  } 
}

module.exports = {
  validateFeedback: validateFeedback,
  validateCafeName: validateCafeName,
  provideFeedback: provideFeedback,
  provideCafeNames: provideCafeNames,
  feedbackStream: feedbackStream$,
  cafeNameStream: cafeNameStream$,
  feedbackArray: feedbackArray,
  provideFeedbackStream: feedbackArrayStream$
} 
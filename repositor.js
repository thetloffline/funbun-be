const domain = require('./domain/domain')
const Cake = require('./models/cake')
const Cafe = require('./models/cafe')
const Feedback = require('./models/feedback')

 async function initialize () {
    // retrieve all feedback data from db and create object array
    
    const allCakes = await Cake.find({})
    const allCafes = await Cafe.find({})
    const allFeedback = await Feedback.find({})


    domain.provideFeedback(allFeedback)
    domain.provideCafeNames(allCafes)
    
    // subscribe after providing feedback
    domain.cafeNameStream.subscribe(async cafe => {
        if (!cafe.name) {
            console.log('tere')
            
          console.log('newCake', newCake)
        } else {
            
        }
    })
    domain.feedbackStream.subscribe(async feedback => {
        // save new feedback to db
// console.log(feedback)
        //console.log('feedback', feedback)
        const newFeedback = {
            looks: feedback.looks,
            taste: feedback.taste,
            bun: feedback.bun,
            comment: feedback.comment
        }
        
        const newCake = {
            price: feedback.cake.price,
            cafeId: feedback.cake.cafeId
        }
        const newCafe = {
            name: feedback.cafe.name,
            address: feedback.cafe.address
        }

   /*      newFeedback.cafe = newCafe
        newFeedback.cake = newCake
        
        const temp = new Feedback(newFeedback)
        const doc = await Feedback.create(temp)
        console.log('newFeedbacknewFeedback', doc) */

   /*      const item = {
            newCafe,
            newCake,
            newFeedback
        } */

        //console.log(a._id)
       // newCake.cafeId = a._id
       

        const shop = new Cafe(newCafe)
        const product = new Cake(newCake)
        const userFeedback = new Feedback(newFeedback)


        Cafe.create(shop)
        Cake.create(product)
        Feedback.create(userFeedback)
    }) 


}

module.exports = { 
    initialize: initialize
 }
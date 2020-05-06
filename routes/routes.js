const router = require('express').Router()
const cake = require('../controllers/cake')
const cafe = require('../controllers/cafe')
const asyncMiddleware = require('../utils/asyncMiddleware')

// console.log(cakeSchema)
/* GET users listing. */
/* function findCafeName = router.get('/', function(req, res, next) {
  console.log('tere')
  res.send('respond with a resource');
});
 */

router.route('/cafes')
      .post(asyncMiddleware(cafe.create))
      .get(asyncMiddleware(cafe.getFeedback))

router.route('/cake/averageTasteScore')
      .get(asyncMiddleware(cafe.averageTasteScore))




      
router.route('/cakes')
      .post(asyncMiddleware(cake.create))
      .get(asyncMiddleware(cake.getAllCakes))
      
router.route('/cafes')
      //.post(asyncMiddleware(cafe.create))
      .get(asyncMiddleware(cafe.getAllCafes))
      
router.route('/cafes/aggregateCakes')
      .get(asyncMiddleware(cafe.getAggregatedCakes))

router.route('/cafes/:cafeId')
      .get(asyncMiddleware(cafe.getOneCafeAndCakes))

module.exports = router;

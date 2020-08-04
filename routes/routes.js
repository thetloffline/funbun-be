const router = require('express').Router()
const shop = require('../controllers/shop')
const product = require('../controllers/product')
const feedback = require('../controllers/feedback')
const asyncMiddleware = require('../utils/asyncMiddleware')

router.route('/shops')
  .post(asyncMiddleware(shop.create))
  .get(asyncMiddleware(shop.allShops))

router.route('/shop/:id')
  .get(asyncMiddleware(shop.shopById))

router.route('/products')
  .get(asyncMiddleware(product.allProducts))
  .post(asyncMiddleware(product.create))
  
router.route('/product/:id')
  .get(asyncMiddleware(product.productById))
  .put(asyncMiddleware(product.updatePrice))

router.route('/feedback/:id')
  .put(asyncMiddleware(feedback.updateTaste))

  router.route('/feedback')
  .post(asyncMiddleware(feedback.create))
  .get(asyncMiddleware(feedback.allFeedback))

module.exports = router

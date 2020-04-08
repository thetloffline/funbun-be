const path = require('path')
const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const cakes = await loadCakesCollection()
    await cakes.find({}).toArray((err, result) => {
      if (err) throw err
      res.send(result)
    })
  } catch (err) {
    console.log(' failed to load cakes collection. error ::::: ', err)
  }
})

router.post('/', async (req, res) => {
  const db = await loadCakesCollection()
  const file = req.files['files[0]']
  const filePath = path.join(__dirname, '/../public/images/', file.name)
  const fileName = file.name
  const cake = {
    cafeName: req.body.cafeName,
    location: req.body.location,
    price: req.body.price,
    comment: req.body.comment,
    imageFile: fileName,
    looks: req.body.looks,
    taste: req.body.taste,
    bun: req.body.bun,
    createdAt: new Date()
  }
  // validate joi

  /** 
   * move file to accessible location
    */
  await file.mv(filePath, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('file moved to ', filePath)
  })

  await db.insertOne(cake, (err, result) => {
    if (err) {
      res.sendStatus(400)
      return console.log(err)
    }
    console.log('saved to database::: ', cake)
    return res.sendStatus(201)
  })
})

router.put('/:id', async (req, res) => {
  try {
    const cakes = await loadCakesCollection()
    const result = await cakes.updateOne({ _id: new mongodb.ObjectID(req.params.id) }, { $set: { taste: req.body.taste + '' } })
    res.sendStatus(200)
    // await  cakes.updateOne( {_id: req.params.id}, { $set : { "modified" : new Date()} } )
  } catch (err) {
    console.log('failed to update cake with id: ', req.params.id)
    console.log('error :::::: ', err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const cakes = await loadCakesCollection()
    await cakes.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
    res.sendStatus(200)
  } catch (err) {
    console.log('failed to delete cake with id: ', req.params.id)
    console.log('error :::::: ', err)
  }
})

async function loadCakesCollection () {
  try {
    const client = await require('mongodb').MongoClient.connect('mongodb://mongo:27017/express',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    const db = client.db('express').collection('cakes')
    return db
  } catch (err) {
    console.log('failed to connect to Mongodb :::::: ', err)
  }
}

module.exports = router

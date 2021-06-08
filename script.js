const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

let client

;(async () => {try {
    
    const client = await mongo.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const db = client.db('something')

    const collection = db.collection('dogs')

    const items = await collection.find().toArray()

    console.log(items)

    client.close()

} catch (err) {
    console.error(err)
}

})()



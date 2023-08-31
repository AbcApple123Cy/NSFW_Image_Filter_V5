
Orgin link:https://github.com/infinitered/nsfwjs/blob/master/README.md
Comments have related information

The html js is mainly include filter function

With async/await support:
 1 . // Load NSFWJS model
 QUICK: How to use the module
With async/await support:

import * as nsfwjs from 'nsfwjs'

const img = document.getElementById('img')

2.// Load model from my S3.
// See the section hosting the model files on your site.
const model = await nsfwjs.load(

// Classify the image
const predictions = await model.classify(img)
console.log('Predictions: ', predictions)

3.//tell model load that you're dealing with a graph model in options.

Model example - Graph

const model = nsfwjs.load('/path/to/different/model/', { type: 'graph' })


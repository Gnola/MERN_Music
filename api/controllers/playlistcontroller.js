const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlistmodel.js')

// C
router.post('/', (req, res) => {
  Playlist.create(
    req.body,
    (err, createdTest) => {
      res.send(createdTest)
    }
  )
})

// R
router.get('/', (req, res) => {
  Playlist.find(
    {},
    (err, allTests) => {
      res.send(allTests)
    }
  )
})

// U
router.put('/:id', (req, res) => {
  Playlist.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updatedTest) => {
      res.send(updatedTest)
    }
  )
})


// D
router.delete('/:id', (req, res) => {
  Playlist.findByIdAndRemove(
    req.params.id,
    (err, deletedTest) => {
      res.send('You deleted this...')
    }
  )
})

module.exports = router;

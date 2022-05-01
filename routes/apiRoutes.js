// TODO: Require the router and db items needed
const router = require('express').Router();
const { addNotes } = require('../db/store');
const store = require('../db/store')
// const data = require('../db/db.json')
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');
const uuidv1 = require('../helpers/uuid');
// TODO: Set up a get/post/delete methods as responses to the database

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  
  // POST Route for a new UX/UI tip
router.post('/notes', (req, res) => {
    console.log('hello');
  
    const {title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv1(),
      };
  
      readAndAppend(newNote);
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

  router.delete('/notes/:id', (req,res) => {
    // readFromFile()
    console.log(req.params);
  })
// TODO: Export the router

module.exports = router;
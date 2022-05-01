// TODO: require the util and fs needed
// util is a built in feature of node like fs

const util = require('util');
const fs =  require('fs');
// const fsUtils = require('../helpers/fsUtils');
const uuidv1 = require('../helpers/uuid');


//writeTofile
const writeFile = util.promisify(fs.writeFile)
//ReadtoFile
const readFile = util.promisify(fs.readFile)


// TODO: Require the uuid/v1 package in your packagejson
class Store {
    read() {
        return readFile ('utf8');
    }

    write(note) {
        return writeFile (JSON.stringify(note));
    }
// get the notes
getNotes() {
    return this.read().then((notes) => {
        let parseNotes = [].concat(JSON.parse(notes));
        return parseNotes;

    })
}

// add the notes
addNotes(note) {
    const {title, text} = note;
    const newNote = {title,text,id: uuidv1()};
    return this.getNotes()
    .then((notes)=> [...notes, newNote])
    .then((updatedNotes) => this.write(updatedNotes))
    .then(() => newNote);

}
// (maybe) delete the notes
}

module.exports = new Store();

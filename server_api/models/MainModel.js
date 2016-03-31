'use strict';

const fs = require('fs');

class MainModel{
    constructor(){
        this.json = fs.readFileSync('./server_api/books.json')
    }

    get getAllAuthors(){
        return this.json
    }

    get getAllBooks(){
        return this.json
    }
}

module.exports = new MainModel();

'use strict';

const fs = require('fs');

class MainModel{
    constructor(){
        this.json = fs.readFileSync('./server_api/books.json','utf-8')
    }

    getAllAuthors(){
        return this.json
    }

    getAllBooks(){
        return JSON.parse(this.json)
    }
}

module.exports = new MainModel();

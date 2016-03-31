'use strict';

var express = require('express');
var model = require('./../models/MainModel');

class TokenRouter{
    constructor(router){
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes(){
        this.router.get('/books',this.getAllBooks.bind(this))
        this.router.get('/books/:id',this.getOneBook.bind(this))
        this.router.get('/authors',this.getAllAuthors.bind(this))
        this.router.get('/authors/:id',this.getOneAuthor.bind(this))
    }

    getAllBooks(req,res){
        let books = model.getAllBooks();
        res.json(books)
    }

    getAllAuthors(req,res){
        model.getAllAuthors()
    }

    getOneBook(req,res){

    }

    getOneAuthor(req,res){

    }


}

module.exports = TokenRouter;

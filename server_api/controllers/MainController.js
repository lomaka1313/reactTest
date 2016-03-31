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
        let books = model.getAllAuthors()
        res.json(books)
    }

    getOneBook(req,res){
        let book = model.getOneBook(req.params.id);
        res.json(book)
    }

    getOneAuthor(req,res){
        let author = model.getOneAuthor(req.params.id);
        res.json(author)
    }


}

module.exports = TokenRouter;

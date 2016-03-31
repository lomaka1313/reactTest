'use strict';

const fs = require('fs');

class MainModel{
    constructor(){
        this.json = JSON.parse(fs.readFileSync('./server_api/books.json','utf-8'))
    }

    getAllAuthors(){
        let arr = [];
        let json = this.json;
        for(let el of json){
            let author = arr.filter(function (values, item) {
                return (values.author === el.author)
            });
            if (author.length == 0) {
                arr.push({
                    author: el.author,
                    author_id: el.author_id,
                    books: [
                        {
                            name: el.name,
                            id: el.id,
                            genre: el.genre
                        }
                    ]
                })
            }else {
                author[0].books.push({
                    name: el.name,
                    id: el.id,
                    genre: el.genre
                })
            }
        }
        return arr
    }

    getOneAuthor(id){
        let author = this.json.filter((val,i)=>{
            return val.author_id===id
        }).map((item)=>{
            return {
                author:item.author,
                author_id:item.author_id
            }
        })[0]
        let books = this.json.filter((val,i)=>{
            return val.author_id===id
        }).map((item)=>{
            return item = {
                id: item.id,
                name: item.name,
                genre: item.genre
            }
        })
        return {author,books}
    }

    getAllBooks(){
        let arr = [];
        let json = this.json;
        for(let el of json){
            let book = arr.filter(function (values, item) {
                return (values.name === el.name)
            });
            if (book.length == 0) {
                arr.push({
                    name: el.name,
                    id: el.id,
                    authors: [
                        {
                            author: el.author,
                            author_id: el.author_id
                        }
                    ]
                })
            }else {
                book[0].authors.push({
                    author: el.author,
                    author_id: el.author_id
                })
            }
        }
        return arr
    }

    getOneBook(id){
        let book = this.json.filter((val,i)=>{
            return val.id===id
        }).map((item)=>{
            return {
                name:item.name,
                id:item.id,
                genre:item.genre
            }
        })[0]
        let authors = this.json.filter((val,i)=>{
            return val.id===id
        }).map((item)=>{
            return item = {
                author: item.author,
                authors_id: item.author_id
            }
        })
        return {book,authors}
    }
}

module.exports = new MainModel();

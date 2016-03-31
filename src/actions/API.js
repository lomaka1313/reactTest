const $ = require('jquery');

let XHR = {
    get: {
        /**
         * @param {function} callback
         */
        books: function(callback) {
            XHR.request('GET', '/api/books', callback);
        },
        /**
         * @param {string} book_id
         * @param {function} callback
         */
        book: function(id,callback) {
            XHR.request('GET', `/api/books/${id}`, callback);
        },

        /**
         * @param {function} callback
         */
        authors: function(callback) {
            XHR.request('GET', '/api/authors', callback);
        },
        /**
         * @param {string} author_id
         * @param {function} callback
         */
        author: function(id,callback) {
            XHR.request('GET', `/api/authors/${id}`, callback);
        },
    },

    /**
     * @param {string}   method
     * @param {string}   name
     * @param {function} callback
     */
    request: function(method, name, callback) {
        $.ajax({
            method,
            url: name,
            contentType:"application/json;charset=UTF-8"
        }).then(callback);
    }
};

export default XHR;
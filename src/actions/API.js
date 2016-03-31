const $ = require('jquery')
console.log($);
let XHR = {
    get: {
        /**
         * @param {JSON} data
         * @param {function} callback
         */
        books: function(callback) {
            XHR.request('GET', '/api/books', callback);
        },

        /**
         * @param {JSON} data
         * @param {function} callback
         */
        authors: function(callback) {
            XHR.request('GET', 'authors', callback);
        }
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
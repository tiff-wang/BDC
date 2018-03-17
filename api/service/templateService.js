function post(req, callback) {
    callback(req)
}

module.exports = {
    post: function(req, callback) {
        post(req, function(response){
            return callback(response)
        })
    }
}

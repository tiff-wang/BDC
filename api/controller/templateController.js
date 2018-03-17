var TemplateService = require('../service/templateService')


function post(req, callback) {
    TemplateService.post(req, function(res) {
        return callback(res)
    })
}


module.exports = {

    /**
     * test post function
     *
     * @param req
     * @param callback
     */
    post: function(req, callback) {
        postEmail(req, function(response){
            return callback(response);
        })
    }
}
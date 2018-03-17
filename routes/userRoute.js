var UserController = require('../api/controller/userController')

module.exports = function(app) {

    app.post('/user', function(req, res) {
        UserController.getPatientData(req, function(user){
            if (user) {
                res.send({
                    'user_found': true,
                    'user': user
                })
            }
            res.send({
                'user_found': false
            })
        })
    })

}
var async = require('async')
var PatientService = require('../service/patientService')

var user = {}

// function determinePainsArea(patient, callback) {
//     if (result.phenotypes)
// }

module.exports = {

    getPatientData: function(req, callback) {

        user.first_name = req.body.first_name
        user.last_name = req.body.last_name

        PatientService.getPatient(user.first_name, user.last_name, function(result) {
            if (result) {
                user.id = result._id
                async.series([
                    function (callback) {
                        console.log('Gucci')
                    },
                    function (callback){
                        console.log('Gucci')
                    }
                ], function () {
                    return callback(user)
                })
            } else {
                return callback(null)
            }
        })
    }

}
var PatientService = require('../service/patientService')

module.exports = {

    getPatientData: function(req, callback) {
        var user = {
            'first_name': req.body.first_name,
            'last_name': req.body.last_name
        }
        PatientService.getPatient(user.first_name, user.last_name, function(result) {
            if (result) {
                user.id = result._id
                return callback(user)
            } else {
                return callback(null)
            }
        })
    }

}
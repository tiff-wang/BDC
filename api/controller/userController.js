var async = require('async')
var PatientService = require('../service/patientService')
var Penotypes = require('../mapping/phenotypes')

var user = {}

function determineDirectPainMapping(patient, callback) {
    var musclePain = false
    var jointPain = false
    async.each(patient.phenotypes, function (phenotype, callback) {
        if (Penotypes.MUSCLE_PAIN.includes(phenotype)) {
            musclePain = true
        }
        if (Penotypes.JOINT_PAIN.includes(phenotype)) {
            jointPain = true
        }
        return callback()
    }, function (err) {
        if (musclePain) {
            return callback('muscle_pain')
        } else if (jointPain) {
            return callback('joint_pain')
        } else {
            return callback(null)
        }
    })
}

function determinePainsArea(patient, callback) {
    determineDirectPainMapping(patient, function(directPain) {
        if (directPain) {
            return callback(directPain)
        } else {
            return callback('Need to use ML Model')
        }
    })
}

module.exports = {

    getPatientData: function(req, callback) {

        user.first_name = req.body.first_name
        user.last_name = req.body.last_name

        PatientService.getPatient(user.first_name, user.last_name, function(result) {
            if (result) {
                user.id = result._id
                async.series([
                    function (callback) {
                        determinePainsArea(result, function(area) {
                            user.pain_area = area
                        })
                        return callback()
                    },
                    function (callback){
                        console.log('Gucci')
                        return callback()
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
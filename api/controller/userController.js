var async = require('async')
var PatientService = require('../service/patientService')
var Phenotypes = require('../mapping/phenotypes')

var user = {}

function determineDirectPainMapping(patient, callback) {
    var musclePain = false
    var jointPain = false
    if(patient.hasOwnProperty('phenotypes')){
        async.each(patient.phenotypes, function (phenotype, callback) {
            if (Phenotypes.MUSCLE_PAIN.includes(phenotype)) {
                musclePain = true
            }
            if (Phenotypes.JOINT_PAIN.includes(phenotype)) {
                jointPain = true
            }
            return callback()
        }, function (err) {
            if (musclePain) {
                return callback('muscle')
            } else if (jointPain) {
                return callback('joint')
            } else {
                return callback(null)
            }
        })
    } else {
        return callback(null)
    }
}

function determineDirectStrengthMapping(patient, callback) {
    if(patient.hasOwnProperty('phenotypes')) {
        if (patient.phenotypes.includes(Phenotypes.STRONG_UPPER)) {
            return callback('upper')
        } else {
            return callback(null)
        }
    } else {
        return callback(null)
    }
}

function determinePainArea(patient, callback) {
    determineDirectPainMapping(patient, function(directPain) {
        if (directPain) {
            return callback(directPain)
        } else {
            return callback('Need to use ML Model')
        }
    })
}

function determineStrengthArea(patient, callback) {
    determineDirectStrengthMapping(patient, function(directStrength) {
        if (directStrength) {
            return callback(directStrength)
        } else {
            return callback('Need to use ML Model')
        }
    })
}

function determineWorkout(user, callback) {

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
                        determinePainArea(result, function(area) {
                            user.pain_area = area
                        })
                        return callback()
                    },
                    function (callback){
                        determineStrengthArea(result, function(area) {
                            user.strength_area = area
                        })
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
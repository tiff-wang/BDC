const ROOT = 'https://api.biogeniq.ca'
var request = require('request')

module.exports = {

    getPatient: function(first_name, last_name, callback) {
        var url = ROOT + '/json/patients?name=' + first_name + ' ' + last_name
        request(url, function (error, response, body) {
            if (error) console.log('error:', error)
            result = JSON.parse(response.body)[0]
            console.log('statusCode:', response && response.statusCode)
            return callback(result)
        })
    }

}
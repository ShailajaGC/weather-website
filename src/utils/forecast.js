const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/fd7cf8255d57e34c488c9b54b3263301/' + lat + ',' + long + '?units=si'
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services!')
        } else if(body.error){
            callback('Unable to find location')
        } else {
            var current = body.currently  
            callback('',body.daily.data[0].summary +  "It is currently " + current.temperature + " degrees out. There is a " + current.precipProbability + "% chances of rain.")
        }
    })
}

module.exports = forecast
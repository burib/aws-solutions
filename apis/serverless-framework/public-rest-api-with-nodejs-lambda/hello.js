'use strict';

module.exports.handler = function (event, context, callback) {
    console.log(event); // Contains incoming request data (e.g., query params, headers and more)

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,GET',
        },
        body: JSON.stringify({ message: 'Hello public-rest-api-with-nodejs-lambda! ISO 8601: ' + new Date().toISOString() }),
    };

    callback(null, response);
};

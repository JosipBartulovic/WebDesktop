module.exports = {
    handle: function(body){
        return new Promise((resolve, reject) => {
            body = JSON.parse(body);
            if(body.Error) reject(body.Error)
            else resolve(body)
        })
    }
}
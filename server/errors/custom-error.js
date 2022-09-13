class CustomError extends Error{
    constructor(message, statusCode) {
        super(message)
        this.statusCode= statusCode
    }
}

const customErrorWrap = (msg, statusCode) => {
    return new CustomError(msg, statusCode)
}


module.exports = {
    customErrorWrap,
    CustomError
}
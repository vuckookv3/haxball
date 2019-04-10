
const isProduction = process.env.NODE_ENV == 'production';

const httpStatusMessage = (status) => {
    switch (status) {
        case 400: return 'Bad Request'
        case 401: return 'Unauthorized'
        case 403: return 'Forbidden'
        case 404: return 'Not Found'
        case 409: return 'Conflict'
        case 422: return 'Unprocessable Entity'
        case 500: return 'Internal Server Error'
        default: return 'Something went wrong. Please try again.';
    }
}

class AppError {
    constructor(status, info, message) {
        this.status = status || 500;
        this.info = info || undefined;
        this.message = message || httpStatusMessage(status);

        if (this.status >= 500) {
            console.error(this)
        }

        if (isProduction && this.status >= 500) {
            this.info = undefined;
        }
    }
}

module.exports = AppError;
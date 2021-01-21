import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string;
}

export default function getValidationErrors(error: ValidationError): Errors {
    const validationErrors: Errors = {};

    error.inner.forEach((element) => {
        validationErrors[element.path] = element.message;
    })

    return validationErrors;
}
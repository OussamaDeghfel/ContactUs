export default function Validation(values: any) {
    const errors = {}

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if(values.firstname === ""){
        errors.firstname = "First Name is required"
    }

    if(values.lastname === ""){
        errors.lastname = "Last Name is required"
    }

    if(values.email === ""){
        errors.email = " Email is required"
    } else if(!emailRegex.test(values.email)){
        errors.email = "Please enter valid email address"
    }

    if(values.message === ""){
        errors.message = "message is required"
    }

    return errors
}
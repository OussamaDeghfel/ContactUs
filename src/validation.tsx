export default function Validation(values: any, radio:any, check: any) {
    const errors = {}

    // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

    if(values.firstname === ""){
        errors.firstname = "This field is required"
    }

    if(values.lastname === ""){
        errors.lastname = "This field is required"
    }

    if(values.email === ""){
        errors.email = "This field is required"
    } 
    else if(!emailRegex.test(values.email)){
        errors.email = "Please enter a valid email address"
    }

    if(values.message === ""){
        errors.message = "This field is required"
    }

    if(!radio){
        errors.radio = "Please select a query type"
    }

    if(!check){
        errors.check = "To submit this form, Please consent to being contacted"
    }

    

    return errors;
}
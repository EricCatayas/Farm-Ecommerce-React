
export function formatErrorMessages(errors) {
    let errorMessage = "Errors:\n";
    for(var key in errors){
        errorMessage += `${key}: ${errors[key]}`
    }
    return errorMessage;
}
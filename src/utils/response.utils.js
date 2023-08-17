
export function formatErrorMessages(errors) {
    let errorMessage = "Errors:\n";
    errors.forEach(function(message, index){
        errorMessage += `${message}\n`;
    })
    return errorMessage;
}

export function formatErrorMessages(errors) {
    let errorMessage = "Validation errors:\n";
    for (const key in errors) {
        errorMessage += `${key}: ${errors[key].join(", ")}\n`;
    }
    return errorMessage;
}
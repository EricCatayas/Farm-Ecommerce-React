
export const convertProductToFormData = (formFields) => {
    const formData = new FormData();

    for (let i = 0; i < formFields.Image_Files.length; i++) {
      formData.append("Image_Files", formFields.Image_Files[i]);
    }

    for (const key in formFields) {
      if (key !== "Image_Files") {
        formData.append(key, formFields[key]);
      }
    }

    return formData;
}

export const formatDate = (date) => {
    const uploadDate = new Date(date);
    const year = uploadDate.getFullYear();
    const month = uploadDate.getMonth() + 1; // Note: getMonth() returns 0-indexed months (0-11)
    const day = uploadDate.getDate();

    return `${month}/${day}/${year}`;
}

export function truncateString(str, length) {
  if (str.length <= length) {
    return str;
  } else {
    return `${str.substring(0, length)}...`;
  }
}
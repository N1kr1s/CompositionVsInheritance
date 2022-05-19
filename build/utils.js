export const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((value) => parseInt(value));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

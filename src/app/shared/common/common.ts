export function validateCompanyName(name: string) {
    const pattern = /[a-zA-Z0-9\\. ]+[a-zA-Z0-9 ]$/; // can change regex with your requirement
    // if validation fails, return error name & value of true
    if (pattern.test(name)) {
        return false;
    }
    return true;
}

export function validatePersonName(name: string) {
    const pattern = /[a-zA-Z\\. ]+[a-zA-Z ]$/; // can change regex with your requirement
    // if validation fails, return error name & value of true
    if (pattern.test(name)) {
        return false;
    }
    return true;
}


function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}
function ValidURL(string) {
    var pattern = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (pattern == null) return false;
    else return true;
}
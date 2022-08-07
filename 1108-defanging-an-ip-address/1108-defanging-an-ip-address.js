/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const newAdd = address.replaceAll(".","[.]")
    return newAdd
};
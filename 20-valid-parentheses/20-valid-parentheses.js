/**
 * @param {string} s
 * @return {boolean}
 */
// use replace
var isValid = function(s) {
	while (true) {
		if (s.indexOf('()') > -1) {
			s = s.replace('()', '')
		} else if (s.indexOf('[]') > -1) {
			s = s.replace('[]', '')
		} else if (s.indexOf('{}') > -1) {
			s = s.replace('{}', '')
		} else {
			return s === ''
		}
	}
};
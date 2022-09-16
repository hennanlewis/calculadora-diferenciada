export const validateExpression = (str: string) =>
	str
		.replace(/(\d*\.)([\d.]+)/g, (_, g1, g2) => g1 + g2.replace(/\./g, "")) // remove all . if the string has more than one
		.replace(/(^\.)/g, "0.") // change string started just by . to 0.
		.replace(/(^0+\.)/g, "0.") // change string started by 0s in a row to just 0
		.replace(/(\.0{1,})([-+/*^])/g, "$2") // change string with x.00000 to x
		.replace(/([+-/*^])\./g, "$10.") // change string with "<operator>." to "<operator>0."
		.replace(/\.([+-/*^])/g, "$1") // change string with ".<operator>" to ".<operator>"
		.replace(/([-+/*^]){2,}/g, "$1") // select just the last <operator> in a row

type Operations = {
	[key: string]: Function
}

export const calculatePostfixFormat = (equation: string[]) => {
	let equationResult = [...equation]

	while (equationResult.length >= 3) {
		const validIndex = Object.keys(operations).map(item => equationResult.indexOf(item)).filter(item => item >= 0)
		const minIndex = Math.min(...validIndex)
		const operator = equationResult[minIndex]
		const calculate = operations[operator]
		const value1 = Number(equationResult[minIndex - 2])
		const value2 = Number(equationResult[minIndex - 1])

		equationResult[minIndex] = calculate(value1, value2)
		equationResult.splice(minIndex - 2, 2)
	}
	return equationResult[0]
}

const operations: Operations = {
	"^": (value1: number, value2: number) => Math.pow(value1, value2),
	"*": (value1: number, value2: number) => value1 * value2,
	"/": (value1: number, value2: number) => value1 / value2,
	"+": (value1: number, value2: number) => value1 + value2,
	"-": (value1: number, value2: number) => value1 - value2
}

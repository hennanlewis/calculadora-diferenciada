type Priority = {
	[key: string]: number
}

export const infixToPostfixFormat = (expression: string): string[] => {
	let normalizedExpression = normalizeExpression(expression)
	let operationsStack: string[] = []
	let operationsStackTop: string
	let output: string[] = []

	normalizedExpression.map(item => {
		if (!isNaN(Number(item))) {
			output.push(item)
			return null
		}

		if (item === "(") {
			operationsStack.push(item)
			return null
		}

		if (item === ")") {
			while (1) {
				operationsStackTop = operationsStack.pop() as string
				output.push(operationsStackTop)

				if (operationsStackTop === "(" || !operationsStackTop) {
					return null
				}
			}
		}

		while (1) {
			operationsStackTop = operationsStack.pop() as string

			if (priorityOrder(item, operationsStackTop)) {
				operationsStack.push(operationsStackTop)
				operationsStack.push(item)
				return null
			}

			output.push(operationsStackTop)

			if (operationsStackTop === "(" || !operationsStackTop) {
				return null
			}
		}
	})

	return output
}

const operatorPriority: Priority = { "^": 3, "*": 2, "/": 2, "+": 1, "-": 1, "(": 0 }

const priorityOrder = (currentOperator: string, operationsStackTop: string) => {
	const operationPriorityValue = operatorPriority[currentOperator]
	const operationsStackTopOperationPriorityValue = operatorPriority[operationsStackTop]

	return (operationPriorityValue > operationsStackTopOperationPriorityValue)
}

const normalizeExpression = (expression: string): string[] => {
	const splitedItens = expression.split(" ")

	return ["(", ...splitedItens, ")"]
}

import { useState } from "react"

import { calculatePostfixFormat } from "./utils/calculatePostfixFormat"
import { infixToPostfixFormat } from "./utils/infixToPostfixFormat"
import { validateExpression } from "./utils/validateExpression"
import { Display } from "./components/Display"
import { Buttons } from "./components/Buttons"

function App() {
	const [displayExpression, setDisplayExpression] = useState("0")
	const [displayValue, setDisplayValue] = useState("0")

	const handleClickButton = (button: string) => {
		if (button === "=") {
			setDisplayExpression((value) => validateExpression(value))
			const validInfixExpression: string = displayExpression.replace(
				/([-+/*^])/g,
				" $1 "
			)
			const postfixExpression = infixToPostfixFormat(validInfixExpression)

			setDisplayValue(calculatePostfixFormat(postfixExpression))
			setDisplayExpression("0")
			return
		}

		if (button === "AC") {
			setDisplayExpression("0")
			setDisplayValue("0")
			return
		}

		if (button === "del") {
			setDisplayExpression((value) =>
				value.length > 1 ? value.slice(0, -1) : "0"
			)
			return
		}

		if (
			displayExpression === "0" &&
			button !== "^" &&
			button !== "+" &&
			button !== "-" &&
			button !== "*" &&
			button !== "/"
		) {
			setDisplayExpression(button)
			return
		}

		setDisplayExpression(displayExpression + button)
	}

	return (
		<div className="flex justify-center items-center h-screen bg-gray-900 font-Quicksand text-white shadow">
			<div className="flex flex-col w-[14rem] bg-gray-800 gap-4 p-2 pt-4 border rounded-2xl">
				<Display
					displayExpression={displayExpression}
					displayValue={displayValue}
				/>
				<Buttons handleClickButton={handleClickButton} />
			</div>
		</div>
	)
}

export default App

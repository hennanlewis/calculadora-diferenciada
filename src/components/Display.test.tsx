import { render, screen } from "@testing-library/react"

import { Display } from "./Display"
import { infixToPostfixFormat } from "../utils/infixToPostfixFormat"

test("check validate expression '1234.+.+.2'", () => {
	render(<Display displayExpression="1234.+.+.2" displayValue="0" />)
	expect(screen.getByText("1234+0+0.2")).toBeInTheDocument()
})

test("check validate expression '0.'", () => {
	const { container } = render(
		<Display displayExpression=".0" displayValue="1" />
	)
	expect(container.querySelector("#display-value")?.textContent).toBe("1")
	expect(container.querySelector("#display-expression")?.textContent).toBe(
		"0.0"
	)
})

test("check validate expression '.0+-*", () => {
	const { container } = render(
		<Display displayExpression=".0+-*" displayValue="2" />
	)
	expect(container.querySelector("#display-value")?.textContent).toBe("2")
	expect(container.querySelector("#display-expression")?.textContent).toBe("0*")
})

test("check validate expression '.0+-*'", () => {
	const { container } = render(
		<Display displayExpression=".0+-*" displayValue="3" />
	)
	expect(container.querySelector("#display-value")?.textContent).toBe("3")
	expect(container.querySelector("#display-expression")?.textContent).toBe("0*")
})

test("check validate expression '000000.0+-*'", () => {
	const { container } = render(
		<Display displayExpression="000000.0+-*" displayValue="4" />
	)
	expect(container.querySelector("#display-value")?.textContent).toBe("4")
	expect(container.querySelector("#display-expression")?.textContent).toBe("0*")
})

test("check validate expression '.000000+-*'", () => {
	const { container } = render(
		<Display displayExpression="000000.0+-*" displayValue="5" />
	)
	expect(container.querySelector("#display-value")?.textContent).toBe("5")
	expect(container.querySelector("#display-expression")?.textContent).toBe("0*")
})

// tests for expression transform
test("output from input '1+2'", () => {
	const infixToPostfixOutput = infixToPostfixFormat("1 + 2").join(" ")
	expect(infixToPostfixOutput).toBe("1 2 +")
})

test("output from input '1-2*3'", () => {
	const infixToPostfixOutput = infixToPostfixFormat("1 - 2 * 3").join(" ")
	expect(infixToPostfixOutput).toBe("1 2 3 * -")
})

test("output from input '(1-2)*3'", () => {
	const infixToPostfixOutput = infixToPostfixFormat("( 1 - 2 ) * 3").join(" ")
	expect(infixToPostfixOutput).toBe("1 2 - 3 *")
})

test("output from input '1+2*3^4-5'", () => {
	const infixToPostfixOutput =
		infixToPostfixFormat("1 + 2 * 3 ^ 4 - 5").join(" ")
	expect(infixToPostfixOutput).toBe("1 2 3 4 ^ * + 5 -")
})

test("output from input '1*(2+3)*(4-5)*6'", () => {
	const infixToPostfixOutput = infixToPostfixFormat(
		"1 * ( 2 + 3 ) * ( 4 - 5 ) * 6"
	).join(" ")
	expect(infixToPostfixOutput).toBe("1 2 3 + * 4 5 - * 6 *")
})

test("output from input '1*2-3*4^5/6+7*8'", () => {
	const infixToPostfixOutput = infixToPostfixFormat(
		"1 * 2 - 3 * 4 ^ 5 / 6 + 7 * 8"
	).join(" ")
	expect(infixToPostfixOutput).toBe("1 2 * 3 4 5 ^ * 6 / - 7 8 * +")
})

test("output from input '11+12'", () => {
	const infixToPostfixOutput = infixToPostfixFormat("11 + 12").join(" ")
	expect(infixToPostfixOutput).toBe("11 12 +")
})

test("output from input '11-12*13'", () => {
	const infixToPostfixOutput = infixToPostfixFormat("11 - 12 * 13").join(" ")
	expect(infixToPostfixOutput).toBe("11 12 13 * -")
})

test("output from input '(11-12)*13'", () => {
	const infixToPostfixOutput =
		infixToPostfixFormat("( 11 - 12 ) * 13").join(" ")
	expect(infixToPostfixOutput).toBe("11 12 - 13 *")
})

test("output from input '11+12*13^14-15'", () => {
	const infixToPostfixOutput = infixToPostfixFormat(
		"11 + 12 * 13 ^ 14 - 15"
	).join(" ")
	expect(infixToPostfixOutput).toBe("11 12 13 14 ^ * + 15 -")
})

test("output from input '11*(12+13)*(14-15)*16'", () => {
	const infixToPostfixOutput = infixToPostfixFormat(
		"11 * ( 12 + 13 ) * ( 14 - 15 ) * 16"
	).join(" ")
	expect(infixToPostfixOutput).toBe("11 12 13 + * 14 15 - * 16 *")
})

test("output from input '11*12-13*14^15/16+17*18'", () => {
	const infixToPostfixOutput = infixToPostfixFormat(
		"11 * 12 - 13 * 14 ^ 15 / 16 + 17 * 18"
	).join(" ")
	expect(infixToPostfixOutput).toBe("11 12 * 13 14 15 ^ * 16 / - 17 18 * +")
})

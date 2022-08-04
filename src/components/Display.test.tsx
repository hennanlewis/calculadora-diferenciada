import { render, screen } from "@testing-library/react"
import { Display } from "./Display"

test("check validate expression '1234.+.+.2'", () => {
	render(<Display displayExpression="1234.+.+.2" displayValue="0" />)
	expect(screen.getByText("1234+0+0.2")).toBeInTheDocument()
})

test("check validate expression '0.'", () => {
	const { container } = render(<Display displayExpression=".0" displayValue="1" />)
	expect(container.querySelector("#display-value")?.textContent).toBe("1")
	expect(container.querySelector("#display-expression")?.textContent).toBe("0.0")
})

test("check validate expression '.0+-*", () => {
	const { container } = render(<Display displayExpression=".0+-*" displayValue="2" />)
	expect(container.querySelector("#display-value")?.textContent).toBe("2")
	expect(container.querySelector("#display-expression")?.textContent).toBe("0*")
})

test("check validate expression '.0+-*'", () => {
	const { container } = render(<Display displayExpression=".0+-*" displayValue="3" />)
	expect(container.querySelector("#display-value")?.textContent).toBe("3")
	expect(container.querySelector("#display-expression")?.textContent).toBe("0*")
})

test("check validate expression '000000.0+-*'", () => {
	const { container } = render(<Display displayExpression="000000.0+-*" displayValue="4" />)
	expect(container.querySelector("#display-value")?.textContent).toBe("4")
	expect(container.querySelector("#display-expression")?.textContent).toBe("0*")
})

test("check validate expression '.000000+-*'", () => {
	const { container } = render(<Display displayExpression="000000.0+-*" displayValue="5" />)
	expect(container.querySelector("#display-value")?.textContent).toBe("5")
	expect(container.querySelector("#display-expression")?.textContent).toBe("0*")
})

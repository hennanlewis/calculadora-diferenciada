import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

const selectedButton = (
	HTMLElementArray: HTMLElement[],
	buttonValue: string
) => {
	return Array.from(HTMLElementArray).filter(
		(item) => item.textContent === buttonValue
	)[0]
}

test("clicked buttons 1-2+3*4^5", async () => {
	const { container } = render(<App />)
	const buttons = screen.getAllByRole("button")
	userEvent.click(selectedButton(buttons, "1"))
	userEvent.click(selectedButton(buttons, "-"))
	userEvent.click(selectedButton(buttons, "2"))
	userEvent.click(selectedButton(buttons, "+"))
	userEvent.click(selectedButton(buttons, "3"))
	userEvent.click(selectedButton(buttons, "*"))
	userEvent.click(selectedButton(buttons, "4"))
	userEvent.click(selectedButton(buttons, "^"))
	userEvent.click(selectedButton(buttons, "5"))
	expect(screen.getByText("1-2+3*4^5")).toBeInTheDocument()
})

test("expression 1-2+3*4^5 result", async () => {
	const { container } = render(<App />)
	const buttons = screen.getAllByRole("button")
	userEvent.click(selectedButton(buttons, "1"))
	userEvent.click(selectedButton(buttons, "-"))
	userEvent.click(selectedButton(buttons, "2"))
	userEvent.click(selectedButton(buttons, "+"))
	userEvent.click(selectedButton(buttons, "3"))
	userEvent.click(selectedButton(buttons, "*"))
	userEvent.click(selectedButton(buttons, "4"))
	userEvent.click(selectedButton(buttons, "^"))
	userEvent.click(selectedButton(buttons, "5"))
	userEvent.click(selectedButton(buttons, "="))
	expect(screen.getByText("3071")).toBeInTheDocument()
})

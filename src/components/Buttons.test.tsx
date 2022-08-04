import { render, screen } from "@testing-library/react"
import { Buttons } from "./Buttons"

test("check validate expression '1234.+.+.2'", () => {
	render(<Buttons />)
	const buttonsElements = screen.getAllByRole("button")
	expect(buttonsElements.length).toBe(20)
})

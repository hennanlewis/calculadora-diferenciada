import { render, screen } from "@testing-library/react"
import App from "./App"

test("render all buttons", async () => {
	render(<App />)
	const buttons = screen.getAllByRole("button")
	expect(buttons.length).toBe(20)
})

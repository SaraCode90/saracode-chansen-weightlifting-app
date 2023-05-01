import React from "react"
import { render } from "@testing-library/react"
import Counter from "./Counter"

describe ("Counter", () => {
    test("renders without crashing", () => {
        const { container } = render(<Counter />)
        expect(container.firstChild).toBeDefined()
    })
})
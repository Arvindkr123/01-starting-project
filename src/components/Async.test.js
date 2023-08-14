import { render, screen } from "@testing-library/react"
import Async from "./Async"
describe('Async component', () => {
    test('render posts if requests succeds', async () => {
        render(<Async />)
        const listElements = await screen.findAllByRole('listitem');
        expact(listElements).not.toHaveLength(0);
    })
})
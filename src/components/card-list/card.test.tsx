import { render, screen } from "@testing-library/react";
import Card from "./card.component";

const myMonster = {
    id: "123",
    name: "Daniel",
    email: "hey@me.com"
}

test("Card Component", () => {
    // my tests
    render(<Card monster={myMonster} />);
    // expect(screen.)
})

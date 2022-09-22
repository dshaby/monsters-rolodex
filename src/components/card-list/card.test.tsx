import { render } from "@testing-library/react";
import Card from "./card.component";

const myMonster = {
    id: "123",
    name: "Daniel",
    email: "hey@me.com"
}

test("Card Component renders", () => {
    // my tests
    const {asFragment} = render(<Card monster={myMonster} />);
    // expect((screen.getByRole("div").length).)
    expect(asFragment()).toMatchSnapshot();
});

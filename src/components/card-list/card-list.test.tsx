import {render} from "@testing-library/react";
import CardList from "./card-list.component";

const mockMonsters = [{
    id: "1",
    name: "Daniel",
    email: "hey@me.com"
}
]

test("Card-List Component", () => {
    const {asFragment} = render(<CardList monsters={mockMonsters}/>);
    expect(asFragment()).toMatchSnapshot();
})
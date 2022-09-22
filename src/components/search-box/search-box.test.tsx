import {render} from "@testing-library/react";
import SearchBox from "./search-box.component";

test("Card-List Component", () => {
    const {asFragment} = render(<SearchBox className="Sample Class" placeholder="Hey" value="me" onChangeHandler={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
});
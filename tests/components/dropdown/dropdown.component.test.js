import { render, screen } from "@testing-library/react";
import Dropdown from "../../../src/components/dropdown/dropdown.component";

describe("Dropdown component", () => {

    const testTitle = "test";
    const testName = "test";
    const testArgs =  [
        {id:1, name:"element 1"}, 
        {id:2, name:"element 2"},
        {id:3, name:"element 3"}
    ];

    it("renders dropdown correctly", () => {
        render(<Dropdown args={testArgs} selectTitle={testTitle} name={testName} onChange={() => {}} />);

        testArgs.forEach((element) => {
            expect(screen.getByText(element.name));
        })

        expect(screen.getByText(testTitle)).toBeInTheDocument();
    });
});
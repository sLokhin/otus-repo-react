import { mount } from "enzyme";
import { getPixelButton } from "./PixelButton";

[
  {
    fn: getPixelButton,
    title: "JSX version",
  },
].forEach((item) => {
  const getPixelButton = item.fn;
  describe(`Single PixelButton: ${item.title}`, () => {
    it("render default pixel button", () => {
      expect(
        mount(
          getPixelButton({
            onClick: jest.fn(),
          })
        ).text()
      ).toEqual("No description");
    });

    it("render filled pixelButton", () => {
      expect(
        mount(
          getPixelButton({
            filled: "1",
            onClick: jest.fn(),
          })
        ).text()
      ).toBe("No description");
    });

    it("calls onClick callback on default pixelButton", () => {
      const onClick = jest.fn();
      const wrapper = mount(
        getPixelButton({
          onClick,
        })
      );
      wrapper.simulate("click");
      expect(onClick).toHaveBeenCalled();
    });
  });
});

import { mount } from "enzyme";
import { getPixel } from "./Pixel";

[
  {
    fn: getPixel,
    title: "JSX version",
  },
].forEach((item) => {
  const getPixel = item.fn;
  describe(`Single Pixel: ${item.title}`, () => {
    it("render default pixel", () => {
      expect(
        mount(
          getPixel({
            onClick: jest.fn(),
          })
        ).html()
      ).toBe(
        '<button class="pixel" style="display: inline-flex; justify-content: center; align-items: center; width: 120px; height: 50px; background-color: gainsboro; margin: 2px 2px; text-align: center;">Not clicked yet</button>'
      );
    });

    it("render filled pixel", () => {
      expect(
        mount(
          getPixel({
            filled: "1",
            onClick: jest.fn(),
          })
        ).html()
      ).toBe(
        '<button class="pixel" style="display: inline-flex; justify-content: center; align-items: center; width: 120px; height: 50px; background-color: grey; margin: 2px 2px; text-align: center;">Not clicked yet</button>'
      );
    });

    it("calls onClick callback on default pixel", () => {
      const onClick = jest.fn();
      const wrapper = mount(
        getPixel({
          onClick,
        })
      );
      wrapper.simulate("click");
      expect(onClick).toHaveBeenCalled();
    });

    it("calls onClick callback with params x, y", () => {
      const onClick = jest.fn();
      const x = 12;
      const y = 15;
      const wrapper = mount(
        getPixel({
          onClick,
          x,
          y,
        })
      );
      wrapper.simulate("click");
      expect(onClick).toHaveBeenCalledWith(x, y);
    });
  });
});

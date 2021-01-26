import { mount } from "enzyme";
import { getPixelField } from "./PixelField";

[
  {
    fn: getPixelField,
    title: "JSX version",
  },
].forEach((item) => {
  const getPixelField = item.fn;
  describe(`PixelField: ${item.title}`, () => {
    it("render empty field", () => {
      const field = mount(
        getPixelField({
          pixelMass: [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"],
          ],
        })
      );
      expect(field.find("br").length).toBe(3);
      expect(field.find(".pixel").length).toBe(9);
    });

    it("render common field", () => {
      const field = mount(
        getPixelField({
          pixelMass: [
            ["1", "1", "1"],
            ["0", "1", "0"],
          ],
        })
      );
      expect(field.find("br").length).toBe(2);
      expect(field.find(".pixel").length).toBe(6);
      expect(
        field.findWhere((el) => {
          return (
            el.html() === "Not clicked yet" && typeof el.type() !== "string"
          );
        }).length
      ).toBe(6);
    });

    it("passed onClick inside cells", () => {
      const onClick = jest.fn();
      const field = mount(
        getPixelField({
          pixelMass: [
            ["1", "1", "1"],
            ["0", "1", "0"],
          ],
        })
      );
    });
  });
});

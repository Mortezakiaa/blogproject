import Input from "@/components/Input";
import { render, screen, fireEvent } from "@testing-library/react";

describe("input tests", () => {
  test("init", () => {
    render(
      <Input
        name="test"
        onchange={() => {}}
        title="test1"
        type="text"
        value="test value"
      />
    );
    const inp = screen.getByRole("textbox");
    expect(inp).toBeDefined();
    expect(inp).toBeInTheDocument();
    expect(inp).toHaveValue("test value");
  });

  test("check input attrs", () => {
    render(
      <Input
        name="test"
        onchange={() => {}}
        title="test1"
        type="text"
        value="test value"
      />
    );
    const inp = screen.getByRole("textbox");
    expect(inp).toHaveAttribute("type", "text");
    expect(inp).toHaveAttribute("value", "test value");
    expect(inp).toHaveAttribute("name", "test");
  });

  test("mock call input", () => {
    const mockFn = jest.fn();
    render(
      <Input
        name="test"
        onchange={mockFn}
        title="test1"
        type="text"
        value="test value"
      />
    );
    const inp = screen.getByRole("textbox");
    fireEvent.change(inp, { target: { value: "test2" } });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

import Header from "@/components/Header";
import { render, screen, fireEvent } from "@testing-library/react";

describe("header", () => {
  test("inti", () => {
    render(<Header />);
    const link1 = screen.getByText("Home");
    const link2 = screen.getByText("addBlogs");
    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link1.tagName).toBe("A");
  });
  test("check hrefs", () => {
    render(<Header />);
    const link1 = screen.getByText("Home");
    const link2 = screen.getByText("addBlogs");

    expect(link1.getAttribute("href")).toBe("/");
    expect(link2.getAttribute("href")).toBe("/addblog");
  });
});

import BlogCard from "@/components/BlogCard";
import { render, screen } from "@testing-library/react";

describe("blog card tests", () => {
  test("init", () => {
    render(<BlogCard _id="123" content="sample test" title="title test" />);
    const card = screen.getByText("title test");
    expect(card).toBeDefined();
    expect(card).toBeInTheDocument();
    expect(card).toContainHTML(
      "<h5 class='mb-2 truncate text-2xl font-bold tracking-tight text-white group-hover:text-slate-800'>title test</h5>"
    );
  });
});

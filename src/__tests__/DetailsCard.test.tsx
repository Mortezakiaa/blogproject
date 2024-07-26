import DetailsCard from "@/components/DetailsCard";
import { render, screen, fireEvent } from "@testing-library/react";

describe("details card", () => {
  test("init", () => {
    render(
      <DetailsCard
        DeleteBlog={() => {}}
        EditBlog={() => {}}
        content="lorem ipsum"
        title="sample test"
      />
    );
    const card = screen.getByText("sample test");
    const content = screen.getByText("lorem ipsum");
    const editBtn = screen.getByText("Edit");
    const deleteBtn = screen.getByText("Delete");
    expect(card).toBeInTheDocument();
    expect(card.tagName).toBe("H2");
    expect(editBtn.tagName).toBe("BUTTON");
    expect(deleteBtn.tagName).toBe("BUTTON");
    expect(content.tagName).toBe("P");
  });
  test("edit and delete btn click event", () => {
    const mockEditBtn = jest.fn();
    render(
      <DetailsCard
        DeleteBlog={mockEditBtn}
        EditBlog={mockEditBtn}
        content="lorem ipsum"
        title="sample test"
      />
    );
    const editBtn = screen.getByText("Edit");
    const delBtn = screen.getByText("Delete");
    fireEvent.click(editBtn);
    fireEvent.click(delBtn);
    expect(mockEditBtn).toHaveBeenCalledTimes(2);
  });
});

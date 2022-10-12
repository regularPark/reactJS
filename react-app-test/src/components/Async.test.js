import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    /**
     * listitem으로 하니 fail
     * 데이터를 불러오기 전에 찾았기 때문에 실패.
     * 첫 렌더 사이클이 지나고 난 후 찾아야 한다.
     * */
    expect(listItemElements).not.toHaveLength(0);
  });
});

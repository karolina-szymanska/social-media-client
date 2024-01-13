import { login } from "./login.js";
import { save } from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("login function", () => {
  it("should store a token", async () => {
    globalThis.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ accessToken: "mockToken", someOtherData: "data" }),
      }),
    );

    await login("karolinaszymaska@noroff.no", "password");

    expect(save).toHaveBeenCalledWith("token", "mockToken");
  });
});

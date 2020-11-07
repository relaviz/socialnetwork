import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Button component", () => {
  test("it shows the expected text when clicked (testing the wrong way!)", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra.com");
  });
});


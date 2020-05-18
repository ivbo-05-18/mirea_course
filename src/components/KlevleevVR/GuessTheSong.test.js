import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { create } from "react-test-renderer";
import Result from "./Result";
import GuessTheSong from "./GuessTheSong";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Result component check. Depending on the value of 'correct' prop, the output of the component should change", () => {
  test("'correct' = 1", () => {
    act(() => {
      render(<Result correct={1} />, container);
    });
    expect(container.textContent).toBe("Верно!");
  });

  test("'correct' = 2", () => {
    act(() => {
      render(<Result correct={2} />, container);
    });
    expect(container.textContent).toBe("Неверно!");
  });
});

describe("Snapshot testing", () => {
  test("GuessTheSong", () => {
    const component = create(<GuessTheSong />);
    console.log(component.toJSON())
    expect(component.toJSON()).toMatchSnapshot();
  });
});

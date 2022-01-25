/// <reference types="cypress" />
import { Counter, APPLICATION_URL } from "../model";

const counter = new Counter();

describe("Test of Counter", () => {
  beforeEach(() => {
    cy.visit(APPLICATION_URL + "/counter");
  });

  it("The user should be able to increment the counter", () => {
    counter.expectValueToEqual(0);
    counter.increment();
    counter.expectValueToEqual(1);
  });
});

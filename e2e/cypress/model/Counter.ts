/// <reference types="cypress" />

import { e2eSelector } from "../util/selector";
import { COUNTER_VALUE, COUNTER_INCREMENT } from "./selectors";

export class Counter {
  public increment(): void {
    cy.get(e2eSelector(COUNTER_INCREMENT)).click();
  }
  public expectValueToEqual(value: number): void {
    cy.get(e2eSelector(COUNTER_VALUE)).should("have.text", value.toString());
  }
}

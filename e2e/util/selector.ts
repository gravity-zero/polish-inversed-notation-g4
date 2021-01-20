import { Selector } from "testcafe";

export function e2eSelector(attribute: string): Selector {
  return Selector(`[data-e2e="${attribute}"]`);
}

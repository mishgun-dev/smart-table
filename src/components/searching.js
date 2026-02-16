import { createComparison, rules } from "../lib/compare";

export function initSearching(searchField) {
  const compare = createComparison(
    ["skipEmptyTargetValues"],
    [rules.searchMultipleFields(searchField, ["date", "customer", "seller"], false)],
  );

  return (data, state) => data.filter((row) => compare(row, state));
}
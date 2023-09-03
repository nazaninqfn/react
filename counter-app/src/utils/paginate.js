import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();

  //use lodash to go to this start index and take
  // all the items for the current page
  // _.slice(items, startIndex);

  // have a new array, we can go to this
  // array and pick items for the current page
  // ._take()
}

/* Lisa just got a new math workbook. A workbook contains exercise problems, grouped into chapters. Lisa believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. The format of Lisa's book is as follows:

- There are n chapters in Lisa's workbook, numbered from 1 to n.
- The ith chapter has arr[i] problems, numbered from 1 to arr[i].
- Each page can hold up to k problems. Only a chapter's last page of exercises may contain fewer than k problems.
- Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.
- The page number indexing starts at 1.
Given the details for Lisa's workbook, can you count its number of special problems? */

function workbook(n, k, arr) {
  let specialProblems = 0;
  let pageNumber = 1;
  for (let i = 0; i < arr.length; i++) {
    let numberOfProblems = arr[i];
    let problemsInCurrentPage = 0;
    for (let j = 1; j <= numberOfProblems; j++) {
      let problemNumber = j;
      if (problemsInCurrentPage === k) {
        pageNumber++;
        problemsInCurrentPage = 0;
      }
      if (problemNumber === pageNumber) {
        specialProblems++;
      }
      problemsInCurrentPage++;
    }
    pageNumber++;
  }
  return specialProblems;
}

console.log(workbook(2, 3, [4, 2]));
console.log(workbook(5, 3, [4, 2, 6, 1, 10]));

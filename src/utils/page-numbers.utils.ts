
export function getPageNumbers(currentPage: number, maxPages: number): number[]{
  // Calculate the starting index based on currentPage and maxPages
  const startingIndex = Math.max(1, currentPage - 2);
  const endingIndex = Math.min(maxPages, startingIndex + 4);

  // Generate an array of page numbers starting from startingIndex to endingIndex
  const pages: number[] = Array.from(
    { length: endingIndex - startingIndex + 1 },
    (_, index) => startingIndex + index
  );

  return pages;
}
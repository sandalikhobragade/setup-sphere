// searchGuides: pure function, no React, no UI — just data logic.
// Takes the full array of guides and a search term, returns matching guides.
// Being a "pure function" (same input always produces same output, no side effects)
// makes this easy to test and reuse anywhere in the app.
export function searchGuides(guides, query) {
  // Guard clause: if there's no search term, return an empty array rather
  // than the full guide list — an empty search bar shouldn't "match everything."
  if (!query || query.trim() === '') {
    return [];
  }

  // Normalize the query: lowercase and trimmed, so "VS Code", "vs code",
  // and "  vs code  " all match consistently regardless of user input casing/spacing.
  const normalizedQuery = query.trim().toLowerCase();

  // .filter() keeps only the guides where either the title OR the software name
  // contains the search term. .includes() checks for a partial match (substring),
  // not an exact match — so searching "code" finds "Visual Studio Code".
  return guides.filter((guide) => {
    const titleMatch = guide.title.toLowerCase().includes(normalizedQuery);
    const softwareMatch = guide.softwareName.toLowerCase().includes(normalizedQuery);
    return titleMatch || softwareMatch;
  });
}
// // import { useMemo, useState } from "react";

// // import Sidebar from "../../components/dashboard/Sidebar";
// // import DashboardTopbar from "../../components/dashboard/DashboardTopbar";

// // import SearchHeader from "../../components/search/SearchHeader";
// // import SearchModeToggle from "../../components/search/SearchModeToggle";
// // import SearchInput from "../../components/search/SearchInput";
// // import SearchResultCard from "../../components/search/SearchResultCard";
// // import SearchEmptyState from "../../components/search/SearchEmptyState";

// // function Search() {
// //   const [mode, setMode] = useState("semantic");
// //   const [query, setQuery] = useState("");
// //   const [searchedQuery, setSearchedQuery] = useState("");
// //   const [isSearching, setIsSearching] = useState(false);
// //   const [hasSearched, setHasSearched] = useState(false);

// //   const mockResults = [
// //     {
// //       id: 1,
// //       name: "Machine Learning Research Paper.pdf",
// //       page: 4,
// //       pages: 18,
// //       date: "02 Sep 2026",
// //       snippet:
// //         "The study discusses machine learning approaches and their ability to identify patterns from data for predictive applications.",
// //       relevance: "Highly relevant",
// //       keywords: [
// //         "machine learning",
// //         "algorithms",
// //         "data",
// //       ],
// //     },
// //     {
// //       id: 2,
// //       name: "Cloud Computing Notes.pdf",
// //       page: 11,
// //       pages: 24,
// //       date: "01 Sep 2026",
// //       snippet:
// //         "Cloud computing provides scalable resources and services that can be dynamically allocated according to application requirements.",
// //       relevance: "Relevant",
// //       keywords: [
// //         "cloud",
// //         "computing",
// //         "scalability",
// //       ],
// //     },
// //     {
// //       id: 3,
// //       name: "Spring Boot Architecture.pdf",
// //       page: 7,
// //       pages: 31,
// //       date: "30 Aug 2026",
// //       snippet:
// //         "The application architecture separates presentation, business logic, data access, and integration responsibilities.",
// //       relevance: "Related",
// //       keywords: [
// //         "architecture",
// //         "spring boot",
// //         "backend",
// //       ],
// //     },
// //   ];

// //   const filteredResults = useMemo(() => {
// //     if (!searchedQuery.trim()) {
// //       return [];
// //     }

// //     const normalizedQuery = searchedQuery
// //       .toLowerCase()
// //       .trim();

// //     return mockResults.filter((result) => {
// //       if (mode === "keyword") {
// //         const searchableText = [
// //           result.name,
// //           result.snippet,
// //           ...result.keywords,
// //         ]
// //           .join(" ")
// //           .toLowerCase();

// //         return searchableText.includes(normalizedQuery);
// //       }

// //       const semanticTerms = normalizedQuery
// //         .split(/\s+/)
// //         .filter(Boolean);

// //       const searchableText = [
// //         result.name,
// //         result.snippet,
// //         ...result.keywords,
// //       ]
// //         .join(" ")
// //         .toLowerCase();

// //       return semanticTerms.some((term) =>
// //         searchableText.includes(term)
// //       );
// //     });
// //   }, [searchedQuery, mode]);

// //   const handleSearch = () => {
// //     if (!query.trim()) {
// //       setSearchedQuery("");
// //       setHasSearched(false);
// //       return;
// //     }

// //     setIsSearching(true);

// //     setTimeout(() => {
// //       setSearchedQuery(query);
// //       setHasSearched(true);
// //       setIsSearching(false);
// //     }, 700);
// //   };

// //   return (
// //     <div className="dashboard-layout">

// //       <Sidebar />

// //       <div className="dashboard-content">

// //         <DashboardTopbar />

// //         <main className="dashboard-main search-main">

// //           <SearchHeader mode={mode} />

// //           <section className="search-controls-section">

// //             <SearchModeToggle
// //               mode={mode}
// //               onModeChange={setMode}
// //             />

// //             <SearchInput
// //               query={query}
// //               onQueryChange={setQuery}
// //               onSearch={handleSearch}
// //               mode={mode}
// //               isSearching={isSearching}
// //             />

// //           </section>

// //           <section className="search-results-section">

// //             {hasSearched && (
// //               <div className="search-results-header">

// //                 <div>
// //                   <span className="panel-eyebrow">
// //                     SEARCH RESULTS
// //                   </span>

// //                   <h5>
// //                     {filteredResults.length} result
// //                     {filteredResults.length !== 1
// //                       ? "s"
// //                       : ""}
// //                   </h5>
// //                 </div>

// //                 <span className="search-results-mode">
// //                   <i
// //                     className={`bi ${
// //                       mode === "semantic"
// //                         ? "bi-stars"
// //                         : "bi-search"
// //                     } me-1`}
// //                   ></i>

// //                   {mode === "semantic"
// //                     ? "Semantic Search"
// //                     : "Keyword Search"}
// //                 </span>

// //               </div>
// //             )}

// //             {!hasSearched || filteredResults.length === 0 ? (
// //               <SearchEmptyState
// //                 hasSearched={hasSearched}
// //                 query={searchedQuery}
// //               />
// //             ) : (
// //               <div className="search-results-list">

// //                 {filteredResults.map((result) => (
// //                   <SearchResultCard
// //                     key={result.id}
// //                     result={result}
// //                     mode={mode}
// //                   />
// //                 ))}

// //               </div>
// //             )}

// //           </section>

// //         </main>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Search;

// import { useMemo, useState } from "react";

// import Sidebar from "../../components/dashboard/Sidebar";
// import DashboardTopbar from "../../components/dashboard/DashboardTopbar";

// import SearchHeader from "../../components/search/SearchHeader";
// import SearchModeToggle from "../../components/search/SearchModeToggle";
// import SearchInput from "../../components/search/SearchInput";
// import SearchResultCard from "../../components/search/SearchResultCard";
// import SearchEmptyState from "../../components/search/SearchEmptyState";

// import searchService from "../../services/searchService";

// function Search() {
//   const [mode, setMode] = useState("semantic");

//   const [query, setQuery] = useState("");
//   const [searchedQuery, setSearchedQuery] = useState("");

//   const [results, setResults] = useState([]);

//   const [isSearching, setIsSearching] = useState(false);
//   const [hasSearched, setHasSearched] = useState(false);

//   const [error, setError] = useState("");

//   const mockResults = [
//     {
//       id: 1,
//       name: "Machine Learning Research Paper.pdf",
//       page: 4,
//       pages: 18,
//       date: "02 Sep 2026",
//       snippet:
//         "The study discusses machine learning approaches and their ability to identify patterns from data for predictive applications.",
//       relevance: "Highly relevant",
//       keywords: [
//         "machine learning",
//         "algorithms",
//         "data",
//       ],
//     },
//     {
//       id: 2,
//       name: "Cloud Computing Notes.pdf",
//       page: 11,
//       pages: 24,
//       date: "01 Sep 2026",
//       snippet:
//         "Cloud computing provides scalable resources and services that can be dynamically allocated according to application requirements.",
//       relevance: "Relevant",
//       keywords: [
//         "cloud",
//         "computing",
//         "scalability",
//       ],
//     },
//     {
//       id: 3,
//       name: "Spring Boot Architecture.pdf",
//       page: 7,
//       pages: 31,
//       date: "30 Aug 2026",
//       snippet:
//         "The application architecture separates presentation, business logic, data access, and integration responsibilities.",
//       relevance: "Related",
//       keywords: [
//         "architecture",
//         "spring boot",
//         "backend",
//       ],
//     },
//   ];

//   const getMockResults = (searchQuery, searchMode) => {
//     const normalizedQuery = searchQuery
//       .toLowerCase()
//       .trim();

//     return mockResults.filter((result) => {
//       const searchableText = [
//         result.name,
//         result.snippet,
//         ...result.keywords,
//       ]
//         .join(" ")
//         .toLowerCase();

//       if (searchMode === "keyword") {
//         return searchableText.includes(
//           normalizedQuery
//         );
//       }

//       /*
//         Temporary frontend semantic-search simulation.

//         Real semantic search will be handled by
//         Spring Boot + embedding/vector retrieval.
//       */

//       const semanticTerms = normalizedQuery
//         .split(/\s+/)
//         .filter(Boolean);

//       return semanticTerms.some((term) =>
//         searchableText.includes(term)
//       );
//     });
//   };

//   const handleSearch = async () => {
//     const trimmedQuery = query.trim();

//     if (!trimmedQuery) {
//       setSearchedQuery("");
//       setResults([]);
//       setHasSearched(false);
//       setError("");
//       return;
//     }

//     setIsSearching(true);
//     setError("");

//     setSearchedQuery(trimmedQuery);
//     setHasSearched(true);

//     try {
//       /*
//         Backend integration:

//         const response = await searchService.search(
//           trimmedQuery,
//           mode
//         );

//         Expected backend response:

//         {
//           success: true,
//           data: [...]
//         }
//       */

//       const response = await searchService.search(
//         trimmedQuery,
//         mode
//       );

//       const backendResults =
//         Array.isArray(response?.data)
//           ? response.data
//           : Array.isArray(response)
//           ? response
//           : null;

//       if (backendResults) {
//         setResults(backendResults);
//       } else {
//         throw new Error(
//           "Invalid search response."
//         );
//       }
//     } catch (requestError) {
//       /*
//         Backend is not running yet.

//         Keep frontend development functional by
//         falling back to the mock search results.
//       */

//       console.warn(
//         "Search API unavailable. Using mock search.",
//         requestError
//       );

//       const fallbackResults = getMockResults(
//         trimmedQuery,
//         mode
//       );

//       setResults(fallbackResults);
//     } finally {
//       setIsSearching(false);
//     }
//   };

//   /*
//     When search mode changes after a search,
//     rerun the search using the new mode.
//   */

//   const handleModeChange = (newMode) => {
//     setMode(newMode);

//     if (searchedQuery.trim()) {
//       setTimeout(() => {
//         setQuery(searchedQuery);
//       }, 0);
//     }
//   };

//   const resultCount = useMemo(
//     () => results.length,
//     [results]
//   );

//   return (
//     <div className="dashboard-layout">
//       <Sidebar />

//       <div className="dashboard-content">
//         <DashboardTopbar />

//         <main className="dashboard-main search-main">

//           <SearchHeader mode={mode} />

//           <section className="search-controls-section">

//             <SearchModeToggle
//               mode={mode}
//               onModeChange={handleModeChange}
//             />

//             <SearchInput
//               query={query}
//               onQueryChange={setQuery}
//               onSearch={handleSearch}
//               mode={mode}
//               isSearching={isSearching}
//             />

//           </section>

//           {error && (
//             <div className="alert alert-danger mt-3">
//               <i className="bi bi-exclamation-circle me-2"></i>
//               {error}
//             </div>
//           )}

//           <section className="search-results-section">

//             {hasSearched && (
//               <div className="search-results-header">

//                 <div>
//                   <span className="panel-eyebrow">
//                     SEARCH RESULTS
//                   </span>

//                   <h5>
//                     {resultCount} result
//                     {resultCount !== 1
//                       ? "s"
//                       : ""}
//                   </h5>
//                 </div>

//                 <span className="search-results-mode">
//                   <i
//                     className={`bi ${
//                       mode === "semantic"
//                         ? "bi-stars"
//                         : "bi-search"
//                     } me-1`}
//                   ></i>

//                   {mode === "semantic"
//                     ? "Semantic Search"
//                     : "Keyword Search"}
//                 </span>

//               </div>
//             )}

//             {!hasSearched ||
//             results.length === 0 ? (
//               <SearchEmptyState
//                 hasSearched={hasSearched}
//                 query={searchedQuery}
//               />
//             ) : (
//               <div className="search-results-list">

//                 {results.map((result) => (
//                   <SearchResultCard
//                     key={result.id}
//                     result={result}
//                     mode={mode}
//                   />
//                 ))}

//               </div>
//             )}

//           </section>

//         </main>
//       </div>
//     </div>
//   );
// }

// export default Search;

import { useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar";
import DashboardTopbar from "../../components/dashboard/DashboardTopbar";

import SearchHeader from "../../components/search/SearchHeader";
import SearchModeToggle from "../../components/search/SearchModeToggle";
import SearchInput from "../../components/search/SearchInput";
import SearchResultCard from "../../components/search/SearchResultCard";
import SearchEmptyState from "../../components/search/SearchEmptyState";

import searchService from "../../services/searchService";

function Search() {
  const [mode, setMode] = useState("semantic");

  const [query, setQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useState("");

  const [results, setResults] = useState([]);

  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const [error, setError] = useState("");

  const mockResults = [
    {
      id: 1,
      name: "Machine Learning Research Paper.pdf",
      page: 4,
      pages: 18,
      date: "02 Sep 2026",
      snippet:
        "The study discusses machine learning approaches and their ability to identify patterns from data for predictive applications.",
      relevance: "Highly relevant",
      keywords: [
        "machine learning",
        "algorithms",
        "data",
      ],
    },
    {
      id: 2,
      name: "Cloud Computing Notes.pdf",
      page: 11,
      pages: 24,
      date: "01 Sep 2026",
      snippet:
        "Cloud computing provides scalable resources and services that can be dynamically allocated according to application requirements.",
      relevance: "Relevant",
      keywords: [
        "cloud",
        "computing",
        "scalability",
      ],
    },
    {
      id: 3,
      name: "Spring Boot Architecture.pdf",
      page: 7,
      pages: 31,
      date: "30 Aug 2026",
      snippet:
        "The application architecture separates presentation, business logic, data access, and integration responsibilities.",
      relevance: "Related",
      keywords: [
        "architecture",
        "spring boot",
        "backend",
      ],
    },
  ];

  const getMockResults = (searchQuery, searchMode) => {
    const normalizedQuery = searchQuery
      .toLowerCase()
      .trim();

    if (!normalizedQuery) {
      return [];
    }

    return mockResults.filter((result) => {
      const searchableText = [
        result.name,
        result.snippet,
        ...result.keywords,
      ]
        .join(" ")
        .toLowerCase();

      if (searchMode === "keyword") {
        return searchableText.includes(
          normalizedQuery
        );
      }

      /*
        Temporary semantic-search simulation.

        Actual semantic retrieval will be handled
        by Spring Boot + embeddings + vector search.
      */

      const semanticTerms = normalizedQuery
        .split(/\s+/)
        .filter(Boolean);

      return semanticTerms.some((term) =>
        searchableText.includes(term)
      );
    });
  };

  const handleSearch = async () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setSearchedQuery("");
      setResults([]);
      setHasSearched(false);
      setError("");
      return;
    }

    setIsSearching(true);
    setError("");
    setSearchedQuery(trimmedQuery);
    setHasSearched(true);

    try {
      const response = await searchService.search(
        trimmedQuery,
        mode
      );

      const backendResults = Array.isArray(
        response?.data
      )
        ? response.data
        : Array.isArray(response)
        ? response
        : null;

      if (backendResults) {
        setResults(backendResults);
      } else {
        throw new Error(
          "Invalid search response."
        );
      }
    } catch (requestError) {
      console.warn(
        "Search API unavailable. Using mock search.",
        requestError
      );

      const fallbackResults = getMockResults(
        trimmedQuery,
        mode
      );

      setResults(fallbackResults);
    } finally {
      setIsSearching(false);
    }
  };

  const handleModeChange = (newMode) => {
    if (newMode === mode) {
      return;
    }

    setMode(newMode);

    /*
      Clear previous results because the meaning of
      the search changes with the selected mode.
    */

    setResults([]);
    setSearchedQuery("");
    setHasSearched(false);
    setError("");
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <DashboardTopbar />

        <main className="dashboard-main search-main">

          <SearchHeader mode={mode} />

          <section className="search-controls-section">

            <SearchModeToggle
              mode={mode}
              onModeChange={handleModeChange}
            />

            <SearchInput
              query={query}
              onQueryChange={setQuery}
              onSearch={handleSearch}
              mode={mode}
              isSearching={isSearching}
            />

          </section>

          {error && (
            <div className="alert alert-danger search-error">
              <i className="bi bi-exclamation-circle me-2"></i>
              {error}
            </div>
          )}

          <section className="search-results-section">

            {hasSearched && (
              <div className="search-results-header">

                <div>
                  <span className="panel-eyebrow">
                    SEARCH RESULTS
                  </span>

                  <h5>
                    {results.length} result
                    {results.length !== 1
                      ? "s"
                      : ""}
                  </h5>
                </div>

                <span className="search-results-mode">
                  <i
                    className={`bi ${
                      mode === "semantic"
                        ? "bi-stars"
                        : "bi-search"
                    } me-1`}
                  ></i>

                  {mode === "semantic"
                    ? "Semantic Search"
                    : "Keyword Search"}
                </span>

              </div>
            )}

            {!hasSearched ||
            results.length === 0 ? (
              <SearchEmptyState
                hasSearched={hasSearched}
                query={searchedQuery}
                mode={mode}
              />
            ) : (
              <div className="search-results-list">

                {results.map((result) => (
                  <SearchResultCard
                    key={result.id}
                    result={result}
                    mode={mode}
                  />
                ))}

              </div>
            )}

          </section>

        </main>
      </div>
    </div>
  );
}

export default Search;
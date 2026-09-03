export const mockDocuments = [
  {
    id: 1,
    name: "Machine Learning Research Paper.pdf",
    size: "2.4 MB",
    uploadDate: "02 Sep 2026",
    status: "Processed",
    pages: 18,
  },
  {
    id: 2,
    name: "Cloud Computing Notes.pdf",
    size: "1.8 MB",
    uploadDate: "01 Sep 2026",
    status: "Processed",
    pages: 24,
  },
  {
    id: 3,
    name: "Spring Boot Architecture.pdf",
    size: "3.1 MB",
    uploadDate: "30 Aug 2026",
    status: "Processing",
    pages: 31,
  },
];

export function getDocumentById(documentId) {
  return mockDocuments.find(
    (document) =>
      String(document.id) === String(documentId)
  );
}

export function addMockDocument(document) {
  mockDocuments.unshift(document);
}

export function removeMockDocument(documentId) {
  const index = mockDocuments.findIndex(
    (document) =>
      document.id === documentId
  );

  if (index !== -1) {
    mockDocuments.splice(index, 1);
    return true;
  }

  return false;
}
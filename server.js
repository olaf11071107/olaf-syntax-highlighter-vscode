const {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind,
  DiagnosticSeverity,
  Diagnostic,
} = require("vscode-languageserver");

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments();
documents.listen(connection);

connection.onInitialize(() => ({
  capabilities: {
    textDocumentSync: documents.syncKind,
    completionProvider: { resolveProvider: true },
    hoverProvider: true,
    documentFormattingProvider: true,
  },
}));

connection.onCompletion(() => [
  {
    label: "build",
    kind: CompletionItemKind.Keyword,
    documentation: "Define a function in Olaf.",
  },
  {
    label: "class",
    kind: CompletionItemKind.Keyword,
    documentation: "Define a class in Olaf.",
  },
  {
    label: "snowball",
    kind: CompletionItemKind.Keyword,
    documentation: "Declare a variable in Olaf.",
  },
]);

connection.onDocumentFormatting(({ textDocument }) => {
  const document = documents.get(textDocument.uri);
  return formatDocument(document);
});

connection.onHover(({ textDocument, position }) => ({
  contents: "Olaf language syntax and tools.",
}));

connection.listen();

function formatDocument(document) {
  const text = document.getText();
  const formatted = text
    .split("\n")
    .map((line) => line.trim())
    .join("\n");

  return [
    TextEdit.replace(Range.create(0, 0, document.lineCount, 0), formatted),
  ];
}

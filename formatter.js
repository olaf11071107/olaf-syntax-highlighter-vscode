const { Range, TextEdit } = require("vscode-languageserver");

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

module.exports = formatDocument;

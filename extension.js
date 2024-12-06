const { LanguageClient } = require("vscode-languageclient/node");

function activate(context) {
  const serverModule = context.asAbsolutePath("server.js");
  const clientOptions = {
    documentSelector: [{ scheme: "file", language: "olaf" }],
  };
  const client = new LanguageClient(
    "olafLanguageServer",
    "Olaf Language Server",
    { run: { module: serverModule }, debug: { module: serverModule } },
    clientOptions
  );
  context.subscriptions.push(client.start());
}

exports.activate = activate;

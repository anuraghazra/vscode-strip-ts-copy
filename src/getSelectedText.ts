import * as vscode from "vscode";

export const getEditor = (): vscode.TextEditor | undefined =>
  vscode.window.activeTextEditor;

export const getDocument = (editor: vscode.TextEditor): vscode.TextDocument =>
  editor.document;

export const getEol = (document: vscode.TextDocument): string =>
  document.eol === 1 ? "\n" : "\r\n";

export const getSelectedText = () => {
  const editor = getEditor();
  if (!editor) {
    return;
  }

  const document = getDocument(editor);
  if (!document) {
    return;
  }

  // QUESTION: Is this needed?
  const eol = getEol(document);

  return editor.selections.map((selection) => {
    // Copy the whole line when no text is selected
    if (
      selection.start.line === selection.end.line &&
      selection.start.character === selection.end.character
    ) {
      const range = document.lineAt(selection.start).range;
      const text = editor.document.getText(range);
      // Add a new line to mimic native bahavious
      return `${text}${eol}`;
    }

    return editor.document.getText(selection);
  });
};

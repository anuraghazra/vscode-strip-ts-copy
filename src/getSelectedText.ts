import * as vscode from "vscode";

export const getEditor = (): vscode.TextEditor | undefined =>
  vscode.window.activeTextEditor;

export const getDocument = (editor: vscode.TextEditor): vscode.TextDocument =>
  editor.document;

export const getEol = (document: vscode.TextDocument): string =>
  document.eol === 1 ? "\n" : "\r\n";

/**
 * @see https://github.com/rockingskier/vscode-copy-copy-paste/blob/master/src/extension.ts#L16
 */
export const getSelectedText = () => {
  const editor = getEditor();
  if (!editor) {
    return;
  }

  const document = getDocument(editor);
  if (!document) {
    return;
  }

  const eol = getEol(document);

  return editor.selections.map((selection) => {
    if (
      selection.start.line === selection.end.line &&
      selection.start.character === selection.end.character
    ) {
      const range = document.lineAt(selection.start).range;
      const text = editor.document.getText(range);
      return `${text}${eol}`;
    }

    return editor.document.getText(selection);
  });
};

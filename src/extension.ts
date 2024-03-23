import * as vscode from "vscode";
import * as ts from "typescript";
import { getSelectedText } from "./getSelectedText";
import * as prettier from "prettier";
import normalizeNewlines from "normalize-newline";
import { reconstructNewLines } from "./reconstructNewLines";

export function activate(context: vscode.ExtensionContext) {
  const command = "strip-ts-copy.copyAsJs";

  function stripTSCopy() {
    const selectedText = getSelectedText()?.[0];
    const prettierConfig = { parser: "babel-ts" };
    const tsConfig: ts.CompilerOptions = {
      target: ts.ScriptTarget.ESNext,
      allowJs: true,
      jsx: ts.JsxEmit.Preserve,
      removeComments: false,
    };

    if (!selectedText?.trim()) {
      vscode.window.showWarningMessage("StripTSCopy: No Code Selected");
      return;
    }

    try {
      // need to normalize newlines to make sure diffing works correctly with carriage returns
      const textWithNewLines = normalizeNewlines(selectedText);
      prettier.format(
        ts.transpile(textWithNewLines, tsConfig),
        prettierConfig
      ).then(strippedSource => {
        // reconstruct newlines to match the original source
        const finalSource = reconstructNewLines(
          textWithNewLines,
          strippedSource
        ).trim();

        vscode.env.clipboard.writeText(finalSource);
        vscode.window.showInformationMessage("StripTSCopy: Copied As JS");
      });
    } catch (err) {
      console.log(err);
      vscode.window.showInformationMessage("StripTSCopy: Failed To Copy");
    }
  }

  context.subscriptions.push(
    vscode.commands.registerCommand(command, stripTSCopy)
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}

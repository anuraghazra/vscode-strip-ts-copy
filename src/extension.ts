import * as vscode from "vscode";
import * as ts from "typescript";
import { getSelectedText } from "./getSelectedText";
import * as prettier from "prettier";

export function activate(context: vscode.ExtensionContext) {
  const command = "strip-ts-copy.copyAsJs";

  function stripTSCopy() {
    const selectedText = getSelectedText()?.[0];
    const prettierConfig = { parser: "babel-ts" };
    const tsConfig = {
      target: ts.ScriptTarget.ESNext,
      allowJs: true,
      jsx: ts.JsxEmit.Preserve,
    };

    if (!selectedText) {
      vscode.window.showWarningMessage("No code selected");
      return;
    }

    try {
      const strippedSource = prettier.format(
        ts.transpile(selectedText, tsConfig),
        prettierConfig
      );

      vscode.env.clipboard.writeText(strippedSource);

      vscode.window.showInformationMessage("Code copied as js");
    } catch (err) {
      vscode.window.showInformationMessage("Failed to copy as js");
    }
  }

  context.subscriptions.push(
    vscode.commands.registerCommand(command, stripTSCopy)
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import { dotnetNewCommand, dotnetVersionCommand } from "./commands";
import { logger } from "./utils/logger";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  try {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log(
      'Congratulations, your extension "vscode-dotnet-manager" is now active!'
    );

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json

    const disposables = [
      vscode.commands.registerCommand(
        "vscode-dotnet-manager.dotnetVersion",
        dotnetVersionCommand
      ),
      vscode.commands.registerCommand(
        "vscode-dotnet-manager.dotnetNew",
        dotnetNewCommand
      ),
    ];

    context.subscriptions.push(...disposables);
  } catch (e) {
    const message = logger.error(e);
    vscode.window.showErrorMessage(`Error: ${message}`);
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}

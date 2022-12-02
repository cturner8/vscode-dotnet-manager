import * as vscode from "vscode";
import { getActiveTerminal } from "../utils/terminalUtils";

export const dotnetNewSolutionCommand = async () => {
  let solutionName = await vscode.window.showInputBox({
    placeHolder: "What would you like to name the solution? (Optional)",
  });

  const args: string[] = [];

  if (solutionName) {
    solutionName = solutionName.trim();
    args.push(`--name ${solutionName}`);
  }

  const terminal = getActiveTerminal();
  terminal.sendText(`Creating new solution file...`);
  terminal.sendText(`dotnet new sln ${args.join(" ")}`);

  vscode.window.showInformationMessage(`Created new solution`);

  // TODO: open new solution file
};

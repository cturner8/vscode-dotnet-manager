import * as vscode from "vscode";
import { EXTENSION_DISPLAY_NAME } from "../resources/constants";

export const dotnetNewCommand = async () => {
  let template = await vscode.window.showInputBox({
    placeHolder: "What type of project would you like to create?",
  });
  if (!template) {
    return;
  }

  const directory = await vscode.window.showInputBox({
    placeHolder:
      "Where would you like to create the project? Blank for current directory.",
  });
  template = template.trim().toLowerCase();

  const args = [template, "--no-restore"];
  if (directory) {
    args.push(`--output ${directory.trim()}`);
  }

  const terminal = vscode.window.createTerminal({
    name: EXTENSION_DISPLAY_NAME,
    // hideFromUser: true,
    message: `Creating new project using ${template} template...`,
  });
  terminal.sendText(`dotnet new ${args.join(" ")}`);

  vscode.window.showInformationMessage(
    `Created new project using "${template}" template.`
  );
};

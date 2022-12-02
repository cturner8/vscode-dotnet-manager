import * as vscode from "vscode";
import { runProcess } from "../utils/terminalUtils";

export const dotnetVersionCommand = async () => {
  const result = await runProcess(`dotnet --version`);
  vscode.window.showInformationMessage(`.NET Version: ${result}`);
};

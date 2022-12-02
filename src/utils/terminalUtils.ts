import * as cp from "child_process";
import * as vscode from "vscode";

import { EXTENSION_DISPLAY_NAME } from "../resources/constants";

let terminal: vscode.Terminal;

export const runProcess = (cmd: string) =>
  new Promise<string>((resolve, reject) => {
    cp.exec(cmd, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

export const getActiveTerminal = () => {
  if (!terminal) {
    terminal = vscode.window.createTerminal({
      name: EXTENSION_DISPLAY_NAME,
    });
  }
  return terminal;
};

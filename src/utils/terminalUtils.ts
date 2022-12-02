import * as cp from "child_process";

export const runProcess = (cmd: string) =>
  new Promise<string>((resolve, reject) => {
    cp.exec(cmd, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

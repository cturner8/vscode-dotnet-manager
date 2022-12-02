const getMessage = (e: unknown): string => {
  if (e instanceof Error) {
    return e.message;
  }
  return JSON.stringify(e);
};

const error = (e: unknown) => {
  const message = getMessage(e);
  console.log(`[ERROR]: ${message}`);
  return message;
};

export const logger = { error };

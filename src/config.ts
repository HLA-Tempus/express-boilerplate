import "dotenv/config";

function load(name: string) {
  const result = process.env[name];
  if (!result) {
    throw new Error(`Environment variable ${name} does not exist.`);
  }
  return result;
}

// Add a environment variable as in the example below
// export const example = load("EXAMPLE");

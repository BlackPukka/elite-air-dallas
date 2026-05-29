import process from "node:process";

export function getOwnerPassphrase(): string {
  return process.env.OWNER_PASSPHRASE ?? "elite2024";
}

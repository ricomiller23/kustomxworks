import bcrypt from "bcryptjs";
export * from "./session";

const DEFAULT_ADMIN_EMAIL = "kustomxworks@proton.me";
// Hash for password "1Isecure!"
const DEFAULT_ADMIN_HASH = "$2b$10$A9PGTRoQ2haDMPkEjcWpLeFqRk/XQuDfn12Kcx2FHIxbF2APh3h7a";

export async function verifyAdminCredentials(email: string, pass: string): Promise<boolean> {
  const configuredEmail = process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;
  const configuredHash = process.env.ADMIN_PASSWORD_HASH || DEFAULT_ADMIN_HASH;

  if (email.trim().toLowerCase() !== configuredEmail.toLowerCase()) {
    return false;
  }

  return await bcrypt.compare(pass, configuredHash);
}

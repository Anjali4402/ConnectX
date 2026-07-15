import bcrypt from "bcrypt";

export async function comparePassword(
  newPassword: string,
  comparePassword: string,
) {
  const isMatch = await bcrypt.compare(newPassword, comparePassword);
  console.log("Is Match passoword is here...... ", isMatch);
  return isMatch;
  // const isMatch = await bcrypt.compare(plainTextPassword, storedHash);
}

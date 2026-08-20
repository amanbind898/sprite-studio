// app/actions/upload.ts
"use server";

import { writeFile } from "fs/promises";
import { join } from "path";

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;

  if (!file) {
    throw new Error("No file uploaded");
  }

  // Convert the file into a buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Define the path to save the file (e.g., in the public folder)
  const path = join(process.cwd(), "public", file.name);

  // Write the file to disk
  await writeFile(path, buffer);

  console.log(`File saved securely to ${path}`);
  return { success: true, filename: file.name };
}

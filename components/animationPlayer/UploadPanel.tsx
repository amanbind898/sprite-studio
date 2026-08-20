"use client";

import { useState } from "react";
import { uploadFile } from "@/app/actions/upload";
export default function UploadPanel() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    setStatus("Uploading...");
    try {
      const result = await uploadFile(formData);
      if (result.success) {
        setStatus(`Success! Uploaded: ${result.filename}`);
      }
    } catch (error) {
      setStatus("Upload failed.");
      console.error(error);
    }
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload a File</h2>
      <form action={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          name="file"
          required
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit File
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
}
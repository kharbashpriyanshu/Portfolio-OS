import { useState } from "react";
import env from "@/config/env";

const BASE_URL = env.apiBaseUrl || "";

export function useContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Backend not available");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError(
        "Message could not be delivered.\nPlease try again or contact me directly by email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    isSuccess,
    error,
    handleSubmit,
  };
}

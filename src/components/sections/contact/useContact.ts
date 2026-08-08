import { useState } from "react";

export function useContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simulate API call for now (replace with actual form provider later)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return {
    isSubmitting,
    isSuccess,
    error,
    handleSubmit,
  };
}

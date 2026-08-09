import React from "react";
import { motion } from "framer-motion";
import { useContact } from "./useContact";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export const ContactForm = React.memo(function ContactForm() {
  const { isSubmitting, isSuccess, error, handleSubmit } = useContact();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card-cyber flex flex-col p-6 sm:p-8"
    >
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

      <h3 className="mb-2 font-heading text-2xl font-bold text-foreground">Send a Message</h3>
      <p className="mb-8 text-sm text-muted-foreground">
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center rounded-xl border border-cyber-emerald/30 bg-cyber-emerald/10 p-8 text-center"
        >
          <CheckCircle2 className="mb-4 h-12 w-12 text-cyber-emerald" />
          <h4 className="mb-2 font-bold text-foreground">Thank you for reaching out.</h4>
          <p className="text-sm text-muted-foreground">
            Your message has been received successfully.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            I appreciate your time and will respond as soon as possible.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-wider text-foreground-muted"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isSubmitting}
                className="rounded-lg border border-border/80 bg-surface/50 px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wider text-foreground-muted"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                className="rounded-lg border border-border/80 bg-surface/50 px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="subject"
              className="text-xs font-semibold uppercase tracking-wider text-foreground-muted"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              disabled={isSubmitting}
              className="rounded-lg border border-border/80 bg-surface/50 px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
              placeholder="Opportunity / Collaboration"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-wider text-foreground-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={isSubmitting}
              className="resize-y rounded-lg border border-border/80 bg-surface/50 px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
              placeholder="How can we build something meaningful together?"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-70 sm:w-auto sm:self-end"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
});

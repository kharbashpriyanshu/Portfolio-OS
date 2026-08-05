import env from "@/config/env";

export type LogLevel = "debug" | "info" | "warn" | "error";

interface LogPayload {
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

/**
 * Enterprise-grade structured frontend logger.
 * Filters verbose debug logs in production environments while maintaining error observability.
 */
class LoggerService {
  private isDevelopment = env.appEnv === "development";

  private formatPayload(message: string, context?: Record<string, unknown>): LogPayload {
    return {
      message,
      context,
      timestamp: new Date().toISOString(),
    };
  }

  debug(message: string, context?: Record<string, unknown>): void {
    if (!this.isDevelopment) return;
    const payload = this.formatPayload(message, context);
    console.debug(`[DEBUG] [${payload.timestamp}] ${payload.message}`, payload.context || "");
  }

  info(message: string, context?: Record<string, unknown>): void {
    const payload = this.formatPayload(message, context);
    console.info(`[INFO] [${payload.timestamp}] ${payload.message}`, payload.context || "");
  }

  warn(message: string, context?: Record<string, unknown>): void {
    const payload = this.formatPayload(message, context);
    console.warn(`[WARN] [${payload.timestamp}] ${payload.message}`, payload.context || "");
  }

  error(message: string, error?: unknown, context?: Record<string, unknown>): void {
    const payload = this.formatPayload(message, {
      ...context,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    console.error(`[ERROR] [${payload.timestamp}] ${payload.message}`, payload.context || "");
  }
}

export const logger = new LoggerService();
export default logger;

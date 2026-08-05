import logger, { type LogLevel } from "./logger";

/**
 * Clean Architecture Service Container & Dependency Injection Registry.
 * Acts as the single point of access for external integrations, observability, and domain services.
 */
export interface ServiceContainer {
  logger: typeof logger;
}

export const services: ServiceContainer = {
  logger,
};

export { logger, type LogLevel };
export default services;

import React from "react";
import { AppProvider } from "./providers/AppProvider";

/**
 * Root Application component.
 * Integrates global providers, router, and error boundary architecture.
 */
export function App() {
  return <AppProvider />;
}

export default App;

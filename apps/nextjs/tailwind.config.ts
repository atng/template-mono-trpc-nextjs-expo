import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/components/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;

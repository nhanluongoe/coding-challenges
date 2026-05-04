export const designTokens = {
  color: {
    background: {
      canvas: "#f6f3eb",
      surface: "#fffdf8",
      surfaceAlt: "#fbfff9",
    },
    border: {
      default: "#d8d0c2",
      subtle: "#eee5d6",
      strong: "#d7cdbb",
    },
    dark: {
      900: "#111713",
      800: "#202821",
      text: "#e5f2eb",
      muted: "#9fb2a8",
    },
    primary: {
      100: "#e7f1eb",
      500: "#19684b",
      600: "#12573f",
    },
    semantic: {
      success: "#19684b",
      warning: "#b7791f",
      error: "#b42318",
      info: "#2563eb",
    },
    text: {
      primary: "#18201d",
      secondary: "#52625b",
      muted: "#6b756f",
      warmMuted: "#7a6c5b",
    },
  },
  font: {
    family: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
    },
    size: {
      display: "clamp(3rem, 8vw, 6.6rem)",
      pageTitle: "clamp(2.4rem, 6vw, 5rem)",
      sectionTitle: "1.5rem",
      cardTitle: "1.25rem",
      body: "1rem",
      caption: "0.875rem",
    },
    weight: {
      regular: 400,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    lineHeight: {
      display: 0.92,
      title: 0.95,
      tight: 1.2,
      body: 1.8,
    },
  },
  motion: {
    duration: {
      fast: "150ms",
      base: "200ms",
      slow: "320ms",
    },
    easing: {
      standard: "ease-out",
      emphasized: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    },
  },
  radius: {
    sm: "6px",
    md: "8px",
    pill: "999px",
  },
  shadow: {
    sm: "0 4px 14px rgba(45, 38, 25, 0.06)",
    card: "0 10px 30px rgba(45, 38, 25, 0.06)",
    cardHover: "0 16px 38px rgba(25, 104, 75, 0.14)",
    panel: "0 24px 70px rgba(45, 38, 25, 0.12)",
    code: "0 16px 44px rgba(17, 23, 19, 0.18)",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "56px",
    "4xl": "64px",
  },
} as const;

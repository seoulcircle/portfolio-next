// tooltipAnimationTokens.ts

export const tooltipAnimationTokens = {
  desktop: {
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.2 },
    },
  },
  mobile: {
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.2 },
    },
  },
} as const;

export type TooltipPlatform = keyof typeof tooltipAnimationTokens;
export type TooltipAnimationType =
  keyof (typeof tooltipAnimationTokens)["desktop"];

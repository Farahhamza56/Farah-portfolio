import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const actionButton = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 hover:brightness-105",
        outline:
          "border border-border bg-card/70 text-foreground backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-md hover:shadow-primary/10",
        ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground",
      },
      size: {
        md: "h-10 px-4",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
)

export type ActionButtonVariants = VariantProps<typeof actionButton>

export function actionButtonClass(
  opts: ActionButtonVariants & { className?: string } = {},
) {
  const { className, ...rest } = opts
  return cn(actionButton(rest), className)
}

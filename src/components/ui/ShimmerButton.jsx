import React from "react";
import { clsx } from "clsx";

const VARIANT_CLASSES = {
  primary:
    "bg-black hover:bg-orange-600 text-white border-transparent",
  secondary:
    "bg-white hover:bg-gray-50 text-gray-900 border-gray-200 shadow-sm focus:ring-2 focus:ring-orange-300",
  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-800 border-transparent focus:ring-2 focus:ring-gray-200",
  outline:
    "text-neutral-900 bg-white border border-neutral-400 hover:bg-orange-50 focus:ring-2 focus:ring-orange-500",
};

const SIZE_CLASSES = {
  sm: "px-4 py-3 text-sm rounded-sm",
  md: "px-5 py-3 text-sm rounded-sm",
  lg: "px-6 py-3 text-base rounded-sm",
};

const ShimmerButton = React.forwardRef(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      className,
      type = "button",
      onClick,
      children,
      icon: Icon,
      iconPosition = "left",
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const classes = clsx(
      "inline-flex items-center justify-center gap-2 font-semibold border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative",
      VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
      SIZE_CLASSES[size] || SIZE_CLASSES.md,
      className,
    );

    return (
      <button
        type={type}
        ref={ref}
        className={classes}
        onClick={isDisabled ? undefined : onClick}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...rest}
      >
        {iconPosition === "left" && Icon && (
          <Icon className="w-4 h-4" aria-hidden="true" />
        )}
        {children}
        {iconPosition === "right" && Icon && (
          <Icon className="w-4 h-4" aria-hidden="true" />
        )}
      </button>
    );
  },
);

export default ShimmerButton;
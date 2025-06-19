// PATH: dashboard/src/components/ui/card.tsx
import React from "react";

export const Card = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`card ${className}`.trim()} {...props} />
);

export const CardHeader = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`card__header ${className}`.trim()} {...props} />
);

export const CardContent = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`card__content ${className}`.trim()} {...props} />
);

export const CardFooter = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`card__footer ${className}`.trim()} {...props} />
);

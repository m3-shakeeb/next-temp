import { twMerge } from "tailwind-merge";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={twMerge(`px-4 md:px-8 mx-auto`, className)}>{children}</div>
);

export default Container;

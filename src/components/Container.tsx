import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
}

function Container({ className, children }: ContainerProps) {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
}
export default Container;

import { cn } from "@/lib/utils";
import { poppins } from "../fonts";

type SectionProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
};

function Section({ className, title, children }: SectionProps) {
  return (
    <section>
      <h2 className={cn("text-center text-4xl text-green-800 mb-16 font-medium", poppins.className)}>{title}</h2>
      <div className={cn(className)}>{children}</div>
    </section>
  );
}
export default Section;

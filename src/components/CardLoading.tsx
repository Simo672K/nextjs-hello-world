import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

function CardLoading() {
  return (
    <Card className="p-0 shadow-none">
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-16 w-full" />
    </Card>
  );
}

export default CardLoading;

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type MealsPaginationProps = {
  length: number;
  active: number;
};

function MealsPagination({ length, active }: MealsPaginationProps) {
  console.log(active);
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        {active - 1 >= 1 && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${active - 1}`} />
          </PaginationItem>
        )}

        {active - 2 >= 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {active - 2 <= length && active === length && (
          <PaginationItem>
            <PaginationLink href={`?page=${active - 2}`}>
              {active - 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {active - 1 >= 1 && (
          <PaginationItem>
            <PaginationLink href={`?page=${active - 1}`}>
              {active - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={`?page=${active}`} isActive>
            {active}
          </PaginationLink>
        </PaginationItem>
        {active + 1 <= length && (
          <PaginationItem>
            <PaginationLink href={`?page=${active + 1}`}>
              {active + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {active + 2 <= length && active === 1 && (
          <PaginationItem>
            <PaginationLink href={`?page=${active + 2}`}>
              {active + 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {active + 2 <= length && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {active + 1 <= length && (
          <PaginationItem>
            <PaginationNext href={`?page=${active + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
export default MealsPagination;

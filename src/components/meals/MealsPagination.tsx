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
  console.log(length)
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        {(active - 2 >= 1) && (
          <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        )}
        {(active - 2 <= length && active === length) && (
          <PaginationItem>
            <PaginationLink href="#">{active-2}</PaginationLink>
          </PaginationItem>
        )}
        {active - 1 >= 1 && (
          <PaginationItem>
            <PaginationLink href="#">{active-1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#">{active}</PaginationLink>
        </PaginationItem>
        {active + 1 <= length && (
          <PaginationItem>
            <PaginationLink href="#">{active+1}</PaginationLink>
          </PaginationItem>
        )}
        {(active + 2 <= length && active === 1) && (
          <PaginationItem>
            <PaginationLink href="#">{active+2}</PaginationLink>
          </PaginationItem>
        )}
        {(active + 2 <= length) && (
          <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
export default MealsPagination;

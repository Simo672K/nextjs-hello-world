import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";
import { useAppDispatch } from "@/lib/hooks" 
import { deleteItem } from "@/lib/features/cart/cartSlice";

type CartItemProps = {
  itemId: number;
  item: string;
  quantity?: number;
};

function CartItem({ item, quantity = 1, itemId }: CartItemProps) {
  const dispatch= useAppDispatch();

  const handelDeleteItem = (itemId: number): void => {
    dispatch(deleteItem(itemId))
  }

  return (
    <div className="mt-2 border-b p-1 flex items-center">
      <h4 className="text-lg font-medium">{item}</h4>
      <Button onClick={()=>handelDeleteItem(itemId)} variant="ghost" className="h-6 p-2 ms-auto">
        <IoClose />
      </Button>
    </div>
  );
}
export default CartItem;

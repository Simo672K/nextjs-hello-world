import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BsBag } from "react-icons/bs";
import { useAppSelector } from '@/lib/hooks'
import CartItem from "./CartItem";
import { cn } from "@/lib/utils";

function Cart() {
  const {items, numberOfCartItems}= useAppSelector((state)=> state.cart);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <span className={cn("absolute px-2 py-0.5 text-white text-xs rounded-full top-0", numberOfCartItems ? "bg-green-600" : "bg-yellow-500")}>
            {numberOfCartItems}
          </span>
          <BsBag size={25} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <h2 className="text-2xl font-light">Your Meal Plan</h2>
          <span className="block text-green-700 text-lg">{numberOfCartItems}</span>
        </SheetHeader>
        {
          items.map(
            item=>
            <CartItem key={item.id} item={item.itemName} itemId={item.id}/>
          )
        }
      </SheetContent>
    </Sheet>
  );
}
export default Cart;

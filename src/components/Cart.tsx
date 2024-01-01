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

function Cart() {
  const {items, numberOfCartItems}= useAppSelector((state)=> state.cart);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <span className="absolute px-2 py-0.5 bg-yellow-500 top-0 text-white text-xs rounded-full">
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
            <h4 key={item.id}>{item.itemName}</h4>
          )
        }
      </SheetContent>
    </Sheet>
  );
}
export default Cart;

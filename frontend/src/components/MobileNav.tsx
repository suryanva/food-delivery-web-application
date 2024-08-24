import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
          <SheetTitle>
            <span>Welcome to OrangeEats</span>
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

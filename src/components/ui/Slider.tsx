import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";

type TSlider = {
  name: string | ReactNode;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
};

const Slider = ({
  name,
  variant = "default",
  children,
  footer,
  header,
}: TSlider) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={variant}>{name}</Button>
      </SheetTrigger>
      <SheetContent className="grid grid-cols-1 justify-center mb-20 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{header}</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4 overflow-y-auto">{children}</div>
        <SheetFooter className="absolute bg-white bottom-0 left-0 right-0">
          <SheetClose asChild>{footer}</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Slider;

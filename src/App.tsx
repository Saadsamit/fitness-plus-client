import { useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Toaster } from "@/components/ui/sonner";
import { useAppSelector } from "./redux/hooks/ReduxHook";
import { cartData } from "./redux/features/Cart/cartSlice";

function App() {
  const data = useAppSelector(cartData);
  const toastOptions = {
    classNames: {
      title: "capitalize",
      actionButton: "!bg-textColor",
    },
  };
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };
    if (data?.length) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [data]);
  return (
    <div className="overflow-hidden">
      <MainLayout />
      <Toaster toastOptions={toastOptions} />
    </div>
  );
}

export default App;

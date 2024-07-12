import { useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const toastOptions = {
    classNames: {
      title: "capitalize",
      actionButton: "!bg-textColor",
    },
  };
  useEffect(() => {
    document.title = "Fitness plus";
  }, []);
  return (
    <div className="overflow-hidden">
      <MainLayout />
      <Toaster toastOptions={toastOptions} />
    </div>
  );
}

export default App;

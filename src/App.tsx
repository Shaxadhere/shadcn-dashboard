import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <TooltipProvider>
      <AppRouter />;
      <Toaster />
    </TooltipProvider>
  );
};

export default App;

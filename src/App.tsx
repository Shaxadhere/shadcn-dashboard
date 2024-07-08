import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import AppRouter from "./routes/AppRouter";
import "./App.css";

const App = () => {
  return (
    <TooltipProvider>
      <AppRouter />
      <Toaster />
    </TooltipProvider>
  );
};

export default App;

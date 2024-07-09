import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import { QueryClientProvider } from "react-query";
import queryClient from "./services";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppRouter />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

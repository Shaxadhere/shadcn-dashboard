import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import FormComponents from "./FormComponents";
import TableComponents from "./TableComponents";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 lg:gap-6">
        <div>
          <h1 className="mb-2 text-lg font-bold">Forms</h1>
          <FormComponents />
        </div>

        <div>
          <h1 className="mb-2 text-lg font-bold">Data Table</h1>
          <TableComponents />
        </div>

        <div>
          <h1 className="mb-2 text-lg font-bold">Toasts</h1>
          <Button
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                important: true,
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Show Sonner
          </Button>
        </div>

        <div className="mt-10">
          <h1 className="mb-2 text-lg font-bold">Heros</h1>
          <div className="flex flex-col gap-4 lg:gap-6  h-full">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
            </div>
            <div
              className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
              x-chunk="dashboard-02-chunk-1"
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                  You have no products
                </h3>
                <p className="text-sm text-muted-foreground">
                  You can start selling as soon as you add a product.
                </p>
                <Button className="mt-4">Add Product</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

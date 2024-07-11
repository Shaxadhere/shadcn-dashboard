import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import FormComponents from "./FormComponents";
import TableComponents from "./TableComponents";
import Popovers from "./Popovers";
import TabsComponents from "./Tabs";
import NoDataActionBox from "@/components/globals/empty-placeholders/NoDataActionBox";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="mb-2 text-lg font-bold">Forms</h1>
        <FormComponents />
      </div>

      <div className="mt-10">
        <h1 className="mb-2 text-lg font-bold">Data Table</h1>
        <TableComponents />
      </div>

      <div className="mt-10">
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
        <h1 className="mb-2 text-lg font-bold">Popovers</h1>
        <Popovers />
      </div>

      <div className="mt-10">
        <h1 className="mb-2 text-lg font-bold">Heros</h1>

        <div className="flex flex-col gap-4 lg:gap-6  h-full">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>

          <NoDataActionBox
            title="You have no products"
            subtitle="You can start selling as soon as you add a product."
            actionText="Add Product"
            onActionClick={() => console.log("Add Product")}
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="mb-1 text-lg font-bold">Tabs Components</h1>
        <TabsComponents />
      </div>
    </div>
  );
};

export default Dashboard;

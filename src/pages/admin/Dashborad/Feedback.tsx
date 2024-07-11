import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

interface Props {}

const Feedback: React.FC<Props> = () => {
  return (
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
  );
};

export default Feedback;

import CommonModal from "@/components/globals/modals/CommonModal";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import React from "react";
import TodoForm from "./TodoForm";

interface Props {}

const Modals: React.FC<Props> = () => {
  return (
    <div className="mt-10">
      <h1 className="mb-2 text-lg font-bold">Modals</h1>
      <div className="flex gap-5 flex-col max-w-[250px]">
        <CommonModal
          triggerText="Open Modal"
          triggerComponent={() => <Button>Open Modal</Button>}
          title="Modal Title"
          subtitle="Make changes to your profile here. Click save when you're done."
          footerActions={
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button className="ml-2">Save</Button>
            </div>
          }
        >
          <p className="p-5">Hello I'm inside a modal</p>
        </CommonModal>

        <TodoForm />
      </div>
    </div>
  );
};

export default Modals;

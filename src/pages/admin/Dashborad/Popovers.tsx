import ComboSearchInput from "@/components/globals/popovers/ComboSearchInput";
import CommonPopover from "@/components/globals/popovers/CommonPopover";
import HoverCardPopover from "@/components/globals/popovers/HoverCardPopover";
import { NotepadTextIcon, PersonStanding } from "lucide-react";

const Popovers = () => {
  return (
    <div className="mt-10">
      <h1 className="mb-2 text-lg font-bold">Popovers</h1>
      <div className="flex gap-5 flex-col">
        <ComboSearchInput />

        <CommonPopover
          title="Trigger Popover"
          triggerComponent={() => <PersonStanding />}
        >
          <p className="p-5">Hello I'm inside a popover!</p>
        </CommonPopover>

        <HoverCardPopover
          triggerText="@nextjs"
          triggerComponent={() => <NotepadTextIcon />}
        >
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </HoverCardPopover>
      </div>
    </div>
  );
};

export default Popovers;

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Clock } from "lucide-react";

const FormTimeInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeChange = (type, value) => {
    setTime((prevTime) => ({
      ...prevTime,
      [type]: value,
    }));
  };

  return (
    <div className="relative">
      <Input
        value={`${time.hours}:${time.minutes}:${time.seconds}`}
        readOnly
        className="pr-10"
      />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Clock
            onClick={handleOpen}
            className="absolute right-2 top-2 cursor-pointer"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Time</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex space-x-4">
              <div>
                <p>Hours</p>
                {[...Array(24).keys()].map((hour) => (
                  <p
                    key={hour}
                    onClick={() => handleTimeChange("hours", hour)}
                    className="cursor-pointer hover:bg-gray-200"
                  >
                    {hour}
                  </p>
                ))}
              </div>
              <div>
                <p>Minutes</p>
                {[...Array(60).keys()].map((minute) => (
                  <p
                    key={minute}
                    onClick={() => handleTimeChange("minutes", minute)}
                    className="cursor-pointer hover:bg-gray-200"
                  >
                    {minute}
                  </p>
                ))}
              </div>
              <div>
                <p>Seconds</p>
                {[...Array(60).keys()].map((second) => (
                  <p
                    key={second}
                    onClick={() => handleTimeChange("seconds", second)}
                    className="cursor-pointer hover:bg-gray-200"
                  >
                    {second}
                  </p>
                ))}
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FormTimeInput;

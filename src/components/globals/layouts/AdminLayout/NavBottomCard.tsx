import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "react-day-picker";

interface Props {}

const NavBottomCard: React.FC<Props> = () => {
  return (
    <div className="mt-auto">
      <Card>
        <CardHeader>
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavBottomCard;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  actionTitle: string;
  action: () => void;
};

const QuickActionCard = ({
  title,
  description,
  actionTitle,
  action,
}: Props) => {
  return (
    <Card x-chunk="dashboard-02-chunk-0">
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Button size="sm" className="w-full" onClick={action}>
          {actionTitle}
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActionCard;

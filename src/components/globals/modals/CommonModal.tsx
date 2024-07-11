import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  triggerComponent?: () => React.ReactNode;
  triggerText?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  footerActions?: React.ReactNode;
  onClose?: () => void;
}

const CommonModal: React.FC<Props> = ({
  triggerComponent,
  triggerText,
  subtitle,
  title,
  children,
  footerActions,
  onClose,
}) => {
  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && onClose && onClose()}>
      <DialogTrigger asChild>
        {triggerComponent ? (
          triggerComponent()
        ) : (
          <Button variant="outline">{triggerText}</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>{footerActions}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommonModal;

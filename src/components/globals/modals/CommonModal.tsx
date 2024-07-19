import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
interface Props {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  footerActions?: React.ReactNode;
  onClose?: () => void;
  isOpen: boolean;
}

const CommonModal: React.FC<Props> = ({
  subtitle,
  title,
  children,
  footerActions,
  onClose,
  isOpen,
}) => {
  return (
    <Dialog
      onOpenChange={(isOpen) => !isOpen && onClose && onClose()}
      open={isOpen}
      modal={isOpen}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {subtitle && <DialogDescription>{subtitle}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>{footerActions}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommonModal;

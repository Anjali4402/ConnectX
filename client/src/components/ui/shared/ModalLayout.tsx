import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface ModalLayoutProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export function ModalLayout({ open, setOpen, children }: ModalLayoutProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className=" w-full md:max-w-3xl bg-[#081425] rounded-[32px] [&>button]:hidden p-0
      glass-morphism min-h-[60vh] h-fit  shadow-2xl  overflow-hidden"
      >
        {children}
      </DialogContent>
      <DialogTrigger />
    </Dialog>
  );
}

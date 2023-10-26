"use client";

import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";

export const CreateServerButton = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <Button variant="primary" onClick={() => onOpen("initialServer")}>
        Create Server
      </Button>
    </div>
  );
};

import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import { CreateServerButton } from "@/components/navigation/navigation-initial";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  //return <InitialModal />;
  return (
    <div className="h-full flex flex-col text-center items-center justify-center">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        You are not currently a member of any server.
        <br />
        Please create a new server
        <br />
        or
        <br /> Join a server.
      </h4>
      <div className="mt-4">
        <CreateServerButton />
      </div>
    </div>
  );
};

export default SetupPage;

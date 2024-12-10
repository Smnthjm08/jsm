import { Button } from "@nextui-org/button";
import Image from "next/image";

import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <Button radius="full" size="lg" type="submit" variant="ghost">
          <Image
            alt="github-icon"
            height={16}
            src={"/github2.png"}
            width={16}
          />
          Sign In with GitHub
        </Button>
        {/* google auth pending */}
        <Button radius="full" size="lg" type="submit" variant="ghost">
          <Image alt="google-icon" height={16} src={"/google.png"} width={16} />
          Sign In with Google
        </Button>
      </div>
    </form>
  );
}

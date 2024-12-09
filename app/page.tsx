import { Button } from "@nextui-org/button";

import SignIn from "@/components/sign-in";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Button>Hello</Button>
      <SignIn />
    </section>
  );
}

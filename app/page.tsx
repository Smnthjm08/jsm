"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/sign-up");
  };

  return <Button onClick={handleClick}>Hello</Button>;
}

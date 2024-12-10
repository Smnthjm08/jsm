"use client";  // Indicating this is a client-side component in Next.js 13+

import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>User Page</h1>
      <div>{slug}</div>
    </div>
  );
};

export default UserPage;

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    window.location.replace(decodeURIComponent((router.query as any).direct));
  }, []);
  return null;
}

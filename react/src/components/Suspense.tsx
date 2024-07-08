import { ReactNode, Suspense as ReactSuspense } from "react";

interface SuspenseProps {
  children: ReactNode;
}
export default function Suspense(props: SuspenseProps) {
  return (
    <ReactSuspense fallback={<div>Loading...</div>}>
      {props.children}
    </ReactSuspense>
  );
}

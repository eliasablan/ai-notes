import React, { Suspense } from "react";
import Register from "./_components/RegisterForm";

export default function Registrar() {
  return (
    <Suspense>
      <Register />
    </Suspense>
  );
}

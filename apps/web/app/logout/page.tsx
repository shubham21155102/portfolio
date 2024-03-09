"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.clear();
    indexedDB.deleteDatabase("shubhamiitbhu");
    router.push("/login");
  });
  return <></>;
};

export default page;

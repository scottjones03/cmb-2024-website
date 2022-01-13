import React from "react";
import AppHeader from "../components/AppHeader";
import Filler from "../components/Filler";
import JobsDisplay from "../components/JobsDisplay";

export default function WorkForUsPage() {
  return (
    <>
      <AppHeader />
      <Filler height={70} />
      <JobsDisplay />
    </>
  );
}

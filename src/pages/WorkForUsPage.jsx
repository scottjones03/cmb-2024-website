import React from "react";
import Container from "../components/Container";
import AppHeader from "../components/main/AppHeader";
import JobsDisplay from "../components/main/JobsDisplay";

export default function WorkForUsPage() {
  return (
    <Container>
      <AppHeader />
      <JobsDisplay />
    </Container>
  );
}

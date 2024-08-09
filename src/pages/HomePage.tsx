import LoadingSpinner from "@/components/LoadingSpinner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-5">
      <Card>
        <CardHeader>
          <CardTitle>
            Hello world!
          </CardTitle>
          <CardDescription>
            This is a simple loading spinner component.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex items-center justify-center">
          <LoadingSpinner />
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;

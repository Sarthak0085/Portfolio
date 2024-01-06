import About from "@/components/About/About";
import Heading from "@/utils/heading";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Heading
        title={`About`}
        description="Portfolio shows the about section of a person"
        keywords="Nextjs, Programming, coding skills, Web Development"
      />
      <div className="h-full mt-[3.5rem] overflow-y-hidden">
        <About />
      </div>
    </div>
  );
};

export default page;

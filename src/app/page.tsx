"use client";

import About from "./_sections/About";
import Header from "./_components/Header";
import Projects from "./_sections/Projects";
import Footer from "./_components/Footer";
import Stacks from "./_sections/Stacks";
import InSectionProvider from "./_providers/in-section-provider";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="mb-16 container mx-auto ">
        <About />

        <div className="space-y-16 md:space-y-24">
          <InSectionProvider>
            <Projects />
          </InSectionProvider>

          <InSectionProvider>
            <Stacks />
          </InSectionProvider>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

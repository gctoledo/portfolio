import Header from "./_components/Header";
import Footer from "./_components/Footer";
import About from "./_sections/About";
import Projects from "./_sections/Projects";
import Stacks from "./_sections/Stacks";
import Contact from "./_sections/Contact";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="mb-16 container mx-auto ">
        <About />

        <div className="space-y-16 md:space-y-24">
          <Projects />

          <Stacks />

          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

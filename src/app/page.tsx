import About from "./_sections/About";
import Header from "./_components/Header";
import Projects from "./_sections/Projects";
import Footer from "./_components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-28 mb-12 container mx-auto space-y-20 md:mt-32 md:mb16 md:space-y-24">
        <About />

        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

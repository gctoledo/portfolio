import About from "./_sections/About";
import Header from "./_components/Header";
import Projects from "./_sections/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <div className="mt-28 md:mt-32 container mx-auto space-y-20 md:space-y-24">
        <About />

        <Projects />

        <div>oi</div>
      </div>
    </>
  );
};

export default Home;

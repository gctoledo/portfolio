import About from "./_sections/About";
import Header from "./_components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="mt-32 container mx-auto">
        <About />
      </div>
    </>
  );
};

export default Home;

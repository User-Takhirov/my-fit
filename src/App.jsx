import { Container } from "./Components/Container";
import { Brands } from "./container/Brands";
import { Faq } from "./container/Faq";
import { Footer } from "./container/Footer";
import { Hero } from "./container/Hero";
import { Navbar } from "./container/navbar";
import { Opportunity } from "./container/Opportunity";
import { Plan } from "./container/Plan";
import { Questions } from "./container/Questions";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Brands />
        <Opportunity />
        <Questions />
        <Plan />
        <Faq />
        <Footer />
      </Container>
    </>
  );
}

export default App;

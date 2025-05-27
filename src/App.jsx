import { useState } from "react";
import { Container } from "./Components/Container";
import { Brands } from "./container/Brands";
import { Clients } from "./container/Clients";
import { Faq } from "./container/Faq";
import { Footer } from "./container/Footer";
import { Hero } from "./container/Hero";
import { Navbar } from "./container/navbar";
import { Opportunity } from "./container/Opportunity";
import { Plan } from "./container/Plan";
import { Questions } from "./container/Questions";

function App() {
  const [active, setActive] = useState(null);
  return (
    <>
      <Container>
        <Navbar active={active} setActive={setActive} />
        <Hero />
        <Brands />
        <Opportunity />
        <Questions />
        <Plan />
        <Clients />
        <Faq />
        <Footer active={active} setActive={setActive} />
      </Container>
    </>
  );
}

export default App;

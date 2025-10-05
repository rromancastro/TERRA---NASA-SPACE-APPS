import { NavBar } from "./components";
import { FirstSection, FourthSection, SecondSection, ThirdSection } from "./sections";
import { EighthSection } from "./sections/EighthSection";
import { SixthSection } from "./sections/SixthSection";
import { TenthSection } from "./sections/TenthSection";
import { TwelfthSection } from "./sections/TwelfthSection";

export default function Home() {
  return (<>
    <NavBar />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <SixthSection />
    <EighthSection />
    <TenthSection />
    <TwelfthSection />
  </>)
}

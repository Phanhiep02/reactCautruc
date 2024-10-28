import BestSeller from "./BestSeller";
import Carousel from "./Carousel";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Carousel></Carousel>
      <BestSeller></BestSeller>
    </>
  );
}

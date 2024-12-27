
import Button from "@/components/Button";
import { LampDemo } from "../components/lamp";
import "../styles/globals.css";

export default function HomePage() {

  return (
    <>
      <LampDemo />
      <Button label="Get Started" onClick={() => alert("Button Clicked!")} />
    </>
  );
}

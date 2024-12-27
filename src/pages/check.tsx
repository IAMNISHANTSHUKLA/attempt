
import Button from "@/components/Button";
import { LampDemo } from "../components/lamp";
import '../styles/globals.css';


export default function CheckPage() {
  return (
      <div className={'flex flex-col items-center justify-center min-h-screen bg-gray-100'}>
        <h1 className="text-4xl font-bold mb-4">Welcome to Zutara</h1>
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
          <LampDemo />
        </section>
        <Button label="Get Started" onClick={() => alert("Button Clicked!")} />
      </div>
  );
}

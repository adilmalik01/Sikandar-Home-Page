import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import Section from "./component/navbar/section/section";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Navbar />
      <Section />
    </main>
  );
}

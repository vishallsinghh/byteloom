import Navbar from "@/layout/Navbar";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import DatasetFeatures from "@/components/Home/DatasetFeatures";
import Security from "@/components/Home/Security";
import Footer from "@/layout/Footer";
import Connection from "@/components/Home/Connection";

export default function Home() {
  return (
    <div className="bg-cream font-sans">
      <Navbar />
      <Hero />
      <Features />
      {/* integrate section */}
      <Connection />
      <DatasetFeatures />
      <Security />
      <Footer />
    </div>
  );
}

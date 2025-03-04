import { Hero } from "@/components/home/Hero";
import { Biography } from "@/components/home/Biography";
import { FeaturedBooks } from "@/components/home/FeaturedBooks";
import { Testimonials } from "@/components/home/Testimonials";
import { ComingSoon } from "@/components/home/ComingSoon";

export default function Home() {
   return (
      <>
         <Hero />
         <Biography />
         <FeaturedBooks />
         <Testimonials />
         <ComingSoon />
      </>
   );
}

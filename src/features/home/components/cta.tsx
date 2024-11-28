import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 ">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 C75,50 75,50 100,100 L0,100 Z"
            fill="hsl(var(--primary)/0.05)"
            className="animate-pulse"
          />
        </svg>
      </div>

      <Container className="max-w-screen-xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl " />
          <div className="p-8 md:p-12 lg:p-16 text-center space-y-6 backdrop-blur-xl rounded-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              Let's collaborate to create something extraordinary. Get in touch
              with our team today.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="h-12 px-8">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;

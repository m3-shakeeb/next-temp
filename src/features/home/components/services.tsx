import Container from "@/components/container";
import { DotPattern } from "@/components/dot-pattern";
import { Card } from "@/components/ui/card";
import { Shield, Star, Zap } from "lucide-react";

const Services = () => {
  return (
    <section className="relative py-8 bg-muted/20">
      {/* <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute opacity-20">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div> */}
      <DotPattern />
      <Container className="max-w-screen-xl">
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Fast Development",
              description:
                "Rapid development and deployment of your digital projects.",
            },
            {
              icon: Shield,
              title: "Secure Solutions",
              description:
                "Enterprise-grade security for all your digital assets.",
            },
            {
              icon: Star,
              title: "Premium Quality",
              description: "Top-tier quality in every project we deliver.",
            },
          ].map((service, i) => (
            <Card key={i} className="border-none">
              <div
                key={i}
                className="w-full bg-background px-4 py-2 relative overflow-hidden group cursor-pointer rounded-md before:bg-primary before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[31] before:transition-all before:ease-out before:duration-[600ms] z-[0] shadow h-full"
              >
                <service.icon className="absolute top-2 z-20 right-2 text-[1rem] size-4 text-background " />
                <h3 className="text-[1.5rem] font-bold transition-all duration-500 group-hover:text-background ease-out">
                  {service.title}
                </h3>
                <p className="text-[0.9rem]  transition-all ease-out duration-500 mt-1 group-hover:text-background">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;

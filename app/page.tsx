import fs from "fs";
import path from "path";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageSlider } from "@/components/image-slider";
import { ProgramCard } from "@/components/program-card";
import { StatsCounter } from "@/components/stats-counter";
import { DonateButton } from "@/components/donate-button";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Newsletter } from "@/components/newsletter";
import { LocationCard } from "@/components/location-card";
import { FoodBankService } from "@/components/food-bank-service";
import { DecorativeCircle } from "@/components/decorative-circle";

import Link from "next/link";

export default function Home() {
  // Dynamically load all images from the images/food folder
  const foodSlides = fs
    .readdirSync(path.join(process.cwd(), "public/images/food"))
    .map((fileName) => ({
      url: `/images/food/${fileName}`,
      alt: `Image of ${fileName.replace(/\.[^/.]+$/, "").replace(/-/g, " ")}`,
    }));

  const heroSlides = [
    {
      url: "/images/hero/img1.webp",
      alt: "Community members receiving food assistance",
    },
    {
      url: "/images/hero/img2.webp",
      alt: "Volunteers preparing food packages",
    },
    {
      url: "/images/hero/img3.webp",
      alt: "Community gathering at West Hill",
    },
    {
      url: "/images/hero/img4.webp",
      alt: "Community gathering at West Hill",
    },
    {
      url: "/images/hero/img5.webp",
      alt: "Community gathering at West Hill",
    },
    {
      url: "/images/hero/img6.webp",
      alt: "Community gathering at West Hill",
    },
  ];

  const programs = [
    {
      title: "Food Security Services",
      description:
        "Weekly food bank serving over 650 residents, school meal programs, shelter meal support, and seniors food bank.",
      icon: "utensils",
    },
    {
      title: "Empowerment Programs",
      description:
        "Financial literacy workshops, entrepreneurship training, job fairs, and skills development to help clients achieve independence.",
      icon: "briefcase",
    },
    {
      title: "Social Services & Case Management",
      description:
        "Access to government benefits, free legal clinics, tax filing assistance, and housing support for community members.",
      icon: "users",
    },
  ];

  const foodServices = [
    {
      title: "School Feeding",
      description:
        "Ensuring children receive nutritious meals to support their education.",
      icon: "school",
    },
    {
      title: "Seniors' Nutrition",
      description: "Providing tailored food options for older adults.",
      icon: "heart",
    },
    {
      title: "Shelter Feeding",
      description:
        "Delivering meals to displaced individuals in collaboration with shelters.",
      icon: "home",
    },
    {
      title: "Walk-In Food Bank",
      description: "Open to all, ensuring no one in West Hill goes hungry.",
      icon: "package",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section with Slideshow */}
      <section
        id="hero"
        className="w-full py-16 md:py-24 px-4 md:px-8 relative overflow-hidden"
      >
        <DecorativeCircle className="absolute -top-20 -right-20 text-primary/10 w-96 h-96" />
        <DecorativeCircle className="absolute -bottom-40 -left-40 text-accent/10 w-[500px] h-[500px]" />

        <div className="relative z-10">
          <ImageSlider
            slides={heroSlides}
            autoPlay={true}
            height={500}
            className="md:h-[700px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70 flex flex-col items-start justify-center px-6 md:px-20 lg:px-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-primary">West Hill</span> <br />
                <span className="text-white">Community Support Program</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-xl mb-8 leading-relaxed">
                Ending Hunger. Empowering Lives. Building Futures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <DonateButton />
                <Link
                  href="https://forms.gle/7bXWaGs5m5bqHyeJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full text-lg px-8 py-6 h-auto shadow-lg"
                  >
                    Volunteer With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-background relative overflow-hidden">
        <DecorativeCircle className="absolute top-0 right-0 text-primary/5 w-[600px] h-[600px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-card to-card/50 p-10 rounded-3xl shadow-lg border border-primary/10 transform transition-transform hover:scale-[1.02]">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From food bank to financial independence, our vision is to break
                the cycle of hunger and poverty by walking with individuals
                every step of the way—from crisis to recovery, and into
                thriving.
              </p>
            </div>
            <div className="bg-gradient-to-br from-card to-card/50 p-10 rounded-3xl shadow-lg border border-primary/10 transform transition-transform hover:scale-[1.02]">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To serve with dignity, restore hope, and empower every resident
                in West Hill and surrounding communities through accessible
                food, services, and opportunities for lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-accent to-accent/80 relative overflow-hidden">
        <DecorativeCircle className="absolute -bottom-40 -right-40 text-white/10 w-[500px] h-[500px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            Our Impact
          </h2>
          <StatsCounter
            stats={[
              { label: "People Served in 2024", value: 32850 },
              { label: "Weekly Food Bank Users", value: 685 },
              { label: "Volunteer Team Members", value: 40 },
            ]}
            textColor="text-white"
            labelColor="text-white/80"
          />
        </div>
      </section>

      {/* About Us - Comprehensive */}
      <section
        id="about"
        className="w-full py-16 md:py-24 px-4 md:px-8 bg-background relative overflow-hidden"
      >
        <DecorativeCircle className="absolute -top-40 -left-40 text-primary/5 w-[500px] h-[500px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About West Hill Community Support Program
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-3xl shadow-lg border border-primary/10">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Who We Are
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  WHCSP is a trusted community hub in West Hill, serving one of
                  Toronto's most underserved neighborhoods. Designated as a
                  priority community by the City of Toronto, West Hill is home
                  to eight shelters and over ten social housing buildings, with
                  many residents facing food insecurity, economic hardship, and
                  barriers to essential services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Located at Morningside and Lawrence Avenue, our mission is to
                  combat food insecurity, offer vital community resources, and
                  enhance the overall well-being of those who call West Hill
                  home.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-lg border border-primary/10">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Why Support Us?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  West Hill continues to face rising food insecurity and
                  financial instability, and the demand for our services is
                  growing. With the closure of other community food banks, we
                  remain one of the few organizations addressing these urgent
                  needs. Your support helps us expand storage, increase food
                  supplies, and sustain these essential programs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Together, we can ensure West Hill residents have access to
                  food, legal aid, financial support, and the resources needed
                  to navigate tough times and rebuild their lives.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-3xl shadow-lg border border-primary/10">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Services
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We provide a range of programs designed to support residents
                  through difficult times and help them regain stability:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2 flex-shrink-0 mt-1">
                      ✦
                    </span>
                    <div>
                      <span className="text-primary font-bold">
                        Community Food Bank
                      </span>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                        Serving 685 individuals weekly, including School Feeding
                        Program, Seniors' Nutrition Program, Shelter Feeding
                        Program, and Community Walk-In Food Bank.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2 flex-shrink-0 mt-1">
                      ✦
                    </span>
                    <div>
                      <span className="text-primary font-bold">
                        Free Legal Clinic
                      </span>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                        In partnership with PaceLaw Law Firm – Offering legal
                        guidance and support to community members facing legal
                        challenges.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2 flex-shrink-0 mt-1">
                      ✦
                    </span>
                    <div>
                      <span className="text-primary font-bold">
                        Free Tax Clinic
                      </span>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                        Assisting low-income individuals in filing their taxes
                        and accessing financial benefits.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2 flex-shrink-0 mt-1">
                      ✦
                    </span>
                    <div>
                      <span className="text-primary font-bold">
                        Empowerment & Capacity Building Workshops for Residents
                      </span>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                        Organize if capacity building programs, Resume writing ,
                        Job Faits , Financial literacy and career coaching
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2 flex-shrink-0 mt-1">
                      ✦
                    </span>
                    <div>
                      <span className="text-primary font-bold">
                        Service Canada Community Clinics
                      </span>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                        Helping residents navigate employment, benefits, and
                        transition services, ensuring they can access essential
                        government resources.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-lg border border-primary/10">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Programmes
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We offer a variety of programmes to help our clients get back
                  on their feet. From job training to mental health counseling,
                  we provide the resources and support necessary to help
                  individuals achieve their goals.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  Volunteer Opportunities
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Volunteers are the backbone of our organization. We offer a
                  variety of opportunities for individuals and groups to get
                  involved and make a difference in the lives of those we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowerment Programs Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background to-card relative overflow-hidden">
        <DecorativeCircle className="absolute -bottom-40 -right-40 text-primary/5 w-[500px] h-[500px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Empowering Our Community
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We empower people through comprehensive programs so they can get a
              job, start a business, and achieve financial independence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Food Photos Slideshow */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-card relative overflow-hidden">
        <DecorativeCircle className="absolute -top-40 -left-40 text-accent/5 w-[500px] h-[500px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Food Bank Services
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-1 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl mx-auto w-full max-w-5xl">
              <ImageSlider slides={foodSlides} autoPlay={true} height={600} />
            </div>
            <div className="pt-4 text-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto rounded-full shadow-lg">
                <a href="/gallery">View Full Gallery</a>
              </Button>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed text-center">
                Our food bank serves over 685 individuals weekly, including
                school children, seniors, and shelter residents. We're committed
                to ensuring no one in West Hill goes hungry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {foodServices.map((service, index) => (
                  <FoodBankService key={index} {...service} />
                ))}
              </div>

              <div className="pt-4 text-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto rounded-full shadow-lg">
                  Learn More About Our Food Bank
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-background relative overflow-hidden">
        <DecorativeCircle className="absolute -bottom-40 -right-40 text-primary/5 w-[500px] h-[500px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Food Bank Locations
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <LocationCard
              title="WEST HILL SCARBOROUGH"
              address="2 - 4234 Lawrence Ave East"
              city="Scarborough, ON"
              postalCode="M1E 2S5"
              mapUrl="https://maps.google.com/?q=4234+Lawrence+Ave+East,+Scarborough,+ON"
            />

            <LocationCard
              title="GORDONRIDGE PLACE TORONTO"
              address="10 Gordonridge Place"
              city="Scarborough, Toronto, ON"
              postalCode="M1K 4H6"
              mapUrl="https://maps.google.com/?q=10+Gordonridge+Place,+Scarborough,+Toronto,+ON"
            />
          </div>
        </div>
      </section>

      {/* Volunteer & Events */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <DecorativeCircle className="absolute -top-40 -left-40 text-accent/5 w-[500px] h-[500px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Get Involved
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-primary/10">
            <Tabs defaultValue="volunteer" className="w-full">
              <TabsList className="w-full grid grid-cols-2 rounded-none bg-card border-b border-primary/10 p-0">
                <TabsTrigger
                  value="volunteer"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none py-6 text-lg"
                >
                  Volunteer
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none py-6 text-lg"
                >
                  Upcoming Events
                </TabsTrigger>
              </TabsList>
              <TabsContent value="volunteer" className="p-8 md:p-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Sign Up as a Volunteer
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Volunteers are the backbone of our organization. Join our
                    team of over 40 dedicated individuals making a difference in
                    West Hill.
                  </p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto rounded-full shadow-lg">
                    <a
                      href="https://forms.gle/7bXWaGs5m5bqHyeJ9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Volunteer Sign Up Form
                    </a>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="events" className="p-8 md:p-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Community Food Bank & Free Meal Program
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    JOIN US EVERY TUESDAY FROM 11:30AM - 2PM FOR OUR FREE
                    COMMUNITY DELICIOUS HOT MEAL & FOOD BANK PROGRAM
                  </p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto rounded-full shadow-lg">
                    <a
                      href="https://forms.gle/gC22eyyzBdJ1Gjg47"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre-register Now
                    </a>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-background relative overflow-hidden">
        <DecorativeCircle className="absolute -bottom-40 -right-40 text-primary/5 w-[500px] h-[500px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Partners & Sponsors
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="relative">
            <InfiniteScroll />
          </div>
        </div>
      </section>

      {/* Contact & Subscribe */}
      <section
        id="contact"
        className="w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-card to-background relative overflow-hidden"
      >
        <DecorativeCircle className="absolute -top-40 -left-40 text-accent/5 w-[500px] h-[500px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-card p-10 rounded-3xl shadow-lg border border-primary/10">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Better yet, see us in person! Making Life count for ALL
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="w-full sm:w-24 font-semibold text-primary mb-1 sm:mb-0">
                    Email:
                  </div>
                  <div className="text-muted-foreground">
                    whcsptoronto@gmail.com
                    <br />
                    info@westhillcommunitysupport.ca
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="w-full sm:w-24 font-semibold text-primary mb-1 sm:mb-0">
                    Phone:
                  </div>
                  <div className="text-muted-foreground">+1-437-985-5504</div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="w-full sm:w-24 font-semibold text-primary mb-1 sm:mb-0">
                    Website:
                  </div>
                  <div className="text-muted-foreground">
                    www.westhillcommunitysupport.ca
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="w-full sm:w-24 font-semibold text-primary mb-1 sm:mb-0">
                    Address:
                  </div>
                  <div className="text-muted-foreground">
                    Corporate office UNIT 2B-4234 Lawrence Ave East,
                    <br />
                    SCARBOROUGH, Toronto M1E 2S5
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary/10 h-12 w-12"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary/10 h-12 w-12"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary/10 h-12 w-12"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="bg-card p-10 rounded-3xl shadow-lg border border-primary/10">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Subscribe
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Stay updated with our latest events, programs, and ways to get
                involved.
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 md:px-8 bg-card border-t border-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            Copyright © {new Date().getFullYear()} West Hill Community Support
            Program - All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

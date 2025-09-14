import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
     <div className="container max-w-4xl mx-auto z-10">
  <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
    
    {/* Image Section */}
    <img
      src="/icons/shrajal.jpg"
      alt="Shrajal"
      className="w-72 h-82 object-cover rounded-lg shadow-md"
    />

    {/* Text Section */}
    <div className="text-left">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        <span className="block opacity-0 animate-fade-in">Hey!</span> <br></br>
        <span className="opacity-0 animate-fade-in">I'm Shrajal</span> <span className="text-primary opacity-0 animate-fade-in-delay-1"> Kelkar</span>
      </h1><br></br>
      <h3 className="text-2xl md:text-3xl tracking-tight text-primary text-left opacity-0 animate-fade-in-delay-1">
       ASU MSCS'2026 | Ex-Pwc | Ex-KPMG
      </h3>
    </div>

  </div>
</div>


     

     
     
   

      <div className="flex flex-col sm:flex-row gap-4 pt-15 justify-center">
              <a href="#projects" className="cosmic-button">
                {" "}
                View My Work
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

    </section>
  );
};

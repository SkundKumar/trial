import { motion } from "framer-motion";
import Ripple from "./components/ui/ripple";
import { VelocityScroll } from "./components/ui/scroll-based-velocity";
import SparklesText from "./components/ui/sparkles-text";
import logo from "./assets/logo.png";

const storeLinks = [
  { name: "Amazon", url: "https://www.amazon.in/yourstorelink" },
  { name: "Flipkart", url: "https://www.flipkart.com/yourstorelink" },
  { name: "Meesho", url: "" },
  { name: "Blinkit", url: "https://www.blinkit.com/yourstorelink" }
];

export default function App() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 to-green-100 md:shadow-2xl">
      {/* Navbar */}
      <nav className="bg-green-100 flex items-center justify-between w-screen ">
        <div className="flex items-center">
          <img src= {logo} alt="Logo" className="h-40 " />
          <span className="text-2xl font-bold"></span>
        </div>
        <ul className="flex space-x-4 p-10 font-orbitron font-semibold text-green-900">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Initial Ripple Page */}
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-green-100">
        <p className="z-10 font-whitespace-pre-wrap text-center text-7xl font-rozha font-semibold tracking-tighter text-green-900">
        बाँसRoot
        </p>
        <Ripple />
      </div>

      {/* Scrolling Text */}
      <VelocityScroll
        text="    Sustainable Bamboo Solutions for a Greener Tomorrow ✨    "
        default_velocity={1}
        className="font-display font-offside font-semibold text-center text-4xl tracking-[-0.000000em] text-green-800 drop-shadow-lg dark:text-white md:text-7xl md:leading-[5rem]"
      />

      <motion.div
        className="mt-[20vh]"
        initial={{ opacity: 0, y: 100 }} // Start invisible and lower
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ duration: 0.5, ease: "easeInOut" }} // Animation properties
        viewport={{ once: false }} // Ensure the animation triggers on scroll
      >
        <SparklesText
          text="Shop from Our Stores!"
          className="text-center text-5xl text-green-900 font-plaster"
          sparklesCount={20}
        />
      </motion.div>

      <motion.div
        className="mt-[10vh] w-screen flex justify-center h-[60vh]"
        initial={{ opacity: 0, y: 50 }} // Start invisible and lower
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ duration: 0.9, ease: "easeInOut" }} // Animation properties
        viewport={{ once: false }} // Ensure the animation triggers on scroll
      >
        <div className="relative font-orbitron grid w-[80vw] aspect-square gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 ">
          {storeLinks.map((store, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.35)"
              }}
              whileTap={{ scale: 0.005 }} // Animation on click
              className={`flex items-center justify-center cursor-pointer rounded-2xl border-2 border-zinc-600 text-center font-small text-2xl bg-green-100 shadow-sm transition-all duration-300 ease-in-out ${
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === 1
                  ? "col-span-2 row-span-1"
                  : "col-span-1 row-span-1"
              }`}
              onClick={() => window.open(store.url, "_blank")}
            >
              <p className="text-center text-2xl text-green-900">{store.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-green-100 mb-7 w-screen text-green-900 p-4 text-center">
      <div className="flex justify-center space-x-4">
        {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, index) => (
          <motion.a
        
            key={index}
            href={`https://www.${social.toLowerCase()}.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-lg font-medium font-mono sm:p-4 mt-10  text-green-900 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              
              
              letterSpacing: "0.1rem",
            }}
          >
            {social}
          </motion.a>
        ))}
      </div>
      <p className="mt-2 text-sm">
        &copy; {new Date().getFullYear()} BaansRoot. All rights reserved.
      </p>
    </footer>
    </div>
  );
}

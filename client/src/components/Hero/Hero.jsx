import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Embrace <br />
              India's Magic
              <br /> Celebrate Tradition
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Discover the wedding of your dreams and immerse yourself
            <br></br> in our cultural experiences.Explore our website to find the</span>
            <span>  perfect match for your journey into Indian traditions.</span>
          </div>

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={90} end={100} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Join Our Thriving Community</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={45} end={50} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">WanderWeddings</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} /> <span>+</span>
              </span>
              <span className="secondaryText">LocalRituals</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

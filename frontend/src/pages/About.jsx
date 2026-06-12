import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  return (
    <div className="min-h-screen bg-bg-base pt-12 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark mb-8 leading-tight">
            Coloring Kolkata,<br />One Canvas at a Time.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded with a passion for bringing people together through creativity, Art Rickshaw is more than just a studio. It's a sanctuary for imagination, located in the cultural heart of Kolkata.
          </p>
        </motion.div>
      </section>

      {/* Image & Text Split */}
      <section className="container mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-4/5 bg-gray-200 rounded-3xl overflow-hidden relative group">
               {/* Abstract placeholder gradient since we don't have a specific studio image */}
               <div className="absolute inset-0 bg-linear-to-tr from-primary/80 to-secondary/80 opacity-60 mix-blend-multiply"></div>
               <div className="absolute inset-0 bg-text-dark/10"></div>
               <img src="/src/assets/images/rickshaw.png" alt="Studio" className="w-full h-full object-cover object-center mix-blend-luminosity opacity-60" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-serif font-bold text-text-dark mb-6">Our Philosophy</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe that art is not just for the 'gifted'. It is a language, a form of therapy, and a way to connect. We provide a space where mistakes are welcomed as happy accidents, and where the process is celebrated over perfection.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From traditional terracotta to modern fluid arts, our workshops are designed to help you disconnect from the hustle of the city and reconnect with your inner self.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="bg-text-dark text-white py-24 mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { number: "50+", text: "Workshops Hosted Monthly" },
              { number: "10k+", text: "Happy Creators" },
              { number: "∞", text: "Colors Mixed" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="text-6xl font-serif font-bold text-primary mb-4">{stat.number}</div>
                <div className="text-xl font-medium">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

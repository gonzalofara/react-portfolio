import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue hover:cursor-pointer`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles} onClick={() => window.open(url)}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Some projects and freelance work that I have done using different
          programming languages and libraries.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Cripto quoter"
            description="Cripto quoter using getting information from an API. -JavaScript, HTML5 and tailwind -"
            url="https://cotizador-criptojs.netlify.app/"
          />
          <Project
            title="Vet patients"
            description="Veterinary patient manager. CRUD(React, Tailwind, LocalStorage and MongoDB)"
            url="https://pacientes-vet.netlify.app/"
          />

          {/* ROW 2 */}
          <Project
            title="Mascotapp"
            description="Find a lost pet, put it up for adoption or adopt it through user posts and interactions. (React, redux, typescript, chatbot, localstorage, auth0, stripe, nodeJS, express, postgresSQL, leaflet, mercadopago, emailsender, web push, material UI, tailwind)"
            url="https://mascotapps.vercel.app/"
          />
          <Project
            title="Pokedex"
            description="Henry's Bootcamp Individual Project. Find all pokemons and their stats or create a new one. (React, redux, CSS, nodeJS, express, postgresSQL)"
            url="https://github.com/gonzalofara/PI-Pokemon-main"
          />
          <Project
            title="Magnetica accreditations"
            description="Event and guest manager for the Latin American company Magnetica Producciones. MERN Stack (React, redux, nodeJS, postgresql, express, chartJS)"
            url="https://www.linkedin.com/posts/gonzalo-fara-377404212_buen-jueves-para-todos-hoy-tengo-el-placer-activity-6993981346553450496-iUnm?utm_source=share&utm_medium=member_desktop"
          />

          {/* ROW 3 */}
          <Project
            title="uTube clone"
            description="uTube Clone fetching data from API Youtube v3 (React, Material UI, ReactPlayer)"
            url="https://utubeclone-gf.netlify.app/"
          />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import Image from "next/image";
export default function About() {
  return (
    <>
      
      <main>
        <motion.img
          src="/me.jpg"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
            style={{
              height: "50%",
              width: "50%",
              background:"transparent",
              padding:"1px",
              borderRadius: 30,
              backgroundColor: "#fff",

            }}
            // transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          />
        
   
          <motion.div 
            style={{
              height: "100%",
              width: "100%",
              padding:"1px",
              borderRadius: 30,
              backgroundColor: "#fff",
            }}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}/>
      </main>
    </>
  );
}

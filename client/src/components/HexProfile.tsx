import { motion } from "framer-motion";
import profileImg from "@assets/DSC05777.JPG";

export function HexProfile() {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto">
      {/* Rotating outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
      />
      
      {/* Counter-rotating inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 border border-secondary/30 rounded-full"
      />

      {/* Hexagon Clip Path */}
      <div className="absolute inset-8 bg-black z-10 overflow-hidden" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 scale-110"
        />
        {/* Scanline overlay specifically for image */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,157,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
      </div>

      {/* Decorative tech bits */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black border border-primary text-primary text-[10px] px-2 py-0.5 font-mono">
        SYS.ADMIN
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black border border-secondary text-secondary text-[10px] px-2 py-0.5 font-mono">
        ONLINE
      </div>
    </div>
  );
}

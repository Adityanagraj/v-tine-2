import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-8 lg:left-16 bottom-8 lg:bottom-12 transform -translate-y-1/2 text-white/90 text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight ${cormorant.className}`}
      >
        <span className="text-accent-gold/90 font-medium">Match</span>
        <br />
        <span className="text-white/70">the photo pairs</span>
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-8 lg:right-16 bottom-8 lg:bottom-12 transform -translate-y-1/2 text-white/90 text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-right tracking-tight ${cormorant.className}`}
      >
        to reveal <br />
        <span className="text-accent-rose">the surprise</span>
      </h1>
    </>
  );
}

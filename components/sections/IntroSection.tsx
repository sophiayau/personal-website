import Image from "next/image";
import { pixelify, inter } from "@/lib/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function IntroSection() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: `
          radial-gradient(1200px 600px at 15% 85%, rgba(255,255,255,0.35), transparent 60%),
          radial-gradient(900px 500px at 80% 20%, rgba(255,192,203,0.25), transparent 55%),
          radial-gradient(700px 400px at 60% 70%, rgba(255,182,193,0.18), transparent 60%),
          linear-gradient(135deg, #8bb6dd, #7a9fd1, #6a7fa3)
        `,
      }}
    >
      <div
        className="
          mx-auto max-w-6xl
          px-6
          py-14 sm:py-20
          flex flex-col
          md:flex-row
          md:items-center
          gap-10 md:gap-16
        "
      >
        {/* LEFT (photo + name + title) */}
        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <Image
            src="/headshot.jpeg"
            alt="Sophia Yau"
            width={275}
            height={275}
            priority
            className="
              rounded-full object-cover
              w-40 h-40 sm:w-52 sm:h-52 md:w-[275px] md:h-[275px]
            "
          />

          {/* Name (one line on mobile) */}
          <h1
            className={`
              ${inter.className}
              mt-5
              text-white
              font-bold
              text-3xl sm:text-4xl
              leading-tight
              whitespace-nowrap
            `}
          >
            <span className={`${pixelify.className} text-4xl sm:text-5xl`}>S</span>
            ophia Yau
          </h1>

          {/* Title (one line on mobile) */}
          <p
            className={`
              ${inter.className}
              mt-2
              font-bold
              text-black/90
              text-xl sm:text-2xl
              whitespace-nowrap
            `}
          >
            <span className={`${pixelify.className} text-2xl sm:text-3xl`}>S</span>
            oftware Engineer
          </p>
        </div>

        {/* RIGHT (intro + icons) */}
        <div className="w-full flex-1 text-center md:text-left">
          <p
            className={`
              ${inter.className}
              text-white/90
              text-base sm:text-lg
              leading-relaxed
              mx-auto md:mx-0
              max-w-xl
            `}
          >
            I’m a software engineer focused on building thoughtful, scalable
            applications. I enjoy working across the stack and turning complex
            problems into simple, intuitive solutions.
          </p>

          {/* Icons: centered on mobile, wraps so nothing gets cut off */}
          <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-6 text-white/90 text-3xl sm:text-4xl">
            <a
              href="https://github.com/sophiayau"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center hover:text-white hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>

            <a
              href="https://linkedin.com/in/sophiayau"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center hover:text-white hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faSquareLinkedin} />
            </a>

            <a
              href="mailto:sophiayau888@gmail.com"
              aria-label="Email"
              className="inline-flex items-center hover:text-white hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faSquareEnvelope} />
            </a>

            <a
              href="/Sophia_Yau_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="inline-flex items-center hover:text-white hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

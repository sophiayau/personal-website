import Image from "next/image";
import { pixelify, inter } from "@/lib/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function IntroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(1200px 600px at 15% 85%, rgba(255,255,255,0.35), transparent 60%),
          radial-gradient(900px 500px at 80% 20%, rgba(255,192,203,0.25), transparent 55%),
          radial-gradient(700px 400px at 60% 70%, rgba(255,182,193,0.18), transparent 60%),
          linear-gradient(135deg, #8bb6dd, #7a9fd1, #6a7fa3)
        `,
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-24 flex items-center gap-16">

        <div className="w-1/3 flex flex-col items-center text-center">
          <Image
            src="/headshot.jpeg"
            alt="Sophia Yau"
            width={275}
            height={275}
            className="rounded-full object-cover"
          />

          <h1 className={`${inter.className} text-white text-4xl font-bold mt-4`}>
            <span className={`${pixelify.className} text-5xl`}>S</span>ophia Yau
          </h1>

          <p className={`${inter.className} font-bold text-black/90 text-2xl mt-2`}>
            <span className={`${pixelify.className} text-3xl`}>S</span>oftware Engineer
          </p>
        </div>

        <div className="flex-1">
          <p className={`${inter.className} text-white/90 text-lg leading-relaxed max-w-xl`}>
            I’m a software engineer focused on building thoughtful, scalable
            applications. I enjoy working across the stack and turning complex
            problems into simple, intuitive solutions.
          </p>

          <div className="mt-6 flex gap-6 text-white/80 text-3xl">

        <a
          href="https://github.com/sophiayau"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white hover:scale-110 transition"
        >
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>

        <a
          href="https://linkedin.com/in/sophiayau"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white hover:scale-110 transition"
        >
          <FontAwesomeIcon icon={faSquareLinkedin} />
        </a>

        <a
          href="mailto:sophiayau888@gmail.com"
          aria-label="Email"
          className="hover:text-white hover:scale-110 transition"
        >
          <FontAwesomeIcon icon={faSquareEnvelope} />
        </a>

        <a
          href="/Sophia_Yau_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          className="hover:text-white hover:scale-110 transition"
        >
          <FontAwesomeIcon icon={faDownload} />
        </a>

      </div>


      </div>
      </div>
    </section>
  );
}

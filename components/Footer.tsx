import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
        
      style={{
        backgroundImage: `
          radial-gradient(1200px 600px at 15% 85%, rgba(255,255,255,0.25), transparent 60%),
          radial-gradient(900px 500px at 80% 20%, rgba(255,192,203,0.18), transparent 55%),
          radial-gradient(700px 400px at 60% 70%, rgba(255,182,193,0.12), transparent 60%),
          linear-gradient(135deg, #8bb6dd, #7a9fd1, #6a7fa3)
        `,
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-white text-center sm:text-left">
          © 2025 Sophia Yau — Software Engineer
        </p>

        <div className="flex items-center justify-center gap-5 text-2xl text-white/80">
          <a
            href="https://github.com/sophiayau"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>

          <a
            href="https://linkedin.com/in/sophiayau"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FontAwesomeIcon icon={faSquareLinkedin} />
          </a>

          <a
            href="mailto:sophiayau888@gmail.com"
            aria-label="Email"
            className="hover:text-white transition"
          >
            <FontAwesomeIcon icon={faSquareEnvelope} />
          </a>
{/* 
          <a
            href="/Sophia_Yau_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="hover:text-white transition"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a> */}
        </div>
      </div>
    </footer>
  );
}

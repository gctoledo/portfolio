import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const social_midias = [
  {
    name: "Github",
    link: "https://github.com/gctoledo",
    icon: <Github />,
    color: "#fafbfc",
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/gctoledo",
    icon: <Linkedin />,
    color: "#0077B5",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/gctoledo_",
    icon: <Instagram />,
    color: "#d62976",
  },
];

const AboutMe = () => {
  return (
    <div className="space-y-6 text-sm">
      <h1 className="text-lg">🔥 Full Stack Developer</h1>

      <p>
        Entusiasta da tecnologia, atualmente curso Ciência da Computação e
        dedico minha trajetória à construção de soluções robustas e bem
        arquitetadas. Venho me aprofundando em tecnologias modernas, com paixão
        por aprender e evoluir constantemente.
      </p>

      <p>
        Atuo há mais de 1 ano com a stack JavaScript, passando por todo o
        ecossistema de desenvolvimento web — desde interfaces ricas com React e
        Next.js até APIs performáticas com Node.js, Express e Fastify, com
        cobertuda de testes automatizados utilizando Jest e Vitest. Tenho sólida
        experiência com bancos de dados relacionais e não relacionais, como
        PostgreSQL e MongoDB.
      </p>

      <p>
        Também atuei em projetos Ruby on Rails para desenvolvimento de
        aplicações completas, sempre utilizando Docker e Docker Compose para
        garantir ambientes consistentes de desenvolvimento.
      </p>

      <p>Atualmente, estou me especializando no ecossistema Java Spring.</p>

      <h3>
        Você pode me encontrar em algumas redes sociais, fique à vontade para
        visitar:
      </h3>

      <div className="space-y-4">
        {social_midias.map((midia) => (
          <div key={midia.name} className="flex gap-4 items-center text-center">
            {midia.icon}
            <Link
              href={midia.link}
              target="_blank"
              rel="noreferrer"
              className="pt-1"
            >
              Visite o meu{" "}
              <span className={`font-bold`} style={{ color: midia.color }}>
                {midia.name}!
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

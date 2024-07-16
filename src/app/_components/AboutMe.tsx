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
      <h1 className="text-lg">Olá! Meu nome é Gabriel</h1>

      <p>
        Me formei em Engenharia Civil e hoje curso Ciência da Computação. Não
        demorou muito depois da minha primeira graduação para descobrir que eu
        amo tecnologia e que eu quero investir todo meu esforço nessa área.
      </p>

      <p>
        Foquei muito na stack{" "}
        <span className="text-javascript">JavaScript</span>/
        <span className="text-typescript">Typescript</span>, passando por todo
        front-end com HTML, CSS, JavaScript, React.js, utilizando diversas
        tecnologias, sendo a minha favorita o Next.js.
      </p>

      <p>
        Há um tempo venho investindo muito meus estudos também no ecossistema
        Node, utilizando algumas tecnologias também no back-end. Além disso já
        trabalhei com banco de dados SQL e NoSQL, principalmente PostgreSQL
        trabalhando em conjunto com containers Docker.
      </p>

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

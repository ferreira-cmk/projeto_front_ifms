const About = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-green-400 mb-6">
        Sobre este projeto
      </h1>
      <p className="text-purple-300 mb-4">
        Este app é uma exploração interdimensional dos personagens da série Rick
        and Morty. Usamos a API pública Rick and Morty para trazer dados reais
        do multiverso.
      </p>
      <p className="mb-4">
        Construído com React, TypeScript, Tailwind CSS e muita energia de
        portal!
      </p>

      <blockquote className="border-l-4 border-green-400 pl-4 italic text-yellow-400">
        “Wubba Lubba Dub Dub!” - Rick Sanchez
      </blockquote>
    </div>
  );
};

export default About;

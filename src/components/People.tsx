import { useEffect, useState } from "react";
import axios from "axios"; // ou use seu api.ts se preferir

interface Personagem {
  id: number;
  name: string;
  gender: string;
  species: string;
  image: string;
}

export default function ListaPessoas() {
  const [pessoas, setPessoas] = useState<Personagem[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarPessoas() {
      try {
        const resposta = await axios.get("https://rickandmortyapi.com/api/character");
        setPessoas(resposta.data.results);
      } catch (erro) {
        console.error("Erro ao carregar personagens:", erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarPessoas();
  }, []);

  if (carregando) return <p className="text-center p-4">Carregando...</p>;

  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold text-green-400 mb-6">Personagens de Rick and Morty</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pessoas.map((pessoa) => (
          <li
            key={pessoa.id}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
          >
            <img
              src={pessoa.image}
              alt={pessoa.name}
              className="w-20 h-20 object-cover rounded-full"
            />
            <div>
              <p><strong>Nome:</strong> {pessoa.name}</p>
              <p><strong>Gênero:</strong> {pessoa.gender}</p>
              <p><strong>Espécie:</strong> {pessoa.species}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

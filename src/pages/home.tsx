

const Home = () => {
  //const [contador, setContador] = useState(0);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-green-400 mb-6">
        Bem-vindo ao Rick and Morty Explorer!
      </h1>
      <p className="text-purple-300 mb-6">
        Explore personagens, episódios e muito mais do multiverso maluco de Rick
        and Morty.
      </p>

      <div className="mb-8">
        <button
          onClick={() => alert("Wubba Lubba Dub Dub!")}
          className="bg-green-500 px-5 py-3 rounded-lg font-bold hover:bg-green-600 transition"
        >
          Clique para uma surpresa Rick!
        </button>
      </div>
    </div>
  );
};
export default Home;

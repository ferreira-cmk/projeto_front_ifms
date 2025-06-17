type CardProps = {
  title: string;
  content: string;
};

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg text-white hover:shadow-purple-500/40 transition duration-300">
      <h2 className="text-xl font-bold text-green-400 mb-2">{title}</h2>
      <p className="text-purple-300">{content}</p>
    </div>
  );
};

export default Card;

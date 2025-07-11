const LastPage = ({ displayOptions, name }) => {
  return (
    <div className="bg-white border border-black-300 p-4 m-4 w-full">
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-2xl flex items-center justify-center font-bold text-[var(--ocean)] mb-2">{name}</h2>
        {Object.entries(displayOptions).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center p-2 border-b">
            <p className="font-semibold text-black text-m">{key}:</p>
            <p className="text-gray-600">{Array.isArray(value) ? value.join(', ') : value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastPage;
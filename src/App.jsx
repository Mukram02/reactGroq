import "./App.css";
import { requestToGroqAI } from "./utils/groq";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content);
    setData(ai);
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center">
      <h1 className="text-4xl text-indigo-500">REACT | GROQ</h1>
      <form
        action=""
        className="flex flex-col gap-4 py-4"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Ketik Permintaan Di Sini ..."
          className="py-2 px-4 text-md rounded-md"
          id="content"
          type="text"
        />
        <button
          type="submit"
          className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md"
        >
          Kirim
        </button>
      </form>
      <div>{data}</div>
    </main>
  );
}

export default App;

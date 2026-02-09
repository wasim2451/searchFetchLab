import "./App.css";
import Button from "./components/Button";
import { useState, useEffect, useCallback } from "react";
interface dataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  const [data, setData] = useState<dataType>();
  const [input, setInput] = useState<string>("");
  const handlefetch = useCallback(async () => {
    if (input != "") {
      try {
        const res: Promise<Response> = await fetch(
          `https://jsonplaceholder.typicode.com/posts/` + input,
        );
        const x: dataType = await res.json();
        if (x) setData(x);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  useEffect(() => {
    handlefetch();
  }, [handlefetch]);
  return (
    <div>
      <div>Input Field</div>
      <input
        type="text"
        placeholder="Enter user id"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button fetchData={handlefetch} />
      <div>{data?.id}</div>
      <div>{data?.title}</div>
      <div>{data?.body}</div>
    </div>
  );
}

export default App;

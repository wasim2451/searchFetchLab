import "./App.css";
import Button from "./components/Button";
import { useState, useCallback } from "react";
interface dataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  const [data, setData] = useState<dataType>();
  const [input, setInput] = useState<string>("");
  const handlefetch = useCallback(async (value: string) => {
    if (!value) return;
    if (value != "") {
      console.log("Input Got rendered !");
      try {
        const res: Response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${value}`,
        );
        const x: dataType = await res.json();
        if (x) setData(x);
        console.log(x);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div>
      <div>Input Field</div>
      <input
        type="text"
        placeholder="Enter user id"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button fetchData={() => handlefetch(input)} />
      <div>{data?.id}</div>
      <div>{data?.title}</div>
      <div>{data?.body}</div>
    </div>
  );
}

export default App;

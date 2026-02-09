import { memo } from "react";
export default memo(function Button({ fetchData }: { fetchData: () => void }) {
  console.log("Button rendered");
  return <button onClick={fetchData}>Fetch Data</button>;
});

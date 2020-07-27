import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HookUserApi() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data))
      .catch(err => setError(err));
  }, []);

  return (
    <div className="HookUserApi">
      {error && <div className="ErrorMessage">{error}</div>}
      <ul>
        {data.map(item => (
          <li key={item.username}>
            {item.username}: {item.name}
          </li>
        ))}
      </ul>
      <details>
        <summary>Debug JSON</summary>
        <legend>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </legend>
      </details>
    </div>
  );
}

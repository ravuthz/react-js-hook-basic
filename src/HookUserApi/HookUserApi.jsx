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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.username}>
            {item.username}: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect, useState } from "react";
import Log from "./Log";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/logs`)
    .then((res)=>{
      console.log(res.data);
      setLogs(res.data);
    })
    .catch((err)=>{
      throw err;
    })
  }, [])


  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Captain Name</th>
              <th>Log Entry</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index}log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
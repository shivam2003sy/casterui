import { React, useState, useEffect } from "react";
import axios from "axios";
import "./getallClient.css";

const GetAllServer = () => {
  // const allClient= async  ()=>{
  //     const cleint = await axios.get("http://192.168.48.120:8000/get-all-clients-caster");
  //     console.log(cleint);
  // }
  const [server, setServer] = useState([]);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await axios.get(
          "http://192.168.123.120:8000/get-all-server-caster"
        );
        console.log(response.data);
        setServer(response.data); // Assuming response.data is an array of clients
      } catch (error) {
        console.error("Error fetching Servers:", error);
      }
    };

    fetchServers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        
        <div className="col-sm-12 col-lg-6 client">
        <div style={{ background: "white", position: "fixed", width: "44.3%", height: "8%" }}>
            <h4
              className="mb-3 mt-2"
              style={{ textAlign: "left",}}
            >
              Total Servers Connected With Caster              </h4>
          </div>
        <ul className="client-list">
          {server.map((server, index) => (
            <li key={server.id} className={index % 2 === 0 ? 'light-gray' : 'white'}>
              <div
                  style={{
                    textAlign: "left",
                    paddingLeft: "15px",
                    padding: "10px",
                  }}
                >
                  <h6>
                    Server ID :{" "}
                    <span style={{ fontWeight: 400 }}>{server.id}</span>{" "}
                  </h6>
                  <div>
                    <h6>
                      Coordinates :{" "}
                      <span style={{ fontWeight: 400 }}>
                        latitude: {server.latitude}{" "}
                      </span> , 
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        longitude: {server.longitude}{" "}
                      </span>
                    </h6>
                  </div>
                  <div>
                    <h6>
                      Activity status :{" "}
                      <span style={{ fontWeight: 400 }}>
                        {server.is_active}{" "}
                        console.log(server);
                      </span>
                    </h6>
                  </div>
                </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-sm-12 col-lg-6"></div>
      </div>
    </div>
  );
};

export default GetAllServer;
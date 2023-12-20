import { React, useState, useEffect } from "react";
import axios from "axios";
import "./getallClient.css";
import Map from "./Map";

const GetAllClient = () => {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          "http://192.168.123.120:8000/get-all-clients-caster"
        );
        console.log(response.data);
        setClients(response.data); // Assuming response.data is an array of clients
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
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
              Client Information
            </h4>
          </div>
          <ul className="client-list">
            {clients.map((client, index) => (
              <li
                key={client.id}
                className={index % 2 === 0 ? "light-gray" : "white"}
              >
                <div
                  style={{
                    textAlign: "left",
                    paddingLeft: "15px",
                    padding: "10px",
                  }}
                >
                  <h6>
                    Client ID :{" "}
                    <span style={{ fontWeight: 400 }}>{client.id}</span>{" "}
                  </h6>
                  <div>
                    <h6>
                      Coordinates :{" "}
                      <span style={{ fontWeight: 400 }}>
                        latitude: {client.latitude}{" "}
                      </span>{" "}
                      ,
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        longitude: {client.longitude}{" "}
                      </span>
                    </h6>
                  </div>
                  <div>
                    <h6>
                      Activity status :{" "}
                      <span style={{ fontWeight: 400 }}>
                        {client.is_active}{" "}
                      </span>
                    </h6>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-lg-6">
          <Map lat={-72} long={23} />
        </div>
      </div>
    </div>
  );
};

export default GetAllClient;

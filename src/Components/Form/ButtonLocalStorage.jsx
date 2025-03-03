import { useState } from "react";

export const ButtonLocalStorage = () => {
  const [dataLocal, setDataLocal] = useState([]);

  const handleLocal = () => {
    const data = JSON.parse(localStorage.getItem("dataForm"));
    console.log("handleLocal", data);
    setDataLocal(data);
  };
  return (
    <>
      <button className="buttonSee" onClick={handleLocal}>
        Mostrar data
      </button>
      {dataLocal.length > 0 &&
        dataLocal.map((item, i) => {
          return (
            <div className="dataContainer" key={i}>
              <p>{item.email}</p>
              <p>{item.password}</p>
            </div>
          );
        })}
    </>
  );
};

import React, { useEffect, useState } from "react";
import axios from "axios";
import CrudForm from "../CrudForm";
import CrudTable from "../CrudTable";
import Loader from "./Loader";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => setDb(response.data))
      .catch((error) => setError(error));
    setLoading(false);
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    axios
      .post(url, data)
      .then((res) => setDb([...db, res.data]))
      .catch((error) => setError(error));
  };

  const updateData = (data) => {
    let endPoint = `${url}/${data.id}`;
    axios.put(endPoint, data).then((res) => {
      let newData = db.map((item) => (item.id === res.data.id ? res.data : item));
      setDb(newData);
    });
    // setDb(db.map((item) => (item.id === data.id ? data : item)));
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("Esta seguro de eliminar el registro?");
    if (isDelete) {
      setDb(db.filter((item) => item.id !== id));
    } else {
      return;
    }
  };

  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default CrudApi;

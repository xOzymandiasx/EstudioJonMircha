import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectAnidados = () => {

  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [subUrb, setSubUrb] = useState("");

  return (
    <div>
      <h2>Select anidados</h2>
      <h3>Mexico</h3>
      <SelectList title="estados" url="" handleChange={e=>{setState(e.target.value)}}/>
      {state && <SelectList title="municipios" url="" handleChange={e=>{setTown(e.target.value)}}/>}
      {town && <SelectList title="colonias" url="" handleChange={e=>{setSubUrb(e.target.value)}}/>}      
      <pre>
        <code>
          {state}-{town}-{subUrb}
        </code>
      </pre>
    </div>
  );
};

export default SelectAnidados;

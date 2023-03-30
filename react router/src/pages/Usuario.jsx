import { useParams } from "react-router-dom";

const Usuario = () => {
  // let params = useParams();
  // console.log(params);

  let {userName} = useParams();

  return (
    <div>
      <h3>Perfil de usuario</h3>
      <p>Nombre del usuario <bold>{userName}</bold></p>
    </div>
  )
}

export default Usuario;
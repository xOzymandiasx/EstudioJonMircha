import { Link, Outlet, useNavigate, } from 'react-router-dom';

// const Topic = () => {
//   let {topic} = useParams();
//   return(
//     <div>
//       <h4>{topic}</h4>
//       <p>Hola a todos!</p>
//     </div>
//   )
// };

const ReactTopics = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Temas de react</h3>
      <ul>
        <li><Link to="jsx">JSX</Link></li>
        <li><Link to="props">Props</Link></li>
        <li><Link to="estado">Estado</Link></li>
        <li><Link to="componentes">Componentes</Link></li>
        <li><Link to="topic">Topic</Link></li>
      </ul>
      {/* <Routes>
        <Route to="/jsx" element={<Jsx />}/>
        <Route to="props"/>
        <Route to="estado"/>
        <Route to="componentes"/>
        <Route to=":topic" element={<Topic />}/>
      </Routes> */}
      {/* <Outlet context={[person]}/> */}
    </div>
  )
}

export default ReactTopics;
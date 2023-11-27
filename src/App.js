import data from "./assets/data";
import Caracter from "./Components/Caracter";
import Carte from "./Components/Caracter";


function App() {
  return (
    <div className="min-h-screen bg-slate-700 font-mono ">
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-star ">
        {data.map((item, index) => (
          <li key={index} >
            <Caracter
              frame={item.image}
              name={item.name}
              description={item.description}
            />


          </li>

        ))}

      </ul>
    </div>
  )
};

export default App;


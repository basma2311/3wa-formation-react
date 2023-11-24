import { useState } from 'react';
import TaskItem from "./components/TaskItem";
import logo from './assets/images/logo.png';

function App() {
  // 1 er sera la valeur de votre state
  // 2e sera la fonction qui permet de mettre à jour le state
  // TOUJOURS LE DÉCLARER AU TOP DE LA FONCTION 
  const [textEntered, setTextEntered] = useState('');
  const [tasks, setTasks] = useState([]);

  const onChangeHandler = function (event) {
    // event.target => document.querySelector('input)
    // `event.target.value` permet de récuperer la valeur d'un input
    // 👆 Il fonctionne qu'avec les balises formulaires (input, select)
    // event.target.classList.add('red') // ajoute la class `red` quand on entre une saissie
    setTextEntered(event.target.value);
    
  };

  const addTaskHandler = function (event) {
    event.preventDefault(); //pour éviter le recharge du formulaire pour ne pas perder les données d'utilisateur
       
    // NE PAS UTILISER AINSI QUAND ON VEUT METTRE A JOUR UNE LISTE
    // tasks.push(textEntered);

     // La bonne méthode : utiliser le `spread operator` qui permet de copier
    // une liste (tableau) puis ajouter le nouvelle tâche
    // setTasks([...tasks, textEntered]);
    // console.log(tasks);
    const newArr = [...tasks, textEntered];
    setTasks(newArr);
     // Stock les taches dans le localstorage
     localStorage.setItem('my-tasks', JSON.stringify(newArr))
  };

  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">
      {/* <h1 className="text-slate-50 text-3xl font-bold text-center ">TODO APP</h1> */}
      <img src={logo} alt="image" className="block mx-auto" />

      {/* Input pour taper une tache */}
      <form  
        onSubmit={addTaskHandler}
        className="flex justify-center items-center gap-4">

        <input
          // A chaque saisi sur le input la fonction est rééxecuter
          // Avec le paramétre `event` on peut accéder à l'élément `input`
          // Donc à sa valeur `event.target.value`
          onChange={onChangeHandler}
          type="text"
          className="w-full md:w-2/3"
        />
        <input
          type="submit"
          value="Add Task"
          className="text-yellow-400 text-2xl"
        />
      </form>

      <section className='mt-10  mx:auto'>
        <ul className='flex flex-col space-y-5'>
          {/* 
          La méthode `map` va parcourrir le liste (tableau)
          Elle attend une fonction en `callback` la fonction recevra 
          chaque élément de tableau via les paramètres
          */}
          {tasks.map((item, index) => (
            <TaskItem key={index} name={item}  removeItem={
              () => {
                const newArr = [...tasks];
                newArr.splice(index, 1);
                setTasks(newArr);
                localStorage.setItem('my-tasks', JSON.stringify(newArr))
              }
            }/>
          ))}
          {/* {tasks.map((item, index) => (
            <li key={index} className="bg-slate-100 text-center py-4 rounded shadow shadow-slate-400">{item}</li>
          ))}  */}
        </ul>
      </section>
    </main>
  );
}

export default App;

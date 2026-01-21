import { useEffect, useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
    const today=new Date()
    const todayMonth=today.getMonth()
    const todayDate=today.getDate()

    const birthdaysToday=data.filter((person)=>{
      const dob=new Date(person.dob)
      return(dob.getMonth()===todayMonth && dob.getDate()===todayDate)
    })

    setPeople(birthdaysToday)
  },[])

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button type="button" className="btn btn-block" onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};
export default App;

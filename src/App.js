import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Add from "./Components/Add";
import { Movies } from "./Components/Data";
import Details from "./Components/Details";
import MovieList from "./Components/MovieList";
import Navibar from "./Components/Navibar";

function App() {
  const [list, setList] = useState(Movies);
  const [recheche, setRecheche] = useState("");
  const [value, setValue] = React.useState(null);

  const handelChange = (e) => {
    setRecheche(e.target.value);
  };
  const handelRating = (event, newValue) => {
    setValue(newValue);
  };
  const handelAdd = (newMovie) => {
    setList([...list,newMovie])
  };
  console.log(value);
  return (
    <div className="App">
      <Navibar
        recheche={recheche}
        handelChange={handelChange}
        value={value}
        handelRating={handelRating}
      />
      <Add handelAdd={handelAdd} />

        <Switch>
          <Route exact path='/' render ={()=><MovieList
        omar={list.filter((el) =>
            el.title.toUpperCase().includes(recheche.toUpperCase())
            &&
            value===null?el:el.rating === value
        )}
      /> }/> 
          <Route path='/Details/:id' render ={(props)=><Details {...props} Listee={list} /> }/>
        </Switch>
    </div>
  );
}

export default App;

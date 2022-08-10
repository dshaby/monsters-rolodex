import "./App.css";
import { ChangeEvent, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data-fetch.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
}


const App = () => { 
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonsters(users)
    }
    fetchUsers();
    // fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    //   response.json().then((users) => setMonsters(users))
    // );
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((m) => {
        return m.name.toLocaleLowerCase().includes(searchField);
      })
    );
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        value={searchField}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

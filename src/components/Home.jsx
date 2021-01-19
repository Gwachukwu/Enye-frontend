import React, { useEffect, useState } from "react";
import Axios from "axios";
import Table from "./Table";
import Search from "./Search";
import FilterGender from "./FilterGender";
import FilterPayment from "./SearchPayment";

const Home = () => {
  const [state, setState] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(() => {
    Axios.get("https://api.enye.tech/v1/challenge/records")
      .then((res) => {
        setState(res.data);
        setAllProfiles([...res.data.records.profiles]);
        setFiltered([...res.data.records.profiles]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>Enye Frontend Challenge</h1>
      </header>
      <div className="filters">
        <Search
          allProfiles={allProfiles}
          filtered={filtered}
          setFiltered={setFiltered}
        />
        <FilterGender
          allProfiles={allProfiles}
          filtered={filtered}
          setFiltered={setFiltered}
        />
        <FilterPayment
          allProfiles={allProfiles}
          filtered={filtered}
          setFiltered={setFiltered}
        />
      </div>
      <Table profiles={filtered} />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";

const Search = ({ allProfiles, filtered, setFiltered }) => {
  const [state, setState] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (state === "") {
      setFiltered([...allProfiles]);
    }
  }, [state]);
  const handleChange = (e) => {
    setState(e.target.value);
    const regex = new RegExp(e.target.value, "gi");
    const newProfiles = filtered.filter(
      (profile) =>
        profile.FirstName.match(regex) || profile.LastName.match(regex)
    );
    setFiltered([...newProfiles]);
    if (newProfiles.length === 0) {
      setError("No match found");
    }
  };

  return (
    <input
      type="search"
      name=""
      id=""
      placeholder="Search with first or last name"
      onChange={handleChange}
      className="search-name"
    />
  );
};

export default Search;

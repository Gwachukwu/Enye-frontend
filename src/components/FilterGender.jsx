import React, { useEffect, useState } from "react";

const FilterGender = ({ allProfiles, filtered, setFiltered }) => {
  const [state, setState] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
      //dynamic search
    if (state === "") {
      setFiltered([...allProfiles]);
    }
    if (state === "Male") {
        setFiltered([...allProfiles.filter(profile=>profile.Gender === "Male")]);
      }
      if (state === "Female") {
        setFiltered([...allProfiles.filter(profile=>profile.Gender === "Female")]);
      }
      if (state === "Prefer to skip") {
        setFiltered([...allProfiles.filter(profile=>profile.Gender === "Prefer to skip")]);
      }
  }, [state]);

  const handleChange = (e) => {
    setState(e.target.value);
    const regex = new RegExp(e.target.value, "g");
    const newProfiles = filtered.filter(
      (profile) =>
        profile.Gender.match(regex)
    );
    setFiltered([...newProfiles]);
    if (newProfiles.length === 0) {
      setError("No match found");
    }
  };
  return (
      <div>
    <label htmlFor="gender">Filter by gender</label>
    <select name="gender" id="gender" onChange={handleChange}>
        <option value="" >All</option>
        <option value="Male" >Male</option>
        <option value="Female" >Female</option>
        <option value="Prefer to skip" >Prefer to skip</option>
    </select>
    </div>
  );
};

export default FilterGender;

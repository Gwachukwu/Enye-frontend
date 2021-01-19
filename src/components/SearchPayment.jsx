import React, { useEffect, useState } from "react";

const FilterPayment = ({ allProfiles, filtered, setFiltered }) => {
  const [state, setState] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
      //dynamic search
    if (state === "") {
      setFiltered([...allProfiles]);
    }
    if (state === "cc") {
        setFiltered([...allProfiles.filter(profile=>profile.PaymentMethod === "cc")]);
      }
      if (state === "check") {
        setFiltered([...allProfiles.filter(profile=>profile.PaymentMethod === "check")]);
      }
      if (state === "money order") {
        setFiltered([...allProfiles.filter(profile=>profile.PaymentMethod === "money order")]);
      }
      if (state === "paypal") {
        setFiltered([...allProfiles.filter(profile=>profile.PaymentMethod === "paypal")]);
      }
  }, [state]);

  const handleChange = (e) => {
    setState(e.target.value);
    const regex = new RegExp(e.target.value, "g");
    const newProfiles = filtered.filter(
      (profile) =>
        profile.PaymentMethod.match(regex)
    );
    setFiltered([...newProfiles]);
    if (newProfiles.length === 0) {
      setError("No match found");
    }
  };
  return (
      <div>
    <label htmlFor="PaymentMethod">Filter by payment method</label>
    <select name="PaymentMethod" id="PaymentMethod" onChange={handleChange}>
        <option value="" >All</option>
        <option value="cc" >cc</option>
        <option value="paypal" >paypal</option>
        <option value="check" >check</option>
        <option value="money order" >money order</option>
    </select>
    </div>
  );
};

export default FilterPayment;

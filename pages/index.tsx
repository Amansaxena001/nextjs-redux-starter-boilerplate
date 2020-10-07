import React from "react";
import Navbar from "../components/Header/Navbar";
import NewsReader from "../components/News/News";

export default function index() {
  return (
    <div>
      <Navbar />
      <NewsReader />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";

function Home() {
  return (
    <div>
      <main className="overflow-hidden">
        <Quiz />
      </main>
      <div id="error"></div>
    </div>
  );
}
export default Home;

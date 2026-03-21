import { useState } from "react";

export default function Decrement({Counts, setCounts}) {
  return (
    <>
      <button onClick={()=>setCounts(Counts -1)}>Dncrement</button>
    </>
  );
}

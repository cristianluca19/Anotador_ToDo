import React from "react";
import { Link } from "react-router-dom";

export default function Todos({el, clase}) {
  console.log('el de todos', el)
  return (
    <div>
      <div>
      <Link key={el.id} to={`/edit/${el.id}`}>
      <button type="button" className={"btn" + clase}>
        {el.title}
      </button>
     </Link>

      </div>
    </div>
  );
}


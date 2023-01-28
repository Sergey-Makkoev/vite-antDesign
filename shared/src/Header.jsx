import React from "react";

import { useCount } from "app/store";
import {DatePicker} from "antd";

export default () => {
  const [count, setCount] = useCount();
  return (
    <header style={{backgroundColor: 'red'}}>
      <div class="flex-grow">THIS HEADER FROM SHARED</div>
      <div>
        {count}

        <button
          onClick={() => setCount(count + 1)}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          FROM SHARED
        </button>
          <DatePicker/>
      </div>
    </header>
  );
};

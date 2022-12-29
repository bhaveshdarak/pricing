import React, { useState } from "react";
import Switch from "./Switch";

function ProgressBar() {
  const [value, setValue] = useState("month");
  const [val, setVal] = useState(72);
  const [page, setPage] = useState(10);

  const handelChange = (event) => {
    setVal(event.target.value);
    setPage(event.target.value)
  };


  return (
    <>
      {/* <!-- price bar monthly or yearly price --> */}
      <div class="tarrif">
        <div class="page-views">
          {" "}
          <span>
            {page} <span>k</span>
          </span>{" "}
          pageviews
        </div>
        <div class="price">
          <span>
            $<span class="pricefix">{val}</span>.00
          </span>
          <span class="month"> /{value}</span>
        </div>
      </div>

      <div class="progress">
        <div class="progress-bar">
          <input
            defaultValue={val}
            onChange={handelChange}
            type="range"
            class="myrange"
            min={72}
            max={324}
            step={36}
          />
        </div>

        {/* <!-- switched between month and year  --> */}
        <Switch isOn={value} handleToggle={() => setValue("year")} />
      </div>
    </>
  );
}

export default ProgressBar;

import React from "react";

function Switch({ isOn, handleToggle }) {
  return (
    <div class="monthly">
      <span>Monthly Billing</span>
      <label class="switch">
        <input type="checkbox"  onChange={handleToggle} />
        <span class="slider"></span>
      </label>
      <span>Yearly Billing</span>
      <span class="discount">25% discount</span>
    </div>
  );
}

export default Switch;

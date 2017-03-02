export const css = `.circle-graph {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  text-align: center; }
  
.circle-graph .circle-graph__circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 160px;
  height: 160px;
  transform: rotate(-90deg); }
  
.circle-graph .circle-graph__bar-base,
.circle-graph .circle-graph__bar-value {
  r: 74px; /* for 6px border */
  cx: 80px;
  cy: 80px;
  fill: none;
  stroke-width: 6px;
}
  
.circle-graph .circle-graph__bar-base {
  stroke: #f6f6f6; }
  
.circle-graph .circle-graph__bar-value {
  stroke-dasharray: 313%;
  stroke: #feb901; }
  
.circle-graph .circle-graph__value {
  line-height: 1;
  font-family: "Noto Serif";
  font-size: 22px;
  margin-bottom: 10px; }
  
.circle-graph .circle-graph__label {
  line-height: 1;
  font-weight: 500;
  font-size: 12px;
  color: #aaa; }`;

export const html = `<div class="circle-graph">
  <svg class="circle-graph__circle">
    <circle class="circle-graph__bar-base"></circle>
    
    <!-- stroke-dashoffset is a value such that: 500 = empty, 0 = full -->
    <circle class="circle-graph__bar-value" stroke-dashoffset="350"></circle>
  </svg>
  <div class="circle-graph__content">
    <div class="circle-graph__value">75.000</div>
    <div class="circle-graph__label">Düsseldorf</div>
  </div>
</div>`;

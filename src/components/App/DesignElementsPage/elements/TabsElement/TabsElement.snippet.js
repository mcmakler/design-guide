export const css = `.tabs {
  min-height: 175px;
  padding: 20px;
  box-sizing: border-box; }
  /* SUCKS, but it MUST have a fixed height */
  
  .tabs .tabs__tab-container {
    position: relative;
    display: flex; }
    
  .tabs .tabs__tab + .tabs__tab {
    margin-left: 20px; }
    
  .tabs .tabs__radio {
    display: none; }
    
  .tabs .tabs__link {
    position: relative;
    display: block;
    font-weight: 400;
    cursor: pointer; }
    
  .tabs .tabs__tab-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    transform: scale(0);
    transform-origin: left;
    transition: transform .3s ease;
    will-change: transform;
    background-color: currentColor; }
    
  .tabs .tabs__radio:checked + .tabs__link {
    font-weight: 500; }
    
  .tabs .tabs__radio:checked + .tabs__link > .tabs__tab-header::after {
    transform: none; }
            
  .tabs .tabs__radio:checked + .tabs__link + .tabs__tab-content {
    display: block; }
    
  .tabs .tabs__tab-content {
    position: absolute;
    top: 40px;
    left: 0;
    display: none;
    font-weight: 300; }`;

export const html = `<div class="tabs">
  <div class="tabs__tab-container">
    <div class="tabs__tab">
      <input checked class="tabs__radio" id="tab-1" type="radio">
      <label class="tabs__link" for="tab-1"></label>
      <header class="tabs__tab-header">
        <label class="tabs__link" for="tab-1">Tab 1</label>
      </header>
      <div class="tabs__tab-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
    </div>
  </div>
</div>`;

export const css = `.infobox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 190px;
  min-height: 130px;
  padding: 20px;
  text-align: center;
  background-color: #f6f6f6; }
  
  .infobox + .infobox {
    margin-left: 2px; }
    
  /* Basically H2 in Orange */
  .infobox .infobox__header {
    line-height: 1;
    font-family: "Noto Serif";
    font-size: 32px;
    color: #feb901; }
    
  .infobox .infobox__content {
    margin-top: 10px;
    margin-bottom: 0; }`;

export const html = `<div class="infobox">
  <header class="infobox__header">70%</header>
  <p class="infobox__content">mehr Ertrag</p>
</div>
<div class="infobox">
  <header class="infobox__header">5x</header>
  <p class="infobox__content">more skillz than 2016</p>
</div>
<div class="infobox">
  <header class="infobox__header">?</header>
  <p class="infobox__content">u wot m8</p>
</div>`;

export const pug = `
.infobox
  header.infobox__header 70%
  p.infobox__content mehr Ertrag
`;

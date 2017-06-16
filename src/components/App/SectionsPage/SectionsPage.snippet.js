export const html = `<div class="page-section_persona persona-banner">
<div class="persona-banner__header">
  <h2 class="persona-banner__heading heading heading_secondary">
    Kaufvertrag
  </h2>
  <p class="persona-banner__header-content">
    Wir koordinieren die Unterschriften aller Mietparteien
    auf einem rechtsgültigen Vertrag.
  </p>
</div>
<p>Der Käufer wird durch den Verzicht auf versteckte
  Kosten im Kaufpreis von inflationierten Grunderwerbssteuern
  und Notargebühren bewahrt. Der Käufer wird durch den
  Verzicht auf versteckte Kosten im Kaufpreis von
  inflationierten Grunderwerbssteuern und Notargebühren
  bewahrt.</p>
</div>`;

export const css = `.persona-banner {
position: relative;
padding: 80px 20px;
box-sizing: border-box;
background: #f6f6f6;
background-size: cover; }

@media (min-width: 768px) {
  .persona-banner {
    padding: 80px; +
  }
}

.persona-banner::before {
  content: '';
  position: absolute;
  top: -25px;
  left: 0;
  right: 0;
  display: block;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  background: white;
  transform: rotate(45deg); 
}

.persona-banner__header {
  position: relative;
  margin: 20px auto 40px;
  padding: 20px;
  border: 1px solid #dadada;
  border-top: 0;
  box-sizing: border-box;
  text-align: center; 
}

@media (min-width: 768px) {
  .persona-banner__header {
    max-width: 50%;
    padding: 40px; 
  } 
}

.persona-banner__header::before,
.persona-banner__header::after {
  content: '';
  position: absolute;
  top: 0;
  display: block;
  height: 1px;
  width: 10px;
  background-color: #dadada; }

@media (min-width: 768px) {
  .persona-banner__header::before,
  .persona-banner__header::after {
    width: 60px; 
  } 
}

.persona-banner__header::before {
  left: 0;
}

.persona-banner__header::after {
  right: 0;
}

.persona-banner__heading {
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  z-index: 100;
  margin: 0 auto;
  white-space: pre;
}

.persona-banner__heading + .persona-banner__header-content {
  margin: 0;
  font-family: 'Noto Serif', serif;
  font-style: italic;
  color: #aaa;
}`;

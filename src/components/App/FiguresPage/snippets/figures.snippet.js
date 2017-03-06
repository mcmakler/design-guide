export const css = `figure {
  display: flex;
  flex-direction: column; }
  
  figure figcaption {
    box-sizing: border-box;
    padding: 20px;
    background-color: #f6f6f6; }
    
  figure figcaption p {
    margin: 0; }

.inverted figure figcaption,
.background--grey_bg figure figcaption {
  background-color: #fff; }`;

export const html = `<figure>
  <img
    alt="Placeholder"
    src="http://lorempixel.com/260/230/business/"
  >
  <figcaption>
    <h4>Placeholder</h4>
    <p>This is my placeholder, son.</p>
  </figcaption>
</figure>`;

export const css = `.question {
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  padding-left: 70px; }
  
  .question::before {
    content: '';
    position: absolute;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 2px solid #dadada;
    border-radius: 50%;
    font-weight: 500;
    font-size: 18px;
    line-height: 0;
    color: #feb901; }
    
  .question::before {
    content: '?';
    top: 20px; }
    
  .question .question__title {
    display: block;
    margin-top: 8px;
    font-family: "Noto Serif";
    font-weight: 500;
    font-style: italic;
    font-size: 18px;
    line-height: 1; }`;

export const html = `
<div class="question">
  <header class="question__title">
    Why are Indians like cockroaches?
  </header>
  <p class="question__content">
    Because there are so many of them.
    Look under your table — there is probably an Indian there!
    Also, I need a third line so I am writing more.
  </p>
</div>
`;

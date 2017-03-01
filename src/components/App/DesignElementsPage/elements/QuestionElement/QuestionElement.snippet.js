export const css = `.question {
  position: relative;
  padding: 40px 40px 40px 65px;
  box-sizing: border-box; }
  
  .question::before {
    content: '?';
    position: absolute;
    left: 20px;
    top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 2px solid #dadada;
    border-radius: 50%;
    font-weight: 500;
    font-size: 18px;
    color: #feb901; }
    
  .question .question__title {
    display: block;
    margin-top: 8px;
    font-family: "Noto Serif";
    font-weight: 500;
    font-style: italic;
    font-size: 18px;
    line-height: 1; }`;

export const html = `
<div className="question">
  <header className="question__title">Why are Indians like cockroaches?</header>
  <p className="question__content">Because there are so many of them.
    Look under your table &mdash; there is probably an Indian there!
  </p>
</div>`;

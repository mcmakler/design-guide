export const css = `.quote {
  position: relative;
  padding: 20px 20px 20px 70px;
  color: #aaa; }
  
  .quote::before {
    content: open-quote;
    position: absolute;
    top: 7px;
    left: 16px;
    font-family: "Noto Serif";
    font-size: 75px;
    line-height: 1; }
    
  .quote::after {
    content: close-quote;
    display: block;
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden; }
    
  .quote .quote__citation {
    display: block;
    margin-bottom: 10px;
    line-height: 1;
    font-weight: 500;
    font-size: 12px;
    font-style: normal; }
    
  .quote .quote__content {
    margin: 0;
    font-family: "Noto Serif";
    font-style: italic; }
    
  .quote.background__grey_darkest {
    background-color: #222;
    color: #fff; }
    
  .quote.background__grey_body {
    background-color: #333;
    color: #fff; }
    
  .quote.background__grey_secondaryAlt {
    background-color: #999;
    color: #fff; }
    
  .quote.background__grey_secondary {
    background-color: #aaa;
    color: #fff; }
    
  .quote.background__grey_line {
    background-color: #dadada;
    color: #aaa; }
    
  .quote.background__grey_table {
    background-color: #e8e8e8;
    color: #aaa; }
    
  .quote.background__grey_bg {
    background-color: #f6f6f6;
    color: #aaa; }
    
  .quote.background__grey_lightest {
    background-color: #fff;
    color: #aaa; }`;

export const html = `
<blockquote className="quote" >
  <cite className="quote__citation" >Donald Trump</cite>
  <p className="quote__content" >Jews and Mexicans are the same. They are not me,
    they are not orange. Therefore, they are the same.</p>
</blockquote>`;

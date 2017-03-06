export const css = `.checkmark-list {
  list-style-type: none;
  margin: 0;
  padding: 0; }
  
  .checkmark-list .checkmark-list__item {
    position: relative;
    padding-left: 28px; }
    
  .checkmark-list .checkmark-list__item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 8px;
    height: 16px;
    border-bottom: 2px solid #feb901;
    border-right: 2px solid #feb901;
    transform: rotate(45deg); }
    
  .checkmark-list .checkmark-list__item + .checkmark-list__item {
    margin-top: 17px; }`;

export const html = `<ul class="checkmark-list">
    <li class="checkmark-list__item">
      Hi, I like pies.
    </li>
    <li class="checkmark-list__item">
      Life is short.
    </li>
    <li class="checkmark-list__item">
      Live it well.
    </li>
  </ul>`;

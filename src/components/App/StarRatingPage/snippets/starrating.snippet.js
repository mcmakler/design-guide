export const css = `.stars-rating .stars {
  position: relative;
  color: #aaa;
  display: inline;
  overflow: hidden;
  margin-right: 10px;
  font-size: 25px;
}
.stars-rating .stars__filled {
  position: absolute;
  overflow: hidden;
  color: #feb901;
  z-index: 2;
  width: 20%;
}
.stars-rating .stars__empty {
  position: relative;
  z-index: 1;
  display: inline;
}
.stars-rating .rating {
  font-size: 22px;
}`;

export const html = `<div class="stars-rating columns columns_center-vertical">
  <div class="stars">
    <div class="stars__filled">
      &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
    </div>
    <div class="stars__empty">
      &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
    </div>
  </div>
  <div class="rating">
    1/5
  </div>
</div>`;

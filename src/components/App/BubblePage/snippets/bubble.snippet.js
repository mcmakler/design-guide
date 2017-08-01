export const css = `.bubble {
  background: transparent;
}
.bubble-text {
  position: relative;
  background: white;
  padding: 40px;
}
.bubble-text::after {
  content: "";
  height: 30px;
  width: 30px;
  position: absolute;
  bottom: -13px;
  left: 20px;
  background: white;
  transform: rotate(45deg);
}
.bubble-text__heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bubble-text__heading-title {
  font-weight: 500;
  font-size: 18px;
}
.bubble-text__heading-date {
  font-weight: 700;
  font-size: 14px;
  color: #aaa;
}
.bubble-text__content {
  margin-top: 20px;
}
.bubble-person {
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.bubble-person__image {
  width: 80px;
  height: 80px;
  margin-right: 15px;
  background: red;
}
.bubble-person__info-name {
  font-size: 18px;
  font-weight: 500;
}
.bubble-person__info-title {
  color: #aaa;
  font-weight: 500;
  font-size: 14px;
}
.bubble .stars-rating {
  display: flex;
  align-items: center;
}
.bubble .stars-rating .stars {
  position: relative;
  color: #aaa;
  display: inline;
  overflow: hidden;
  margin-right: 10px;
  font-size: 18px;
}
.bubble .stars-rating .stars__filled {
  position: absolute;
  overflow: hidden;
  color: #feb901;
  z-index: 2;
  width: 96%;
}
.bubble .stars-rating .stars__empty {
  position: relative;
  z-index: 1;
  display: inline;
}
.bubble .stars-rating .rating {
  font-size: 16px;
}`;

export const html = `<section class="bubble">
  <div class="bubble-text">
    <header class="bubble-text__heading">
      <div class="bubble-text__heading-title">
        Ich bin mehr als zufrieden!
      </div>
      <div class="bubble-text__heading-date">
        17.02.2017
      </div>
    </header>
    <div class="stars-rating">
      <div class="stars">
        <div class="stars__filled">
          &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
        <div class="stars__empty">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
      </div>
      <div class="rating">
        4.8/5.0
      </div>
    </div>
    <section class="bubble-text__content">
      In Zeiten von Nullzinsen und turbulenten Börsen bieten unsere Investment-Möglichkeiten attraktive Zinsen in der konservativen Anlageklasse Immobilien.
    </section>
  </div>
</section>`;

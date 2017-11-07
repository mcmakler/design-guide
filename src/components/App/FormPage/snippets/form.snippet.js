export const cssInput = `input[type="text"],
textarea {
  background-color: #f6f6f6;
  border: 1px solid #dadada;
  box-shadow: inset 0 3px 5px rgba(0,0,0,.05);
  color: #999;
  font-size: 15px;
  line-height: 1em;
  padding: 10px;
}

textarea {
  min-height: 140px;
}`;

export const htmlRadio = `<div className="radio--styled">
  <input
    type="radio"
    id="radio_gender_0"
    name="radio_gender_[gender]"
    required="required"
    value="0"
    checked="checked"
  />
  <label
    className="radio__label--styled"
    htmlFor="radio_gender_0">
    Frau
  </label>
</div>`;

export const cssRadio = `.radio--styled {
  .radio__label--styled {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding-left: 15px;
    position: relative;

    &:before {
      border: 1px solid #dadada;
      height: 30px;
      left: 0;
      top: 0;
      width: 30px;
    }

    &:before,
    &:after {
      background-color: #fff;
      border-radius: 50%;
      box-sizing: border-box;
      content: "";
      display: inline-block;
      margin-left: -20px;
      position: absolute;
    }

    &:after {
      content: "";
      height: 14px;
      left: 8px;
      top: 8px;
      width: 14px;
    }
  }

  input[type=radio]:checked+.radio__label--styled::after {
    background-color: #feb901;
  }
}`;

export const htmlSelect = `<div className="styledSelect styledSelect--secondary" >
  <select className="styledSelect__select">
    <option>Berlin</option>
    <option>Mieten</option>
    <option>Preis ab 21939208109€</option>
    <option>ab 2 Zimmer</option>
  </select>
  <i className="styledSelect__icon" />
</div>`;

export const cssSelect = `.styledSelect {
  height: 40px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  border: solid 1px #dadada;
  background-color: #f6f6f6;

  .styledSelect__icon {
    background: url(/assets/arrowdown.svg) ;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0px;
    right: 3px;
    z-index: 1;
    border-left: solid 1px #dadada;
  }

  .styledSelect__select {
     background: transparent;
     border: 0;
     box-sizing: border-box;
     font-size: 15px;
     height: 40px;
     padding: 5px;
     padding-left: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    z-index: 10;
    padding-right: 50px;
    &::-ms-expand {
      display: none;
    }
  }

  &--secondary {
    @include respond-to("tablet") {
      background-color: white;
      border: 0;
      border-bottom: solid 1px #dadada;
      font-size: 12px;
      height: 30px;
      .styledSelect__select {
        padding-left: 5px;
        height: 30px;
      }
      .styledSelect__icon {
        border-left: 0;
        height: 30px;
        width: 30px;
      }
    }
  }
}`;

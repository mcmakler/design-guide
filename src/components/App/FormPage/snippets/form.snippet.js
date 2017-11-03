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

export const htmlInput = `<input type="text" placeholder="Mein Vorname" />
<textarea placeholder="Meine Nachricht" />`;

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

import React from 'react';

function Form() {
  return (
    <form>
      <label htmlFor="nameInput">
        <input
          name="nameInput"
          type="text"
          data-testid="name-input"
        />
      </label>
      <label htmlFor="descriptionInput">
        <input
          name="descriptionInput"
          type="textarea"
          data-testid="description-input"
        />
      </label>
      <label htmlFor="attr1Input">
        <input
          name="attr1Input"
          type="number"
          data-testid="attr1-input"
        />
      </label>
      <label htmlFor="attr2Input">
        <input
          name="attr2Input"
          type="number"
          data-testid="attr2-input"
        />
      </label>
      <label htmlFor="attr3Input">
        <input
          name="attr3Input"
          type="number"
          data-testid="attr3-input"
        />
      </label>
      <label htmlFor="imageInput">
        <input
          name="imageInput"
          type="text"
          data-testid="image-input"
        />
      </label>
      <label htmlFor="rareInput">
        <select name="rareInput" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
      <label htmlFor="trunfoInput">
        <input name="trunfoInput" type="checkbox" data-testid="trunfo-input" />
      </label>
      <button type="button" name="saveButton" data-testid="save-button">Salvar</button>
    </form>
  );
}

export default Form;

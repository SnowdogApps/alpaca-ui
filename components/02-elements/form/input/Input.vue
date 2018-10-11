<template>
  <div class="input">
    <alpaca-label
      :for="id"
      :hidden="hiddenLabel"
      :inline="inlineLabel"
      :customClass="labelClass"
    >
      {{ label }}
    </alpaca-label>

    <input
      :class="['input__field', inputClass]"
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
import AlpacaLabel from '../../../01-globals/typography/Label.vue'

export default {
    props: [
        'label',
        'hiddenLabel',
        'inlineLabel',
        'id',
        'name',
        'type',
        'placeholder',
        'labelClass',
        'inputClass'
    ],
    components: {
        AlpacaLabel
    }
}
</script>

<style lang="scss">
:root {
    --input__field-padding: 0 var(--spacer--medium);
    --input__field-padding--textarea: var(--spacer--medium);
    --input__field-spacing: 40px;
    --input__field-border: 1px solid var(--form-elements-border-color);
    --input__field-border-radius: var(--form-elements-radius);
    --input__field-border-radius--textarea: var(--form-elements-radius--small);
    --input__field-line-height--textarea: var(--font-line-height);
    --input__margin-bottom: var(--spacer);
    --input__placeholder-color: var(--gray);
    --input__label-margin-right: var(--spacer--medium);
    --input__min-height--textarea: 100px;
}

.input {
    margin-bottom: var(--input__margin-bottom);
}

.input--inline {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

.input--inline .input__label {
    margin-right: var(--input__label-margin-right);
}

.input__field {
    width: 100%;
    height: var(--input__field-spacing);
    line-height: var(--input__field-spacing);
    padding: var(--input__field-padding);
    border: var(--input__field-border);
    border-radius: var(--input__field-border-radius);
}

.input__field[type='search'] {
    -webkit-appearance: textfield;
}

.input__field[type='search']::-webkit-search-decoration,
.input__field[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

.input__field::placeholder {
    color: var(--input__placeholder-color);
}

.input__field--textarea {
    display: block;
    border-radius: var(--input__field-border-radius--textarea);
    min-width: 100%;
    max-width: 100%;
    min-height: var(--input__min-height--textarea);
    padding: var(--input__field-padding--textarea);
    line-height: var(--input__field-line-height--textarea);
}
</style>

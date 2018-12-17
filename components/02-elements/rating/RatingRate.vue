<template>
  <fieldset class="fieldset">
    <legend id="rating-field-label">
      Your rating
    </legend>
    <div
      class="rating rating--rate"
      role="listbox"
      aria-required="true"
      aria-labelledby="rating-field-label"
    >
      <rating-rate-item
        id="Rating_1"
        option="1"
      />

      <rating-rate-item
        id="Rating_2"
        option="2"
      />

      <rating-rate-item
        id="Rating_3"
        option="3"
      />

      <rating-rate-item
        id="Rating_4"
        option="4"
      />

      <rating-rate-item
        id="Rating_5"
        option="5"
      />
    </div>
  </fieldset>
</template>

<script>
  import RatingRateItem from './RatingRateItem'

  export default {
    components: {
      RatingRateItem
    },
    props: {

    }
  }
</script>

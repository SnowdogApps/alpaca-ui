<template>
  <div
    class="rating__rate-item"
    role="option"
    aria-selected="false"
  >
    <label
      :for="id"
      class="rating__star rating__star--rate"
      :aria-label="`Rate option, ${option} of 5. Click to vote`"
    >
      <span class="rating__indicator" />
    </label>
    <input
      :id="id"
      type="radio"
      name="ratings[4]"
      value="16"
      class="radio__field"
    >
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      option: {
        type: String,
        required: true
      }
    }
  }
</script>

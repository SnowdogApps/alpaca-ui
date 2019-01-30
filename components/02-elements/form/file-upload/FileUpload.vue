<template>
  <div
    :class="[
      'file-upload',
      customClass
    ]"
  >
    <input
      id="file"
      ref="fileInput"
      :class="[
        'file-upload__input',
        fileUploadInputClass
      ]"
      type="file"
      name="file"
      :accept="acceptedFormats"
      :data-size="dataSize"
      @change="updateFileName"
    >
    <label
      :class="[
        'file-upload__wrapper',
        fileUploadLabelClass
      ]"
      for="file"
    >
      <span class="file-upload__label">
        {{ labelText }}
      </span>

      <alpaca-button
        class="button file-upload__button"
        aria-controls="file"
        type="button"
        role="button"
        @click.native="chooseFile"
      >
        {{ uploadButtonText }}
      </alpaca-button>

      <span
        ref="fileName"
        class="file-upload__name"
        tabindex="0"
      >
        {{ fileName || emptyFileNameText }}
      </span>
    </label>
  </div>
</template>

<script>
import AlpacaButton from "../../../02-elements/button/Button"

export default {
  components: {
    AlpacaButton
  },
  props: {
    customClass: {
      type: String,
      default: null
    },
    labelText: {
      type: String,
      default: 'Your file (pdf, doc, max 1 MB)'
    },
    acceptedFormats: {
      type: String,
      default: '.pdf,.doc,.png'
    },
    dataSize: {
      type: String,
      default: '1024'
    },
    uploadButtonText: {
      type: String,
      default: 'Upload a file'
    },
    emptyFileNameText: {
      type: String,
      default: 'File not choosen'
    },
    fileUploadLabelClass: {
      type: String,
      default: null
    },
    fileUploadInputClass: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      fileName: ''
    }
  },
  methods: {
    chooseFile () {
      this.$refs.fileInput.click()
    },
    updateFileName () {
      this.fileName = this.$refs.fileInput.value.split('\\').pop()

      if (this.fileName) {
        this.$refs.fileName.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$file-upload__margin        : $spacer--medium !default;
$file-upload__field-height  : 48px !default;
$file-upload__font-size     : 14px !default;
$file-upload__button-padding: 0 $spacer--large !default;

.file-upload {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: $file-upload__margin;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    position: relative;
  }

  &__input {
    @include visually-hidden();
  }

  &__label {
    display: flex;
    flex-basis: 100%;
    margin-bottom: $spacer;
    font-size: $file-upload__font-size;
  }

  &__name {
    font-size: $file-upload__font-size;
    margin-top: $file-upload__margin;

    @include mq($screen-s) {
      margin-left: $file-upload__margin;
      margin-top: 0;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    padding: $file-upload__button-padding;
    width: 100%;

    @include mq($screen-s) {
      width: auto;
    }
  }
}
</style>

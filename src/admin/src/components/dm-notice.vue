<template>
  <div :class="['dm-notice', { show: show }]">
    <button class="dm-button-hidden" @click.prevent="handlerCancel">
      &times;
    </button>
    <div>
      <slot></slot>
    </div>
    <div v-if="showConfirmButton" class="dm-cols dm-notice-footer">
      <button class="button button-secondary" @click.prevent="handlerCancel">
        {{ cancelButtonText }}
      </button>
      <button class="button button-primary" @click.prevent="handlerConfirm">
        {{ confirmButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {    
    showMe: {
      type: Boolean,
      default: false,
    },
    autoHidden: {
      type: Boolean,
      default: false,
    },
    timeToHidden: {
      type: Number,
      default: 3000,
    },
    showConfirmButton: {
      type: Boolean,
      default: false,
    },
    confirmButtonText: {
      type: String,
      default: "Ok",
    },
    cancelButtonText: {
      type: String,
      default: "Cancelar",
    },
  },
  data() {
    return {
      show: false,
      timeoutToHidden: null,
    };
  },
  methods: {
    handlerCancel() {
      this.$emit("cancel");
      this.show = false;
    },
    handlerConfirm() {
      this.$emit("confirm");
      this.show = false;
    },
  },
  watch: {
    showMe(showMe) {
      this.show = showMe;
    },
  },
  updated() {
    if (this.autoHidden) {
      if (this.timeoutToHidden) {
        clearTimeout(this.timeoutToHidden);
      }
      this.timeoutToHidden = setTimeout(() => {
        this.show = false;
      }, this.timeToHidden);
    }
  },
  mounted() {
    this.show = this.showMe;
  }
};
</script>

<style>
.dm-notice {
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  animation: noticehidden 0.3s linear forwards;
  transform: scale(0);
  transform-origin: left center;
  background-color: #000;
  position: fixed;
  color: white;
  width: 295px;
  max-width: 100%;
  z-index: 1050;
  top: 40px;
  right: -100%;
  word-break: break-all;
  transition: right .3s;
  border-radius: 3px;
}

.dm-notice > div {
  padding: 15px 20px;
}

.dm-notice.show {
  right: 10px;
  transform: scale(1);
}

.dm-notice-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  padding: 10px 0 0 0;
}

.dm-button-hidden {
  position: absolute;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  right: 0;
  top: 0;
  cursor: pointer;
  font-size: 22px;
}
</style>
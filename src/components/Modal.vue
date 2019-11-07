<template lang="html">
  <transition name="modal-fade">
    <div class="modal__backdrop row">
      <div class="modal col--lg-6 col--10">
        <div class="modal__header">
          <button type="button" class="button button-close" v-on:click="close" aria-label="Close modal"><font-awesome-icon :icon="['fas', 'times']" size="lg" /></button>
          <h2>
            <slot name="header">Default Title</slot>
          </h2>
        </div>
        <div class="modal__body">
          <slot name="body">
            <p>I'm the default body!</p>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    close: Function
  }
}
</script>

<style lang="scss" scoped>
</style>

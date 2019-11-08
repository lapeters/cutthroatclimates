<template lang="html">
  <div class="game__records row">
    <modal v-if="isModalVisible" v-bind:close="closeModal">
      <div slot="header"><strong>Game Over</strong></div>
      <div slot="body">
        <h3><span class="log__player">{{ winner[0].name }}</span> won!</h3>
      </div>
    </modal>
    <div v-for="(log, index) in gameLog" v-bind:index="index" v-bind:key="index" class="game__log col--12">
      <div class="log__wrapper" v-bind:class="{ log__attack: log.action === 'attacks', log__heal: log.action === 'heals' }">
        <p><span class="log__player">{{ log.player }}</span> {{ log.action }} for <strong>{{ log.hit }} points</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import modal from '@/components/Modal'

export default {
  data () {
    return {
      isModalVisible: false
    }
  },
  components: {
    modal
  },
  computed: {
    ...mapGetters({
      getPlayerByName: 'GET_PLAYER_BY_NAME',
      isPlayerDefeated: 'IS_PLAYER_DEFEATED',
      winner: 'GET_WINNER'
    }),
    ...mapState(['gameLog'])
  },
  watch: {
    isPlayerDefeated: function (newValue) {
      if (newValue.length > 0) {
        this.isModalVisible = true
      }
    }
  },
  methods: {
    closeModal: function () {
      this.isModalVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="main_container">
    <span class="tasukete" :class="{enabled:tasuketeManoMeguru}">助けて…真乃…めぐる…</span>
    <br/>
    <span class="button_container">
      <button @click="flipMano" class="button" :class="{clicked:manoStatus}">真乃</button>
      <button @click="flipHiori" class="button" :class="{clicked:hioriStatus}">灯織</button>
      <button @click="flipMeguru" class="button" :class="{clicked:meguruStatus}">めぐる</button>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MainStoreModule } from '../store/main-store'
import { mapState } from 'vuex'
export default Vue.component('MainView', {
  computed: {
    manoStatus: () => MainStoreModule.mano,
    hioriStatus: () => MainStoreModule.hiori,
    meguruStatus: () => MainStoreModule.meguru,
    tasuketeManoMeguru: () => MainStoreModule.hiori && (!MainStoreModule.mano && !MainStoreModule.meguru)
  },
  methods: {
    flipMano: () => MainStoreModule.setMano(!MainStoreModule.mano),
    flipHiori: () => MainStoreModule.setHiori(!MainStoreModule.hiori),
    flipMeguru: () => MainStoreModule.setMeguru(!MainStoreModule.meguru)
  }
})
</script>

<style lang="scss" scoped>
.main_container {
  text-align: center;
}
.button {
  font-size: 20pt;
  &.clicked {
    color: red;
  }
}
.tasukete {
  font-size: 50pt;
  opacity: 0.1;
  &.enabled {
    opacity: 1;
  }
}
</style>

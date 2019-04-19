<template>
  <div class="main_container">
    <span class="tasukete" :class="{enabled:tasuketeManoMeguru}">助けて…真乃…めぐる…</span>
    <div class="button_container">
      <button @click="flipMano" class="button" :class="{clicked:manoStatus}">真乃</button>
      <button @click="flipHiori" class="button" :class="{clicked:hioriStatus}">灯織</button>
      <button @click="flipMeguru" class="button" :class="{clicked:meguruStatus}">めぐる</button>
    </div>
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
    flipHiori: () => MainStoreModule.setMano(!MainStoreModule.hiori),
    flipMeguru: () => MainStoreModule.setMano(!MainStoreModule.meguru)
  }
})
</script>

<style lang="scss" scoped>
.main_container {
  text-align: center;
}
.button_container {
  display: flex;
}
.button {
  font-size: 20pt;
  &.clicked {
    color: red;
  }
}
.tasukete {
  font-size: 50pt;
  opacity: 0.3;
  &.enabled {
    opacity: 1;
  }
}
</style>

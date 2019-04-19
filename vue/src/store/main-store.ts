import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import Vuex from 'vuex'

@Module
class MainStoreVuexModule extends VuexModule {
  mano = false
  hiori = false
  meguru = false

  @Mutation
  public setMano(param: boolean) {
    this.mano = param
  }
  @Mutation
  public setHiori(param: boolean) {
    this.hiori = param
  }
  @Mutation
  publicsetMeguru(param: boolean) {
    this.meguru = param
  }
}

export const MainStoreModule = getModule(MainStoreVuexModule)
const store = new Vuex.Store({ state: {}, modules: { MainStoreVuexModule } })
export default store

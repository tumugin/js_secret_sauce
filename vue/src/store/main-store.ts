import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

interface AppStore {
  mainstore: MainStoreVuexModule
}

const appstore = new Vuex.Store<AppStore>({})
export default appstore

@Module({ dynamic: true, name: 'mainstore', store: appstore })
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
  public setMeguru(param: boolean) {
    this.meguru = param
  }
}

export const MainStoreModule = getModule(MainStoreVuexModule)

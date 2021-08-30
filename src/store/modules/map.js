const state = {
    seismometry: false,
    strongShock: true,
    gnssStatus: true,
    omen: true
}

const mutations = {
    change_Seismometry: (state,e) => {
        state.seismometry = e
    },
    change_StrongShock: state => {
        state.strongShock = !state.strongShock
    },
    change_GnssStatus: state => {
        state.gnssStatus = !state.gnssStatus
    },
    change_Omen: state => {
        state.omen = !state.omen
    },
}
const actions = {
    
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
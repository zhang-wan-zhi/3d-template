const state = {
    seismometry: true,
    strongShock: true,
    gnssStatus: true,
    omen: true
}

const mutations = {
    change_Seismometry: state => {
        state.seismometry = !state.seismometry
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
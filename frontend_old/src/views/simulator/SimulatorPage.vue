<template>
  <div class="Matc">
    <Simulator mode="standalone" hasPreload="true"/>
  </div>
</template>
<style lang="scss">
@import "../../style/sim.scss";
.MatcSimulator{
  display: block!important;
}
.MatcSimulator,.MatcScreen{
  min-height: 100vh;
  width:100%!important;
}
.Matc{
  height: auto!important;
}
.MatchWidgetTypeNavBar:has(>.MobileBottom){
  top: unset !important;
  bottom: 0px !important;
}
.MatcWidgetTypeNavBar.Side{
  height: 100%!important;
  overflow-y:auto;
}
</style>
<script>
  /* eslint-disable */
import Simulator from 'core/Simulator'

export default {
  name: "SimulatorPage",
  mixins: [],
  data: function() {
    return {
      user: {
        id: -1,
        name: "Guest",
        email: "guest@quant-ux.com",
        role: "guest",
        lastlogin: 0,
        lastNotification: 0,
        tos: false,
        paidUntil: 0,
        plan: "Free"
      }
    }
  },
  components: {
    'Simulator': Simulator
  },
  methods: {
  },
  async mounted() {
  }
};
</script>
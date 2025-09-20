import moment from 'moment'
import 'moment/dist/locale/pt-br'

export default {
  methods: {
    isMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      return /android|iphone|ipad|ipod|blackberry|opera mini|iemobile/i.test(userAgent)
    },
  },
  mounted: function () {
    moment.locale('pt-br')
  },
}

import moment from 'moment';
import 'moment/dist/locale/pt-br';

export default {
    methods: {
    },
    mounted: function () {
        moment.locale("pt-br");
    }
}
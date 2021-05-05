import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    customVariables: ['~/assets/variables.scss'],
    theme: { dark: false },
    //theme: {
    //    dark: false,
    //    themes: {
    //        dark: {
    //            primary: colors.blue.darken2,
    //            accent: colors.grey.darken3,
    //            secondary: colors.amber.darken3,
    //            info: colors.teal.lighten1,
    //            warning: colors.amber.base,
    //            error: colors.deepOrange.accent4,
    //            success: colors.green.accent3
    //        }
    //    }
    //}
})

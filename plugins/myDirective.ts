export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('focus', {
        mounted(el) {
            el.focus();
        },
        getSSRProps(bind,vnode) {
            return {
                value: bind.value,
            }
        }
    },
    );
});
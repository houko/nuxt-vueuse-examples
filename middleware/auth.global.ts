export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Global middleware')
  if (to.params.id === '1') {
    return abortNavigation()
  }
})
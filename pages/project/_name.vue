<template>
  <div>
    {{ $route.params.name }}
    {{ project }}
  </div>
</template>

<script>
export default {
  asyncData({ store, params }) {
    const project = store.getters.getProjectByName(
      params.name.split('-').join(' ')
    )
    return { project }
  },
}
</script>

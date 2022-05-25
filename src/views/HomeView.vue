<template>
  <main>
    <Suspense>
      <template #default>
        <Repositories />
      </template>
      <template #fallback>
        <div class="text-center">
          <b-spinner></b-spinner>
        </div>
      </template>
    </Suspense>
  </main>
</template>

<script>
import Repositories from "@/components/Repositories.vue"

export default {
  components: {
    Repositories,
  },
}
</script>

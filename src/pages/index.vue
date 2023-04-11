<script lang="ts" setup>

</script>

<template>
  <section class="flex <sm:(flex-col-reverse)">

      <ProductsLayout />

      <Cart />
  </section>

</template>
<style>
section > *{
@apply md:(w-1/2) <sm:(w-full);
}
</style>


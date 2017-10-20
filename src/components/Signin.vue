<template>
<div class="from-inline">
  <h3>
    Sign In
  </h3>
  <div class="form-group">
    <input
      type="text"
      placeholder="email"
      class="form-control"
      v-model="email"
    />
    <input
      type="password"
      placeholder="password"
      class="form-control"
      v-model="password"
    >
    <button class="btn btn-primary">Sign in</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

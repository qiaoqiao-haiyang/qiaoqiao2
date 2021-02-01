<template>
  <div>
    测试
  </div>
</template>
<script>
import { levelList } from '@/api/level'
export default {
  created() {
    levelList().then((res) => {
      console.log(res)
    })
  }
}
</script>

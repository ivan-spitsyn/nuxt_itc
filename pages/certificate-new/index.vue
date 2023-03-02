<script setup>
const path = '/certificate-new';
const items = [
  {
    link: path + '/java',
    title: 'Java',
    description: ''
  },
  {
    link: path + '/test-it',
    title: 'Test IT',
    description: ''
  },
  {
    link: path + '/analyst',
    title: 'Analyst',
    description: ''
  },
];
</script>

<template>
  <div class="annotations">
    <CertificateAnnotation
        v-for="{link, title, description} in items" :key="link"
        :link="link"
        :title="title"
        :description="description"
    />
  </div>
</template>

<style lang="scss">
.annotations {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
</style>
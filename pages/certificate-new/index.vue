<script setup>
const path = '/certificate-new';
</script>
<template>
  <CertificateAnnotations
      :items="[
          {
            link: path + '/java',
            title: 'Java',
            description: ''
          },
          {
            link:  path + '/test-it',
            title: 'Test IT',
            description: ''
          },
          {
            link: path + '/analyst',
            title: 'Analyst',
            description: ''
          },
      ]"
  />
</template>
<script setup>
import bannerPicture from '@/assets/images/certificate/test-it/banner-main.svg';
import partnerIbs from '@/assets/images/certificate/test-it/partner_ibs.svg';
import partnerTestIt from '@/assets/images/certificate/test-it/partner_test_it.svg';

const path = '/certificate-new';
definePageMeta({
  layout: "certificate",
});
</script>
<template>
  <CertificateBanner
      :cover="{picture: bannerPicture, alt: 'Авторизованный центр обучения и сертификации'}"
      :partners="[{picture: partnerIbs, name: 'IBS'},{picture: partnerTestIt, name: 'Test IT'}]"
  >
    <template #title>Авторизованный центр обучения и сертификации</template>
    <template #description>
      <p>IBS Training Center — ведущий провайдер России и СНГ по оценке компетенций и обучению в области
        тестирования.</p>
      <p>TestIT - российская система управления тестированием.</p>
    </template>
  </CertificateBanner>
</template>
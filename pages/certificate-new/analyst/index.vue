<script setup>
const path = '/certificate-new';
definePageMeta({
  layout: "certificate",
});

import bannerPicture from '@/assets/images/certificate/test-it/banner-main.svg';
import partnerIbs from '@/assets/images/certificate/test-it/partner_ibs.svg';
import partnerTestIt from '@/assets/images/certificate/test-it/partner_test_it.svg';
</script>
<template>
  <CertificateBanner
      :cover="{picture: bannerPicture, alt: 'Авторизованный центр обучения и сертификации'}"
      :partners="[{picture: partnerIbs, name: 'IBS'},{picture: partnerTestIt, name: 'Test IT'}]"
  >
    <template #title>Центр Российской сертификации системных аналитиков</template>
    <template #description>
      <h4>Независимая объективная оценка компетенций</h4>
      <p>IBS Training Center — ведущий провайдер России и СНГ по оценке компетенций и обучению системных аналитиков.</p>
      <p>ИТ-кластер фонда «Сколково» — всероссийская площадка для развития и поддержки новых технологий в отрасли ИТ.</p>
      <CertificateButton class="Banner__button">Оставить заявку</CertificateButton>
    </template>
  </CertificateBanner>

  <CertificateForm />
  <CertificateMap />
</template>
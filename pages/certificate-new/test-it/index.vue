<script setup>
import Certificate from "~/layouts/certificate.vue";

const path = '/certificate-new';
definePageMeta({
  layout: "certificate",
});

import bannerPicture from '@/assets/images/certificate/test-it/banner-main.svg';
import partnerIbs from '@/assets/images/certificate/partner_ibs.svg';
import partnerTestIt from '@/assets/images/certificate/partner_test-it.svg';
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
      <CertificateButton class="Banner__button">Оставить заявку</CertificateButton>
    </template>
  </CertificateBanner>

  <CertificateSection>
    <template #title>Как принять участие?</template>
    <CertificateContent>
      <p> Допуск к экзамену осуществляется по предварительной записи. Чтобы получить его, заполните форму на сайте. В
        согласованное время нужно прибыть в авторизованный экзаменационный центр и предъявить документ, удостоверяющий
        личность. Если вы не явились на экзамен, согласуйте новую дату для его прохождения. </p>
      <CertificateAside>
        Перед стартом рекомендуем ознакомиться с <a href="/">Правилами проведения сертификации.</a>
      </CertificateAside>
    </CertificateContent>
  </CertificateSection>
  <CertificateForm />
  <CertificateSectionMap />
</template>
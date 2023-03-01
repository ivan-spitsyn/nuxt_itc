<script setup>
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: '',
  },
  picture: {
    type: String,
    default: '',
  },
  params: {
    type: Object,
    default: () => ({
      format: '',
      time: '',
      score: '',
      questions: '',
    }),
  }
});
</script>

<template>
  <div class="CertificateLevel">
    <div class="CertificateLevel__left">
      <img class="CertificateLevel__label" :src="picture" :alt="name" />
      <div class="CertificateLevel__params-title">Из чего состоит экзамен?</div>
      <div class="CertificateLevel__params">
        <div v-if="props.params.format" class="CertificateLevel__param">
          <div class="CertificateLevel__param-icon">
            <img src="@/assets/images/certificate/level-icon-1.svg" alt="Формат"/>
          </div>
          <div class="CertificateLevel__param-info">
            <div class="CertificateLevel__param-name">Формат</div>
            <div class="CertificateLevel__param-value">{{ props.params.format }}</div>
          </div>
        </div>
        <div v-if="props.params.time" class="CertificateLevel__param">
          <div class="CertificateLevel__param-icon">
            <img src="@/assets/images/certificate/level-icon-2.svg" alt="Время"/>
          </div>
          <div class="CertificateLevel__param-info">
            <div class="CertificateLevel__param-name">Время</div>
            <div class="CertificateLevel__param-value">{{ props.params.time }}</div>
          </div>
        </div>
        <div v-if="props.params.score" class="CertificateLevel__param">
          <div class="CertificateLevel__param-icon">
            <img src="@/assets/images/certificate/level-icon-3.svg" alt="Проходной балл"/>
          </div>
          <div class="CertificateLevel__param-info">
            <div class="CertificateLevel__param-name">Проходной балл</div>
            <div class="CertificateLevel__param-value">{{props.params.score}}</div>
          </div>
        </div>
        <div v-if="props.params.questions" class="CertificateLevel__param">
          <div class="CertificateLevel__param-icon">
            <img src="@/assets/images/certificate/level-icon-4.svg" alt="Количество вопросов"/>
          </div>
          <div class="CertificateLevel__param-info">
            <div class="CertificateLevel__param-name">Количество вопросов</div>
            <div class="CertificateLevel__param-value">{{props.params.questions}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="CertificateLevel__right">
      <div class="CertificateLevel__title">{{ props.name }}</div>
      <div v-if="props.price" class="CertificateLevel__price">
        Стоимость сертификации: <span>{{props.price}}</span>
      </div>
      <CertificateContent class="CertificateLevel__content">
        <slot />
      </CertificateContent>
      <div class="CertificateLevel__buttons">
        <CertificateButton size="lg" color="primary">Оставить заявку</CertificateButton>
        <CertificateButton size="lg" color="outline">Получить список тем</CertificateButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.CertificateLevel {
  display: flex;
  margin-bottom: 32px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 0 1px #aaaaaa;
  overflow: hidden;

  &__left {
    width: 100%;
    max-width: 300px;
    padding: 40px;
    background: rgba(0, 59, 151, 0.04);
    color: #000;
  }

  &__label {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto 32px auto;
  }

  &__params {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    &-title {
      margin-bottom: 16px;
      font: var(--font-p-medium);
    }
  }

  &__param {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    &-icon {
      margin-right: 12px;
      @media (max-width: var(--bp-mobile)) {
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    &-info {

    }
    &-name {
      color: #676E76;
      font: var(--font-tiny);
    }
    &-value {
      font: var(--font-p-medium);
    }
  }


  &__right {

  }

  &__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 20px;
    @media (max-width: var(--bp-mobile)) {
      font: var(--font-base);
      margin-bottom: 8px;
    }
  }


  &:last-child {
    margin-bottom: 0;
  }


  &__info {
    margin-top: 32px;
  }

  &__item {
    display: flex;
    margin-bottom: 12px;

    &-sub-title {
      color: #676e76;
      font: var(--font-sm);
    }

    &-title {
      font: var(--font-lg-medium);
      @media (max-width: var(--bp-mobile)) {
        font: var(--font-base-medium);
      }
    }
  }

  &__right {
    color: #000;
    padding: 56px 40px;
    @media (max-width: var(--bp-mobile)) {
      padding: 20px;
    }
  }


  &__price {
    font: var(--font-lg-medium);
    margin-bottom: 24px;
    @media (max-width: var(--bp-mobile)) {
      font: var(--font-base);
    }

    span {
      margin-left: 8px;
      color: #003b97;
      font: var(--font-xl-medium);
      @media (max-width: var(--bp-mobile)) {
        display: block;
        margin-left: 0;
      }
    }
  }

  &__text {
    font: var(--font-lg);
    margin-bottom: 24px;
    line-height: 28px;
    @media (max-width: var(--bp-mobile)) {
      font: var(--font-base);
    }
  }


  &__buttons {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    @media (max-width: var(--bp-mobile)) {
      flex-wrap: wrap;
      gap: 16px;
      & > * {
        width: 100%;
      }
    }
  }
}
</style>
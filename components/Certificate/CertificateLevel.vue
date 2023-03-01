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
  props: {
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
  <div class="SectionLevel">
    <div class="SectionLevel__left">
      <img class="SectionLevel__image" :src="picture" :alt="name" />
      <div class="SectionLevel__Info">
        <div class="SectionLevel__Info-title">Из чего состоит экзамен?</div>
        <div v-if="props.props.format" class="SectionLevel__item">
          <div class="SectionLevel__item-icon">
            <img src="@/assets/images/certificate/level-icon-1.svg" alt="Формат"/>
          </div>
          <div class="SectionLevel__item-info">
            <div class="SectionLevel__item-sub-title">Формат</div>
            <div class="SectionLevel__item-title">{{ props.props.format }}</div>
          </div>
        </div>
        <div v-if="props.props.time" class="SectionLevel__item">
          <div class="SectionLevel__item-icon">
            <img src="@/assets/images/certificate/level-icon-2.svg" alt="Время"/>
          </div>
          <div class="SectionLevel__item-info">
            <div class="SectionLevel__item-sub-title">Время</div>
            <div class="SectionLevel__item-title">{{ props.props.time }}</div>
          </div>
        </div>
        <div v-if="props.props.score" class="SectionLevel__item">
          <div class="SectionLevel__item-icon">
            <img src="@/assets/images/certificate/level-icon-3.svg" alt="Проходной балл"/>
          </div>
          <div class="SectionLevel__item-info">
            <div class="SectionLevel__item-sub-title">Проходной балл</div>
            <div class="SectionLevel__item-title">{{props.props.score}}</div>
          </div>
        </div>
        <div v-if="props.props.questions" class="SectionLevel__item">
          <div class="SectionLevel__item-icon">
            <img src="@/assets/images/certificate/level-icon-4.svg" alt="Количество вопросов"/>
          </div>
          <div class="SectionLevel__item-info">
            <div class="SectionLevel__item-sub-title">Количество вопросов</div>
            <div class="SectionLevel__item-title">{{props.props.questions}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="SectionLevel__right">
      <div class="SectionLevel__title">{{ props.name }}</div>
      <div v-if="props.price" class="SectionLevel__price">
        Стоимость сертификации: <span>{{props.price}}</span>
      </div>
      <div class="SectionLevel__text">
        <CertificateContent>
          <slot />
        </CertificateContent>
      </div>
      <div class="SectionLevel__buttons">
        <CertificateButton size="lg" color="primary">Оставить заявку</CertificateButton>
        <CertificateButton size="lg" color="outline">Получить список тем</CertificateButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.SectionLevel {
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  margin-bottom: 32px;
  @media (max-width: var(--bp-mobile)) {
    flex-wrap: wrap;
  }

  &__image {
    display: block;
    margin: auto;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__left {
    max-width: 300px;
    width: 100%;
    background: rgba(0, 59, 151, 0.04);
    padding: 40px;
    color: #000;
    @media (max-width: var(--bp-mobile)) {
      max-width: 100%;
      padding: 20px;
      padding-bottom: 0;
    }
  }

  &__Info {
    margin-top: 32px;

    &-title {
      margin-bottom: 16px;
      font: var(--font-lg-medium);
      @media (max-width: var(--bp-mobile)) {
        font: var(--font-base-medium);
      }
    }
  }

  &__item {
    display: flex;
    margin-bottom: 12px;

    &-icon {
      margin-right: 12px;
      @media (max-width: var(--bp-mobile)) {
        img {
          width: 40px;
          height: 40px;
        }
      }
    }

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

  &__sub-title {
    font: var(--font-xl-medium);
    margin-bottom: 20px;
    @media (max-width: var(--bp-medium)) {
      font: var(--font-base-medium);
    }
  }

  &__list {
    padding: 0;
    margin: 0;
    list-style: none;

    &-item {
      margin-bottom: 16px;
      font: var(--font-lg);
      position: relative;
      display: flex;
      @media (max-width: var(--bp-mobile)) {
        font: var(--font-base);
      }

      &::before {
        content: "";
        width: 24px;
        height: 24px;
        min-width: 24px;
        min-height: 24px;
        margin-right: 12px;
        display: block;
        margin-top: 6px;
        background-image: url(@/assets/images/certificate/check/black.svg);
        @media (max-width: var(--bp-mobile)) {
          margin-top: 2px;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
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
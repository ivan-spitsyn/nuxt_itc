<template>
  <div class="reasons">
    <div class="reasons__item reason">
      <div class="reason__number"><span>10700</span><span>+</span></div>
      <div class="reason__description">
        Количество Java-разработчиков, которых мы обучили и протестировали
      </div>
    </div>
    <div class="reasons__item reason">
      <div class="reason__number"><span>80</span><span>%</span></div>
      <div class="reason__description">
        Клиентов возвращаются к нам
      </div>
    </div>
    <div class="reasons__item reason">
      <div class="reason__number"><span>1500</span><span>+</span></div>
      <div class="reason__description">
        Вопросов в тестовом банке сертификации
      </div>
    </div>
    <div class="reasons__item reason">
      <div class="reason__number"><span>30</span><span>+</span></div>
      <div class="reason__description">
        Уникальных курсов по Java базового и продвинутого уровня, в т.ч. базовые тренинги по подготовке к уровням
        Oracle Certified Associate (OCA), Oracle Certified Professional (OCP)
      </div>
    </div>
    <div class="reasons__item reason">
      <div class="reason__number"><span>1000</span><span>+</span></div>
      <div class="reason__description">Корпоративных клиентов, использующих Java, сотрудничают с нами</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.reasons {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 82px 28px;

  &__item {
    width: calc(50% - 28px);
  }
}

.reason {
  &__number {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    font: var(--font-h1);
    color: var(--color-brand-blue);

    span {
      &:first-child {
      }

      &:last-child {
        font-size: 0.7em;
        font-family: "Stag Sans", system-ui, sans-serif;
      }
    }
  }

  &__description {
    margin-top: 12px;
    padding-top: 16px;
    border-top: 1px solid #000000;
    font: var(--font-p);
  }
}

@media (max-width: var(--bp-tablet)) {
  .reasons-info {
    &__item {
      margin-bottom: 56px;
    }

    margin-bottom: -56px;
  }
}

@media (max-width: var(--bp-mobile)) {
  .reasons-info {
    &__list {
      flex-wrap: nowrap;
      flex-direction: column;
      margin-left: 0;
      margin-right: 0;
    }

    &__item {
      width: 100%;
      padding: 0;
    }
  }
}
</style>
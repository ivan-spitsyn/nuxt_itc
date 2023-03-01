<script setup>
import VSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
import {vMaska} from "maska"

import {useVuelidate} from '@vuelidate/core'
import {required, email, minLength} from '@vuelidate/validators'

const locations = [
  {label: 'Москва', value: 'msk'},
  {label: 'Санкт-Петербург', value: 'spb'},
  {label: 'Омск', value: 'omsk'}
];

const levels = [
  {label: 'Базовый', value: '1'},
  {label: 'Специалист', value: '2'},
  {label: 'Профессионал', value: '3'}
];

const dates = [
  {label: '11.05.2023', value: '1'},
  {label: '11.06.2023', value: '2'},
  {label: '11.07.2023', value: '3'},
  {label: '11.08.2023', value: '4'},
  {label: '11.09.2023', value: '5'},
  {label: '11.10.2023', value: '6'},
];

const state = reactive({
  name: '',
  company: '',
  email: '',
  position: '',
  location: locations[0]?.value,
  level: levels[0]?.value,
  date: dates[0]?.value,
  subscribe: true,
  privacy: false,
})
const rules = {
  name: {required, minLength: minLength(2)},
  company: {minLength: minLength(2)},
  email: {required, email},
  phone: {required, minLength: minLength(5)},
  location: {required},
  level: {required},
  date: {required},
  privacy: {required: (value) => value === true},
}
const v$ = useVuelidate(rules, state);

async function submit(v$) {
  const result = await v$.$validate();
  debugger
  if (!result) {
    return;
  }

  fetch('https://ibs-training.ru/api/form/certification/test-it/request/',
      {
        method: "POST",
        headers: {'content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(state),
      }
  )
      .then(response => response.json())
      .then(data => {
        if (data.status !== 'error') {
          isSentForm.value = true;
          EventBus.$emit('show-modal', {
            name: 'thanks',
            title: 'Заявка отправлена!',
            subtitle: 'Мы свяжемся с вами в ближайшее время',
          });

          if (ym) {
            ym(23056159, 'reachGoal', 'requestCertificationJava')
          }
        } else {
          throw new Error("Не удалось отправить данные формы");
        }
      })
      .catch(error => {
        EventBus.$emit('show-modal', {
          name: 'error',
          title: 'Ошибка отправки формы!',
          subtitle: 'Попробуйте заполнить форму позже или свяжитесь с нами по телефону: +7 (495) 609–69–67',
        });
        console.log(error)
      });
}
</script>

<template>
  <CertificateSection>
    <div class="request">
      <div class="request__content">
        <div class="request__title">Оставить заявку</div>
        <div class="request__description">
          Выберите город, в котором вы планируете сдать экзамен, заполните данные и отправьте заявку. Наш менеджер
          свяжется с вами в ближайшее время.
        </div>
        <div class="locations request__locations">
          <div v-for="{value, label} in locations" :key="value"
               :class="['location', {'location_selected': state.location === value}]"
               @click="state.location = value"
          >{{ label }}
          </div>
        </div>
        <div class="form">
          <div class="form__fields">
            <CertificateFormInput label="ФИО" required :error="v$.name.$errors.length !== 0">
              <input v-model="state.name"
                     v-maska data-maska="A A A"
                     data-maska-tokens="A:[a-zA-Zа-яА-Я]:multiple"
                     class="Input__input"/>
            </CertificateFormInput>

            <CertificateFormInput label="Компания">
              <input v-model="state.position" class="Input__input"/>
            </CertificateFormInput>

            <CertificateFormInput label="Эл. почта" required :error="v$.email.$errors.length !== 0">
              <input v-model="state.email"
                     v-maska data-maska="A"
                     data-maska-tokens="A:[a-zA-Z0-9@._-]:multiple"
                     type="email"
                     class="Input__input"/>
            </CertificateFormInput>

            <CertificateFormInput label="Телефон" required :error="v$.email.$errors.length !== 0">
              <input v-model="state.phone"
                     v-maska data-maska="+7 (###) ###-##-##"
                     type="tel"
                     class="Input__input"/>
            </CertificateFormInput>

            <CertificateFormInput label="Уровень сертификации">
              <v-select
                  v-model="state.level"
                  :clearable="false"
                  :reduce="(option) => option.value"
                  :options="levels"
              />
            </CertificateFormInput>

            <CertificateFormInput label="Дата экзамена">
              <v-select
                  v-model="state.date"
                  :clearable="false"
                  :reduce="(option) => option.value"
                  :options="dates"
              />
            </CertificateFormInput>

          </div>
          <CertificateFormCheckbox :error="v$.privacy.$errors.length !== 0">
            <template #input>
              <input type="checkbox" v-model="state.privacy" :checked="state.privacy" />
            </template>
            Я согласен на обработку моих персональных данных и ознакомлен с порядком их обработки согласно <a
              href="/privacy-policy/" target="_blank">Политике в сфере персональных данных</a>
          </CertificateFormCheckbox>
          <CertificateFormCheckbox>
            <template #input>
              <input type="checkbox" v-model="state.subscribe" :checked="state.subscribe" />
            </template>
            Рассылка новостей о курсах
          </CertificateFormCheckbox>
          <CertificateButton @click.prevent="submit(v$)">Оставить заявку</CertificateButton>
        </div>
      </div>
    </div>
  </CertificateSection>
</template>

<style lang="scss">
.request {
  position: relative;
  color: #ffffff;
  padding: 56px;
  background: linear-gradient(99.59deg, #001677 0%, #003B97 100%);
  border-radius: 12px;

  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 35%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("@/assets/images/certificate/form.svg");
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 90%;
    z-index: 0;
  }

  &__content {
    position: relative;
    max-width: 730px;
    z-index: 1;
  }

  &__title {
    font-weight: 500;
    font-size: 40px;
    line-height: 56px;
  }

  &__description {
    margin-top: 32px;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }

  &__locations {
    margin-top: 32px;
  }
}

.locations {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 8px;
}

.location {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 24px;
  cursor: pointer;

  &_selected {
    border: 2px solid #ffffff;
  }
}

.form {
  margin-top: 40px;

  &__fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 32px;
  }

  &__col {
    width: 50%;
  }
}

.v-select {
  height: 52px;
  background: #1F3D91;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 6px;

  &.vs--open {
    border-color: #ffffff !important;
    border-width: 1px 1px 0 1px;
    border-radius: 6px 6px 0 0;

    .vs__dropdown-menu {
      border-color: #ffffff !important;
    }

    .vs__selected {
      display: none;
    }
  }
}

.vs__dropdown-toggle {
  height: 100% !important;
  padding: 0 20px !important;
  border: 0 !important;
}

.vs__selected-options {
  padding: 0 !important;
}

.vs__selected {
  height: 100%!important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;

  font-weight: 400 !important;
  font-size: 18px !important;
  line-height: 1.7777777778 !important;
}

.vs__actions {
  padding: 0 !important;
}

.vs__search {
  width: 100%;
  height: 100%;
  padding: 0 !important;
  margin: 0 !important;
  border: 0 !important;
}

.vs__open-indicator {
  fill: #ffffff !important;
}

.vs__dropdown-menu {
  background: #1F3D91 !important;
  border: solid rgba(255, 255, 255, 0.32) !important;
  border-width: 0 1px 1px 1px !important;
  border-radius: 0 0 6px 6px !important;
  box-sizing: content-box !important;
  left: -1px !important;
}

.vs__selected {
  color: #ffffff !important;
}
</style>
<script setup>
const path = '/certificate-new';
definePageMeta({
  layout: "certificate",
});

import pictureBanner from '@/assets/images/certificate/analyst/banner-main.svg';
import picturePartnerSk from '@/assets/images/certificate/partner_sk.svg';

import pictureAbout1 from '@/assets/images/certificate/analyst/about-1.jpg';
import pictureAbout2 from '@/assets/images/certificate/analyst/about-2.jpg';

import pictureLevel1 from '@/assets/images/certificate/analyst/level-1.png';
import pictureLevel2 from '@/assets/images/certificate/analyst/level-2.png';
</script>
<template>
  <CertificatePage>
    <template #menu>
      <CertificateMenu
        :items="[
            {text: 'О нас', link: ''},
            {text: 'Сертификация', link: ''},
            {text: 'Правила', link: ''},
            {text: 'Контакты', link: ''},
        ]"
      />
    </template>
    <template #button>
      <CertificateButton>Оставить заявку</CertificateButton>
    </template>
    <CertificateBannerMain
        :cover="{picture: pictureBanner, alt: 'Авторизованный центр обучения и сертификации'}"
        :partners="[{picture: picturePartnerSk, name: 'Сколкого'}]"
    >
      <template #title>Центр Российской сертификации системных аналитиков</template>
      <template #description>
        <h4>Независимая объективная оценка компетенций</h4>
        <p>IBS Training Center — ведущий провайдер России и СНГ по оценке компетенций и обучению системных аналитиков.</p>
        <p>ИТ-кластер фонда «Сколково» — всероссийская площадка для развития и поддержки новых технологий в отрасли
          ИТ.</p>
        <CertificateButton class="Banner__button">Оставить заявку</CertificateButton>
      </template>
    </CertificateBannerMain>

    <CertificateSection>
      <div class="CertificateSection__row">
        <div class="CertificateSection__col">
          <CertificateContent>
            <h2>Сертификация для системных аналитиков в России</h2>
            <p>Системный аналитик – одна из самых востребованных специализаций российского ИТ-рынка. Вместе с тем, рынку
              вакансий по системному анализу присуща высокая доля профессиональной конкуренции.</p>
            <p>IBS Training Center создал целостную сертификационную программу, призванную стать эталоном оценки
              квалификации системных аналитиков.</p>
            <p>Отечественная сертификация объединила в себе международный опыт зарубежных вендоров и российские стандарты
              профессиональной деятельности.</p>
          </CertificateContent>
        </div>
        <div class="CertificateSection__col">
          <CertificateContent>
            <img :src="pictureAbout1" alt="Сертификация">
            <img :src="pictureAbout2" alt="Сертификация">
          </CertificateContent>
        </div>
      </div>
      <div class="CertificateSection__row">
        <CertificateContent>
        <h3>Сертификация системных аналитиков объединила в себе:</h3>
        </CertificateContent>
      </div>
      <div class="CertificateSection__row">
        <div class="CertificateSection__col">
          <CertificateContent>
            <ul class="circle">
              <li>Многолетний опыт обучения и подготовки к оценке компетенций атналитиков;</li>
              <li>Российские стандарты профессиональной области (профстандарт "Системный Аналитик" (Зарегистрировано в
                Минюсте России 24.11.2014 N 34882), МинТруда, стандарты серии ГОСТ, стандарты серии ГОСТ Р ИСО-МЭК);
              </li>
              <li>Методологии ведения проектов (Waterfall, Agile, RUP).</li>
            </ul>
          </CertificateContent>
        </div>
        <div class="CertificateSection__col">
          <CertificateContent>
            <ul class="circle">
              <li>Международные стандарты и практики зарубежных вендоров (BABOK, IIBA, PMI-PBA, IREB, OMG);</li>
              <li>Основные инструменты моделирования (UML, BPMN)</li>
            </ul>
          </CertificateContent>
        </div>
      </div>
    </CertificateSection>

    <CertificateSection>
      <template #title>Для чего нужен сертификат</template>
      <div class="CertificateSection__row">
        <div class="CertificateSection__col">
          <CertificateCard>
            <template #title>Системному Аналитику</template>
            <ul>
              <li>Систематизировать и структурировать знания в области системного анализа на основе лучших практик мирового
                уровня;
              </li>
              <li>Выгодно выделить Ваше резюме на позицию системного аналитика;</li>
              <li>Подтвердить соответствие профессионального уровня профстандартам;</li>
              <li>Освоить новые навыки и повысить качество работы;</li>
              <li>Стать частью профессионального сообщества единомышленников.</li>
            </ul>
            <template #button>Оставить заявку</template>
          </CertificateCard>
        </div>
        <div class="CertificateSection__col">
          <CertificateCard>
            <template #title>Компании</template>
            <ul>
              <li>Провести аттестацию сотрудников и определить степень соответствия занимаемым должностям;</li>
              <li>Выявить квалификационный дефицит;</li>
              <li>Разработать план переподготовки, основываясь на результатах тестирования;</li>
              <li>Снизить риски, связанные с назначением соискателей с недостаточной квалификацией;</li>
              <li>Оптимизировать кадровые процессы.</li>
            </ul>
            <template #button>Оставить заявку</template>
          </CertificateCard>
        </div>
      </div>
    </CertificateSection>

    <CertificateSection>
      <template>5 причин пройти сертификацию в <br>IBS Training Center</template>
      <CertificateFifeAdvantages>

      </CertificateFifeAdvantages>
    </CertificateSection>

    <CertificateSection class="CertificateSection_levels">
      <template #title>Уровни сертификации</template>
      <CertificateLevel
          name="Базовый уровень"
          price="11 900 руб."
          :picture="pictureLevel1"
          :params="{
            format: 'Офлайн',
            time: '180 минут',
            score: '70%',
            questions: '75',
        }">
        <p>Базовый уровень ориентируется на начинающих специалистов и аналитиков средней квалификации. Включает в себя
          проверку знаний основ жизненного цикла разработки ПО, знаний и навыков работы с требованиями и моделированием,
          понимания основ архитектуры и интеграции, опыта работы с основными инструментами технологиями системного
          аналитика.</p>
        <h4>Как подготовиться к сертификации?</h4>
        <ul>
          <li>Изучите темы экзамена.</li>
          <li>Пройдите подготовительный курс: «Подготовка к сдаче сертификационного экзамена Базового Уровня (Системный
            аналитик)».
          </li>
        </ul>
      </CertificateLevel>
      <CertificateLevel
          name="Продвинутый уровень"
          price="14 900 руб."
          :picture="pictureLevel2"
          :params="{
            format: 'Офлайн',
            time: '180 минут',
            score: '70%',
            questions: '75',
        }">
        <p>
          Продвинутый уровень подходит тем, кто владеет знаниями и навыками системного анализа на профессиональном уровне.
          Проверяет умения оценки качества требований любого уровня сложности, разработки информационных объектов и
          логических моделей даанных и других углубленных тем
        </p>
        <h4>Как подготовиться к сертификации?</h4>
        <ul>
          <li>Убедитесь, что вы освоили темы экзамена предыдущего уровня (Системный аналитик Базовый уровень).</li>
          <li>Изучите темы экзамена.</li>
          <li>Пройдите подготовительный курс «Подготовка к сдаче сертификационного экзамена Базового уровня (Системный
            аналитик)».
          </li>
        </ul>
      </CertificateLevel>
    </CertificateSection>

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

    <CertificateForm/>

    <CertificateSectionMap/>
  </CertificatePage>
</template>
<style lang="scss">

</style>
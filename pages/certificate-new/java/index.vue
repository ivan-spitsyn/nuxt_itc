<script setup>
const path = '/certificate-new';
definePageMeta({
  layout: "certificate",
});

import pictureBanner from '@/assets/images/certificate/java/banner-main.png';
import picturePartnerSk from '@/assets/images/certificate/partner_sk.svg';
import picturePartnerIbs from '@/assets/images/certificate/partner_ibs.svg';
import picturePartnerAxiom from '@/assets/images/certificate/partner_axiom.svg';

import pictureAbout1 from '@/assets/images/certificate/java/about_1.jpg';
import pictureAbout2 from '@/assets/images/certificate/java/about_2.jpg';

import pictureLevel1 from '@/assets/images/certificate/java/level_1.png';
import pictureLevel2 from '@/assets/images/certificate/java/level_2.png';
</script>
<template>
  <CertificateBanner
      :cover="{picture: pictureBanner, alt: 'Авторизованный центр обучения и сертификации'}"
      :partners="[
          {picture: picturePartnerSk, name: 'Сколково'},
          {picture: picturePartnerIbs, name: 'IBS'},
          {picture: picturePartnerAxiom, name: 'Axiom'}
      ]">
    <template #title>Центр российской сертификации JAVA-разработчиков</template>
    <template #description>
      <h4>Независимая объективная оценка компетенций</h4>
      <p>IBS Training Center — ведущий провайдер России и СНГ по оценке и обучению Java-разработчиков</p>
      <p>ИТ-кластер фонда «Сколково» — всероссийская площадка для развития и поддержки новых технологий в отрасли ИТ</p>
      <p>Команда Axiom JDK — поставщик российской платформы Java, инженеры, имеющие 25-летний опыт разработки и развития
        технологий Java и OpenJDK</p>
    </template>
  </CertificateBanner>

  <CertificateSection>
    <template #title>Java сертификация в России</template>
    <div class="CertificateSection__row">
      <div class="CertificateSection__col">
        <CertificateContent>
          <p>2022 год изменил российский ИТ-рынок: уход западных вендоров и дефицит квалифицированных кадров оказались
            ударом для бизнеса, а программистам стали недоступны услуги глобальных центров тестирования. Опираясь на
            международный опыт, мы создали отечественную систему сертификации для Java-разработчиков, призванную
            заменить продукты Oracle.</p>
        </CertificateContent>
      </div>
      <div class="CertificateSection__col">
        <CertificateContent>
          <img class="full" :src="pictureAbout1" alt="">
        </CertificateContent>
      </div>
    </div>
    <div class="CertificateSection__row">
      <div class="CertificateSection__col">
        <CertificateContent>
        <img class="full" :src="pictureAbout2" alt="">
        </CertificateContent>
      </div>
      <div class="CertificateSection__col">
        <CertificateContent>
          <p>Система тестирования IBS Training Center отвечает потребностям российского рынка и стандартам, принятыми
            международной отраслью. Тестирование проходит на русском языке, что облегчает сертификационный процесс и
            повышает его доступность.</p>
          <p>Фокус сертификации смещен на прикладные аспекты, актуальные для отечественных ИТ-задач. Участникам будут
            доступны инструменты среды разработки и исполнения <b data-v-f8339c89="">Java&nbsp;SE&nbsp;Axiom&nbsp;JDK&nbsp;Pro</b>,
            которая входит в реестр российского ПО и обеспечивает бесшовную миграцию с Oracle Java и других
            дистрибутивов.</p>
        </CertificateContent>
      </div>
    </div>
  </CertificateSection>

  <CertificateSection>
    <template #title>Для чего нужен сертификат?</template>
    <div class="CertificateSection__row CertificateSection__row_stretch">
      <div class="CertificateSection__col">
        <CertificateCard>
          <template #title>Java-разработчику</template>
          <CertificateContent>
            <ul>
              <li>Подтвердить квалификацию и свои знания</li>
              <li>Подтвердить, что ваш профессиональный уровень соответствует профстандартам</li>
              <li>Повысить конкурентоспособность, шансы на карьерный рост и высокий доход</li>
              <li>Систематизировать, актуализировать и расширить свои знания</li>
              <li>Освоить новые навыки и повысить качество своей работы</li>
              <li>Быть готовым отвечать на вызовы российского рынка и реализовывать проекты миграции для задач
                импортозамещения
              </li>
            </ul>
          </CertificateContent>
          <template #button>Оставить заявку</template>
        </CertificateCard>
      </div>
      <div class="CertificateSection__col">
        <CertificateCard>
          <template #title>Компании</template>
          <CertificateContent>
            <ul>
              <li>Провести аттестацию сотрудников и определить степень соответствия занимаемым должностям</li>
              <li>Выявить квалификационный дефицит персонала</li>
              <li>Разработать план переподготовки, основываясь на результатах тестирования</li>
              <li>Снизить риски, связанные с назначением соискателей с недостаточной квалификацией</li>
              <li>Обеспечить ИТ-подразделения профессиональным кадрами для выполнения KPI по импортозамещению</li>
              <li>Подготовить ИТ-персонал к проектам по миграции на российский стек для разработки и исполнения
                Java-приложений, соответствующих требованиям регуляторов
              </li>
            </ul>
          </CertificateContent>
          <template #button>Оставить заявку</template>
        </CertificateCard>
      </div>
    </div>
  </CertificateSection>

  <!-- Levels -->
  <CertificateSection>
    <template #title>Уровни сертификации</template>
    <CertificateLevel
        name="Уровень Специалист"
        price="14 900 руб."
        :picture="pictureLevel1"
        :params="{
        format: 'офлайн',
        time: '180 минут',
        score: '70%',
        questions: '75'
      }"
    >
      <p>
        Ориентирована на специалистов среднего уровня (Middle) с опытом программирования на Java. Включает в себя
        проверку знаний основ языка и прикладные аспекты. Аттестационные темы охватывают знания и навыки, необходимые
        для создания кода любого Java-проекта.
      </p>
      <h4>Как подготовиться к сертификации?</h4>
      <ul>
        <li>Получите и изучите темы тестирования;</li>
        <li>Посмотрите список литературы для подготовки к тестированию;</li>
      </ul>
      <h4>Курсы для подготовки к сертификации базового уровня</h4>
      <ul>
        <li><a href="">Подготовка к сдаче сертификационного теста по Java (уровень Специалист)</a></li>
      </ul>
    </CertificateLevel>
    <CertificateLevel
        name="Продвинутый уровень"
        price="19 900 руб."
        :picture="pictureLevel2"
        :params="{
        format: 'офлайн',
        time: '180 минут',
        score: '70%',
        questions: '75'
      }"
    >
      <p>
        Ориентирована на специалистов Senior-уровня с богатым опытом программирования на Java. Проверьте знание
        Java-классов, Generics и коллекций, Java Stream API и других углубленных тем.
      </p>
      <h4>Как подготовиться к сертификации?</h4>
      <ul>
        <li>Получите и изучите темы тестирования;</li>
      </ul>
      <h4>Курсы для подготовки к сертификации продвинутого уровня</h4>
      <ul>
        <li><a href="">Подготовка к сдаче сертификационного тестирования по Java (продвинутый уровень)</a></li>
      </ul>
    </CertificateLevel>
  </CertificateSection>

  <!--  test-->
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
</template>
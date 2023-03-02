<script setup>
const path = '/certificate-new';
definePageMeta({
  layout: "certificate",
});

import pictureBannerMain from '@/assets/images/certificate/test-it/banner-main.svg';
import picturePartnerIbs from '@/assets/images/certificate/partner_ibs.svg';
import picturePartnerTestIt from '@/assets/images/certificate/partner_test-it.svg';
import pictureBanner from '@/assets/images/certificate/test-it/banner.svg';
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
      <CertificateButton>Пройти обучение и сертификацию</CertificateButton>
    </template>

    <CertificateBannerMain
        :cover="{picture: pictureBannerMain, alt: 'Авторизованный центр обучения и сертификации'}"
        :partners="[{picture: picturePartnerIbs, name: 'IBS'},{picture: picturePartnerTestIt, name: 'Test IT'}]"
    >
      <template #title>Авторизованный центр обучения и сертификации</template>
      <template #description>
        <p>IBS Training Center — ведущий провайдер России и СНГ по оценке компетенций и обучению в области
          тестирования.</p>
        <p>TestIT - российская система управления тестированием.</p>
        <CertificateButton class="Banner__button">Оставить заявку</CertificateButton>
      </template>
    </CertificateBannerMain>

    <CertificateSection>
      <div class="CertificateSection__row">
        <div class="CertificateSection__col">
          <CertificateContent>
            <h2 style="margin-bottom: 0">Что такое Test IT</h2>
            <h4>2022 год изменил мир:</h4>
            <p>Популярные системы управления тестированием (Test Management Systems, TMS), такие как Azure DevOps, ALM
              Octane, Test Rail и др. стали недоступны для российского ИТ-рынка. На отечественном рынке набирает
              популярность молодая, но уже достаточно развитая, динамичная и восстребованная система Test IT</p>
          </CertificateContent>
        </div>
        <div class="CertificateSection__col CertificateSection__col_border">
          <CertificateContent>
            <img src="@/assets/images/certificate/test-it/icon_description.svg" alt="" class="icon">
            <p>
              <b>
                Test IT стремительно расширяет свои технические возможности и динамично совершенствуется. Оптимальный
                способ освоить и закрепить навыки владения инструментом — пройти сертификацию у организаций, которые
                находятся в авангарде сферы сертифицирования и тестирования
              </b>
            </p>
          </CertificateContent>
        </div>
      </div>
    </CertificateSection>

    <CertificateSection>
      <template #title>Для чего нужен сертификат</template>
      <div class="CertificateSection__row">
        <div class="CertificateSection__col">
          <CertificateCard>
            <template #title>Компании</template>
            <ul>
              <li>Дополнительное конкурентное преимущество на рынке;</li>
              <li>Наличие в штате сертифицированного сотрудника — это объективное подтверждение экспертизы внутри
                компании;
              </li>
              <li>Снизить риски при найме персонала и подтвердить, что специалисты владеют инструментом;</li>
              <li>Получить преимущество на рынке при оказании услуг по тестированию ПО;</li>
              <li>Повысить компетенции внутри компании путем наставничества и обучения несертифицированных
                специалистов.
              </li>
            </ul>
            <template #button>Пройти сертификацию</template>
          </CertificateCard>
        </div>
        <div class="CertificateSection__col">
          <CertificateCard>
            <template #title>QA-специалисту</template>
            <ul>
              <li>Подтвердить квалификацию ведущими сертификационными центрами России;</li>
              <li>Повысить конкурентоспособность на рынке труда;</li>
              <li>Увеличить потенциальный доход;</li>
              <li>Расширить и систематизировать знания в области QA, а если вы опытный тестировщик, сертификация –
                отличный способ обновить и упорядочить знания в предметной области за счет современных стандартов и
                уникальных отечественных методологий.
              </li>
            </ul>
            <template #button>Пройти сертификацию</template>
          </CertificateCard>
        </div>
      </div>
    </CertificateSection>

    <CertificateSection>
      <template #title>О нас</template>
      <template #description>Программа сертификации разработана в сотрудничестве:</template>
      <div class="CertificateSection__row">
        <div class="CertificateSection__col">
          <CertificateCardMini>
            <template #title>IBS Training Center</template>
            <p>Первый Авторизованный Центр обучения и сертификации по системе Test IT Enterprise.</p>
          </CertificateCardMini>
        </div>
        <div class="CertificateSection__col">
          <CertificateCardMini>
            <template #title>Test IT</template>
            <p>Компания-разработчик системы управления тестированием программных продуктов, объединяющей ручное и
              автоматизированное тестирование и отображающей всю отчетность по метрикам качества в одном интерфейсе.</p>
          </CertificateCardMini>
        </div>
        <div class="CertificateSection__col">
          <CertificateCardMini>
            <template #title>IBS</template>
            <p>Лидер рынка России и СНГ с многолетним опытом заказного тестирования софта</p>
          </CertificateCardMini>
        </div>
      </div>
    </CertificateSection>

    <CertificateSection>
      <template #title>Преимущества сертификации от IBS Training Center & Test IT</template>
      <CertificateReasons>
        <div class="CertificateReasons__item">
          <div class="CertificateReasons__title">
            <img src="@/assets/images/certificate/test-it/reason-1.svg" alt="">
          </div>
          <div class="CertificateReasons__text">Для обучения и сертификации используются программы, авторизованные вендором</div>
        </div>

        <div class="CertificateReasons__item">
          <div class="CertificateReasons__title">10 000+</div>
          <div class="CertificateReasons__text">Количество тестировщиков, которых мы обучили и протестировали</div>
        </div>

        <div class="CertificateReasons__item">
          <div class="CertificateReasons__card">
            <div class="CertificateReasons__card-view">
              <img class="CertificateReasons__card-image"
                   src="@/assets/images/certificate/test-it/reason.png"
                   alt="">
              <img class="CertificateReasons__card-image CertificateReasons__card-image_mobile"
                   src="@/assets/images/certificate/test-it/reason_mobile.png"
                   alt="">
            </div>

            <div class="CertificateReasons__card-info">
              <span class="CertificateReasons__card-title">№1</span>
              <span class="CertificateReasons__card-description">
            Первая официальная программа сертификации на российский инструмент управления тестированием
          </span>
            </div>
          </div>
        </div>

        <div class="CertificateReasons__item">
          <div class="CertificateReasons__title">20+</div>
          <div class="CertificateReasons__text">Лет опыта обучения и тестирования ИТ-специалистов на рынкеРоссии и СНГ</div>
        </div>

        <div class="CertificateReasons__item">
          <div class="CertificateReasons__title">
            <img src="@/assets/images/certificate/test-it/reason-5.svg" alt="">
          </div>
          <div class="CertificateReasons__text">Сертификационные центры в разных регионах России</div>
        </div>
      </CertificateReasons>
    </CertificateSection>

    <CertificateSection>
      <div class="CertificateSection__row">
        <div class="CertificateSection__col">
          <CertificateContent>
            <h2>Подробней о сертификации</h2>
            <p><b>Сертификация TestIT — это оценка соответствия знаний и навыков специалиста требованиям к квалификации
              пользователя актуальной версии системы Test IT.</b></p>
          </CertificateContent>
        </div>
        <div class="CertificateSection__col CertificateSection__col_border">
          <CertificateContent>
            <h3>Для кого:</h3>
            <ul>
              <li>Инженеры по тестированию</li>
              <li>Тест менеджеры</li>
              <li>а также <b>Разработчики, Аналитики, Владельцы</b> продукта.</li>
            </ul>
          </CertificateContent>
        </div>
      </div>
      <div class="CertificateSection__row">
        <CertificateContent>
          <h3>Оцениваемые модули</h3>
        </CertificateContent>
      </div>
      <div class="CertificateSection__row">
        <CertificateCounter :items="[
            'Разработка тестовой модели',
            'Выполнение тестовой модели',
            'Автоматизация тестирования',
            'Визуализация работы',
            'Интеграция с внешними системами',
            'Управление тестированием'
            ]"/>
      </div>
      <div class="CertificateSection__row">
        <div class="CertificateSection__col">
          <CertificateContent>
            <h2>Модель сертификации</h2>
            <p>Сертификация позволяет оценить уровень пользовательского понимания практик и методов инструмента Test
              IT.</p>
            <p>В сертификацию включены вопросы по следующим темам: основы тестирования, жизненный цикл тестирования,
              динамическое и статическое тестирование, управление тестированием и т. д.</p>
          </CertificateContent>
        </div>
        <div class="CertificateSection__col CertificateSection__col_border">
          <CertificateContent>
            <h3>Сертификация состоит из:</h3>
            <CertificateNumberTextGroup col="2">
              <CertificateNumberText number="6" text="Тем" />
              <CertificateNumberText number="52" text="Вопроса" />
              <CertificateNumberText number="90 минут" text="Длительность " />
              <CertificateNumberText number="85%" text="Проходной порог для успешной сдачи" />
            </CertificateNumberTextGroup>
          </CertificateContent>
        </div>
      </div>
    </CertificateSection>

    <CertificateSection>
      <CertificatePrice>
        Стоимость сертификации — 20 000 ₽
        <template #button><CertificateButton>Пройти сертификацию</CertificateButton></template>
      </CertificatePrice>
    </CertificateSection>

    <CertificateSection>
      <CertificateBanner :picture="pictureBanner">
        <template #title>Как готовиться к сертификации</template>
        <p>В IBS Training Center вы сможете пройти подготовку к экзамену путем прослушивания авторского курса по направлению Test IT.</p>
        <template #button>
          <CertificateButton>Подготовиться к сертификации</CertificateButton>
        </template>
      </CertificateBanner>
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
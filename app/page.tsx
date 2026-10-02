import './landing.css'

export default function Page() {
  return (
    <div className="x4v7-page">
      <header className="x4v7-head">
        <nav className="x4v7-nav" aria-label="Основная навигация">
          <a className="x4v7-logo" href="/">
            La Casino
          </a>
          <a className="x4v7-cta" href="#play">
            Играть
          </a>
        </nav>
      </header>

      <main className="x4v7-main">
        <section className="x4v7-hero" id="top">
          <div className="x4v7-hero-inner">
            <div className="x4v7-hero-copy">
              <h1 className="x4v7-h1">
                La Casino — официальный сайт онлайн-казино
              </h1>
              <p className="x4v7-lead">
                La Casino — это современное онлайн-казино, где собраны лучшие
                слоты, рулетка и карточные игры. Официальный сайт La Casino
                работает быстро и стабильно, а регистрация занимает всего пару
                минут.
              </p>
              <a className="x4v7-cta x4v7-cta-big" href="#play">
                Играть в La Casino
              </a>
            </div>
            <img
              className="x4v7-hero-img"
              src="/images/hero-roulette.png"
              alt="Рулетка La Casino на зелёном сукне с золотым ободом"
              width={520}
              height={520}
            />
          </div>
        </section>

        <section className="x4v7-sec x4v7-sec-light" id="official">
          <div className="x4v7-sec-inner">
            <h2 className="x4v7-h2">
              La Casino официальный сайт — вход и регистрация
            </h2>
            <p className="x4v7-txt">
              Официальный сайт La Casino открыт для всех, кто хочет играть
              честно и безопасно. Здесь собраны лицензионные автоматы, а вывод
              выигрышей проходит без задержек. Чтобы начать, достаточно открыть
              официальный сайт La Casino и создать аккаунт — это займёт не
              больше двух минут.
            </p>
          </div>
        </section>

        <section className="x4v7-sec x4v7-sec-dark" id="play">
          <div className="x4v7-sec-inner">
            <h2 className="x4v7-h2">Как играть в La Casino онлайн</h2>
            <p className="x4v7-txt">
              Играть в La Casino онлайн просто: выбираете слот, делаете ставку и
              запускаете барабаны. Ла казино онлайн работает и на телефоне, и на
              компьютере, поэтому играть можно в любом месте. Новичкам доступны
              демо-режимы, чтобы освоиться без риска для кошелька.
            </p>
            <img
              className="x4v7-img"
              src="/images/slots.png"
              alt="Игровой автомат La Casino со светящимися барабанами"
              width={560}
              height={420}
              loading="lazy"
            />
          </div>
        </section>

        <section className="x4v7-sec x4v7-sec-light" id="mirror">
          <div className="x4v7-sec-inner">
            <h2 className="x4v7-h2">
              La Casino зеркало — рабочее зеркало для входа
            </h2>
            <p className="x4v7-txt">
              Если основной адрес временно недоступен, выручает La Casino
              зеркало. Рабочее зеркало ла казино полностью повторяет официальный
              сайт и сохраняет все данные игрока. Ла казино зеркало рабочее
              обновляется регулярно, поэтому вход остаётся стабильным в любой
              день.
            </p>
          </div>
        </section>

        <section className="x4v7-sec x4v7-sec-dark" id="why">
          <div className="x4v7-sec-inner">
            <h2 className="x4v7-h2">Ла казино — почему выбирают именно нас</h2>
            <p className="x4v7-txt">
              Ла казино ценят за честность, быстрые выплаты и большой выбор игр.
              Официальный сайт ла казино защищает данные игроков, а служба
              поддержки отвечает круглосуточно. Играть в ла казино удобно и
              новичкам, и опытным игрокам — каждый найдёт слот по душе.
            </p>
            <img
              className="x4v7-img"
              src="/images/cards.png"
              alt="Игральные карты и золотые фишки La Casino на зелёном сукне"
              width={560}
              height={420}
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="x4v7-foot">
        <div className="x4v7-foot-inner">
          <nav className="x4v7-tags" aria-label="Поиск по сайту">
            <a className="x4v7-tag" href="#top">
              #la casino
            </a>
            <a className="x4v7-tag" href="#mirror">
              #la casino зеркало
            </a>
            <a className="x4v7-tag" href="#play">
              #la casino играть
            </a>
            <a className="x4v7-tag" href="#official">
              #la casino официальный
            </a>
            <a className="x4v7-tag" href="#official">
              #la casino официальный сайт
            </a>
            <a className="x4v7-tag" href="#why">
              #ла казино
            </a>
            <a className="x4v7-tag" href="#mirror">
              #ла казино зеркало
            </a>
            <a className="x4v7-tag" href="#mirror">
              #ла казино зеркало рабочее
            </a>
            <a className="x4v7-tag" href="#play">
              #ла казино играть
            </a>
            <a className="x4v7-tag" href="#play">
              #ла казино онлайн
            </a>
            <a className="x4v7-tag" href="#official">
              #ла казино официальный
            </a>
            <a className="x4v7-tag" href="#official">
              #ла казино официальный сайт
            </a>
          </nav>
          <p className="x4v7-copy">© 2026 La Casino. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

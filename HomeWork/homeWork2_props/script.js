const root = ReactDOM.createRoot(document.getElementById("root"));

const Champions = ({ name, championshipYear, photo }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px ",
        textAlign: "center",
      }}
    >
      <h2>{name}</h2>
      <p>Чемпион мира с{championshipYear}</p>
      <img src={photo}></img>
    </div>
  );
};
const champions = [
  {
    name: "Вильгейм Стейниц ",
    championshipYear: "  1886 по 1894",
    photo: "./img/Вильгейм Стейниц.jpg",
  },
  {
    name: "Эмануил Ласкер ",
    championshipYear: "  1894 по 1921",
    photo: "./img/Эмануил Ласкер.jpg",
  },

  {
    name: "Хосе Рауль Капабланка ",
    championshipYear: "  1921 по 1927",
    photo: "./img/Хосе Рауль Капабланка.jpg",
  },
  {
    name: "Александр Александрович Алехин ",
    championshipYear: " 1927 по 1935  и с 1937 по 1946",
    photo: "./img/Александр Александрович Алехин.jpg",
  },

  {
    name: "Махгилис (Макс) Эйве ",
    championshipYear: "  1935 по 1937",
    photo: "./img/Махгилис (Макс) Эйве.jpg",
  },
  {
    name: "Михаил Моисеевич Ботвинник ",
    championshipYear: "  1948 по 1957 , с 1958 по 1960  и с 1961 по 1963 ",
    photo: "./img/Михаил Моисеевич Ботвинник.jpg",
  },

  {
    name: "Василий Васильевич Смыслов ",
    championshipYear: "  1957 по 1958 ",
    photo: "./img/Василий Васильевич Смыслов.jpg",
  },
  {
    name: "Михаил Нехемьевич Таль ",
    championshipYear: "  1960 по 1961 ",
    photo: "./img/Михаил Нехемьевич Таль.jpg",
  },
  {
    name: "Тигран Вартанович Петросян ",
    championshipYear: "  1963 по 1969 ",
    photo: "./img/Тигран Вартанович Петросян.jpg",
  },
  {
    name: "Борис Васильевич Спасский ",
    championshipYear: "  1969 по 1972 ",
    photo: "./img/Борис Васильевич Спасский.jpg",
  },
  {
    name: "Роберт Джеймс «Бобби» Фишер ",
    championshipYear: "  1972 по 1975 ",
    photo: "./img/Роберт Джеймс «Бобби» Фишер.jpg",
  },
  {
    name: "Анатолий Евгеньевич Карпов ",
    championshipYear: "  1975 по 1985 ",
    photo: "./img/Анатолий Евгеньевич Карпов.jpg",
  },

  {
    name: "Гарри Кимович Каспаров ",
    championshipYear: "  1985 по 1993 ",
    photo: "./img/Гарри Кимович Каспаров.jpg",
  },
];

root.render(
  <>
    <h1>Чемпионы мира по шахматам</h1>

    {/* <Champions
      name="Эмануил Ласкер "
      championshipYear="  1894 по 1921"
      photo=".\img\Эмануил Ласкер.jpg"
    />
    <Champions
      name="Хосе Рауль Капабланка "
      championshipYear="  1921 по 1927"
      photo=".\img\Хосе Рауль Капабланка.jpg"
    />
    <Champions
      name="Александр Александрович Алехин "
      championshipYear=" 1927 по 1935  и с 1937 по 1946"
      photo=".\img\Александр Александрович Алехин.jpg"
    />
    <Champions
      name="Махгилис (Макс) Эйве "
      championshipYear="  1935 по 1937"
      photo=".\img\Махгилис (Макс) Эйве.jpg"
    />

    <Champions
      name="Михаил Моисеевич Ботвинник "
      championshipYear="  1948 по 1957 , с 1958 по 1960  и с 1961 по 1963 "
      photo=".\img\Михаил Моисеевич Ботвинник.jpg"
    />
    <Champions
      name="Василий Васильевич Смыслов "
      championshipYear="  1957 по 1958 "
      photo=".\img\Василий Васильевич Смыслов.jpg"
    />

    <Champions
      name="Михаил Нехемьевич Таль "
      championshipYear="  1960 по 1961 "
      photo=".\img\Михаил Нехемьевич Таль.jpg"
    />

    <Champions
      name="Тигран Вартанович Петросян "
      championshipYear="  1963 по 1969 "
      photo=".\img\Тигран Вартанович Петросян.jpg"
    />

    <Champions
      name="Борис Васильевич Спасский "
      championshipYear="  1969 по 1972 "
      photo=".\img\Борис Васильевич Спасский.jpg"
    />

    <Champions
      name="Роберт Джеймс «Бобби» Фишер "
      championshipYear="  1972 по 1975 "
      photo=".\img\Роберт Джеймс «Бобби» Фишер.jpg"
    />

    <Champions
      name="Анатолий Евгеньевич Карпов "
      championshipYear="  1975 по 1985 "
      photo=".\img\Анатолий Евгеньевич Карпов.jpg"
    />
    <Champions
      name="Гарри Кимович Каспаров "
      championshipYear="  1985 по 1993 "
      photo=".\img\Гарри Кимович Каспаров.jpg"
    /> */}

    {champions.map((element, index) => (
      <>
        <Champions
          key={index}
          name={element.name}
          championshipYear={element.championshipYear}
          photo={element.photo}
        />
      </>
    ))}
  </>
);

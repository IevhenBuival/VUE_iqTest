let tests_data = {
  current: 10,
  tests: [
    {
      number: 0,
      view: 1,
      title: "ваш пол:",
      picture: "",
      data: [
        { id: 0, text: "мужчина", checked: false },
        { id: 1, text: "женщина", checked: false },
      ],
    },
    {
      number: 1,
      view: 1,
      title: "укажите ваш возраст:",
      picture: "",
      data: [
        { id: 0, text: "До 18", checked: false },
        { id: 1, text: "От 18 до 28", checked: false },
        { id: 2, text: "от 29 до 35", checked: false },
        { id: 3, text: "От 36", checked: false },
      ],
    },
    {
      number: 2,
      view: 1,
      title: "Выберите лишнее:",
      picture: "",
      data: [
        { id: 0, text: "Дом", checked: false },
        { id: 1, text: "Шалаш", checked: false },
        { id: 2, text: "Бунгало", checked: false },
        { id: 3, text: "Скамейка", checked: false },
        { id: 4, text: "Хижина", checked: false },
      ],
    },
    {
      number: 3,
      view: 1,
      title: "Продолжите числовой ряд: 18  20  24  32",
      picture: "",
      data: [
        { id: 0, text: "62", checked: false },
        { id: 1, text: "48", checked: false },
        { id: 2, text: "74", checked: false },
        { id: 3, text: "57", checked: false },
        { id: 4, text: "60", checked: false },
        { id: 5, text: "77", checked: false },
      ],
    },
    {
      number: 4,
      view: 2,
      title: "Выберите цвет, который сейчас наиболее Вам приятен:",
      picture: "",
      data: [
        {
          id: 0,
          text: "#A8A8A8",
          checked: false,
        },
        {
          id: 1,
          text: "#0000A9",
          checked: false,
        },
        {
          id: 2,
          text: "#00A701",
          checked: false,
        },
        {
          id: 3,
          text: "#F60100",
          checked: false,
        },
        {
          id: 4,
          text: "#FDFF19",
          checked: false,
        },
        {
          id: 5,
          text: "#A95403",
          checked: false,
        },
        {
          id: 6,
          text: "#000000",
          checked: false,
        },
        {
          id: 7,
          text: "#850068",
          checked: false,
        },
        {
          id: 8,
          text: "#46B2AC",
          checked: false,
        },
      ],
    },
    {
      number: 5,
      view: 2,
      title:
        "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
      picture: "",
      data: [
        {
          id: 0,
          text: "#A8A8A8",
          checked: false,
        },
        {
          id: 1,
          text: "#46B2AC",
          checked: false,
        },
        {
          id: 2,
          text: "#A95403",
          checked: false,
        },
        {
          id: 3,
          text: "#00A701",
          checked: false,
        },
        {
          id: 4,
          text: "#000000",
          checked: false,
        },
        {
          id: 5,
          text: "#F60100",
          checked: false,
        },
        {
          id: 6,
          text: "#850068",
          checked: false,
        },
        {
          id: 7,
          text: "#FDFF19",
          checked: false,
        },
        {
          id: 8,
          text: "#0000A9",
          checked: false,
        },
      ],
    },
    {
      number: 6,
      view: 1,
      title: "Какой из городов лишний?",
      picture: "",
      data: [
        {
          id: 0,
          text: "Вашингтон",
          checked: false,
        },
        { id: 1, text: "Лондон", checked: false },
        {
          id: 2,
          text: "Париж",
          checked: false,
        },
        { id: 3, text: "Нью-Йорк", checked: false },
        { id: 4, text: "Москва", checked: false },
        { id: 5, text: "Оттава", checked: false },
      ],
    },
    {
      number: 7,
      view: 3,
      title: "Выберите правильную фигуру из четырёх пронумерованных.",
      picture: "people.png",
      data: [
        {
          id: 0,
          text: "1",
          checked: false,
        },
        {
          id: 1,
          text: "2",
          checked: false,
        },
        {
          id: 2,
          text: "3",
          checked: false,
        },
        {
          id: 3,
          text: "4",
          checked: false,
        },
      ],
    },
    {
      number: 8,
      view: 1,
      title: "Вам привычнее и важнее:",
      picture: "",
      data: [
        {
          id: 0,
          text: "Наслаждаться каждой минутой проведенного времени",
          checked: false,
        },
        { id: 1, text: "Быть устремленными мыслями в будущее", checked: false },
        {
          id: 2,
          text: "Учитывать в ежедневной практике прошлый опыт",
          checked: false,
        },
      ],
    },
    {
      number: 9,
      view: 1,
      title:
        "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
      picture: "test.png",
      data: [
        {
          id: 0,
          text: "оно остроконечное",
          checked: false,
        },
        { id: 1, text: "оно устойчиво", checked: false },
        {
          id: 2,
          text: "оно-находится в состоянии равновесия",
          checked: false,
        },
      ],
    },

    {
      number: 10,
      view: 3,
      title: "Вставьте подходящее число",
      picture: "star.png",
      data: [
        { id: 0, text: "34", checked: false },
        { id: 1, text: "36", checked: false },
        { id: 2, text: "53", checked: false },
        { id: 3, text: "44", checked: false },
        { id: 4, text: "66", checked: false },
        { id: 5, text: "42", checked: false },
      ],
    },

    {
      number: 11,
      view: 4,
      title: "Обработка результатов",
      picture: "",
      data: [],
    },
  ],
};

export default tests_data;

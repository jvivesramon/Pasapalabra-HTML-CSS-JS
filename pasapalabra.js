const questions = [
  {
    letter: "a",
    answer:
      ["abducir",
      "acabar",
      "aburrido"],
    status: undefined,
    matched: undefined,
    question:
      ["Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      "Sinónimo de finalizar algo",
      "Cuando algo carece de interés"],
  },
  {
    letter: "b",
    answer:
      ["bingo",
      "borracho",
      "boina"],
    status: undefined,
    matched: undefined,
    question:
      ["Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
      "Persona muy perjudicada por el exceso de alcohol",
      "Gorra francesa"],
  },
  {
    letter: "c",
    answer:
      ["churumbel",
      "caracol",
      "cabrales"],
    status: undefined,
    matched: undefined,
    question:
      ["Niño, crío, bebé",
      "Animal que sale cuando llueve",
      "Queso azul muy fuerte, característico de Asturias"],
  },
  {
    letter: "d",
    answer:
      ["diarrea",
      "dedo",
      "diana"],
    status: undefined,
    matched: undefined,
    question:
      ["Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      "Extremidad de las manos con la que señalas a alguien o algo",
      "Nombre de la princesa de Gales más querida de Reino Unido"],
  },
  {
    letter: "e",
    answer:
      ["ectoplasma",
      "enanismo",
      "elefante"],
    status: undefined,
    matched: undefined,
    question:
      ["Gelatinoso y se encuentra debajo de la membrana plasmática.",
      "Enfermedad genética que hace a la persona ser más pequeña de lo habitual",
      "Animal con la trompa más grande"],
  },
  {
    letter: "f",
    answer:
      ["facil",
      "finiquito",
      "fama"],
    status: undefined,
    matched: undefined,
    question:
      ["Que no requiere gran esfuerzo, capacidad o dificultad",
      "El dinero recibido después de un despido improcedente",
      "Lo que adquieres cuando saltas al estrellato"],
  },
  {
    letter: "g",
    answer:
      ["galaxia",
      "garganta",
      "goma"],
    status: undefined,
    matched: undefined,
    question:
      ["Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      "Lo que usamos para tragar e ingerir alimentos",
      "Herramienta para borrar el trazo de un làpiz"],
  },
  {
    letter: "h",
    answer:
      ["harakiri",
      "harina",
      "hacienda"],
    status: undefined,
    matched: undefined,
    question:
      ["Suicidio ritual japonés por desentrañamiento",
      "Ingrediente principal para elaborar pan",
      "Órgano gubernamental encargado de controlar el dinero del país"],
  },
  {
    letter: "i",
    answer:
      ["iglesia",
      "iterar",
      "invierno"],
    status: undefined,
    matched: undefined,
    question:
      ["Templo cristiano",
      "Acción que ejecuta un elemento 'for' en programación",
      "Estación del año que se caracteriza generalmente por las bajas temperaturas"],
  },
  {
    letter: "j",
    answer:
      ["jabali",
      "júpiter",
      "jubilación"],
    status: undefined,
    matched: undefined,
    question:
      ["Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
      "Planeta del sistema Solar",
      "Lo que se consigue después de 35 años laborales cotizados y a partir de los 67 años"],
  },
  {
    letter: "k",
    answer:
      ["kamikaze",
      "karate",
      "kilo"],
    status: undefined,
    matched: undefined,
    question:
      ["Persona que se juega la vida realizando una acción temeraria",
      "Deporte de artes marciales",
      "Unidad de medida que equilave a 1000gr"],
  },
  {
    letter: "l",
    answer:
      ["licantropo",
      "libro",
      "lavadora"],
    status: undefined,
    matched: undefined,
    question:
      ["Hombre lobo",
      "Lo que publican los escritores",
      "Electrodoméstico para lavar ropa"],
  },
  {
    letter: "m",
    answer:
      ["misantropo",
      "marvel",
      "muñeco"],
    status: undefined,
    matched: undefined,
    question:
      ["Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
      "Universo más conocido de superhéroes",
      "Juguete con el que juegan la mayoría de los niños"],
  },
  {
    letter: "n",
    answer:
      ["necedad",
      "nariz",
      "novita"],
    status: undefined,
    matched: undefined,
    question:
      ["Demostración de poca inteligencia",
      "Parte de la cara que sirve para olfatear",
      "Nombre del personaje principal de la serie 'Doraemon'"],
  },
  {
    letter: "o",
    answer:
      ["orco",
      "orfanato",
      "ogro"],
    status: undefined,
    matched: undefined,
    question:
      ["Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
      "Órgano que se encarga de darles hogar a los niños sin familiares",
      "Raza del personaje de Shrek"],
  },
  {
    letter: "p",
    answer:
      ["protoss",
      "princesa",
      "ponche"],
    status: undefined,
    matched: undefined,
    question:
      ["Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
      "La mujer del príncipe",
      "Bebida alcohólica típica en las navidades americanas"],
  },
  {
    letter: "q",
    answer:
      ["queso",
      "quantumania",
      "queryselector"],
    status: undefined,
    matched: undefined,
    question:
      ["Producto obtenido por la maduración de la cuajada de la leche",
      "Títula de la tercera entrega de Antman",
      "Selector utilizado para la selección de clases en el Document"],
  },
  {
    letter: "r",
    answer:
      ["raton",
      "rotulador",
      "rodillas"],
    status: undefined,
    matched: undefined,
    question:
      ["Roedor",
      "Útiles de papelería de colores que pintan de forma permanente",
      "Nos sirven para mover y flexionar las piernas"],
  },
  {
    letter: "s",
    answer:
      ["stackoverflow",
      "salsa",
      "sandalia"],
    status: undefined,
    matched: undefined,
    question:
      ["Comunidad salvadora de todo desarrollador informático",
      "Complemento que da sabor a los platos",
      "Zapato abierto normalmente usado en verano"],
  },
  {
    letter: "t",
    answer:
      ["terminator",
      "tenedor",
      "timbre"],
    status: undefined,
    matched: undefined,
    question:
      ["Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      "Lo utilizamos para comer",
      "Cuando lo pulsamos, suena y alguien nos abre"],
  },
  {
    letter: "u",
    answer:
      ["unamuno",
      "uno",
      "ubicación"],
    status: undefined,
    matched: undefined,
    question:
      ["Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      "Famoso juego de cartas",
      "Localización exacta"],
  },
  {
    letter: "v",
    answer:
      ["vikingos",
      "visión",
      "vivienda"],
    status: undefined,
    matched: undefined,
    question:
      ["Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      "Capacidad de la vista",
      "Todos tenemos derecho a una digna para poder vivir, dormir y cobijarnos"],
  },
  {
    letter: "w",
    answer:
      ["sandwich",
      "twitch",
      "wc"],
    status: undefined,
    matched: undefined,
    question:
      ["Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      "Plataforma donde los usuarios muestran en streaming su juego",
      "Siglas para el baño"],
  },
  {
    letter: "x",
    answer:
      ["botox",
      "toxico",
      "xx"],
    status: undefined,
    matched: undefined,
    question:
      ["Toxina bacteriana utilizada en cirujía estética",
      "Algo venenoso",
      "Los dos cromosomas de las mujeres"],
  },
  {
    letter: "y",
    answer:
      ["peyote",
      "xy",
      "Rayban"],
    status: undefined,
    matched: undefined,
    question:
      ["Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
      "Los dos cromosomas de los hombres",
      "Marca de gafas muy conocidad por su modelo 'Wayfarer'"],
  },
  {
    letter: "z",
    answer:
      ["zen",
      "zumo",
      "zorro"],
    status: undefined,
    matched: undefined,
    question:
      ["Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      "Jugo exprimido de frutas",
      "Animal pequeño que duerme en agujeros en el bosque"],
  },
]

let timerId
const ranking = []

const resetGame = () => {
  const lettersCircle = [...document.querySelectorAll('.circle-button')]

  questions.forEach((question, index) => {
    question.matched = undefined

    const letterElement = lettersCircle[index]
    letterElement.classList.remove('success', 'failure')

    document.querySelector('.questions-set').textContent = questions.length
    document.querySelector('.fail-button').textContent = 0
    document.querySelector('.correct-button').textContent = 0

    document.querySelector('.input-answer').value = ''
  })
}

const goToFinalScreen = () => {
  clearTimeout(timerId)

  const userName = document.querySelector('.input-name')
  const finalPoints = document.querySelector('.final-points')
  finalPoints.textContent = document.querySelector('.correct-button').textContent

  ranking.push({user: userName.value, points: Number(finalPoints.textContent)})
  ranking.sort((a, b) => b.points < a.points ? -1 : 1)

  const rankingWrapper = document.querySelector('.users-ranking')
  rankingWrapper.innerHTML = ''
  rankingWrapper.append(
    ...ranking.map(player => {
      const li = document.createElement('li')
      li.textContent = `${player.user}: ${player.points}`
      return li
    })
  )

  changeClassList(document.querySelector('.section-3'), 'visibility', 'visibility-disabilited')
  changeClassList(document.querySelector('.section-4'), 'visibility-disabilited', 'visibility')

  const handlePlayAgainClick = () => {
    playAgainButton.removeEventListener('click', handlePlayAgainClick)

    changeClassList(document.querySelector('.section-1'), 'visibility-disabilited', 'visibility')
    changeClassList(document.querySelector('.section-2'), 'visibility', 'visibility-disabilited')
    changeClassList(document.querySelector('.section-3'), 'visibility', 'visibility-disabilited')
    changeClassList(document.querySelector('.section-4'), 'visibility', 'visibility-disabilited')

    resetGame()
    startPasapalabraGame(questions)
  }

  const playAgainButton = document.querySelector('.play-again')
  playAgainButton.addEventListener('click', handlePlayAgainClick)
}

const playLetter = (questions, letterIndex, roscoIndex) => {
  const indexInRange = letterIndex % questions.length
  const question = questions[indexInRange]

  const allLettersMatched = questions.every((item) => item.matched !== undefined)

  if(allLettersMatched) {
    goToFinalScreen()
    return
  }

  if (question.matched !== undefined) {
    playLetter(questions, letterIndex + 1, roscoIndex)
    return
  }

  const input = document.querySelector('.input-answer')
  input.value = ''

  const lettersCircle = [...document.querySelectorAll('.circle-button')]
  const letterElement = lettersCircle[indexInRange]
  letterElement.classList.add('current')

  const messageStartsWithTheLetter = "Con la letra:"
  const messageContainsTheLetter = "Contiene la letra:"
  const startsWithTheLetter = () => question.letter === question.answer[roscoIndex][0]
  const messageForLetter = startsWithTheLetter() ? messageStartsWithTheLetter : messageContainsTheLetter

  document.querySelector('.descriptions').innerHTML =
    `${messageForLetter} ${question.letter.toUpperCase()}<br>${question.question[roscoIndex]}`

  const buttonForAnswer = document.querySelector('.button-for-answer')
  const buttonForPasapalabra = document.querySelector('.pasapalabra-button')

  let clearEventListeners

  const handleAnswerClick = () => {
    if(input.value === '') return

    const expectedAnswer = question.answer[roscoIndex]

    if(input.value.toLowerCase() === expectedAnswer){
      question.matched = true
      changeClassList(letterElement, 'current', 'success')

      const total = document.querySelector('.questions-set')
      total.textContent = Number(total.textContent) - 1

      const successTarget = document.querySelector('.correct-button')
      successTarget.textContent = Number(successTarget.textContent) + 1
    }

    if(input.value.toLowerCase() !== expectedAnswer){
      question.matched = false
      changeClassList(letterElement, 'current', 'failure')

      const total = document.querySelector('.questions-set')
      total.textContent = Number(total.textContent) - 1

      const failureTarget = document.querySelector('.fail-button')
      failureTarget.textContent = Number(failureTarget.textContent) + 1
    }

    clearEventListeners()
    playLetter(questions, letterIndex + 1, roscoIndex)
  }

  const handlePasapalabraClick = () => {
    letterElement.classList.remove('current')

    clearEventListeners()
    playLetter(questions, letterIndex + 1, roscoIndex)
  }

  clearEventListeners = () => {
    buttonForAnswer.removeEventListener('click', handleAnswerClick)
    buttonForPasapalabra.removeEventListener('click', handlePasapalabraClick)
  }

  buttonForAnswer.addEventListener('click', handleAnswerClick)
  buttonForPasapalabra.addEventListener('click', handlePasapalabraClick)
}

const changeClassList = (element, removeClassList, addClassList) => {
  element.classList.remove(removeClassList)
	element.classList.add(addClassList)
}

const getTimer = (seconds) => {
  document.querySelector('.time-set').textContent = seconds

  if(seconds !== 0) {
    seconds--
    timerId = setTimeout(() => getTimer(seconds), 1000)
  }

  if(seconds === 0) {
    goToFinalScreen()
  }
}

const startPasapalabraGame = (questions) => {
  let userName = ''
  let seconds = 180
  const input = document.querySelector('.input-name')
  const buttonUserName = document.querySelector('.button-user-input')

  const handleUserNameButtonClick = () => {
    userName = input.value

    if (userName !== '') {
      changeClassList(document.querySelector('.section-1'), 'visibility', 'visibility-disabilited')
      changeClassList(document.querySelector('.section-2'), 'visibility-disabilited', 'visibility')
      changeClassList(document.querySelector('.section-3'), 'visibility-disabilited', 'visibility')
      changeClassList(document.querySelector('.section-4'), 'visibility', 'visibility-disabilited')

      document.querySelector('.user-welcome').textContent = `¡Bienvenido, ${userName}!`
    }
    getTimer(seconds)

    buttonUserName.removeEventListener("click", handleUserNameButtonClick)
  }

  buttonUserName.addEventListener("click", handleUserNameButtonClick)

  playLetter(questions, 0, Math.floor(Math.random() * 3))
}

startPasapalabraGame(questions)
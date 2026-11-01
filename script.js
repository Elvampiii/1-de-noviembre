'use strict';

/* Cartas extensas y personales. Puedes editar estos textos cuando quieras. */
const letters = {
  letter1: {
    title: 'Para mi niña hermosa',
    paragraphs: [
      'Mi niña hermosa, mi Ferchis, mi lechuzina preciosa: si estás leyendo esto, quiero que por un ratito dejes todo lo demás a un lado y te permitas recibir estas palabras. No son solamente letras acomodadas en una pantalla; son un pedacito de todo el cariño que siento por ti y de las muchas cosas bonitas que quisiera recordarte.',
      'A veces me pongo a pensar en lo curioso que es conocer a alguien y, poco a poco, descubrir que esa persona empieza a ocupar un lugar especial en tus días. Una conversación sencilla puede convertirse en algo que esperas con ilusión; una palabra puede mejorar una tarde; y un recuerdo pequeñito puede quedarse contigo mucho más tiempo del que imaginabas. Así me pasa contigo. Me gusta tenerte en mi vida y me gusta que nuestra historia tenga momentos que son solamente nuestros.',
      'Quiero que sepas que no tienes que hacer cosas extraordinarias para merecer cariño. No tienes que estar de buen humor todo el tiempo, tener todas las respuestas ni demostrar que puedes con absolutamente todo. Me pareces especial también en tus días normales, cuando estás cansada, cuando tienes mil pensamientos o cuando simplemente quieres hablar de cualquier tontería. No tienes que convertirte en otra persona para ser importante.',
      'Me gustaría seguir conociendo cada parte de ti: tus gustos, tus ocurrencias, tus sueños, las cosas que te emocionan y hasta esos pequeños detalles que quizá tú consideras insignificantes. Quiero que podamos reírnos de cosas absurdas, compartir canciones, contarnos cómo estuvo el día y guardar recuerdos que algún día nos hagan decir: “¿te acuerdas de aquello?”.',
      'Si pudiera envolver este mensaje en algo, lo envolvería en flores, lucecitas y un montón de corazoncitos. Pero como no puedo meter todo eso en una carta, te lo digo de la manera más sencilla que conozco: te quiero muchísimo, estoy feliz de compartir esta parte de mi vida contigo y espero que nunca olvides lo valiosa que eres.',
      'Gracias por ser tú, por los momentos que compartimos y por dejarme escribir contigo esta historia. Ojalá esta cartita te encuentre en un día bonito; y si no es un día tan bonito, ojalá al menos te recuerde que hay muchas razones para sonreír y que mereces cosas buenas. Te mando un universo de cariño, mi princesa preciosa. ♡'
    ]
  },
  letter2: {
    title: 'Cuando tengas un día difícil',
    paragraphs: [
      'Mi Ferchis preciosa: esta carta es para esos días en los que todo parece ir demasiado rápido, cuando tienes muchas cosas en la cabeza o cuando simplemente no te sale sonreír. No quiero darte un discurso ni decirte que tienes que estar bien inmediatamente. Quiero recordarte que también está bien detenerte un momento, respirar y tratarte con la misma paciencia que tendrías con alguien a quien quieres mucho.',
      'No tienes que resolver toda tu vida en una tarde. Puedes ir poquito a poquito. Un paso pequeño también cuenta, descansar también cuenta y pedir compañía cuando la necesitas también es una forma de cuidarte. No tienes que fingir que nada pasa para que los demás te quieran ni tienes que esconder tus emociones para ser fuerte.',
      'Me gustaría que nunca sintieras que debes cargar con todo en silencio. Si quieres contarme algo, quiero escucharte; si necesitas distraerte, podemos hablar de cualquier cosa; y si lo que necesitas es un ratito para ti, también merece respeto. No siempre voy a tener la frase perfecta, pero sí puedo intentar escucharte con cariño y sin juzgarte.',
      'Admiro mucho que sigas aprendiendo y avanzando a tu manera. Tal vez tú no notes todos tus esfuerzos, pero eso no significa que no existan. No midas tu valor por un día complicado, por un error o por algo que todavía no has conseguido. Eres mucho más que una dificultad pasajera.',
      'Así que, mi niña, toma agüita, descansa si puedes, date un poquito de calma y recuerda que no tienes que ser perfecta. Mereces ternura en los días buenos y también en los difíciles. Ojalá esta carta sea como una mantita de palabras: suave, tranquila y llena de cariño. Te quiero mucho. 🌷'
    ]
  },
  letter3: {
    title: 'Todo lo que admiro de ti',
    paragraphs: [
      'Hay tantas cosas que podría decirte que seguramente esta carta se quedaría corta. Admiro tu manera de ser, tus ideas, tus gustos y esa combinación de detalles que te hacen ser tú. Me gusta que tengas tu propia forma de mirar el mundo y que existan cosas que te emocionen, te hagan reír o te llenen de ilusión.',
      'Admiro tus esfuerzos, incluso esos que nadie ve. Las veces que intentas algo otra vez, cuando aprendes de una experiencia, cuando te atreves a dar un paso aunque tengas dudas y cuando sigues construyendo tus sueños. No necesitas conseguirlo todo de inmediato para que yo pueda reconocer lo mucho que vales.',
      'También admiro tus pequeñas rarezas, tus ocurrencias y esos detalles que quizá no aparecen en ninguna lista de cualidades, pero que hacen que una persona sea inolvidable. Me gusta descubrir cosas nuevas de ti y encontrar motivos para decir: qué bonito que seas así.',
      'Quiero que te mires con más cariño. Ojalá pudieras reconocer en ti todas esas cualidades que otras personas pueden apreciar. No te compares con nadie, porque tu historia no tiene que parecerse a la de otra persona. Tu ritmo es tuyo, tus metas son tuyas y mereces sentir orgullo por cada avance.',
      'Si alguna vez dudas de ti, vuelve a esta carta y recuerda que eres una persona con muchísimo valor. No por cumplir expectativas, no por agradarle a todo el mundo, sino simplemente porque eres una persona única y mereces respeto, oportunidades y cosas bonitas. Estoy muy orgulloso de ti, mi niña hermosa. ✨'
    ]
  },
  letter4: {
    title: 'Mi lugar favorito',
    paragraphs: [
      'No voy a decir que un lugar favorito siempre tiene que ser una ciudad, una playa o un paisaje increíble. A veces un lugar se parece más a un momento: una conversación que te hace olvidar la hora, una risa inesperada, una canción que llega justo cuando la necesitas o la tranquilidad de saber que puedes ser tú misma.',
      'Hay momentos contigo que me gustaría guardar en una cajita para volver a abrirla cuando quiera recordar algo bonito. No tienen que ser grandes aventuras. A veces basta con contarnos cómo nos fue, compartir una tontería, mandarnos algo que nos hizo pensar en el otro o descubrir una nueva canción.',
      'Me gusta imaginar todos los recuerdos que todavía podemos crear: pláticas largas, bromas que solamente nosotros entendamos, fechas que se vuelvan especiales y detalles sencillos que terminen significando muchísimo. No quiero apresurar el tiempo; quiero aprender a disfrutar cada capítulo mientras lo vamos escribiendo.',
      'Para mí, lo bonito está en construir algo donde los dos podamos sentirnos escuchados, respetados y queridos. Un espacio donde podamos hablar con sinceridad, celebrar lo bueno y aprender de lo difícil sin dejar de tratarnos con cariño.',
      'Así que, si me preguntas cuál es mi lugar favorito, te diría que son esos momentos en los que compartimos algo bonito y podemos ser nosotros mismos. Gracias por formar parte de tantos de ellos, mi Ferchis. Ojalá nos queden muchísimos más. 🦋'
    ]
  },
  letter5: {
    title: 'Un futuro lleno de recuerdos',
    paragraphs: [
      'Cuando pienso en el futuro no necesito imaginar una película perfecta. Me basta con pensar en todas las pequeñas posibilidades que existen: conocer más cosas juntos, descubrir canciones, aprender de nuestras experiencias, celebrar logros y encontrar nuevas razones para reírnos.',
      'Me emociona pensar que todavía hay muchísimas historias que no conocemos. Hay lugares que quizá algún día visitemos, comidas que todavía no probamos, conversaciones que aún no tenemos y fechas que todavía no sabemos que serán importantes. Qué bonito que la vida todavía tenga tantas páginas en blanco.',
      'No quiero prometerte que todo será sencillo ni que nunca habrá diferencias. Prefiero desear que siempre podamos hablar con honestidad, escuchar de verdad y recordar que los dos merecemos respeto. Lo bonito no es que todo salga perfecto; lo bonito es aprender a cuidarlo entre los dos.',
      'Quiero verte cumplir tus metas, emocionarte por tus proyectos y descubrir todo lo que eres capaz de hacer. Ojalá nunca dejes tus sueños a un lado y siempre encuentres motivos para seguir creciendo. Me encantará poder celebrar tus pequeños y grandes logros.',
      'Por ahora, disfrutemos el presente y hagamos que cada recuerdo tenga algo de verdad, de alegría y de cariño. Si el futuro nos regala muchos capítulos juntos, quiero que estén llenos de momentos que nos hagan sonreír al recordarlos. Te quiero, mi princesa preciosa. ⭐'
    ]
  },
  letter6: {
    title: 'Por si alguna vez lo dudas',
    paragraphs: [
      'Por si algún día se te olvida, quiero recordarte que eres importante. Tu presencia, tus ideas, tus sentimientos y tus sueños merecen espacio. No tienes que ganarte el derecho a ser escuchada ni demostrar constantemente que mereces cariño.',
      'Por si algún día te comparas con alguien, recuerda que no existe otra persona que tenga exactamente tu historia, tus experiencias, tu manera de pensar y tus pequeños detalles. No estás en una competencia. No tienes que ser una versión distinta de ti para tener valor.',
      'Por si un error te hace sentir que no puedes, recuerda todas las cosas que has aprendido antes. Equivocarse no borra tus cualidades ni significa que no puedas intentarlo de nuevo. Puedes cambiar de idea, descansar, pedir ayuda y comenzar otra vez cuando estés lista.',
      'Por si alguna vez sientes que no haces suficiente, quiero que recuerdes que tu valor no depende de cuántas cosas logras en un día. También mereces descansar, disfrutar, jugar, reír y tener tiempo para ti. Eres una persona, no una lista de tareas.',
      'Y por si alguna vez dudas de cuánto cariño te tengo, vuelve a esta página. La hice para recordarte que eres alguien muy especial para mí. Gracias por ser mi Ferchis, mi lechuzina y esa personita a quien quiero dedicarle palabras bonitas. Que nunca te falten motivos para reconocer lo maravillosa que eres. ♥'
    ]
  }
};

const surprises = [
  'Recordatorio oficial de tu universo: eres valiosa, mereces respeto, tranquilidad, alegría y muchísimo cariño. No dejes que un día difícil te haga olvidar todas las cosas bonitas que hay en ti. 🌷',
  'Mi deseo para ti es que tengas oportunidades para cumplir tus sueños, personas que te quieran bonito, días tranquilos, muchas risas y la valentía para intentar todo aquello que te haga ilusión. ✨',
  'Un secretito: esta página tiene un montón de detalles, pero ninguno es tan especial como la persona para quien fue hecha. Sí, tú, mi Ferchis preciosa. 🦉💗'
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function initIntro() {
  const intro = $('#intro');
  const button = $('#openUniverse');
  if (!intro || !button) return;
  button.addEventListener('click', () => {
    intro.classList.add('hide');
    document.body.classList.remove('no-scroll');
    setTimeout(() => intro.remove(), 850);
    burstHearts(12);
  });
}

function initLetters() {
  const modal = $('#letterModal');
  const title = $('#modalTitle');
  const body = $('#modalBody');
  const close = $('#closeModal');
  if (!modal || !title || !body) return;

  $$('[data-letter]').forEach(button => {
    button.addEventListener('click', () => {
      const letter = letters[button.dataset.letter];
      if (!letter) return;
      title.textContent = letter.title;
      body.replaceChildren();
      letter.paragraphs.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        body.appendChild(paragraph);
      });
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
      close?.focus();
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }
  close?.addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if (event.target.matches('[data-close-modal]')) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

function initMusicPlayer() {
  const audio = document.querySelector('#audioPlayer');
  const title = document.querySelector('#songTitle');
  const artist = document.querySelector('#songArtist');
  const playlist = document.querySelector('#playlist');
  const count = document.querySelector('#playlistCount');
  const record = document.querySelector('#record');

  const playPause = document.querySelector('#playPause');
  const previous = document.querySelector('#previousSong');
  const next = document.querySelector('#nextSong');

  if (!audio) return;

  // AGREGA AQUÍ LOS NOMBRES DE TUS CANCIONES
  const tracks = [
    {
      name: 'Canción 1',
      artist: 'Para Ferchis 💗',
      src: 'musica/cancion10.mp3'
    },
    {
      name: 'Canción 2',
      artist: 'Para Ferchis 💗',
      src: 'musica/cancion2.mp3'
    },
    {
      name: 'Canción 3',
      artist: 'Para Ferchis 💗',
      src: 'musica/cancion3.mp3'
    },
    {
      name: 'Canción 4',
      artist: 'Para Ferchis 💗',
      src: 'musica/cancion4.mp3'
    },

    {
      name: 'Canción 5',
      artist: 'Para Ferchis 💗',
      src: 'musica/cancion5.mp3'
    },

    {
      name: 'Canción 6',
      artist: 'Para Ferchis 💗',
      src: 'musica/cancion6.mp3'
    },

    {
      name: 'Canción 7',
      artist: 'Para Ferchis 💗',
      src: 'musica/cancion7.mp3'
    },

    {
      name: 'Canción 8',
      artist: 'Para Ferchis 💗',
      src: 'musica/cancion1.mp3'
    },
  ];

  let currentIndex = -1;
  let shuffledTracks = [];

  // Mezclar canciones aleatoriamente
  function shuffleTracks() {
    shuffledTracks = [...tracks];

    for (let i = shuffledTracks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledTracks[i], shuffledTracks[j]] =
        [shuffledTracks[j], shuffledTracks[i]];
    }
  }

  function renderPlaylist() {
    if (playlist) {
      playlist.innerHTML = '';

      shuffledTracks.forEach((track, index) => {
        const item = document.createElement('button');

        item.textContent = `${index + 1}. ${track.name}`;
        item.className = 'playlist-song';

        item.addEventListener('click', () => {
          playTrack(index);
        });

        playlist.appendChild(item);
      });
    }

    if (count) {
      count.textContent = `${tracks.length} canciones 💗`;
    }
  }

  function playTrack(index) {
    if (!shuffledTracks.length) return;

    currentIndex = (index + shuffledTracks.length) %
      shuffledTracks.length;

    const track = shuffledTracks[currentIndex];

    audio.src = track.src;

    if (title) title.textContent = track.name;
    if (artist) artist.textContent = track.artist;

    audio.play().then(() => {
      if (playPause) playPause.textContent = '⏸';
      if (record) record.classList.add('playing');
    }).catch(() => {
      if (playPause) playPause.textContent = '▶';
    });

    renderPlaylist();
  }

  function nextTrack() {
    if (currentIndex === shuffledTracks.length - 1) {
      shuffleTracks();
      currentIndex = -1;
      playTrack(0);
    } else {
      playTrack(currentIndex + 1);
    }
  }

  function previousTrack() {
    playTrack(currentIndex - 1);
  }

  if (playPause) {
    playPause.addEventListener('click', () => {
      if (audio.paused) {
        if (!audio.src) {
          shuffleTracks();
          playTrack(0);
        } else {
          audio.play();
        }
      } else {
        audio.pause();
      }
    });
  }

  if (next) next.addEventListener('click', nextTrack);
  if (previous) previous.addEventListener('click', previousTrack);

  audio.addEventListener('ended', nextTrack);

  audio.addEventListener('play', () => {
    if (playPause) playPause.textContent = '⏸';
    if (record) record.classList.add('playing');
  });

  audio.addEventListener('pause', () => {
    if (playPause) playPause.textContent = '▶';
    if (record) record.classList.remove('playing');
  });

  shuffleTracks();
  renderPlaylist();
}

function initCounter() {
  const startDate = new Date(2026, 8, 7, 0, 0, 0);
  const nodes = { days: $('#days'), hours: $('#hours'), minutes: $('#minutes'), seconds: $('#seconds') };
  const caption = $('#counterCaption');
  if (!nodes.days) return;
  function update() {
    const now = new Date();
    let difference = now.getTime() - startDate.getTime();
    if (difference < 0) {
      difference = Math.abs(difference);
      if (caption) caption.textContent = 'La fecha especial está por llegar. ♡';
    } else if (caption) {
      caption.textContent = 'Cada día suma una página más a nuestra historia. ♡';
    }
    const total = Math.floor(difference / 1000);
    nodes.days.textContent = Math.floor(total / 86400);
    nodes.hours.textContent = Math.floor((total % 86400) / 3600);
    nodes.minutes.textContent = Math.floor((total % 3600) / 60);
    nodes.seconds.textContent = total % 60;
  }
  update();
  setInterval(update, 1000);
}

function initSurprises() {
  const result = $('#surpriseResult');
  $$('[data-surprise]').forEach(button => {
    button.addEventListener('click', () => {
      const message = surprises[Number(button.dataset.surprise)];
      if (!result || !message) return;
      const paragraph = document.createElement('p');
      paragraph.textContent = message;
      result.replaceChildren();
      const heart = document.createElement('span');
      heart.textContent = '♡';
      result.append(heart, paragraph);
      burstHearts(7);
    });
  });
}

function initNavigation() {
  const toggle = $('#menuToggle');
  const links = $('#navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
  $$('a', links).forEach(link => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}

function createParticle() {
  const container = $('#particles');
  if (!container || container.children.length > 22) return;
  const particle = document.createElement('span');
  particle.className = 'particle';
  particle.textContent = ['♡', '✦', '✿', '♥'][Math.floor(Math.random() * 4)];
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.fontSize = `${12 + Math.random() * 17}px`;
  particle.style.animationDuration = `${8 + Math.random() * 8}s`;
  container.appendChild(particle);
  particle.addEventListener('animationend', () => particle.remove(), { once: true });
}
function burstHearts(amount = 8) {
  for (let i = 0; i < amount; i++) setTimeout(createParticle, i * 100);
}
function initParticles() {
  setInterval(createParticle, 1250);
}

function initSmoothAnchors() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const target = $(anchor.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initIntro();
  initLetters();
  initMusicPlayer();
  initCounter();
  initSurprises();
  initNavigation();
  initParticles();
  initSmoothAnchors();
});

// Оголошення конструктора для об'єкта Patient
function Patient(
  lastName,
  firstName,
  middleName,
  birthYear,
  admissionDate,
  diagnosis,
  roomNumber,
) {
  this.lastName = lastName;
  this.admissionDate = admissionDate;
  this.firstName = firstName;
  this.middleName = middleName;
  this.birthYear = birthYear;
  this.diagnosis = diagnosis;
  this.roomNumber = roomNumber;
}

// Оголошення конструктора для об'єкта Hospital
function Hospital(name) {
  this.name = name;
  this.patients = [];

  // Додавання пацієнта до масиву пацієнтів
  this.addPatient = function (patient) {
    this.patients.push(patient);
  };

  // Розподіл пацієнтів по палатах
  this.assignPatientsToRooms = function () {
    var rooms = {};
    for (var i = 0; i < this.patients.length; i++) {
      var patient = this.patients[i];
      var roomNumber = patient.roomNumber;
      if (!rooms[roomNumber]) {
        rooms[roomNumber] = [];
      }
      rooms[roomNumber].push(patient);
    }
    return rooms;
  };
}

// Створення екземпляра госпіталю
var hospital = new Hospital("hospital");

// Функція для збереження пацієнта
const savePatient = () => {
  // Отримання значень полів введення
  let lastName = document.getElementById("lastName").value;
  let firstName = document.getElementById("firstName").value;
  let middleName = document.getElementById("middleName").value;
  let birthYear = document.getElementById("birthYear").value;
  let admissionDate = document.getElementById("admissionDate").value;
  let diagnosis = document.getElementById("diagnosis").value;
  let roomNumber = document.getElementById("roomNumber").value;

  // Створення нового об'єкта Patient і його додавання до госпіталю
  var patient = new Patient(
    lastName,
    firstName,
    middleName,
    birthYear,
    admissionDate,
    diagnosis,
    roomNumber
  );
  hospital.addPatient(patient);
};

// Функція для відображення інформації про пацієнтів
const showPatients = () => {
  // Отримання розподілу пацієнтів по палатах
  var rooms = hospital.assignPatientsToRooms();

  // Отримання DOM-елемента для виведення інформації
  var array = document.getElementById("arrayOfPatients");
  array.innerHTML = "";

  // Перебір палат та пацієнтів у кожній палаті
  for (var roomNumber in rooms) {
    array.append("Палата " + roomNumber + ":");
    for (var i = 0; i < rooms[roomNumber].length; i++) {
      var patient = rooms[roomNumber][i];
      array.innerHTML += "</br>";
      array.append(
        i +
          1 +
          " " +
          "Прізвище " +
          patient.lastName +
          " Ім'я " +
          patient.firstName +
          " Діагноз " +
          patient.diagnosis +
          ". "
      );
    }
    array.innerHTML += "</br>";
  }
};

// Оголошення класу Performer
class Performer {
  constructor(name, country, year) {
    this.name = name;
    this.country = country;
    this.year = year;
  }

  // Отримання інформації про виконавця
  get_info() {
    var info =
      "Виконавець. Ім'я: " +
      this.name +
      " ,країна: " +
      this.country +
      " ,рік: " +
      this.year;
    return info;
  }

  // Отримання імені виконавця
  get_name() {
    return this.name;
  }
}

// Оголошення класу Album
class Album {
  constructor(title, year, record_label) {
    this.title = title;
    this.year = year;
    this.record_label = record_label;
  }

  // Отримання інформації про альбом
  get_info() {
    var info =
      "Альбом. Назва: " +
      this.title +
      " ,рік: " +
      this.year +
      " ,лейбл: " +
      this.record_label;
    return info;
  }

  // Отримання назви альбому
  get_title() {
    return this.title;
  }
}

// Оголошення класу Playlist
class Playlist {
  constructor(title, count_of_songs, year) {
    this.title = title;
    this.count_of_songs = count_of_songs;
    this.year = year;
  }

  // Отримання інформації про плейлист
  get_info() {
    var info =
      "Плейлист. Назва: " +
      this.title +
      " ,кількість пісень: " +
      this.count_of_songs +
      " ,рік: " +
      this.year;
    return info;
  }

  // Отримання назви плейлисту
  get_title() {
    return this.title;
  }
}

// Оголошення класу Track
class Track {
  constructor(title, genre, performer, album, playlist) {
    this.title = title;
    this.genre = genre;
    this.performer = performer;
    this.album = album;
    this.playlist = playlist;
  }

  // Отримання інформації про трек
  get_info() {
    var info =
      "Трек. Назва: " +
      this.title +
      " ,жанр: " +
      this.genre +
      " " +
      this.performer.get_info() +
      " " +
      this.album.get_info() +
      " " +
      this.playlist.get_info();
    return info;
  }

  // Отримання жанру треку
  get_genre() {
    return this.genre;
  }

  // Отримання назви плейлисту, до якого належить трек
  get_playlist() {
    return this.playlist.get_title();
  }

  // Отримання назви альбому, до якого належить трек
  get_album() {
    return this.album.get_title();
  }

  // Отримання імені виконавця треку
  get_performer() {
    return this.performer.get_name();
  }
}

// Масив для зберігання треків
var songArray = [];

// Функція для збереження треку
const saveSong = () => {
  // Отримання значень полів введення
  var song_text = document.getElementById("song");
  var song = song_text.value;
  var genre_text = document.getElementById("genre");
  var genre = genre_text.value;
  var title_of_album_text = document.getElementById("title_of_album");
  var title_of_album = title_of_album_text.value;
  var year_of_album_text = document.getElementById("year_of_album");
  var year_of_album = year_of_album_text.value;
  var record_label_text = document.getElementById("record_label");
  var record_label = record_label_text.value;
  var name_of_performer_text = document.getElementById("name_of_performer");
  var name_of_performer = name_of_performer_text.value;
  var country_of_performer_text = document.getElementById(
    "country_of_performer"
  );
  var country_of_performer = country_of_performer_text.value;
  var birth_of_performer_text = document.getElementById("birth_of_performer");
  var birth_of_performer = birth_of_performer_text.value;
  var title_of_playlist_text = document.getElementById("title_of_playlist");
  var title_of_playlist = title_of_playlist_text.value;
  var count_of_songs_text = document.getElementById("count_of_songs");
  var count_of_songs = count_of_songs_text.value;
  var year_of_playlist_text = document.getElementById("year_of_playlist");
  var year_of_playlist = year_of_playlist_text.value;

  // Створення нових об'єктів Performer, Album, Playlist та Track
  var new_performer = new Performer(
    name_of_performer,
    country_of_performer,
    birth_of_performer
  );
  var new_album = new Album(title_of_album, year_of_album, record_label);
  var new_playlist = new Playlist(
    title_of_playlist,
    count_of_songs,
    year_of_playlist
  );
  var newTrack = new Track(song, genre, new_performer, new_album, new_playlist);

  // Додавання треку до масиву треків
  songArray.push(newTrack);

  // Очищення значень полів введення
  song_text.value = "";
  genre_text.value = "";
  title_of_album_text.value = "";
  year_of_album_text.value = "";
  record_label_text.value = "";
  name_of_performer_text.value = "";
  country_of_performer_text.value = "";
  birth_of_performer_text.value = "";
  title_of_playlist_text.value = "";
  count_of_songs_text.value = "";
  year_of_playlist_text.value = "";
};

// Функція для відображення інформації про треки
const showSongs = () => {
  // Отримання DOM-елемента для виведення інформації
  var arrayOfSongs = document.getElementById("arrayOfSongs");
  arrayOfSongs.innerHTML = "";

  // Об'єкти для зберігання треків за різними критеріями
  const playlists = {};
  const genres = {};
  const albums = {};
  const performers = {};

  // Перебір масиву треків
  for (var i = 0; i < songArray.length; i++) {
    const track = songArray[i];
    const playlistTitle = track.get_playlist();
    const genre = track.get_genre();
    const albumTitle = track.get_album();
    const performerName = track.get_performer();

    // Додавання треку до відповідного об'єкту за критерієм
    if (!playlists[playlistTitle]) playlists[playlistTitle] = [];
    if (!genres[genre]) genres[genre] = [];
    if (!albums[albumTitle]) albums[albumTitle] = [];
    if (!performers[performerName]) performers[performerName] = [];

    playlists[playlistTitle].push(track);
    genres[genre].push(track);
    albums[albumTitle].push(track);
    performers[performerName].push(track);
  }

  // Виведення інформації про треки за різними критеріями
  for (const playlistTitle in playlists) {
    const playlistTracks = playlists[playlistTitle];
    let newElement = document.createElement("h2");
    newElement.innerText = `Плейлист: ${playlistTitle}`;
    arrayOfSongs.appendChild(newElement);
    for (const track of playlistTracks) {
      let trackElement = document.createElement("p");
      trackElement.innerText = track.get_info();
      arrayOfSongs.appendChild(trackElement);
    }
  }

  for (const genre in genres) {
    const genreTracks = genres[genre];
    let newElement = document.createElement("h2");
    newElement.innerText = `Жанр: ${genre}`;
    arrayOfSongs.appendChild(newElement);
    for (const track of genreTracks) {
      let trackElement = document.createElement("p");
      trackElement.innerText = track.get_info();
      arrayOfSongs.appendChild(trackElement);
    }
  }

  for (const albumTitle in albums) {
    const albumTracks = albums[albumTitle];
    let newElement = document.createElement("h2");
    newElement.innerText = `Альбом: ${albumTitle}`;
    arrayOfSongs.appendChild(newElement);
    for (const track of albumTracks) {
      let trackElement = document.createElement("p");
      trackElement.innerText = track.get_info();
      arrayOfSongs.appendChild(trackElement);
    }
  }

  for (const performerName in performers) {
    const performerTracks = performers[performerName];
    let newElement = document.createElement("h2");
    newElement.innerText = `Виконавець: ${performerName}`;
    arrayOfSongs.appendChild(newElement);
    for (const track of performerTracks) {
      let trackElement = document.createElement("p");
      trackElement.innerText = track.get_info();
      arrayOfSongs.appendChild(trackElement);
   

    }
  }
};

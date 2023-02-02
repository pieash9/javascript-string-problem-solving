let lyrics = 'tumi bondhu kala pakhi  ami jeno ki.  boshnto kale tomay bolte pari ni. sada sada kala kala';
let parts = lyrics.split(' ');
let sentences = lyrics.split('.')
let characters = lyrics.split('');
let partial= lyrics.slice(5,8);
let partial2 = lyrics.substring(5,8);

const line = [
    'tumi bondhu kala pakhi  ami jeno ki',
    'boshnto kale tomay bolte pari ni',
    'sada sada kala kala'
  ]
  let newSong = line.join(', ');
console.log(newSong);
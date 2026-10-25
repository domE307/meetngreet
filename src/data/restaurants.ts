export type Restaurant = {
  id: string;
  cuisine: string;
  emoji: string;
  /** Akzentfarbe der Karte */
  color: string;
  name: string;
  /** Persönlicher Kommentar zum Laden */
  comment: string;
  /** Typische Gerichte der Küche (keine geprüfte Speisekarte) */
  dishes: string[];
  lat: number;
  lon: number;
  /** Original-Link aus Google Maps */
  mapsUrl: string;
  /** Speisekarte (nur gesetzt, wenn für genau diesen Standort gefunden) */
  menuUrl?: string;
};

export const intro = {
  greeting: "Hey Lars",
  text: [
    "ich wollte mal fragen, ob du Lust hast, dass wir uns demnächst mal abends treffen. Gemeinsam essen gehen, quatschen, den Tag ausklingen lassen. Irgendwie ist das viel zu lange her.",
    "Ich hab dir ein paar Läden zusammengestellt, die ich entweder richtig gut kenne oder unbedingt mal ausprobieren will. Schau in Ruhe durch, was dich am meisten anlacht.",
    "Und falls du einen ganz anderen Vorschlag hast, dann schieß einfach los.",
  ],
};

export const restaurants: Restaurant[] = [
  {
    id: "griechisch",
    cuisine: "Griechisch",
    emoji: "🫒",
    color: "#2f6fb5",
    name: "Restaurant Mati",
    comment: "War ich schon öfter, hat mich nie enttäuscht.",
    dishes: ["Gyros", "Souvlaki", "Gemüse-Moussaka", "Tzatziki"],
    lat: 52.5550995,
    lon: 13.111788,
    mapsUrl: "https://maps.app.goo.gl/nS8iENYUZk8hU8Ud9",
    menuUrl: "https://sk.mati-falkensee.de/speisekarte-mati-falkensee"
  },
  {
    id: "vietnamesisch",
    cuisine: "Vietnamesisch",
    emoji: "🍜",
    color: "#2e7d46",
    name: "Minh Khai Falkensee",
    comment:
      "Da wollten Aileen und ich immer hin, bisher noch nicht geschafft. Gut geeignet, um tolle Bilder vom Essen in die Gruppe zu posten à la „und ihr so?!“",
    dishes: ["Pho", "Frühlingsrollen", "Bún", "Sushi"],
    lat: 52.5562081,
    lon: 13.1433063,
    mapsUrl: "https://maps.app.goo.gl/kZQ8NyKtr77CJKqh6",
    menuUrl: "https://minhkhai-restaurant.de/3d-flip-book/696"
  },
  {
    id: "chinesisch",
    cuisine: "Chinesisch",
    emoji: "🥡",
    color: "#b3302a",
    name: "Hong Shun",
    comment: "War immer sehr solide!",
    dishes: ["Gebratene Nudeln", "Süß-sauer", "Dim Sum", "Ente"],
    lat: 52.5703964,
    lon: 13.0942049,
    mapsUrl: "https://maps.app.goo.gl/82Qh4NkWLThpBRhQ6",
    menuUrl: "https://www.restaurant-hongshun.de/Speisen-und-Getraenk",
  },
  {
    id: "pizza",
    cuisine: "Pizza",
    emoji: "🍕",
    color: "#c75a1a",
    name: "60 Seconds to Napoli",
    comment: "Wow, hat mich umgehauen!",
    dishes: ["Pizza Margherita", "Pizza Diavola", "Pizza al Taglio"],
    lat: 52.5090392,
    lon: 13.3905452,
    mapsUrl: "https://maps.app.goo.gl/mSVtY8CNDUn3UgGr8",
    menuUrl: "https://60secondstonapoli.de/menue/",
  },
  {
    id: "sushii",
    cuisine: "Sushi",
    emoji: "🍣",
    color: "#c0396a",
    name: "Sy Restaurant Spandau",
    comment: "Sushi geht ja eigentlich immer.",
    dishes: ["Maki", "Nigiri", "Edamame", "Miso-Suppe"],
    lat: 52.5379045,
    lon: 13.206736,
    mapsUrl: "https://maps.app.goo.gl/YeACzxbuYQ1Zd8FZ6",
    menuUrl: "https://sy-restaurant.de/upload/Speisekarte_Spandau_web.pdf",
  },
];

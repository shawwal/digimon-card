let url = process.env.NEXT_PUBLIC_END_POINT;

const digimonList = [
  {
    name: "Koromon",
    img: `${url}/digimon-png/koromon.png`,
    level: "In Training"
  },
  {
    name: "Tsunomon",
    img: `${url}/digimon-png/tsunomon.png`,
    level: "In Training"
  },
  {
    name: "Yokomon",
    img: `${url}/digimon-png/yokomon.png`,
    level: "In Training"
  },
  {
    name: "Motimon",
    img: `${url}/digimon-png/motimon.png`,
    level: "In Training"
  },
  {
    name: "Tanemon",
    img: `${url}/digimon-png/tanemon.png`,
    level: "In Training"
  },
  {
    name: "Bukamon",
    img: `${url}/digimon-png/bukamon.png`,
    level: "In Training"
  },
  {
    name: "Tokomon",
    img: `${url}/digimon-png/tokomon.png`,
    level: "In Training"
  },
  {
    name: "Agumon",
    img: `${url}/digimon-png/agumon.png`,
    level: "Rookie"
  },
  {
    name: "Gabumon",
    img: `${url}/digimon-png/gabumon.png`,
    level: "Rookie"
  },
  {
    name: "Biyomon",
    img: `${url}/digimon-png/biyomon.png`,
    level: "Rookie"
  },
  {
    name: "Tentomon",
    img: `${url}/digimon-png/tentomon.png`,
    level: "Rookie"
  },
  {
    name: "Palmon",
    img: `${url}/digimon-png/palmon.png`,
    level: "Rookie"
  },
  {
    name: "Gomamon",
    img: `${url}/digimon-png/gomamon.png`,
    level: "Rookie"
  },
  {
    name: "Patamon",
    img: `${url}/digimon-png/patamon.png`,
    level: "Rookie"
  },
  {
    name: "Kuwagamon",
    img: `${url}/digimon-png/kuwagamon.png`,
    level: "Champion"
  },
  {
    name: "Greymon",
    img: `${url}/digimon-png/greymon.png`,
    level: "Champion"
  },
  {
    name: "Shellmon",
    img: `${url}/digimon-png/shellmon.png`,
    level: "Champion"
  },
  {
    name: "Garurumon",
    img: `${url}/digimon-png/garurumon.png`,
    level: "Champion"
  },
  {
    name: "Seadramon",
    img: `${url}/digimon-png/seadramon.png`,
    level: "Champion"
  },
  {
    name: "Monochromon",
    img: `${url}/digimon-png/monochromon.png`,
    level: "Champion"
  },
  {
    name: "Birdramon",
    img: `${url}/digimon-png/birdramon.png`,
    level: "Champion"
  },
  {
    name: "Meramon",
    img: `${url}/digimon-png/meramon.png`,
    level: "Champion"
  },
  {
    name: "Kabuterimon",
    img: `${url}/digimon-png/kabuterimon.png`,
    level: "Champion"
  },
  {
    name: "Andromon",
    img: `${url}/digimon-png/andromon.png`,
    level: "Ultimate"
  },
  {
    name: "Togemon",
    img: `${url}/digimon-png/togemon.png`,
    level: "Champion"
  },
  {
    name: "Numemon",
    img: `${url}/digimon-png/numemon.png`,
    level: "Champion"
  },
  {
    name: "Monzaemon",
    img: `${url}/digimon-png/monzaemon.png`,
    level: "Ultimate"
  },
  {
    name: "Ikkakumon",
    img: `${url}/digimon-png/ikkakumon.png`,
    level: "Champion"
  },
  {
    name: "Unimon",
    img: `${url}/digimon-png/unimon.png`,
    level: "Champion"
  },
  {
    name: "Leomon",
    img: `${url}/digimon-png/leomon.png`,
    level: "Champion"
  },
  {
    name: "Ogremon",
    img: `${url}/digimon-png/ogremon.png`,
    level: "Champion"
  },
  {
    name: "Devimon",
    img: `${url}/digimon-png/devimon.png`,
    level: "Champion"
  },
  {
    name: "Frigimon",
    img: `${url}/digimon-png/frigimon.png`,
    level: "Champion"
  },
  {
    name: "Mojyamon",
    img: `${url}/digimon-png/mojyamon.png`,
    level: "Champion"
  },
  {
    name: "Sukamon",
    img: `${url}/digimon-png/sukamon.png`,
    level: "Champion"
  },
  {
    name: "Centarumon",
    img: `${url}/digimon-png/centarumon.png`,
    level: "Champion"
  },
  {
    name: "Bakemon",
    img: `${url}/digimon-png/bakemon.png`,
    level: "Champion"
  },
  {
    name: "Elecmon",
    img: `${url}/digimon-png/elecmon.png`,
    level: "Rookie"
  },
  {
    name: "Botamon",
    img: `${url}/digimon-png/botamon.png`,
    level: "Fresh"
  },
  {
    name: "Punimon",
    img: `${url}/digimon-png/punimon.png`,
    level: "Fresh"
  },
  {
    name: "Poyomon",
    img: `${url}/digimon-png/poyomon.png`,
    level: "Fresh"
  },
  {
    name: "Yuramon",
    img: `${url}/digimon-png/yuramon.png`,
    level: "Fresh"
  },
  {
    name: "Angemon",
    img: `${url}/digimon-png/angemon.png`,
    level: "Champion"
  },
  {
    name: "Whamon",
    img: `${url}/digimon-png/whamon.png`,
    level: "Champion"
  },
  {
    name: "Drimogemon",
    img: `${url}/digimon-png/drimogemon.png`,
    level: "Champion"
  },
  {
    name: "Etemon",
    img: `${url}/digimon-png/etemon.png`,
    level: "Ultimate"
  },
  {
    name: "Gazimon",
    img: `${url}/digimon-png/gazimon.png`,
    level: "Rookie"
  },
  {
    name: "Pagumon",
    img: `${url}/digimon-png/pagumon.png`,
    level: "In Training"
  },
  {
    name: "SkullGreymon",
    img: `${url}/digimon-png/skullgreymon.png`,
    level: "Ultimate"
  },
  {
    name: "Kokatorimon",
    img: `${url}/digimon-png/kokatorimon.png`,
    level: "Champion"
  },
  {
    name: "Tyrannomon",
    img: `${url}/digimon-png/tyrannomon.png`,
    level: "Champion"
  },
  {
    name: "Piximon",
    img: `${url}/digimon-png/piximon.png`,
    level: "Ultimate"
  },
  {
    name: "Datamon",
    img: `${url}/digimon-png/datamon.png`,
    level: "Ultimate"
  },
  {
    name: "MetalGreymon",
    img: `${url}/digimon-png/metalgreymon.png`,
    level: "Ultimate"
  },
  {
    name: "DemiDevimon",
    img: `${url}/digimon-png/demidevimon.png`,
    level: "Rookie"
  },
  {
    name: "WereGarurumon",
    img: `${url}/digimon-png/weregarurumon.png`,
    level: "Ultimate"
  },
  {
    name: "Digitamamon",
    img: `${url}/digimon-png/digitamamon.png`,
    level: "Ultimate"
  },
  {
    name: "Vegiemon",
    img: `${url}/digimon-png/vegiemon.png`,
    level: "Champion"
  },
  {
    name: "Myotismon",
    img: `${url}/digimon-png/myotismon.png`,
    level: "Ultimate"
  },
  {
    name: "Vademon",
    img: `${url}/digimon-png/vademon.png`,
    level: "Ultimate"
  },
  {
    name: "Pabumon",
    img: `${url}/digimon-png/pabumon.png`,
    level: "Fresh"
  },
  {
    name: "Gekomon",
    img: `${url}/digimon-png/gekomon.png`,
    level: "Champion"
  },
  {
    name: "Otamamon",
    img: `${url}/digimon-png/otamamon.png`,
    level: "Rookie"
  },
  {
    name: "ShogunGekomon",
    img: `${url}/digimon-png/shogungekomon.png`,
    level: "Ultimate"
  },
  {
    name: "Garudamon",
    img: `${url}/digimon-png/garudamon.png`,
    level: "Ultimate"
  },
  {
    name: "Flymon",
    img: `${url}/digimon-png/flymon.png`,
    level: "Champion"
  },
  {
    name: "Gatomon",
    img: `${url}/digimon-png/gatomon.png`,
    level: "Champion"
  },
  {
    name: "Nanimon",
    img: `${url}/digimon-png/nanimon.png`,
    level: "Champion"
  },
  {
    name: "Devidramon",
    img: `${url}/digimon-png/devidramon.png`,
    level: "Champion"
  },
  {
    name: "Dokugumon",
    img: `${url}/digimon-png/dokugumon.png`,
    level: "Champion"
  },
  {
    name: "Mammothmon",
    img: `${url}/digimon-png/mammothmon.png`,
    level: "Ultimate"
  },
  {
    name: "Gesomon",
    img: `${url}/digimon-png/gesomon.png`,
    level: "Champion"
  },
  {
    name: "Raremon",
    img: `${url}/digimon-png/raremon.png`,
    level: "Champion"
  },
  {
    name: "SkullMeramon",
    img: `${url}/digimon-png/skullmeramon.png`,
    level: "Ultimate"
  },
  {
    name: "Wizardmon",
    img: `${url}/digimon-png/wizardmon.png`,
    level: "Champion"
  },
  {
    name: "Pumpkinmon",
    img: `${url}/digimon-png/pumpkinmon.png`,
    level: "Ultimate"
  },
  {
    name: "Gotsumon",
    img: `${url}/digimon-png/gotsumon.png`,
    level: "Rookie"
  },
  {
    name: "Lillymon",
    img: `${url}/digimon-png/lillymon.png`,
    level: "Ultimate"
  },
  {
    name: "Phantomon",
    img: `${url}/digimon-png/phantomon.png`,
    level: "Ultimate"
  },
  {
    name: "DarkTyrannomon",
    img: `${url}/digimon-png/darktyrannomon.png`,
    level: "Champion"
  },
  {
    name: "Gizamon",
    img: `${url}/digimon-png/gizamon.png`,
    level: "Rookie"
  },
  {
    name: "Zudomon",
    img: `${url}/digimon-png/zudomon.png`,
    level: "Ultimate"
  },
  {
    name: "MegaSeadramon",
    img: `${url}/digimon-png/megaseadramon.png`,
    level: "Ultimate"
  },
  {
    name: "Angewomon",
    img: `${url}/digimon-png/angewomon.png`,
    level: "Ultimate"
  },
  {
    name: "Tuskmon",
    img: `${url}/digimon-png/tuskmon.png`,
    level: "Champion"
  },
  {
    name: "Snimon",
    img: `${url}/digimon-png/snimon.png`,
    level: "Champion"
  },
  {
    name: "MegaKabuterimon",
    img: `${url}/digimon-png/megakabuterimon.png`,
    level: "Ultimate"
  },
  {
    name: "MagnaAngemon",
    img: `${url}/digimon-png/magnaangemon.png`,
    level: "Ultimate"
  },
  {
    name: "VenomMyotismon",
    img: `${url}/digimon-png/venommyotismon.png`,
    level: "Mega"
  },
  {
    name: "WarGreymon",
    img: `${url}/digimon-png/wargreymon.png`,
    level: "Mega"
  },
  {
    name: "MetalGarurumon",
    img: `${url}/digimon-png/metalgarurumon.png`,
    level: "Mega"
  },
  {
    name: "Nyaromon",
    img: `${url}/digimon-png/nyaromon.png`,
    level: "In Training"
  },
  {
    name: "Salamon",
    img: `${url}/digimon-png/salamon.png`,
    level: "Rookie"
  },
  {
    name: "Parrotmon",
    img: `${url}/digimon-png/parrotmon.png`,
    level: "Ultimate"
  },
  {
    name: "Chuumon",
    img: `${url}/digimon-png/chuumon.png`,
    level: "Rookie"
  },
  {
    name: "MetalSeadramon",
    img: `${url}/digimon-png/metalseadramon.png`,
    level: "Mega"
  },
  {
    name: "Machinedramon",
    img: `${url}/digimon-png/machinedramon.png`,
    level: "Mega"
  },
  {
    name: "Piedmon",
    img: `${url}/digimon-png/piedmon.png`,
    level: "Mega"
  },
  {
    name: "Puppetmon",
    img: `${url}/digimon-png/puppetmon.png`,
    level: "Mega"
  },
  {
    name: "Scorpiomon",
    img: `${url}/digimon-png/scorpiomon.png`,
    level: "Ultimate"
  },
  {
    name: "Divermon",
    img: `${url}/digimon-png/divermon.png`,
    level: "Ultimate"
  },
  {
    name: "Kiwimon",
    img: `${url}/digimon-png/kiwimon.png`,
    level: "Champion"
  },
  {
    name: "Mushroomon",
    img: `${url}/digimon-png/mushroomon.png`,
    level: "Rookie"
  },
  {
    name: "Blossomon",
    img: `${url}/digimon-png/blossomon.png`,
    level: "Ultimate"
  },
  {
    name: "Floramon",
    img: `${url}/digimon-png/floramon.png`,
    level: "Rookie"
  },
  {
    name: "Deramon",
    img: `${url}/digimon-png/deramon.png`,
    level: "Ultimate"
  },
  {
    name: "Cherrymon",
    img: `${url}/digimon-png/cherrymon.png`,
    level: "Ultimate"
  },
  {
    name: "Garbagemon",
    img: `${url}/digimon-png/garbagemon.png`,
    level: "Ultimate"
  },
  {
    name: "MetalEtemon",
    img: `${url}/digimon-png/metaletemon.png`,
    level: "Mega"
  },
  {
    name: "SaberLeomon",
    img: `${url}/digimon-png/saberleomon.png`,
    level: "Mega"
  },
  {
    name: "RedVegiemon",
    img: `${url}/digimon-png/redvegiemon.png`,
    level: "Champion"
  },
  {
    name: "Mekanorimon",
    img: `${url}/digimon-png/mekanorimon.png`,
    level: "Champion"
  },
  {
    name: "Tankmon",
    img: `${url}/digimon-png/tankmon.png`,
    level: "Champion"
  },
  {
    name: "Hagurumon",
    img: `${url}/digimon-png/hagurumon.png`,
    level: "Rookie"
  },
  {
    name: "WaruMonzaemon",
    img: `${url}/digimon-png/warumonzaemon.png`,
    level: "Ultimate"
  },
  {
    name: "LadyDevimon",
    img: `${url}/digimon-png/ladydevimon.png`,
    level: "Ultimate"
  },
  {
    name: "Vilemon",
    img: `${url}/digimon-png/vilemon.png`,
    level: "Champion"
  },
  {
    name: "Apocalymon",
    img: `${url}/digimon-png/apocalymon.png`,
    level: "Mega"
  },
  {
    name: "Kunemon",
    img: `${url}/digimon-png/kunemon.png`,
    level: "Rookie"
  },
  {
    name: "Musyamon",
    img: `${url}/digimon-png/musyamon.png`,
    level: "Champion"
  },
  {
    name: "Starmon",
    img: `${url}/digimon-png/starmon.png`,
    level: "Champion"
  },
  {
    name: "HerculesKabuterimon",
    img: `${url}/digimon-png/herculeskabuterimon.png`,
    level: "Mega"
  },
  {
    name: "Candlemon",
    img: `${url}/digimon-png/candlemon.png`,
    level: "Rookie"
  },
  {
    name: "Hanumon",
    img: `${url}/digimon-png/hanumon.png`,
    level: "Champion"
  },
  {
    name: "Kokuwamon",
    img: `${url}/digimon-png/kokuwamon.png`,
    level: "Rookie"
  },
  {
    name: "Revolvermon",
    img: `${url}/digimon-png/revolvermon.png`,
    level: "Champion"
  },
  {
    name: "Plesiomon",
    img: `${url}/digimon-png/plesiomon.png`,
    level: "Mega"
  },
  {
    name: "Megadramon",
    img: `${url}/digimon-png/megadramon.png`,
    level: "Ultimate"
  },
  {
    name: "BlueMeramon",
    img: `${url}/digimon-png/bluemeramon.png`,
    level: "Champion"
  },
  {
    name: "Magnadramon",
    img: `${url}/digimon-png/magnadramon.png`,
    level: "Mega"
  },
  {
    name: "Gorillamon",
    img: `${url}/digimon-png/gorillamon.png`,
    level: "Champion"
  },
  {
    name: "Syakomon",
    img: `${url}/digimon-png/syakomon.png`,
    level: "Rookie"
  },
  {
    name: "MarineAngemon",
    img: `${url}/digimon-png/marineangemon.png`,
    level: "Mega"
  },
  {
    name: "Boltmon",
    img: `${url}/digimon-png/boltmon.png`,
    level: "Mega"
  },
  {
    name: "Mamemon",
    img: `${url}/digimon-png/mamemon.png`,
    level: "Ultimate"
  },
  {
    name: "ExTyrannomon",
    img: `${url}/digimon-png/extyrannomon.png`,
    level: "Ultimate"
  },
  {
    name: "Veedramon",
    img: `${url}/digimon-png/veedramon.png`,
    level: "Champion"
  },
  {
    name: "AeroVeedramon",
    img: `${url}/digimon-png/aeroveedramon.png`,
    level: "Ultimate"
  },
  {
    name: "Phoenixmon",
    img: `${url}/digimon-png/phoenixmon.png`,
    level: "Mega"
  },
  {
    name: "Betamon",
    img: `${url}/digimon-png/betamon.png`,
    level: "Rookie"
  },
  {
    name: "Guardromon",
    img: `${url}/digimon-png/guardromon.png`,
    level: "Champion"
  },
  {
    name: "Penguinmon",
    img: `${url}/digimon-png/penguinmon.png`,
    level: "Rookie"
  },
  {
    name: "PlatinumSukamon",
    img: `${url}/digimon-png/platinumsukamon.png`,
    level: "Champion"
  },
  {
    name: "Psychemon",
    img: `${url}/digimon-png/psychemon.png`,
    level: "Rookie"
  },
  {
    name: "Tsukaimon",
    img: `${url}/digimon-png/tsukaimon.png`,
    level: "Rookie"
  },
  {
    name: "ModokiBetamon",
    img: `${url}/digimon-png/modokibetamon.png`,
    level: "Champion"
  },
  {
    name: "Saberdramon",
    img: `${url}/digimon-png/saberdramon.png`,
    level: "Champion"
  },
  {
    name: "SnowAgumon",
    img: `${url}/digimon-png/snowagumon.png`,
    level: "Rookie"
  },
  {
    name: "Icemon",
    img: `${url}/digimon-png/icemon.png`,
    level: "Champion"
  },
  {
    name: "Airdramon",
    img: `${url}/digimon-png/airdramon.png`,
    level: "Champion"
  },
  {
    name: "MetalTyrannomon",
    img: `${url}/digimon-png/metaltyrannomon.png`,
    level: "Ultimate"
  },
  {
    name: "Akatorimon",
    img: `${url}/digimon-png/akatorimon.png`,
    level: "Champion"
  },
  {
    name: "Geremon",
    img: `${url}/digimon-png/geremon.png`,
    level: "Champion"
  },
  {
    name: "Vermilimon",
    img: `${url}/digimon-png/vermilimon.png`,
    level: "Ultimate"
  },
  {
    name: "Meteormon",
    img: `${url}/digimon-png/meteormon.png`,
    level: "Ultimate"
  },
  {
    name: "Jijimon",
    img: `${url}/digimon-png/jijimon.png`,
    level: "Mega"
  },
  {
    name: "Babamon",
    img: `${url}/digimon-png/babamon.png`,
    level: "Mega"
  },
  {
    name: "FlareRizamon",
    img: `${url}/digimon-png/flarerizamon.png`,
    level: "Champion"
  },
  {
    name: "Thunderballmon",
    img: `${url}/digimon-png/thunderballmon.png`,
    level: "Champion"
  },
  {
    name: "Muchomon",
    img: `${url}/digimon-png/muchomon.png`,
    level: "Rookie"
  },
  {
    name: "Goldramon",
    img: `${url}/digimon-png/goldramon.png`,
    level: "Mega"
  },
  {
    name: "Soulmon",
    img: `${url}/digimon-png/soulmon.png`,
    level: "Champion"
  },
  {
    name: "Rosemon",
    img: `${url}/digimon-png/rosemon.png`,
    level: "Mega"
  },
  {
    name: "Piddomon",
    img: `${url}/digimon-png/piddomon.png`,
    level: "Champion"
  },
  {
    name: "Gigadramon",
    img: `${url}/digimon-png/gigadramon.png`,
    level: "Ultimate"
  },
  {
    name: "Cyberdramon",
    img: `${url}/digimon-png/cyberdramon.png`,
    level: "Ultimate"
  },
  {
    name: "SkullSatamon",
    img: `${url}/digimon-png/skullsatamon.png`,
    level: "Ultimate"
  },
  {
    name: "Milleniummon",
    img: `${url}/digimon-png/milleniummon.png`,
    level: "Mega"
  },
  {
    name: "Daemon",
    img: `${url}/digimon-png/daemon.png`,
    level: "Mega"
  },
  {
    name: "KingEtemon",
    img: `${url}/digimon-png/kingetemon.png`,
    level: "Mega"
  },
  {
    name: "Chibomon",
    img: `${url}/digimon-png/chibomon.png`,
    level: "Fresh"
  },
  {
    name: "Pururumon",
    img: `${url}/digimon-png/pururumon.png`,
    level: "Fresh"
  },
  {
    name: "Tsubumon",
    img: `${url}/digimon-png/tsubumon.png`,
    level: "Fresh"
  },
  {
    name: "DemiVeemon",
    img: `${url}/digimon-png/demiveemon.png`,
    level: "Training"
  },
  {
    name: "Poromon",
    img: `${url}/digimon-png/poromon.png`,
    level: "Training"
  },
  {
    name: "Upamon",
    img: `${url}/digimon-png/upamon.png`,
    level: "Training"
  },
  {
    name: "Hawkmon",
    img: `${url}/digimon-png/hawkmon.png`,
    level: "Rookie"
  },
  {
    name: "Armadillomon",
    img: `${url}/digimon-png/armadillomon.png`,
    level: "Rookie"
  },
  {
    name: "Wormmon",
    img: `${url}/digimon-png/wormmon.png`,
    level: "Rookie"
  },
  {
    name: "Flamedramon",
    img: `${url}/digimon-png/flamedramon.png`,
    level: "Armor"
  },
  {
    name: "Raidramon",
    img: `${url}/digimon-png/raidramon.png`,
    level: "Armor"
  },
  {
    name: "Magnamon",
    img: `${url}/digimon-png/magnamon.png`,
    level: "Armor"
  },
  {
    name: "Sethmon",
    img: `${url}/digimon-png/sethmon.png`,
    level: "Armor"
  },
  {
    name: "Halsemon",
    img: `${url}/digimon-png/halsemon.png`,
    level: "Armor"
  },
  {
    name: "Shurimon",
    img: `${url}/digimon-png/shurimon.png`,
    level: "Armor"
  },
  {
    name: "Toucanmon",
    img: `${url}/digimon-png/toucanmon.png`,
    level: "Armor"
  },
  {
    name: "Submarimon",
    img: `${url}/digimon-png/submarimon.png`,
    level: "Armor"
  },
  {
    name: "Bucchiemon",
    img: `${url}/digimon-png/bucchiemon.png`,
    level: "Armor"
  },
  {
    name: "Stegomon",
    img: `${url}/digimon-png/stegomon.png`,
    level: "Armor"
  },
  {
    name: "Pegasusmon",
    img: `${url}/digimon-png/pegasusmon.png`,
    level: "Armor"
  },
  {
    name: "Nefertimon",
    img: `${url}/digimon-png/nefertimon.png`,
    level: "Armor"
  },
  {
    name: "ExVeemon",
    img: `${url}/digimon-png/exveemon.png`,
    level: "Champion"
  },
  {
    name: "Stingmon",
    img: `${url}/digimon-png/stingmon.png`,
    level: "Champion"
  },
  {
    name: "Aquillamon",
    img: `${url}/digimon-png/aquillamon.png`,
    level: "Champion"
  },
  {
    name: "Ankylomon",
    img: `${url}/digimon-png/ankylomon.png`,
    level: "Champion"
  },
  {
    name: "Paildramon",
    img: `${url}/digimon-png/paildramon.png`,
    level: "Ultimate"
  },
  {
    name: "Dinobeemon",
    img: `${url}/digimon-png/dinobeemon.png`,
    level: "Ultimate"
  },
  {
    name: "Silphymon",
    img: `${url}/digimon-png/silphymon.png`,
    level: "Ultimate"
  },
  {
    name: "Shakkoumon",
    img: `${url}/digimon-png/shakkoumon.png`,
    level: "Ultimate"
  },
  {
    name: "Imperialdramon",
    img: `${url}/digimon-png/imperialdramon.png`,
    level: "Mega"
  },
  {
    name: "GranKuwagamon",
    img: `${url}/digimon-png/grankuwagamon.png`,
    level: "Mega"
  },
  {
    name: "Valkyrimon",
    img: `${url}/digimon-png/valkyrimon.png`,
    level: "Mega"
  },
  {
    name: "Vikemon",
    img: `${url}/digimon-png/vikemon.png`,
    level: "Mega"
  },
  {
    name: "Seraphimon",
    img: `${url}/digimon-png/seraphimon.png`,
    level: "Mega"
  },
  {
    name: "Zhuqiaomon",
    img: `${url}/digimon-png/zhuqiaomon.png`,
    level: "Mega"
  },
  {
    name: "Azulongmon",
    img: `${url}/digimon-png/azulongmon.png`,
    level: "Mega"
  },
  {
    name: "Baihumon",
    img: `${url}/digimon-png/baihumon.png`,
    level: "Mega"
  },
  {
    name: "Mokumon",
    img: `${url}/digimon-png/mokumon.png`,
    level: "Fresh"
  },
  {
    name: "Omnimon",
    img: `${url}/digimon-png/omnimon.png`,
    level: "Mega"
  }
]

export default digimonList;
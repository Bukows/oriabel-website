// ─────────────────────────────────────────────────────────────────────────────
//  Bijoux Oriabel — Artikel-Daten
//  Diese Datei editieren um Titel, Beschreibung, Material, Verfügbarkeit zu ändern.
//  Neues Stück hinzufügen: Bild in uploads/ hochladen, dann neuen Block
//  vor dem ]; einfügen — gleiche Struktur wie die anderen Einträge.
//
//  Felder:
//    id            eindeutige Kennung (Kleinbuchstaben, keine Leerzeichen)
//    titel         Artikelname
//    kategorie     "kette" | "ohrring" | "armband"
//    beschreibung  Kurztext unter dem Bild
//    bild          Pfad zur Bilddatei  (z.B. "uploads/2019/02/mein-bild.jpg")
//    material      z.B. "Laiton doré, nacre"
//    groesse       z.B. "Longueur 42 cm"
//    jahr          z.B. "2024"
//    verfuegbarkeit  "Sur demande" | "Vendu" | "En vente — 95 €"
// ─────────────────────────────────────────────────────────────────────────────

const SCHMUCK_DATEN = [
  { id:"marguerite-kette",    titel:"Marguerite — Collier",     kategorie:"kette",   beschreibung:"Fine chaîne dorée avec pendentif fleur en nacre blanche. Sobre et élégant.",                                       bild:"uploads/2019/02/P1070661.jpg", material:"Laiton doré, nacre",             groesse:"Longueur 42 cm",    jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"cauri-monstera",      titel:"Cauri & Monstera",         kategorie:"kette",   beschreibung:"Coquillage cauri avec charm feuille de monstera sur chaîne dorée. Tropical, naturel.",                              bild:"uploads/2019/02/P1070691.jpg", material:"Laiton doré, coquillage cauri", groesse:"Longueur 45 cm",    jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"chat-katzchen",       titel:"Chat — Chaton",            kategorie:"kette",   beschreibung:"Collier en perles Miyuki colorées avec charm chaton doré. Fantaisie et unique.",                                    bild:"uploads/2019/02/P1070699.jpg", material:"Perles Miyuki, laiton doré",    groesse:"Longueur 40 cm",    jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"coeur-dore",          titel:"Cœur Doré",                kategorie:"kette",   beschreibung:"Cœur en laiton doré finement travaillé sur chaîne bronze. Romantique et intemporel.",                              bild:"uploads/2019/02/P1070728.jpg", material:"Laiton doré, chaîne bronze",   groesse:"Longueur 50 cm",    jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"cristal-y-kette",     titel:"Cristal — Collier Y",      kategorie:"kette",   beschreibung:"Collier Y avec maillons en cristal de roche et perles. Lumineux, élégant.",                                       bild:"uploads/2019/02/P1070733.jpg", material:"Laiton doré, cristal de roche",groesse:"Longueur 55 cm",    jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"oups-wire-art",       titel:"OUPS — Wire Art",          kategorie:"kette",   beschreibung:"Collier Wire Art avec le mot OUPS en fil doré. Ironique, portable, unique.",                                       bild:"uploads/2019/02/P1070949.jpg", material:"Fil doré, chaîne dorée",       groesse:"Longueur 42 cm",    jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"dalmatien-quaste",    titel:"Dalmatien & Pompon",       kategorie:"kette",   beschreibung:"Longue chaîne bronze avec perles jaspe dalmatien et pompon orange. Style bohème.",                                  bild:"uploads/2019/02/P1070716.jpg", material:"Chaîne bronze, jaspe dalmatien",groesse:"Longueur 80 cm",   jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"marguerite-cascade",  titel:"Marguerite Cascade",       kategorie:"ohrring", beschreibung:"Boucles pendantes avec fleur en nacre et cascades de perles blanches. Festives et légères.",                       bild:"uploads/2019/02/P1070662.jpg", material:"Laiton doré, nacre, perles verre", groesse:"Longueur 5 cm", jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"marguerite-bar",      titel:"Marguerite Bar",           kategorie:"ohrring", beschreibung:"Boucles élégantes: longue barre dorée avec fleur en nacre. Géométrique et féminin.",                               bild:"uploads/2019/02/P1070663.jpg", material:"Laiton doré, nacre",           groesse:"Longueur 6 cm",     jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"pierre-noire",        titel:"Pierre Noire",             kategorie:"ohrring", beschreibung:"Longue chaîne dorée avec grandes perles en pierre noire. Fort et moderne.",                                        bild:"uploads/2019/02/P1070672.jpg", material:"Laiton doré, pierre minérale", groesse:"Longueur 8 cm",     jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"atelier-set",         titel:"Atelier — Trio",           kategorie:"ohrring", beschreibung:"Trois paires de boucles pendantes sur présentoir bois — Art déco, pierre naturelle, cristal.",                     bild:"uploads/2019/02/P1070913.jpg", material:"Laiton doré, pierres naturelles",groesse:"Longueur 5–8 cm", jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"ambre-bernstein",     titel:"Ambre Baltique",           kategorie:"ohrring", beschreibung:"Trois paires de boucles en ambre baltique — du cognac sombre au miel chaud.",                                      bild:"uploads/2019/02/P1070936.jpg", material:"Ambre baltique, laiton doré",  groesse:"Longueur 6–8 cm",   jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"grenat-granat",       titel:"Grenat",                   kategorie:"ohrring", beschreibung:"Boucles pendantes avec perles grenat rouge profond sur fine chaîne dorée. Noble et intemporel.",                   bild:"uploads/2019/02/P1070934.jpg", material:"Grenat, laiton doré",          groesse:"Longueur 7 cm",     jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"creole",              titel:"Créole",                   kategorie:"ohrring", beschreibung:"Grandes créoles avec perles Miyuki. Légères comme l'été.",                                                          bild:"uploads/2019/02/P1080029.jpg", material:"Laiton doré, perles Miyuki",   groesse:"Diamètre 5 cm",     jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"opale-set",           titel:"Opale — Ensemble 4",       kategorie:"armband", beschreibung:"Quatre bracelets délicats avec perles opale bleu clair et fermoir doré. Portables ensemble ou séparément.",        bild:"uploads/2019/02/P1070675.jpg", material:"Perles opale, laiton doré",    groesse:"Longueur 18 cm",    jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"opale-display",       titel:"Opale — Display",          kategorie:"armband", beschreibung:"Bracelets opale présentés sur présentoir sombre — ambiance maritime.",                                             bild:"uploads/2019/02/P1070683.jpg", material:"Perles opale, laiton doré",    groesse:"Longueur 18 cm",    jahr:"2019", verfuegbarkeit:"Sur demande" },
  { id:"terre-cuite",         titel:"Terre Cuite — Ensemble",   kategorie:"armband", beschreibung:"Bracelet et boucles en perles de verre terracotta avec fermoir T-bar doré.",                                       bild:"uploads/2019/02/P1070685.jpg", material:"Perles verre, laiton doré",    groesse:"Bracelet 18 cm",    jahr:"2019", verfuegbarkeit:"Sur demande" },
];

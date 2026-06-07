// ─────────────────────────────────────────────────────────────────────────────
//  Gemälde von Edigne Parisis
//  Diese Datei editieren um Titel, Beschreibung, Format, Jahr usw. zu ändern.
//  Neues Gemälde hinzufügen: Bild in uploads/ hochladen, dann neuen Block
//  unterhalb der letzten Zeile (vor dem ];) nach demselben Muster einfügen.
//
//  Felder:
//    id            eindeutige Kennung (Kleinbuchstaben, keine Leerzeichen)
//    titel         Name des Gemäldes
//    kategorie     "figurativ" | "landschaft" | "abstrakt"
//    beschreibung  Kurztext unter dem Bild
//    bild          Pfad zur Bilddatei  (z.B. "uploads/2019/02/mein-bild.jpg")
//    technik       z.B. "Huile sur toile"
//    format        z.B. "60 × 80 cm"
//    jahr          z.B. "2023"
//    verfuegbarkeit  z.B. "Sur demande" oder "Vendu" oder "À vendre – 1 200 €"
// ─────────────────────────────────────────────────────────────────────────────

const GEMAELDE_DATEN = [
  { id:"tableau-003",   titel:"Tableau 003",               kategorie:"figurativ",  beschreibung:"Huile sur toile. Une composition intense, pleine d'énergie et de profondeur.",          bild:"uploads/2019/02/Tableau-003.jpg",   technik:"Huile sur toile",    format:"60 × 80 cm",  jahr:"2019",       verfuegbarkeit:"Sur demande" },
  { id:"tableau-005",   titel:"Tableau 005",               kategorie:"figurativ",  beschreibung:"Dialogue entre lumière et ombre — format portrait expressif.",                          bild:"uploads/2019/02/Tableau-005.jpg",   technik:"Huile sur toile",    format:"50 × 70 cm",  jahr:"2019",       verfuegbarkeit:"Sur demande" },
  { id:"tableau-007",   titel:"Tableau 007",               kategorie:"figurativ",  beschreibung:"Grand format avec une palette puissante et une touche souveraine.",                     bild:"uploads/2019/02/Tableau-007.jpg",   technik:"Huile sur toile",    format:"80 × 100 cm", jahr:"2019",       verfuegbarkeit:"Sur demande" },
  { id:"11-novembre",   titel:"11 Novembre – Ville Donner",kategorie:"landschaft", beschreibung:"Style naïf, scène populaire finement travaillée. 11 novembre – une fête du souvenir.", bild:"uploads/2019/02/DSC02328.jpg",      technik:"Huile sur toile",    format:"70 × 90 cm",  jahr:"2018",       verfuegbarkeit:"Sur demande" },
  { id:"rue-de-ville",  titel:"Rue de Ville",              kategorie:"landschaft", beschreibung:"Scène urbaine impressionniste avec clocher, signée E. Parisis.",                       bild:"uploads/2019/02/IMG_7011.jpg",      technik:"Huile sur toile",    format:"60 × 80 cm",  jahr:"vers 1950",  verfuegbarkeit:"Sur demande" },
  { id:"plage-de-nice", titel:"Plage de Nice",             kategorie:"landschaft", beschreibung:"La Baie des Anges sous la lumière de midi. Format panoramique, atmosphère méditerranéenne.", bild:"uploads/2019/02/plage-de-Nice.jpg", technik:"Huile sur toile", format:"90 × 70 cm",  jahr:"2017",       verfuegbarkeit:"Sur demande" },
  { id:"tableau-021",   titel:"Tableau 021",               kategorie:"abstrakt",   beschreibung:"Composition libre — la touche comme expression du mouvement et de la dynamique.",      bild:"uploads/2019/02/Tableau-021.jpg",   technik:"Huile sur toile",    format:"70 × 100 cm", jahr:"2018",       verfuegbarkeit:"Sur demande" },
  { id:"tableau-022",   titel:"Tableau 022",               kategorie:"abstrakt",   beschreibung:"Haute atmosphère avec une palette expressive.",                                         bild:"uploads/2019/02/Tableau-022.jpg",   technik:"Technique mixte",    format:"50 × 80 cm",  jahr:"2018",       verfuegbarkeit:"Sur demande" },
  { id:"tableau-025",   titel:"Tableau 025",               kategorie:"abstrakt",   beschreibung:"Composition puissante — la lumière comme thème pictural central.",                     bild:"uploads/2019/02/Tableau-025.jpg",   technik:"Huile sur bois",     format:"40 × 60 cm",  jahr:"2018",       verfuegbarkeit:"Sur demande" },
  { id:"tableau-026",   titel:"Tableau 026",               kategorie:"abstrakt",   beschreibung:"Transitions fluides entre couleur et forme — acrylique sur toile.",                    bild:"uploads/2019/02/Tableau-026.jpg",   technik:"Acrylique sur toile",format:"80 × 80 cm",  jahr:"2018",       verfuegbarkeit:"Sur demande" },
];

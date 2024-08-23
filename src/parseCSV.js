const rowCSV = `
  Taux,Catégorie,Thème,Question,Description
  1,Histoire et Culture,Oeuvre marquante,Quelle œuvre de fiction vous a-t-elle le plus marqué ?,
  2,Histoire et Culture,Intéret historique,Quelle période / région de l’histoire suscite votre intérêt le plus ?,
  3,Économie et Politique,Revenu universel,Que penser du revenu universel comme remplacement de toutes les aides sociales actuelles ?,
  4,Économie et Politique,Audiovisuel public,Doit-on privatiser l’audiovisuel public ?,
  5,,Exploration spatiale,Doit-on rediriger le budget dédié à l’exploration spatiale vers l’aide aux pays en développement ?,Admirez vous les accomplissements opérés dans ce domaine ?
  6,Justice et Loi,Pitbull,Doit-on interdire la possession de pitbull ?,
  7,,Type d’éducation,Quel est le plus prejudiciable à l’enfant entre une éducation stricte ou bien des parents surprotecteurs ?,
  8,,Déclin du mariage,Pensez vous qu’une société puisse prospérer malgré la déterioration de l’institution du mariage et de la famille nucléaire ?,Comment réduire le taux de divorce (50 % environ) ? Penser vous que le mariage soit trop désavantageux pour les hommes pour valoir le coup ?
  9,,Antinatalisme,Quel regard portez vous sur les politiques antinatalistes orchestrées par la Chine et l’Inde ?,
  10,,Tétrade sombre,Comment doit-on gérer les personnes marqués par les pathologies mentales de la tétrade sombre ?,
  11,,Covid 19,Auriez vous confiné le pays pendant le Covid ?,
  12,,Voix masculine,Les hommes doivent-ils poursuivre la voix « darwienne » ou bien la voix « chrétienne » ?,"""darwinienne"" = (Goggins / Andrew Tate / Cid Kagenou / Alexandre le Grand / Monkey D. Luffy), ""chrétienne"" = (Peterson / Kamado Tanjiro / Saber / Marc Aurèle, Thorfinn, Emiya)"
  13,,Jeux-vidéo,Jouer aux jeux vidéos est-il acceptable ?,
  14,,Hédonisme,"Le concept même de retraite n'est il pas infondé, le travail étant essentiel au bonheur ? L’hédosmie est-il viable ?",
  15,Écologie et Animaux,Misère et climat,Refuseriez vous un prêt à un pays du tier monde découvrant une super réserve de pétrole afin qu'il puisse l'exploiter ?,
  16,,Hérétique vs athée,Respectez vous les croyants d'autre religion plus que les athées ?,La religion est-elle essentielle au bonheur ? Les athées deviennent-ils naturellement croyant quand ils sont confronté à des atrocités ? Pourquoi ?
  17,Histoire et Culture,Culture,Que pensez-vous de la société japonaise ? Chinoise ? États-unienne ?,
  18,Économie et Politique,Bureaucratie,La bureaucratie grandissante n’est-elle pas un fléau bien plus préocupant que le changement climatique ?,Quel doit être le poids de l'état dans l'économie en pourcentage ? (0% - 100%)
  19,,Prière vs médiation,N’est-il pas ridicule de méditer plutôt que de prier pour les occidentaux d’héritage chrétien ?,
  20,,Alternative à la démocratie,Doit-on couronner un nouveau roi et devenir une monarchie constitutionnelle ?,Que penser du suffrage censitaire ?  Le vote féminin n'est-il pas optionnel ?
  21,Économie et Politique,Déficit étatique,Comment l'état doit-il gérer ses déficits ?,La dette étatique est elle acceptable ?
  22,Économie et Politique,IA et emploi,Le gouvernement doit-il intervenir pour protéger les emplois contre l'avènement l'intelligence artificielle ?,
  23,Économie et Politique,Protectionisme,Le gouvernement doit-il combattre les délocalisations ?,
  24,,Accélérationnisme,"Doit-on devenir accélérationniste, et s’abstenir voir voter opposément à ses idées en politique ?",
  25,,Expatriation,L'expatriation est-elle une forme d'abandon de son pays d'origine ?,
  26,,eSport,L'eSport doit-il être respecté à même hauteur que la compétition musicale ou sportive ?,"Il y a t-il une hiérarchie des valeur entre la réussite d'un Dark Souls, et apprendre avec succès un morceau de musique complexe ? Qu'en est-il de la pratique des échecs ?"
  27,Histoire et Culture,Histoire vs SF,Préférez vous la science fiction ou l'histoire ?,
  28,,Union européenne,Devrions nous sortir de l'union européenne ?,
  29,Écologie et Animaux,Chasse,Considérez-vous que la chasse est une noble pratique ?,
  30,Écologie et Animaux,Droit des animaux,Que pensez vous des zoos ? Et de l’élevage intensif ?,
  31,,Milliardaire,Quel regard portez vous sur les milliardaires ?,
  32,,Salaire et mérite,Doit-on interdire les jets privés ? Que penser vous du salaire des footballers ? Ou bien du métier de trader ?,
  33,Économie et Politique,Code du travail,Le code du travail doit-il faire 3 pages et non pas 3500 ?,Est-ce le rôle de l'Etat de réguler le nombre d'heures de travail par semaine ? Les licenciements doivent ils être interdits sauf dans des cas justifiés ? Le temps de travail doit-il être régulé par l'état ?
  34,Homme / Femme,Polygamie,Que pensez vous de la polygamie ?,Pourquoi les sociétés polygames sont elles plus violentes ?
  35,,Pauvreté et crime,La pauvreté est-elle la cause de la criminalité ?,Ou bien est-ce la pauvreté relative ?
  36,Économie et Politique,Transports et Énergie,Les transports et l'énergie doivent ils être publiques ?,
  37,,Bonheur dans l’histoire,Étions nous plus heureux au moyen-âge ?,
  38,,Démocratie,La démocratie est elle condamnée à s'effondrer ?,
  39,Économie et Politique,Charité,La charité doit-elle être préférée aux prestations sociales ?,
  40,,Discrimination positive,Les quotas et la discrimination positive sont ils des moyens valables de luter contre les inégalités ?,
  41,,Enfant homosexuel,Que feriez vous si vous appreniez l'homosexualité de votre fils ? Et si c’est une fille ? Et s’il veut changer de sexe ?,
  42,,Service militaire,Faut-il réinstaurer le service militaire ?,Pour quelle durée et à quel âge ?
  43,Homme / Femme,Homme et émotion,Quand les hommes doivent-ils se montrer ouvert émotionnellement ?,Quelles sont les occasions pour lesquelles l’homme est autorisé à pleurer ?
  44,,Bonheur,Le bonheur est-il l'objectif à fixer au dessus de tout autre ?,Envisariez vous que la voix que Dieu a tracé pour vous soit dénuée de bonheur ? Le divorce est-il acceptable s’il l’on tombe amoureux d’une autre personne ?
  45,,Histoire et morale,Vous pensez vous moralement supérieur à nos prédécesseurs dans l'histoire ?,
  46,,Mal inné ou acquis,Une personne peut-elle naitre prédisposée à la criminalité par sa nature ?,Pensez-vous que l'homme nait fondamentalement mauvais ou fondamentalement bon ?
  47,Justice et Loi,Peine capitale,Doit-on rétablir la peine de mort ?,
  48,Homme / Femme,Hystérie,Comment doit-on gérer une situation ou une femme se montre impertinente envers un homme qui n'a pas le droit d'utiliser la force physique en retour ?,Existe il des situations ou l'homme est permis de lever la main sur une femme ?
  49,,Motivation,"Si vous vous retrouviez dans un tranchée de la Grande guerre aujourd'hui, qu'est ce qui vous pousserait à survivre et combattre ?",
  50,Justice et Loi,Prostitution,La prostitution doit-elle être légale ?,
  51,,Déclin démographique,"Comment palier à l'immense déclin démographique à venir, notamment en Asie ?",Quelles en sont les causes ?
  52,,Mariage et choix,Voyez vous le fait d'avoir des enfant et de se marier comme un choix ou bien un devoir ?,
  53,Économie et Politique,Blocage des prix,"L’État doit-il bloquer les prix des denrées de première nécessité, de l’essence et de l’énergie ?",
  54,Économie et Politique,Héritage,Doit-on taxer l'héritage ?,"Si oui, à quel taux ?"
  55,Justice et Loi,Prison,Doit-on s'inspirer du système carcéral singapourien ?,Doit-on rétablir les bagnes de Guyane ?
  56,Économie et Politique,Retraite,Doit-on privatiser les retraites ?,
  57,Homme / Femme,Femme pilote,Seriez vous comfortable si une femme pilotait votre avion ? Ou bien une femme présidente ?,
  58,Justice et Loi,Arme à feu,Le second amendement doit-il être instauré en France ?,Et pourquoi pas le port d'arme citoyen dissimulé ?
  59,,Homme et égalité,Pensez vous que l’homme soit fait pour vivre dans une société égalitaire ?,Ou bien la pensée socialiste n’est elle pas une absurdité même au stade théorique comme immaginait Dostoïevski ? L'inégalité n'est elle pas essentielle et souhaitable ? La compétition n’est elle pas essentielle à notre développement ?
  60,Histoire et Culture,Rap,Est-ce qu’écouter du rap ou du métal vous tire vers la médiocrité ?,
  61,,Défendre son pays,Vous bâteriez vous pour votre pays dans le cadre d'une guerre défensive ?,
  62,,Croissance économique,Pensez vous que le niveau de vie en occident à réellement augmenter ces 50 dernières années ?,A-t-on su palier à la raréfaction des hydrocarbures ?
  63,Justice et Loi,Prohibition,Doit-on interdire la consommation de drogue ? De cigarette ? D’alcool ?,"Lesquelles ? Si oui, comment doit-on lutter contre leur consommation ?"
  64,Écologie et Animaux,Climat,"Doit-on lutter contre le changement climatique ? Si oui, comment ?",Que penser des énergies renouvelables ? La réduction des déchets doit-elle se faire par une réduction de la production ? Avez-vous des solutions quant à l’utilisation non électrique du pétrole ?
  65,Économie et Politique,Inflation,Que cause l'inflation et comment y pallier ?,
  66,Économie et Politique,Éducation publique,L'éducation doit-elle rester publique ?,
  67,,Valeur de la beauté,Sauveriez vous une vie ou bien une cathédrale ?,"Si vous avez choisi la vie, doit-on réorienter tout budget lié à préservation du patrimoine vers la recherche médicale ?"
  68,Écologie et Animaux,Femme et climat,"Les femmes ne sont elles pas les plus grand ennemis de la planète, sélectionnant les hommes les plus polluants ?",L'attrait d'un homme n'est-il pas littéralement proportionnel à sa capacité à transformer son environnement ?
  69,Homme / Femme,Sélection féminine,Les femmes sont-elles des michetonneuses ?,Avez-vous des problèmes à respecter les femmes à cause de leur nature consensuel ? Une femme n’est est vraiment respectable que quand elle devient mère ?
  70,Justice et Loi,Refus d’obtempérer,Comment la police doit-elle gérer le refus d’obtempérer d’un conducteur ?,Doit elle faire usage de son arme pour éviter de mettre en danger les habitants dans le cadre d’une course poursuite ?
  71,Économie et Politique,SMIC,Faut-il changer le montant du SMIC ou l'abolir ?,
  72,,Terrorisme,Quelles solutions suggérez vous pour lutter contre les incels school shooter ?,Et quand aux actes de terrorisme ? Que pensez des Ouïghours ?
  73,Économie et Politique,Santé publique,La santé doit-elle rester publique ?,
  74,,Pornographie,La consommation de pornographie est-elle acceptable ?,Doit-elle est légale ? Doit-on en protéger les mineurs par une identification obligatoire ? Est-ce que l’ia pornographique va détruire notre civilisation ?
  75,,Procréatione et mariage,La procréation en dehors du mariage est-elle immorale ?,
  76,,Assurances et génétique,Etes vous en accord avec l’analyse génétique dans le domaine des assurances ?,
  77,,Tentative de suicide,Avez vous de la compassion / respect pour les individus réalisant des tentatives de suicide ?,
  78,,Escalave et réparation,Doit-on payer des compensations aux descendants d'esclaves à pour réparer les dégâts causés par ses ancêtres ?,
  79,,N-word,Trouvez vous ridicule le tabou sur le n-word aux Etats-Unis ?,
  80,Histoire et Culture,Occident et domination,Pourquoi l'occident à t-il historiquement dominé le monde ?,
  81,,Inégalité de revenu,L'inégalité de revenu homme/femme est elle une réalité ?,"Les choix de carrière différents entre homme et femme sont-ils contraints par le ""Patriarcat"" ou bien déterminés par la biologie ?"
  82,,Contraception,Que pensez vous de la contraception ? L'invention de la pilule contraceptive a-t-elle été bénéfique à la société ?,L'abstinence doit elle être préférée à la contraception ?
  83,,Islam,La religion musulmane mène-t-elle à la violence ?,"Pourquoi l’islam s’est il historiquement propagé par la conquête, contrairement au christianisme ?"
  84,,Discrimination,"La discrimination doit-elle être autorisée, notamment à l'embauche ?",
  85,,Immigration et économie,"L'immigration est-elle bénéfique à l'économie à court, moyen et long terme ?","Si oui, la préservation de la culture nationale doit-elle prévaloir devant l'économie ? Si non, doit-elle être autorisée malgré tout ?"
  86,,Immigration et culture,Le multiculturalisme est-il viable dans nos vieilles nations européennes ?,Ou bien nous mène t-il inévitablement vers la guerre civile ? L’homogénéité éthnique est elle impérative pour conserver le respect du prochain dans une société ?
  87,Homme / Femme,Femme et nobel,Pourquoi n’y a-t-il presque aucune femme prix nobel ?,La place de la femme est-elle à la cuisine ?
  88,,Israël et Palestine,Quelle opinion portez vous sur le conflit israélo-palestinien ?,
  89,,Livres interdits,Doit-on autoriser la vente du livre du H ou bien de bénito ?,L’appel à la haine doit-il demeurer un délit ?
  90,,Antidépresseurs,"La prise d'antidépresseurs est elle une forme de négation de vie à vos yeux ? Si vous en etiez proscrit, allez vous les consommer ?",Est-il bien bénéfique de consulter un psychologue en cas de coup dur ?
  91,,83 de QI,Comment la société doit-elle gérer les 10 % d’individus à moins de 83 de QI dont l’armée de veux même pas en tant que chaire à cannon ?,
  92,Maternité,GPA,Quel est votre ressenti sur la GPA ?,
  93,,Homosexualité,Les homosexuels doivent ils être traité à égalité avec les hétérosexuels en ce qui concerne le mariage ou l'adoption ?,L'homosexualité est elle un péché ?
  94,Maternité,PMA,La Procréation médicalement assistée doit-elle être autorisée aux personnes non hétérosexuelles ?,
  95,,Euthanasie,L'euthanasie doit-elle être légale ?,
  96,,Pédophilie,Les arguements justifiant l’homosexualité justifient-ils la pédophilie ?,
  97,,Afrique et pauvreté,Pourquoi l'Afrique est elle moins bien développée que le reste du monde ?,Est-ce du à la colonisation ou bien l'esclavage ? Que penser de l'hypothèse du QI ?
  98,,Noirs américains,Pourquoi les noirs américains ne réussissent ils pas aussi bien que les autres ethnies ?,Les différences sociales entre groupes ethniques s'expliquent elles par la biologie ?
  99,Maternité,Avortement,"L'avortement doit-il être autorisé, et ce dans quelles circonstances ?",
  100,Histoire et Culture,Animé japonais,Quel est votre animé japonais favoris ?,Quel est votre Shōnen favoris ? Quel animé vous a le plus fait rire ? Quel est votre opening préféré ?
`;

const rowSubjectList = rowCSV.split('\n');
rowSubjectList.shift();
rowSubjectList.shift();
rowSubjectList.pop();
export let subjectList = new Array;

for (let i = 0; i < rowSubjectList.length; i++) {
  let subject = rowSubjectList[i].split(',');
  subjectList[i] = subject;
}

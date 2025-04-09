const birdsSeen = {
    "Cappa": [
        /* ... Cappa's bird names ... */
        "Colinus virginianus",
        "Columbina inca",
        "Columbina passerina",
        "Ammospiza caudacuta",
        "Dendrocygna autumnalis",
        "Dendrocygna bicolor",
        "Anser caerulescens",
        "Anser rossii",
        "Anser anser",
        "Rallus limicola",
        "Anser albifrons",
        "Anser brachyrhynchus",
        "Branta bernicla",
        "Porphyrio martinica",
        "Branta leucopsis",
        "Branta canadensis",
        "Cygnus olor",
        "Cygnus buccinator",
        "Alopochen aegyptiaca",
        "Aix sponsa",
        "Spatula discors",
        "Spatula clypeata",
        "Mareca strepera",
        "Mareca penelope",
        "Mareca americana",
        "Anas platyrhynchos",
        "Anas rubripes",
        "Anas fulvigula",
        "Anas acuta",
        "Anas crecca",
        "Aythya valisineria",
        "Aythya americana",
        "Aythya ferina",
        "Aythya collaris",
        "Aythya fuligula",
        "Aythya marila",
        "Aythya affinis",
        "Somateria mollissima",
        "Histrionicus histrionicus",
        "Melanitta perspicillata",
        "Melanitta deglandi",
        "Melanitta americana",
        "Clangula hyemalis",
        "Bucephala albeola",
        "Bucephala clangula",
        "Bucephala islandica",
        "Lophodytes cucullatus",
        "Mergus merganser",
        "Mergus serrator",
        "Oxyura jamaicensis",
        "Meleagris gallopavo",
        "Podilymbus podiceps",
        "Podiceps auritus",
        "Columba livia",
        "Streptopelia decaocto",
        "Zenaida asiatica",
        "Zenaida macroura",
        "Coccyzus americanus",
        "Coccyzus erythropthalmus",
        "Chordeiles minor",
        "Chaetura pelagica",
        "Archilochus colubris",
        "Rallus crepitans",
        "Porzana carolina",
        "Gallinula galeata",
        "Fulica atra",
        "Fulica americana",
        "Porphyrio martinicus",
        "Aramus guarauna",
        "Antigone canadensis",
        "Callipepla californica",
        "Himantopus mexicanus",
        "Recurvirostra americana",
        "Haematopus palliatus",
        "Vanellus vanellus",
        "Pluvialis squatarola",
        "Pluvialis dominica",
        "Charadrius vociferus",
        "Charadrius semipalmatus",
        "Charadrius melodus",
        "Charadrius montanus",
        "Numenius phaeopus",
        "Arenaria interpres",
        "Calidris himantopus",
        "Calidris alba",
        "Calidris alpina",
        "Calidris maritima",
        "Calidris minutilla",
        "Calidris fuscicollis",
        "Calidris subruficollis",
        "Calidris melanotos",
        "Calidris pusilla",
        "Limnodromus griseus",
        "Limnodromus scolopaceus",
        "Scolopax minor",
        "Gallinago delicata",
        "Actitis macularius",
        "Tringa solitaria",
        "Tringa flavipes",
        "Tringa semipalmata",
        "Tringa melanoleuca",
        "Phalaropus lobatus",
        "Uria aalge",
        "Alca torda",
        "Cepphus grylle",
        "Fratercula arctica",
        "Chroicocephalus philadelphia",
        "Leucophaeus atricilla",
        "Larus delawarensis",
        "Larus argentatus",
        "Larus glaucoides",
        "Larus marinus",
        "Sternula antillarum",
        "Hydroprogne caspia",
        "Chlidonias niger",
        "Sterna dougallii",
        "Sterna hirundo",
        "Sterna paradisaea",
        "Vireo bellii",
        "Sterna forsteri",
        "Thalasseus maximus",
        "Thalasseus sandvicensis",
        "Rynchops niger",
        "Gavia stellata",
        "Gavia immer",
        "Oceanites oceanicus",
        "Fulmarus glacialis",
        "Mycteria americana",
        "Fregata magnificens",
        "Morus bassanus",
        "Anhinga anhinga",
        "Phalacrocorax carbo",
        "Nannopterum auritum",
        "Pelecanus erythrorhynchos",
        "Pelecanus occidentalis",
        "Botaurus lentiginosus",
        "Ardea herodias",
        "Ardea cinerea",
        "Ardea alba",
        "Egretta thula",
        "Egretta caerulea",
        "Egretta tricolor",
        "Egretta rufescens",
        "Bubulcus ibis",
        "Butorides virescens",
        "Nycticorax nycticorax",
        "Nyctanassa violacea",
        "Eudocimus albus",
        "Plegadis falcinellus",
        "Platalea ajaja",
        "Coragyps atratus",
        "Cathartes aura",
        "Pandion haliaetus",
        "Circus hudsonius",
        "Accipiter striatus",
        "Accipiter cooperii",
        "Haliaeetus leucocephalus",
        "Haliaeetus pelagicus",
        "Buteo lineatus",
        "Buteo platypterus",
        "Buteo jamaicensis",
        "Buteo lagopus",
        "Megascops asio",
        "Bubo virginianus",
        "Bubo scandiacus",
        "Strix varia",
        "Asio otus",
        "Megaceryle alcyon",
        "Melanerpes erythrocephalus",
        "Melanerpes carolinus",
        "Sphyrapicus varius",
        "Dryobates pubescens",
        "Dryobates villosus",
        "Colaptes auratus",
        "Dryocopus pileatus",
        "Falco sparverius",
        "Falco columbarius",
        "Falco peregrinus",
        "Myiopsitta monachus",
        "Myiarchus crinitus",
        "Tyrannus verticalis",
        "Tyrannus tyrannus",
        "Contopus virens",
        "Empidonax virescens",
        "Empidonax traillii",
        "Sayornis phoebe",
        "Vireo griseus",
        "Vireo flavifrons",
        "Vireo solitarius",
        "Vireo gilvus",
        "Vireo olivaceus",
        "Lanius ludovicianus",
        "Cyanocitta cristata",
        "Aphelocoma coerulescens",
        "Corvus brachyrhynchos",
        "Corvus ossifragus",
        "Corvus corax",
        "Poecile atricapillus",
        "Baeolophus bicolor",
        "Eremophila alpestris",
        "Riparia riparia",
        "Tachycineta bicolor",
        "Progne subis",
        "Hirundo rustica",
        "Corthylio calendula",
        "Regulus satrapa",
        "Bombycilla garrulus",
        "Bombycilla cedrorum",
        "Sitta canadensis",
        "Sitta carolinensis",
        "Sitta pusilla",
        "Certhia americana",
        "Polioptila caerulea",
        "Troglodytes aedon",
        "Cistothorus palustris",
        "Thryothorus ludovicianus",
        "Dumetella carolinensis",
        "Toxostoma rufum",
        "Oreoscoptes montanus",
        "Mimus gundlachii",
        "Mimus polyglottos",
        "Sturnus vulgaris",
        "Sialia sialis",
        "Myadestes townsendi",
        "Catharus fuscescens",
        "Catharus minimus",
        "Limosa fedoa",
        "Catharus ustulatus",
        "Tyrannus dominicensis",
        "Catharus guttatus",
        "Hylocichla mustelina",
        "Turdus migratorius",
        "Passer domesticus",
        "Coccothraustes vespertinus",
        "Haemorhous mexicanus",
        "Haemorhous purpureus",
        "Loxia curvirostra",
        "Spinus tristis",
        "Plectrophenax nivalis",
        "Spizella passerina",
        "Spizella pusilla",
        "Passerella iliaca",
        "Spizelloides arborea",
        "Junco hyemalis",
        "Zonotrichia leucophrys",
        "Zonotrichia albicollis",
        "Passerculus sandwichensis",
        "Melospiza melodia",
        "Melospiza lincolnii",
        "Melospiza georgiana",
        "Pipilo chlorurus",
        "Pipilo erythrophthalmus",
        "Xanthocephalus xanthocephalus",
        "Dolichonyx oryzivorus",
        "Sturnella magna",
        "Icterus spurius",
        "Icterus galbula",
        "Agelaius phoeniceus",
        "Molothrus ater",
        "Euphagus carolinus",
        "Quiscalus quiscula",
        "Quiscalus major",
        "Seiurus aurocapilla",
        "Helmitheros vermivorum",
        "Parkesia noveboracensis",
        "Vermivora cyanoptera",
        "Mniotilta varia",
        "Protonotaria citrea",
        "Limnothlypis swainsonii",
        "Leiothlypis peregrina",
        "Leiothlypis celata",
        "Leiothlypis ruficapilla",
        "Geothlypis tolmiei",
        "Geothlypis formosa",
        "Geothlypis trichas",
        "Setophaga citrina",
        "Setophaga ruticilla",
        "Setophaga tigrina",
        "Setophaga cerulea",
        "Setophaga americana",
        "Setophaga magnolia",
        "Setophaga castanea",
        "Setophaga fusca",
        "Setophaga petechia",
        "Setophaga pensylvanica",
        "Setophaga striata",
        "Setophaga caerulescens",
        "Setophaga palmarum",
        "Setophaga pinus",
        "Setophaga coronata",
        "Setophaga dominica",
        "Setophaga discolor",
        "Setophaga virens",
        "Cardellina canadensis",
        "Cardellina pusilla",
        "Piranga rubra",
        "Piranga olivacea",
        "Piranga ludoviciana",
        "Cardinalis cardinalis",
        "Pheucticus ludovicianus",
        "Passerina caerulea",
        "Passerina cyanea",
        "Passerina ciris",
        "Spiza americana",
        "Astur cooperii",
        "Larus smithsonianus",
        "Podiceps grisegena",
        "Plegadis chihi",
        "Poecile carolinensis",
        "Ardea ibis",
        "Petrochelidon pyrrhonota",
        "Tyto furcata",
        "Elanoides forficatus",
        "Calidris canutus"
    ]
};

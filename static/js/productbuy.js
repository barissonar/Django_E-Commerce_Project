$(document).ready(function() {
   var countyChoices = {
    'adana': [
        ['aladag', 'Aladağ'],
        ['ceyhan', 'Ceyhan'],
        ['cukurova', 'Çukurova'],
        ['feke', 'Feke'],
        ['imamoglu', 'İmamoğlu'],
        ['karaisali', 'Karaisalı'],
        ['karatas', 'Karataş'],
        ['kozan', 'Kozan'],
        ['pozanti', 'Pozantı'],
        ['saimbeyli', 'Saimbeyli'],
        ['saricam', 'Sarıçam'],
        ['seyhan', 'Seyhan'],
        ['tufanbeyli', 'Tufanbeyli'],
        ['yumurtalik', 'Yumurtalık'],
        ['yuregir', 'Yüreğir']
    ],
    'adiyaman': [
        ['besni', 'Besni'],
        ['celikhan', 'Çelikhan'],
        ['gerger', 'Gerger'],
        ['golbasi', 'Gölbaşı'],
        ['kahta', 'Kahta'],
        ['merkez', 'Merkez'],
        ['samsat', 'Samsat'],
        ['sincik', 'Sincik'],
        ['tut', 'Tut']
    ],
    'afyonkarahisar': [
        ['baglar', 'Bağlar'],
        ['bayat', 'Bayat'],
        ['bolvadin', 'Bolvadin'],
        ['cay', 'Çay'],
        ['cobanlar', 'Çobanlar'],
        ['dazkiri', 'Dazkırı'],
        ['dinar', 'Dinar'],
        ['emirdag', 'Emirdağ'],
        ['evciler', 'Evciler'],
        ['hocalar', 'Hocalar'],
        ['ihsaniye', 'İhsaniye'],
        ['iscehisar', 'İscehisar'],
        ['kiziloren', 'Kızılören'],
        ['merkez', 'Merkez'],
        ['sandikli', 'Sandıklı'],
        ['sinanpasa', 'Sinanpaşa'],
        ['sultandagi', 'Sultandağı'],
        ['suhut', 'Şuhut']
    ],
    'agri': [
        ['diyadin', 'Diyadin'],
        ['dogubayazit', 'Doğubayazıt'],
        ['eleskirt', 'Eleşkirt'],
        ['hamur', 'Hamur'],
        ['merkez', 'Merkez'],
        ['patnos', 'Patnos'],
        ['taslicay', 'Taşlıçay'],
        ['tutak', 'Tutak']
    ],
    'aksaray': [
        ['agacoren', 'Ağaçören'],
        ['eskil', 'Eskil'],
        ['guzelyurt', 'Güzelyurt'],
        ['merkez', 'Merkez'],
        ['ortakoy', 'Ortaköy'],
        ['sariyahsi', 'Sarıyahşi'],
        ['sultanhanı', 'Sultanhanı']
    ],
    'amasya': [
        ['gumushacikoy', 'Gümüşhacıköy'],
        ['hamamozu', 'Hamamözü'],
        ['merkez', 'Merkez'],
        ['merzifon', 'Merzifon'],
        ['suluova', 'Suluova'],
        ['tasova', 'Taşova']
    ],
    'ankara': [
        ['akyurt', 'Akyurt'],
        ['altindag', 'Altındağ'],
        ['ayas', 'Ayaş'],
        ['bala', 'Balâ'],
        ['beypazari', 'Beypazarı'],
        ['camlidere', 'Çamlıdere'],
        ['cankaya', 'Çankaya'],
        ['cubuk', 'Çubuk'],
        ['elmadag', 'Elmadağ'],
        ['etimesgut', 'Etimesgut'],
        ['evren', 'Evren'],
        ['golbasi', 'Gölbaşı'],
        ['gudul', 'Güdül'],
        ['haymana', 'Haymana'],
        ['kahramankazan', 'Kahramankazan'],
        ['kalecik', 'Kalecik'],
        ['kecioren', 'Keçiören'],
        ['kizilcahamam', 'Kızılcahamam'],
        ['mamak', 'Mamak'],
        ['nallihan', 'Nallıhan'],
        ['polatli', 'Polatlı'],
        ['pursaklar', 'Pursaklar'],
        ['sincan', 'Sincan'],
        ['sereflikochisar', 'Şereflikoçhisar'],
        ['yenimahalle', 'Yenimahalle']
    ],
    'antalya': [
        ['akseki', 'Akseki'],
        ['aksu', 'Aksu'],
        ['alanya', 'Alanya'],
        ['demre', 'Demre'],
        ['dosemealti', 'Döşemealtı'],
        ['elmalı', 'Elmalı'],
        ['finike', 'Finike'],
        ['gazipasa', 'Gazipaşa'],
        ['gundogmus', 'Gündoğmuş'],
        ['ibradi', 'İbradı'],
        ['kas', 'Kaş'],
        ['kemer', 'Kemer'],
        ['kepez', 'Kepez'],
        ['konyaalti', 'Konyaaltı'],
        ['korkuteli', 'Korkuteli'],
        ['kumluca', 'Kumluca'],
        ['manavgat', 'Manavgat'],
        ['muratpasa', 'Muratpaşa'],
        ['serik', 'Serik']
    ],
    'ardahan': [
        ['cildir', 'Çıldır'],
        ['damal', 'Damal'],
        ['gole', 'Göle'],
        ['hanak', 'Hanak'],
        ['merkez', 'Merkez'],
        ['posof', 'Posof']
    ],
    'artvin': [
        ['ardanuc', 'Ardanuç'],
        ['arhavi', 'Arhavi'],
        ['borcka', 'Borçka'],
        ['hopa', 'Hopa'],
        ['kemalpasa', 'Kemalpaşa'],
        ['murgul', 'Murgul'],
    ['merkez', 'Merkez'],
    ['savsat', 'Şavşat'],
    ['yusufeli', 'Yusufeli']
],
'aydin': [
    ['bozdogan', 'Bozdoğan'],
    ['buharkent', 'Buharkent'],
    ['cine', 'Çine'],
    ['didim', 'Didim'],
    ['efeler', 'Efeler'],
    ['germencik', 'Germencik'],
    ['incirliova', 'İncirliova'],
    ['karacasu', 'Karacasu'],
    ['karpuzlu', 'Karpuzlu'],
    ['koçarlı', 'Koçarlı'],
    ['köşk', 'Köşk'],
    ['kuşadası', 'Kuşadası'],
    ['kuyucak', 'Kuyucak'],
    ['merkez', 'Merkez'],
    ['nazilli', 'Nazilli'],
    ['soke', 'Söke'],
    ['sultanhisar', 'Sultanhisar'],
    ['yenipazar', 'Yenipazar']
],
'balikesir': [
    ['altieylül', 'Altıeylül'],
    ['ayvalık', 'Ayvalık'],
    ['balya', 'Balya'],
    ['bandırma', 'Bandırma'],
    ['bigadic', 'Bigadiç'],
    ['burhaniye', 'Burhaniye'],
    ['dursunbey', 'Dursunbey'],
    ['edremit', 'Edremit'],
    ['erdek', 'Erdek'],
    ['gömeç', 'Gömeç'],
    ['gönen', 'Gönen'],
    ['havran', 'Havran'],
    ['ivrindi', 'İvrindi'],
    ['karesi', 'Karesi'],
    ['kepsut', 'Kepsut'],
    ['manyas', 'Manyas'],
    ['marmara', 'Marmara'],
    ['merkez', 'Merkez'],
    ['savaştepe', 'Savaştepe'],
    ['sındırgı', 'Sındırgı'],
    ['susurluk', 'Susurluk']
],
'bartin': [
    ['amasra', 'Amasra'],
    ['kurucaşile', 'Kurucaşile'],
    ['merkez', 'Merkez'],
    ['ulus', 'Ulus']
],
'batman': [
    ['besiri', 'Beşiri'],
    ['gercus', 'Gercüş'],
    ['hasankeyf', 'Hasankeyf'],
    ['kozluk', 'Kozluk'],
    ['merkez', 'Merkez'],
    ['sason', 'Sason']
],
'bayburt': [
    ['aydıntepe', 'Aydıntepe'],
    ['demirozu', 'Demirözü'],
    ['merkez', 'Merkez']
],
'bilecik': [
    ['bozuyuk', 'Bozüyük'],
    ['golpazari', 'Gölpazarı'],
    ['inhisar', 'İnhisar'],
    ['merkez', 'Merkez'],
    ['osmaneli', 'Osmaneli'],
    ['pazaryeri', 'Pazaryeri'],
    ['sogut', 'Söğüt'],
    ['yenipazar', 'Yenipazar']
],
'bingol': [
    ['adakli', 'Adaklı'],
    ['genc', 'Genç'],
    ['karliova', 'Karlıova'],
    ['kigi', 'Kiğı'],
    ['merkez', 'Merkez'],
    ['solhan', 'Solhan'],
    ['yayladere', 'Yayladere'],
    ['yedisu', 'Yedisu']
],
'bitlis': [
    ['adilcevaz', 'Adilcevaz'],
    ['ahlat', 'Ahlat'],
    ['guroymak', 'Güroymak'],
    ['hizan', 'Hizan'],
    ['merkez', 'Merkez'],
    ['mutki', 'Mutki'],
    ['tatvan', 'Tatvan']
],
'bolu': [
    ['dortdivan', 'Dörtdivan'],
    ['gonyuk', 'Göynük'],
    ['gerede', 'Gerede'],
    ['merkez', 'Merkez'],
    ['mudurnu', 'Mudurnu'],
    ['seben', 'Seben'],
    ['yenicaga', 'Yeniçağa']
],
'burdur': [
    ['aglasun', 'Ağlasun'],
    ['altinyayla', 'Altınyayla'],
    ['bucak', 'Bucak'],
    ['cavdir', 'Çavdır'],
    ['celtikci', 'Çeltikçi'],
    ['golhisar', 'Gölhisar'],
    ['karamanli', 'Karamanlı'],
    ['kemer', 'Kemer'],
    ['merkez', 'Merkez'],
    ['tefenni', 'Tefenni'],
    ['yesilova', 'Yeşilova']
],
'bursa': [
    ['buyukorhan', 'Büyükorhan'],
    ['gemlik', 'Gemlik'],
    ['gursu', 'Gürsu'],
    ['harmancik', 'Harmancık'],
    ['inegol', 'İnegöl'],
    ['iznik', 'İznik'],
    ['karacabey', 'Karacabey'],
    ['keles', 'Keles'],
    ['kestel', 'Kestel'],
    ['mudanya', 'Mudanya'],
    ['mustafakemalpasa', 'Mustafakemalpaşa'],
    ['nilufer', 'Nilüfer'],
    ['orhaneli', 'Orhaneli'],
    ['orhangazi', 'Orhangazi'],
    ['osmangazi', 'Osmangazi'],
    ['yenisehir', 'Yenişehir'],
    ['yildirim', 'Yıldırım']
],
'canakkale': [
    ['ayvacik', 'Ayvacık'],
    ['bayramiç', 'Bayramiç'],
    ['biga', 'Biga'],
    ['bozcaada', 'Bozcaada'],
    ['can', 'Çan'],
    ['eceabat', 'Eceabat'],
    ['gelibolu', 'Gelibolu'],
    ['gokceada', 'Gökçeada'],
    ['lapseki', 'Lapseki'],
        ['merkez', 'Merkez'],
        ['yenice', 'Yenice']
    ],
    'cankiri': [
        ['atkaracalar', 'Atkaracalar'],
        ['bayramören', 'Bayramören'],
        ['çerkeş', 'Çerkeş'],
        ['eldivan', 'Eldivan'],
        ['ilgaz', 'Ilgaz'],
        ['kızılırmak', 'Kızılırmak'],
        ['korgun', 'Korgun'],
        ['kurşunlu', 'Kurşunlu'],
        ['merkez', 'Merkez'],
        ['orta', 'Orta'],
        ['şabanözü', 'Şabanözü'],
        ['yapraklı', 'Yapraklı']
    ],
    'corum': [
        ['alaca', 'Alaca'],
        ['bayat', 'Bayat'],
        ['boğazkale', 'Boğazkale'],
        ['dodurga', 'Dodurga'],
        ['i̇skilip', 'İskilip'],
        ['kargı', 'Kargı'],
        ['laçin', 'Laçin'],
        ['mecitözü', 'Mecitözü'],
        ['merkez', 'Merkez'],
        ['oğuzlar', 'Oğuzlar'],
        ['ortaköy', 'Ortaköy'],
        ['osmancık', 'Osmancık'],
        ['sungurlu', 'Sungurlu'],
        ['uğurludağ', 'Uğurludağ']
    ],
    'denizli': [
        ['acipayam', 'Acıpayam'],
        ['babadağ', 'Babadağ'],
        ['baklan', 'Baklan'],
        ['bekilli', 'Bekilli'],
        ['beyağaç', 'Beyağaç'],
        ['bozkurt', 'Bozkurt'],
        ['buldan', 'Buldan'],
        ['çal', 'Çal'],
        ['çameli', 'Çameli'],
        ['çardak', 'Çardak'],
        ['çivril', 'Çivril'],
        ['güney', 'Güney'],
        ['honaz', 'Honaz'],
        ['kale', 'Kale'],
        ['merkez', 'Merkez'],
        ['pamukkale', 'Pamukkale'],
        ['sarayköy', 'Sarayköy'],
        ['serinhisar', 'Serinhisar'],
        ['tavas', 'Tavas']
    ],
    'diyarbakır': [
        ['bağlar', 'Bağlar'],
        ['bismil', 'Bismil'],
        ['çermik', 'Çermik'],
        ['çınar', 'Çınar'],
        ['çüngüş', 'Çüngüş'],
        ['dicle', 'Dicle'],
        ['eğil', 'Eğil'],
        ['ergani', 'Ergani'],
        ['hani', 'Hani'],
        ['hazro', 'Hazro'],
        ['kayapınar', 'Kayapınar'],
        ['kocaköy', 'Kocaköy'],
        ['kulp', 'Kulp'],
        ['lice', 'Lice'],
        ['merkez', 'Merkez'],
        ['silvan', 'Silvan'],
        ['sur', 'Sur'],
        ['yenisehir', 'Yenişehir']
    ],
    'düzce': [
        ['akçakoca', 'Akçakoca'],
        ['beyköy', 'Beyköy'],
        ['cumayeri', 'Cumayeri'],
        ['çilimli', 'Çilimli'],
        ['gölyaka', 'Gölyaka'],
        ['gümüşova', 'Gümüşova'],
        ['kaynaşlı', 'Kaynaşlı'],
        ['merkez', 'Merkez'],
        ['yığılca', 'Yığılca']
    ],'Edirne': [
    ['edirneMerkez', 'Merkez'],
    ['keşan', 'Keşan'],
    ['ipsala', 'İpsala'],
    ['havsa', 'Havsa'],
    ['uzunköprü', 'Uzunköprü'],
    ['eskişehirMarmaraereğlisi', 'Marmaraereğlisi'],
    ['süloğlu', 'Süloğlu'],
    ['şükrüpaşa', 'Şükrüpaşa'],
  ],
  'elazig': [
    ['elazığMerkez', 'Merkez'],
    ['acakale', 'Açakale'],
    ['ağın', 'Ağın'],
    ['almus', 'Almus'],
    ['arıcak', 'Arıcak'],
    ['baskil', 'Baskil'],
    ['karakoçan', 'Karakoçan'],
    ['keban', 'Keban'],
    ['kırmızıpınar', 'Kırmızıpınar'],
    ['kovancılar', 'Kovancılar'],
    ['maden', 'Maden'],
    ['palu', 'Palu'],
    ['sivrice', 'Sivrice'],
  ],
  'erzincan': [
    ['erzincanMerkez', 'Merkez'],
    ['ilçeI', 'İlçe I'],
    ['ilçeII', 'İlçe II'],
    ['ilçeIII', 'İlçe III'],
    ['ilçeIV', 'İlçe IV'],
  ],
  'erzurum': [
    ['erzurumMerkez', 'Merkez'],
    ['aşkale', 'Aşkale'],
    ['aziziye', 'Aziziye'],
    ['çat', 'Çat'],
    ['hınıs', 'Hınıs'],
    ['horasan', 'Horasan'],
    ['ıspir', 'İspir'],
    ['karaçoban', 'Karaçoban'],
    ['karayazı', 'Karayazı'],
    ['köprüköy', 'Köprüköy'],
    ['narman', 'Narman'],
    ['oltu', 'Oltu'],
    ['olur', 'Olur'],
    ['palandöken', 'Palandöken'],
    ['pasinler', 'Pasinler'],
    ['şenkaya', 'Şenkaya'],
    ['tekman', 'Tekman'],
    ['tortum', 'Tortum'],
    ['uzundere', 'Uzundere'],
  ],
  'eskisehir': [
    ['eskişehirMerkez', 'Merkez'],
    ['çifteler', 'Çifteler'],
    ['mahmudiye', 'Mahmudiye'],
    ['mihalgazi', 'Mihalgazi'],
    ['sarıcakaya', 'Sarıcakaya'],
    ['seyitgazi', 'Seyitgazi'],
    ['sivrihisar', 'Sivrihisar'],
    ['tepebaşı', 'Tepebaşı'],
    ['alpu', 'Alpu'],
    ['beylikova', 'Beylikova'],
    ['ihlamurkuyu', 'Ihlamurkuyu'],
  ],
  'gaziantep': [
    ['gaziantepMerkez', 'Merkez'],
    ['şahinbey', 'Şahinbey'],
    ['şehitkamil', 'Şehitkamil'],
    ['omeriyee', 'Oğuzeli'],
    ['karkamış', 'Karkamış'],
    ['yavuzeli', 'Yavuzeli'],
    ['araban', 'Araban'],
    ['ovacık', 'Ovacık'],
    ['kılıçlı', 'Kılıçlı'],
    ['nizip', 'Nizip'],
    ['yalıhüyük', 'Yalıhüyük'],
  ],
  'giresun': [
    ['giresunMerkez', 'Merkez'],
    ['alucra', 'Alucra'],
    ['bulancak', 'Bulancak'],
    ['çamoluk', 'Çamoluk'],
    ['çanakçı', 'Çanakçı'],
    ['dereli', 'Dereli'],
    ['doğankent', 'Doğankent'],
    ['espiye', 'Espiye'],
    ['eynez', 'Eynesil'],
    ['görele', 'Görele'],
    ['güce', 'Güce'],
    ['keşap', 'Keşap'],
    ['piraziz', 'Piraziz'],
    ['şebinkarahisar', 'Şebinkarahisar'],
    ['tirebolu', 'Tirebolu'],
    ['yağlıdere', 'Yağlıdere'],
  ],
  'gümüshane': [
    ['gümüşhaneMerkez', 'Merkez'],
    ['kelkit', 'Kelkit'],
    ['köse', 'Köse'],
    ['kuymakyayla', 'Kuymakyayla'],
    ['şiran', 'Şiran'],
    ['torul', 'Torul'],
  ],
  'hakkari': [
    ['hakkariMerkez', 'Merkez'],
    ['çukurca', 'Çukurca'],
    ['şemdinli', 'Şemdinli'],
    ['yuksekova', 'Yüksekova'],
  ],
  'hatay': [
    ['antakya', 'Antakya'],
    ['arsuz', 'Arsuz'],
    ['defne', 'Defne'],
    ['dörtyol', 'Dörtyol'],
    ['erbani', 'Erbaa'],
    ['iskenderun', 'İskenderun'],
    ['kırıkhan', 'Kırıkhan'],
    ['payas', 'Payas'],
    ['reyhanlı', 'Reyhanlı'],
    ['samandağ', 'Samandağ'],
    ['yayladağı', 'Yayladağı'],
  ],
  'igdir': [
    ['iğdırMerkez', 'Merkez'],
    ['aralık', 'Aralık'],
    ['karakoyunlu', 'Karakoyunlu'],
    ['tuzluca', 'Tuzluca'],
  ],
  'isparta': [
    ['ispartaMerkez', 'Merkez'],
    ['asakışla', 'Asakışla'],
    ['atabey', 'Atabey'],
    ['eğirdir', 'Eğirdir'],
    ['gelendost', 'Gelendost'],
    ['gönen', 'Gönen'],
    ['keçiborlu', 'Keçiborlu'],
    ['sütçüler', 'Sütçüler'],
    ['şarkikaraağaç', 'Şarkikaraağaç'],
    ['uluborlu', 'Uluborlu'],
    ['yenisarbademli', 'Yenişarbademli']
  ],
  'istanbul': [
    ['adalar', 'Adalar'],
    ['arnavutköy', 'Arnavutköy'],
    ['atasehir', 'Ataşehir'],
    ['avcilar', 'Avcılar'],
    ['bağcilar', 'Bağcılar'],
    ['bahcelievler', 'Bahçelievler'],
    ['bakirköy', 'Bakırköy'],
    ['başakşehir', 'Başakşehir'],
    ['bayrampaşa', 'Bayrampaşa'],
    ['besiktas', 'Beşiktaş'],
    ['beykoz', 'Beykoz'],
    ['beylikdüzü', 'Beylikdüzü'],
    ['beyoğlu', 'Beyoğlu'],
    ['büyükçekmece', 'Büyükçekmece'],
    ['çatalca', 'Çatalca'],
    ['çekmeköy', 'Çekmeköy'],
    ['esenler', 'Esenler'],
    ['esenyurt', 'Esenyurt'],
    ['eyüp', 'Eyüp'],
    ['fatih', 'Fatih'],
    ['gaziosmanpaşa', 'Gaziosmanpaşa'],
    ['güngören', 'Güngören'],
    ['kadiköy', 'Kadıköy'],
    ['kağıthane', 'Kağıthane'],
    ['kartal', 'Kartal'],
    ['küçükçekmece', 'Küçükçekmece'],
    ['maltepe', 'Maltepe'],
    ['pendik', 'Pendik'],
    ['sancaktepe', 'Sancaktepe'],
    ['sarıyer', 'Sarıyer'],
    ['silivri', 'Silivri'],
    ['sultanbeyli', 'Sultanbeyli'],
    ['sultangazi', 'Sultangazi'],
    ['şile', 'Şile'],
    ['şişli', 'Şişli'],
    ['tuzla', 'Tuzla'],
    ['ümraniye', 'Ümraniye'],
    ['üsküdar', 'Üsküdar'],
    ['zeytinburnu', 'Zeytinburnu']
  ],
  'izmir': [
    ['aliağa', 'Aliağa'],
    ['balçova', 'Balçova'],
    ['bayındır', 'Bayındır'],
    ['bayraklı', 'Bayraklı'],
    ['bergama', 'Bergama'],
    ['beşikçi', 'Beşikçi'],
    ['bornova', 'Bornova'],
    ['buca', 'Buca'],
    ['çeşme', 'Çeşme'],
    ['dikili', 'Dikili'],
    ['foça', 'Foça'],
    ['gaziemir', 'Gaziemir'],
    ['güzelbahçe', 'Güzelbahçe'],
    ['karabağlar', 'Karabağlar'],
    ['karaburun', 'Karaburun'],
    ['karşıyaka', 'Karşıyaka'],
    ['kemalpaşa', 'Kemalpaşa'],
    ['kınık', 'Kınık'],
    ['kiraz', 'Kiraz'],
    ['konak', 'Konak'],
    ['menderes', 'Menderes'],
    ['menemen', 'Menemen'],
    ['narlıdere', 'Narlıdere'],
    ['ödemiş', 'Ödemiş'],
    ['seferihisar', 'Seferihisar'],
    ['selçuk', 'Selçuk'],
    ['tire', 'Tire'],
    ['torbalı', 'Torbalı'],
    ['urla', 'Urla']
  ],
  'kahramanmaras': [
    ['afşin', 'Afşin'],
    ['andırın', 'Andırın'],
    ['dulkadiroğlu', 'Dulkadiroğlu'],
    ['ekinözü', 'Ekinözü'],
    ['elbistan', 'Elbistan'],
    ['göksun', 'Göksun'],
    ['nurhak', 'Nurhak'],
    ['onikişubat', 'Onikişubat'],
    ['paşa', 'Pazarcık'],
    ['türkoğlu', 'Türkoğlu']
  ],
  'karabuk': [
    ['karabükMerkez', 'Merkez'],
    ['safranbolu', 'Safranbolu'],
    ['yeniçağa', 'Yeniçağa'],
    ['eskil', 'Eskipazar']
  ],
  'karaman': [
    ['karamanMerkez', 'Merkez'],
    ['ayrancı', 'Ayrancı'],
    ['başyayla', 'Başyayla'],
    ['ermenek', 'Ermenek'],
    ['kazımkarabekir', 'Kazımkarabekir'],
    ['sariveliler', 'Sariveliler']
  ],
  'kars': [
    ['karsMerkez', 'Merkez'],
    ['akpınar', 'Akpınar'],
    ['arpaçay', 'Arpaçay'],
    ['digor', 'Digor'],
    ['kağızman', 'Kağızman'],
    ['sarıkamış', 'Sarıkamış'],
    ['selim', 'Selim'],
    ['susuz', 'Susuz']
  ],
  'kastamonu': [
    ['kastamonuMerkez', 'Merkez'],
    ['abana', 'Abana'],
    ['araç', 'Araç'],
    ['azdavay', 'Azdavay'],
    ['bozkurt', 'Bozkurt'],
    ['cide', 'Cide'],
    ['çatalzeytin', 'Çatalzeytin'],
    ['daday', 'Daday'],
    ['devrekani', 'Devrek'],
        ['doğanyurt', 'Doğanyurt'],
    ['hanönü', 'Hanönü'],
    ['ilkadım', 'İlkadım'],
    ['inönü', 'İnönü'],
    ['küre', 'Küre'],
    ['pinarbaşı', 'Pınarbaşı'],
    ['seydiler', 'Seydiler'],
    ['taşköprü', 'Taşköprü'],
    ['tosya', 'Tosya']
  ],
  'kayseri': [
    ['kocasinan', 'Kocasinan'],
    ['melikgazi', 'Melikgazi'],
    ['talas', 'Talas'],
    ['develi', 'Develi'],
    ['bünyan', 'Bünyan'],
    ['pınarbaşı', 'Pınarbaşı'],
    ['tomarza', 'Tomarza'],
    ['yahyalı', 'Yahyalı'],
    ['yeşilhisar', 'Yeşilhisar'],
    ['akkışla', 'Akkışla'],
    ['felahiye', 'Felahiye'],
    ['hacılar', 'Hacılar'],
    ['inanç', 'İnanç'],
    ['kocasinan', 'Kocasinan'],
    ['mucur', 'Mucur']
  ],
  'kirikkale': [
    ['kırıkkaleMerkez', 'Merkez'],
    ['bahşili', 'Bahşılı'],
    ['balışeyh', 'Balışeyh'],
    ['çelebi', 'Çelebi'],
    ['delice', 'Delice'],
    ['karakeçili', 'Karakeçili'],
    ['keskin', 'Keskin'],
    ['sulakyurt', 'Sulakyurt'],
    ['yahşihan', 'Yahşihan']
  ],
  'kirklareli': [
    ['kırklareliMerkez', 'Merkez'],
    ['babaeski', 'Babaeski'],
    ['demirköy', 'Demirköy'],
    ['kofçaz', 'Kofçaz'],
    ['lüleburgaz', 'Lüleburgaz'],
    ['pehlivanlı', 'Pehlivanköy'],
    ['pinarhisar', 'Pınarhisar'],
    ['vize', 'Vize']
  ],
  'kirsehir': [
    ['kırşehirMerkez', 'Merkez'],
    ['akçakent', 'Akçakent'],
    ['aksaray', 'Aksaray'],
    ['boztepe', 'Boztepe'],
    ['çiçekdağı', 'Çiçekdağı'],
    ['kaman', 'Kaman'],
    ['mucur', 'Mucur']
  ],
  'kilis': [
    ['kilisMerkez', 'Merkez'],
    ['elbeyli', 'Elbeyli'],
    ['musabeyli', 'Musabeyli'],
    ['polateli', 'Polateli']
  ],
  'kocaeli': [
    ['izmit', 'İzmit'],
    ['gebze', 'Gebze'],
    ['darıca', 'Darıca'],
    ['gölcük', 'Gölcük'],
    ['kandıra', 'Kandıra'],
    ['karamürsel', 'Karamürsel'],
    ['kartepe', 'Kartepe'],
    ['körfez', 'Körfez'],
    ['çayırova', 'Çayırova'],
    ['derince', 'Derince'],
    ['dilovası', 'Dilovası']
  ],
  'konya': [
    ['konyaMerkez', 'Merkez'],
    ['akören', 'Akören'],
    ['akşehir', 'Akşehir'],
    ['altınekin', 'Altınekin'],
    ['beyşehir', 'Beyşehir'],
    ['bozkır', 'Bozkır'],
    ['çeltik', 'Çeltik'],
    ['çumra', 'Çumra'],
    ['derbent', 'Derbent'],
    ['derebucak', 'Derebucak'],
    ['doğanhisar', 'Doğanhisar'],
    ['emirgazi', 'Emirgazi'],
    ['ereğli', 'Ereğli'],
    ['güneysınır', 'Güneysınır'],
    ['hadim', 'Hadim'],
    ['halkapınar', 'Halkapınar'],
    ['hüyük', 'Hüyük'],
    ['ilgin', 'Ilgın'],
    ['karapınar', 'Karapınar'],
    ['kartal', 'Kartal'],
    ['kulu', 'Kulu'],
    ['sarayönü', 'Sarayönü'],
    ['selçuklu', 'Selçuklu'],
    ['seydişehir', 'Seydişehir'],
    ['taşkent', 'Taşkent'],
    ['tuzlukçu', 'Tuzlukçu'],
    ['yalıhüyük', 'Yalıhüyük'],
    ['yunak', 'Yunak']
  ],
  'kutahya': [
    ['kütahyaMerkez', 'Merkez'],
    ['altıntaş', 'Altıntaş'],
    ['aslanapa', 'Aslanapa'],
    ['domaniç', 'Domaniç'],
    ['duuml;merpınar', 'Dumlupınar'],
    ['emet', 'Emet'],
    ['gediz', 'Gediz'],
    ['hisarcık', 'Hisarcık'],
    ['pazarlar', 'Pazarlar'],
    ['simav', 'Simav'],
    ['şaphane', 'Şaphane'],
    ['tavşanlı', 'Tavşanlı']
  ],
  'malatya': [
    ['malatyaMerkez', 'Merkez'],
    ['akçadağ', 'Akçadağ'],
    ['aran', 'Aran'],
    ['arguvan', 'Arguvan'],
    ['battalgazi', 'Battalgazi'],
    ['darende', 'Darende'],
    ['doğanşehir', 'Doğanşehir'],
    ['doğanyol', 'Doğanyol'],
    ['hekimhan', 'Hekimhan'],
    ['kale', 'Kale'],
    ['kuluncak', 'Kuluncak'],
    ['pütürge', 'Pütürge'],
    ['yahyali', 'Yahyali'],
        ['yesilyurt', 'Yeşilyurt']
  ],
  'manisa': [
    ['manisaMerkez', 'Merkez'],
    ['ahmetli', 'Ahmetli'],
    ['akhisar', 'Akhisar'],
    ['alaşehir', 'Alaşehir'],
    ['demirci', 'Demirci'],
    ['gölmarmara', 'Gölmarmara'],
    ['gördes', 'Gördes'],
    ['kırkağaç', 'Kırkağaç'],
    ['köprübaşı', 'Köprübaşı'],
    ['kula', 'Kula'],
    ['salihli', 'Salihli'],
    ['sarigöl', 'Sarıgöl'],
    ['saruhanlı', 'Saruhanlı'],
    ['selendi', 'Selendi'],
    ['soma', 'Soma'],
    ['turgutlu', 'Turgutlu'],
    ['yunusemre', 'Yunusemre']
  ],
  'mardin': [
    ['mardinMerkez', 'Merkez'],
    ['artuklu', 'Artuklu'],
    ['dargeçit', 'Dargeçit'],
    ['derik', 'Derik'],
    ['kızıltepe', 'Kızıltepe'],
    ['mazıdağı', 'Mazıdağı'],
    ['midyat', 'Midyat'],
    ['nusaybin', 'Nusaybin'],
    ['ömerli', 'Ömerli'],
    ['savur', 'Savur'],
    ['yeşilli', 'Yeşilli']
  ],
  'mugla': [
    ['muğlaMerkez', 'Merkez'],
    ['bodrum', 'Bodrum'],
    ['dalaman', 'Dalaman'],
    ['datça', 'Datça'],
    ['fethiye', 'Fethiye'],
    ['kavaklıdere', 'Kavaklıdere'],
    ['köyceğiz', 'Köyceğiz'],
    ['marmaris', 'Marmaris'],
    ['milas', 'Milas'],
    ['ortaca', 'Ortaca'],
    ['ula', 'Ula'],
    ['yatagan', 'Yatağan']
  ],
  'mus': [
    ['muşMerkez', 'Merkez'],
    ['bulanık', 'Bulanık'],
    ['hasköy', 'Hasköy'],
    ['korkut', 'Korkut'],
    ['malazgirt', 'Malazgirt'],
    ['varto', 'Varto']
  ],
  'nevsehir': [
    ['nevşehirMerkez', 'Merkez'],
    ['acıgöl', 'Acıgöl'],
    ['avanos', 'Avanos'],
    ['derinkuyu', 'Derinkuyu'],
    ['gülşehir', 'Gülşehir'],
    ['hacıbektaş', 'Hacıbektaş'],
    ['kızılırmak', 'Kızılırmak'],
    ['ürgüp', 'Ürgüp']
  ],
  'nigde': [
    ['niğdeMerkez', 'Merkez'],
    ['altunhisar', 'Altunhisar'],
    ['bor', 'Bor'],
    ['çamardı', 'Çamardı'],
    ['çiftlik', 'Çiftlik'],
    ['ulukışla', 'Ulukışla']
  ],
  'ordu': [
    ['orduMerkez', 'Merkez'],
    ['akkuş', 'Akkuş'],
    ['altınordu', 'Altınordu'],
    ['aybastı', 'Aybastı'],
    ['çamaş', 'Çamaş'],
    ['çatalpınar', 'Çatalpınar'],
    ['çaybaşı', 'Çaybaşı'],
    ['fatsa', 'Fatsa'],
    ['gölköy', 'Gölköy'],
    ['gülyalı', 'Gülyalı'],
    ['gürgentepe', 'Gürgentepe'],
    ['ikizce', 'İkizce'],
    ['kabadüz', 'Kabadüz'],
    ['kabataş', 'Kabataş'],
    ['korgan', 'Korgan'],
    ['kumru', 'Kumru'],
    ['mesudiye', 'Mesudiye'],
    ['perşembe', 'Perşembe'],
    ['ulubey', 'Ulubey'],
    ['ünye', 'Ünye'],
    ['yeşilyurt', 'Yeşilyurt']
  ],
  'osmaniye': [
    ['osmaniyeMerkez', 'Merkez'],
    ['bahçe', 'Bahçe'],
    ['düziçi', 'Düziçi'],
    ['hasanbeyli', 'Hasanbeyli'],
    ['kadirli', 'Kadirli'],
    ['sumbas', 'Sumbas'],
    ['toprakkale', 'Toprakkale']
  ],
  'rize': [
    ['rizeMerkez', 'Merkez'],
    ['ardeşen', 'Ardeşen'],
    ['çamlıhemşin', 'Çamlıhemşin'],
    ['çayeli', 'Çayeli'],
    ['derepazarı', 'Derepazarı'],
    ['fındıklı', 'Fındıklı'],
    ['güneysu', 'Güneysu'],
    ['hemşin', 'Hemşin'],
    ['ikizdere', 'İkizdere'],
    ['İyidere', 'İyidere'],
    ['kalkandere', 'Kalkandere'],
    ['pazar', 'Pazar']
  ],
  'sakarya': [
    ['sakaryaMerkez', 'Merkez'],
    ['adapazarı', 'Adapazarı'],
    ['akyazı', 'Akyazı'],
    ['arifiye', 'Arifiye'],
    ['ertuğrul', 'Erenler'],
    ['ferizli', 'Ferizli'],
    ['geyve', 'Geyve'],
    ['hendek', 'Hendek'],
    ['karapürçek', 'Karapürçek'],
    ['kaynarca', 'Kaynarca'],
    ['kocaali', 'Kocaali'],
    ['pamukova', 'Pamukova'],
    ['sapanca', 'Sapanca'],
    ['serdivan', 'Serdivan'],
    ['söğütlü', 'Söğütlü'],
    ['taraklı', 'Taraklı']
  ],  'Samsun': [
    ['samsunMerkez', 'Merkez'],
    ['akalın', 'Akalın'],
    ['alaçam', 'Alaçam'],
    ['asarcık', 'Asarcık'],
    ['atatürk', 'Atatürk'],
    ['ayvacık', 'Ayvacık'],
    ['bafra', 'Bafra'],
    ['canik', 'Canik'],
    ['çarşamba', 'Çarşamba'],
    ['havza', 'Havza'],
    ['ikizce', 'İkizce'],
    ['kavak', 'Kavak'],
    ['ladik', 'Ladik'],
    ['19mayıs', '19 Mayıs'],
    ['salıpazarı', 'Salıpazarı'],
    ['tekkeköy', 'Tekkeköy'],
    ['terme', 'Terme'],
    ['veziroğlu', 'Vezirköprü'],
    ['yakakent', 'Yakakent']
  ],
  'siirt': [
    ['siirtMerkez', 'Merkez'],
    ['akören', 'Akören'],
    ['baykan', 'Baykan'],
    ['eruh', 'Eruh'],
    ['kurtalan', 'Kurtalan'],
    ['perinçek', 'Pervari'],
    ['şirvan', 'Şirvan']
  ],
  'sinop': [
    ['sinopMerkez', 'Merkez'],
    ['ayancık', 'Ayancık'],
    ['boyabat', 'Boyabat'],
    ['dikmen', 'Dikmen'],
    ['durağan', 'Durağan'],
    ['erfelek', 'Erfelek'],
    ['gerze', 'Gerze'],
    ['saraydüzü', 'Saraydüzü'],
    ['türkeli', 'Türkeli']
  ],
  'sivas': [
    ['sivasMerkez', 'Merkez'],
    ['akıncılar', 'Akıncılar'],
    ['altınyayla', 'Altınyayla'],
    ['dikili', 'Dikili'],
    ['divriği', 'Divriği'],
    ['doğanşar', 'Doğanşar'],
    ['gemerek', 'Gemerek'],
    ['gölova', 'Gölova'],
    ['hafik', 'Hafik'],
    ['imranlı', 'İmranlı'],
    ['kangal', 'Kangal'],
    ['koçarlı', 'Koçarlı'],
    ['koyulhisar', 'Koyulhisar'],
    ['suşehri', 'Suşehri'],
    ['şarkışla', 'Şarkışla'],
    ['ulaş', 'Ulaş'],
    ['yıldızeli', 'Yıldızeli'],
    ['zara', 'Zara']
  ],
  'tekirdag': [
    ['tekirdağMerkez', 'Merkez'],
    ['çerkezköy', 'Çerkezköy'],
    ['çorlu', 'Çorlu'],
    ['hayrabolu', 'Hayrabolu'],
    ['kapaklı', 'Kapaklı'],
    ['malkara', 'Malkara'],
    ['muratlı', 'Muratlı'],
    ['saray', 'Saray'],
    ['şarköy', 'Şarköy']
  ],
  'tokat': [
    ['tokatMerkez', 'Merkez'],
    ['almus', 'Almus'],
    ['artova', 'Artova'],
    ['başçiftlik', 'Başçiftlik'],
    ['erbaa', 'Erbaa'],
    ['niksar', 'Niksar'],
    ['pazar', 'Pazar'],
    ['reşadiye', 'Reşadiye'],
    ['sulusaray', 'Sulusaray'],
    ['turhal', 'Turhal'],
    ['yeşilyurt', 'Yeşilyurt'],
    ['zile', 'Zile']
  ],
  'trabzon': [
    ['trabzonMerkez', 'Merkez'],
    ['akçaabat', 'Akçaabat'],
    ['araka', 'Araklı'],
    ['arsin', 'Arsin'],
    ['beşikdüzü', 'Beşikdüzü'],
    ['çarşıbaşı', 'Çarşıbaşı'],
    ['çaykara', 'Çaykara'],
    ['dernekpazarı', 'Dernekpazarı'],
    ['düzköy', 'Düzköy'],
    ['hayrat', 'Hayrat'],
    ['köprübaşı', 'Köprübaşı'],
    ['maçka', 'Maçka'],
    ['of', 'Of'],
    ['sürmene', 'Sürmene'],
    ['tonya', 'Tonya'],
    ['vadili', 'Vakfıkebir'],
    ['yomra', 'Yomra']
  ],
  'tunceli': [
    ['tunceliMerkez', 'Merkez'],
    ['çemişgezek', 'Çemişgezek'],
    ['hani', 'Hani'],
    ['nazımiye', 'Nazımiye'],
    ['ovacık', 'Ovacık'],
    ['perçemli', 'Pülümür']
  ],
  'sanliurfa': [
    ['şanlıurfaMerkez', 'Merkez'],
    ['akçakale', 'Akçakale'],
    ['birecik', 'Birecik'],
    ['bozova', 'Bozova'],
    ['cepni', 'Ceylanpınar'],
    ['halfeti', 'Halfeti'],
    ['hilvan', 'Hilvan'],
    ['siverek', 'Siverek'],
    ['suruç', 'Suruç'],
    ['viranşehir', 'Viranşehir']
  ],
  'usak': [
    ['uşakMerkez', 'Merkez'],
    ['banaz', 'Banaz'],
    ['eşme', 'Eşme'],
    ['karahallı', 'Karahallı'],
    ['sivaslı', 'Sivaslı'],
    ['ulubey', 'Ulubey']
  ],
  'van': [
    ['vanMerkez', 'Merkez'],
    ['başkale', 'Başkale'],
    ['çaldıran', 'Çaldıran'],
    ['çatak', 'Çatak'],
    ['edremit', 'Edremit'],
    ['ermiş', 'Erciş'],
      ['gürpınar', 'Gürpınar'],
    ['muradiye', 'Muradiye'],
    ['özalp', 'Özalp'],
    ['saray', 'Saray'],
    ['tuşba', 'Tuşba']
  ],
  'yozgat': [
    ['yozgatMerkez', 'Merkez'],
    ['akdağmadeni', 'Akdağmadeni'],
    ['aydıncık', 'Aydıncık'],
    ['boğazlıyan', 'Boğazlıyan'],
    ['çandır', 'Çandır'],
    ['çayıralan', 'Çayıralan'],
    ['çekerek', 'Çekerek'],
    ['sarıkaya', 'Sarıkaya'],
    ['sorgun', 'Sorgun'],
    ['şefaatli', 'Şefaatli'],
    ['yerköy', 'Yerköy']
  ],
  'zonguldak': [
    ['zonguldakMerkez', 'Merkez'],
    ['alaplı', 'Alaplı'],
    ['çaycuma', 'Çaycuma'],
    ['devrek', 'Devrek'],
    ['ereğli', 'Ereğli'],
    ['gökçebey', 'Gökçebey']
  ]
};





    // Seçim alanının değeri değiştiğinde tetiklenecek işlev
    $('#id_province').change(function() {
        var selectedValue = $(this).val();  // Seçilen değeri al
        var countyOptions = countyChoices[selectedValue];  // Seçilen ilin ilçe seçeneklerini al

        // İlçe seçeneklerini güncelle
        var countySelect = $('#id_district');
        countySelect.empty();
        for (var i = 0; i < countyOptions.length; i++) {
            var option = $('<option>');
            option.attr('value', countyOptions[i][0]);
            option.text(countyOptions[i][1]);
            countySelect.append(option);
        }
    });
});
function showCargoDiv() {
  var name = document.getElementById("id_name");
  var surname = document.getElementById("id_surname");
  var address = document.getElementById("id_address");
  var apartment = document.getElementById("id_apartment");
  var postcode = document.getElementById("id_postcode");
  var province = document.getElementById("id_province");
  var district = document.getElementById("id_district");
  var number = document.getElementById("id_number");
  var cargoDiv = document.querySelector(".form-check");
  var errorMessages = [];

  if (name.value.trim() === "") {
      var nameerror = document.getElementById("nameerror")
      nameerror.innerText = "Ad girin";
      errorMessages.push("ad girin");
  }
  else {
  var nameerror = document.getElementById("nameerror");
  nameerror.innerText = ""; // Hata mesajını temizle
}
  name.addEventListener("input", function() {
  var nameerror = document.getElementById("nameerror");
  if (name.value.trim() !== "") {
    nameerror.innerText = ""; // Hata mesajını temizle
  }
  else {
      nameerror.innerText = "Ad girin";
      cargoDiv.style.display = "none";
      var stagetwocount = document.querySelector(".stagetwocount");
    stagetwocount.style.background = "white";
    stagetwocount.style.color = "black";
    var stageoneandtitle = document.querySelector(".stageoneandtitle");
    stageoneandtitle.scrollIntoView({behavior:"smooth",block:"start"})
      var paymentcontainer = document.getElementById("paymentcontainer");
    paymentcontainer.style.display = "none";
    var stagethreecount = document.querySelector(".stagethreecount");
    stagethreecount.style.background = "white";
    stagethreecount.style.color = "black";
  }
});


  if (surname.value.trim() === "") {
      var surnameerror = document.getElementById("surnameerror")
      surnameerror.innerText = "Soyad girin";
      errorMessages.push("soyad girin");
  }
  else {
       var surnameerror = document.getElementById("surnameerror");
  surnameerror.innerText = ""; // Hata mesajını temizle
  }
   surname.addEventListener("input", function() {
  var surnameerror = document.getElementById("surnameerror");
  if (surname.value.trim() !== "") {
    surnameerror.innerText = ""; // Hata mesajını temizle
  }
  else {
      surnameerror.innerText = "Soyad girin";
      cargoDiv.style.display = "none";
      var stagetwocount = document.querySelector(".stagetwocount");
    stagetwocount.style.background = "white";
    stagetwocount.style.color = "black";
    var stageoneandtitle = document.querySelector(".stageoneandtitle");
    stageoneandtitle.scrollIntoView({behavior:"smooth",block:"start"})
      var paymentcontainer = document.getElementById("paymentcontainer");
    paymentcontainer.style.display = "none";
    var stagethreecount = document.querySelector(".stagethreecount");
    stagethreecount.style.background = "white";
    stagethreecount.style.color = "black";

  }
});

  if (address.value.trim() === "") {
      var addresserror = document.getElementById("addresserror")
      addresserror.innerText = "Adres girin";
      errorMessages.push("adres girin");
  }
   else {
       var addresserror = document.getElementById("addresserror");
  addresserror.innerText = ""; // Hata mesajını temizle
  }
    address.addEventListener("input", function() {
  var addresserror = document.getElementById("addresserror");
  if (address.value.trim() !== "") {
    addresserror.innerText = ""; // Hata mesajını temizle
  }
  else {
      addresserror.innerText = "Adres girin";
      cargoDiv.style.display = "none";
      var stagetwocount = document.querySelector(".stagetwocount");
    stagetwocount.style.background = "white";
    stagetwocount.style.color = "black";
    var stageoneandtitle = document.querySelector(".stageoneandtitle");
    stageoneandtitle.scrollIntoView({behavior:"smooth",block:"start"})
      var paymentcontainer = document.getElementById("paymentcontainer");
    paymentcontainer.style.display = "none";
    var stagethreecount = document.querySelector(".stagethreecount");
    stagethreecount.style.background = "white";
    stagethreecount.style.color = "black";
  }
});


  if (apartment.value.trim() === "") {
      var apartmenterror = document.getElementById("apartmenterror")
      apartmenterror.innerText = "Apartman girin";
      errorMessages.push("apartman girin");
  }
   else {
       var apartmenterror = document.getElementById("apartmenterror");
  apartmenterror.innerText = ""; // Hata mesajını temizle
  }
    apartment.addEventListener("input", function() {
  var apartmenterror = document.getElementById("apartmenterror");
  if (apartment.value.trim() !== "") {
    apartmenterror.innerText = ""; // Hata mesajını temizle
  }
  else {
      apartmenterror.innerText = "Apartman girin";
      cargoDiv.style.display = "none";
      var stagetwocount = document.querySelector(".stagetwocount");
    stagetwocount.style.background = "white";
    stagetwocount.style.color = "black";
    var stageoneandtitle = document.querySelector(".stageoneandtitle");
    stageoneandtitle.scrollIntoView({behavior:"smooth",block:"start"})
      var paymentcontainer = document.getElementById("paymentcontainer");
    paymentcontainer.style.display = "none";
    var stagethreecount = document.querySelector(".stagethreecount");
    stagethreecount.style.background = "white";
    stagethreecount.style.color = "black";
  }
});

  if (postcode.value.trim() === "") {
      var postcodeerror = document.getElementById("postcodeerror")
      postcodeerror.innerText = "Posta kodu girin";
      errorMessages.push("posta kodu girin");
  }
   else {
       var postcodeerror  = document.getElementById("postcodeerror");
  postcodeerror.innerText = ""; // Hata mesajını temizle
  }
    postcode.addEventListener("input", function() {
  var postcodeerror = document.getElementById("postcodeerror");
  if (postcode.value.trim() !== "") {
    postcodeerror.innerText = ""; // Hata mesajını temizle
  }
  else {
      postcodeerror.innerText = "Posta kodu girin";
      cargoDiv.style.display = "none";
      var stagetwocount = document.querySelector(".stagetwocount");
    stagetwocount.style.background = "white";
    stagetwocount.style.color = "black";
    var stageoneandtitle = document.querySelector(".stageoneandtitle");
    stageoneandtitle.scrollIntoView({behavior:"smooth",block:"start"})
      var paymentcontainer = document.getElementById("paymentcontainer");
    paymentcontainer.style.display = "none";
    var stagethreecount = document.querySelector(".stagethreecount");
    stagethreecount.style.background = "white";
    stagethreecount.style.color = "black";
  }
});

  if (province.value.trim() === "") {
      var provinceerror = document.getElementById("provinceerror")
      provinceerror.innerText = "İl girin";
      errorMessages.push("il girin");
  }
   else {
       var provinceerror = document.getElementById("provinceerror");
  provinceerror.innerText = ""; // Hata mesajını temizle
  }
    province.addEventListener("input", function() {
  var provinceerror = document.getElementById("provinceerror");
  if (province.value.trim() !== "") {
    provinceerror.innerText = ""; // Hata mesajını temizle
  }
  else {
      provinceerror.innerText = "İl girin";
      cargoDiv.style.display = "none";
      var stagetwocount = document.querySelector(".stagetwocount");
      stagetwocount.style.background = "white";
      stagetwocount.style.color = "black";
      var stageoneandtitle = document.querySelector(".stageoneandtitle");
      stageoneandtitle.scrollIntoView({behavior:"smooth",block:"start"})
      var paymentcontainer = document.getElementById("paymentcontainer");
    paymentcontainer.style.display = "none";
    var stagethreecount = document.querySelector(".stagethreecount");
    stagethreecount.style.background = "white";
    stagethreecount.style.color = "black";
  }
});

  if (district.value.trim() === "") {
      var districterror = document.getElementById("districterror")
      districterror.innerText = "İlçe girin";
      errorMessages.push("ilçe girin");
  }
   else {
       var districterror = document.getElementById("districterror");
  districterror.innerText = ""; // Hata mesajını temizle
  }
    district.addEventListener("input", function() {
  var districterror = document.getElementById("districterror");
  if (district.value.trim() !== "") {
    districterror.innerText = ""; // Hata mesajını temizle
  }
  else {
      districterror.innerText = "İlçe girin";
      cargoDiv.style.display = "none";
      var stagetwocount = document.querySelector(".stagetwocount");
      stagetwocount.style.background = "white";
      stagetwocount.style.color = "black";
      var stageoneandtitle = document.querySelector(".stageoneandtitle");
      stageoneandtitle.scrollIntoView({behavior:"smooth",block:"start"})
      var paymentcontainer = document.getElementById("paymentcontainer");
    paymentcontainer.style.display = "none";
    var stagethreecount = document.querySelector(".stagethreecount");
    stagethreecount.style.background = "white";
    stagethreecount.style.color = "black";
  }
});

  // Diğer alanların kontrolü burada devam eder...

  if (errorMessages.length === 0) {
    cargoDiv.style.display = "block";
    var stagetwoandtitle = document.querySelector(".stagetwoandtitle");
    stagetwoandtitle.scrollIntoView({ behavior: "smooth", block: "start" });
    var stagetwocount = document.querySelector(".stagetwocount");
    stagetwocount.style.background = "black";
    stagetwocount.style.color = "white";
  } else {
    cargoDiv.style.display = "none";
    var stagetwocount = document.querySelector(".stagetwocount");
    stagetwocount.style.background = "white";
    stagetwocount.style.color = "black";
    var stageoneandtitle = document.querySelector(".stageoneandtitle");
    stageoneandtitle.scrollIntoView({behavior:"smooth",block:"start"})

  }
}
function showPaymentDiv(){
  var options = document.getElementsByName("cargo");
  var paymentcontainer = document.getElementById("paymentcontainer")
    var stagethreecount = document.querySelector(".stagethreecount")
  var selectedOption = false;
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = true;
      break;
    }
  }
  if (selectedOption) {
    // Seçim yapıldı, formu işleme devam edebilirsiniz.
      var error = document.querySelector(".alert-danger");
      error.style.display = "none";
      paymentcontainer.style.display = "block";
      stagethreecount.style.background = "black";
      stagethreecount.style.color = "white";
      paymentcontainer.scrollIntoView({behavior:"smooth",block:"start"})

    // ... diğer işlemler ...
  } else {
    // Seçim yapılmadı, hata mesajını gösterin.
    var error = document.querySelector(".alert-danger");
    error.style.display = "block";


  }




}
document.addEventListener("DOMContentLoaded", function() {
 var cartnumber = document.getElementById("id_cartnumber");
 var cartnumbererror = document.getElementById("cartnumbererror");
 var cardholder = document.getElementById("id_cardholder_name");
 var cardholdererror = document.getElementById("cardholdererror");
 var expirationdate = document.getElementById("id_expiration_date");
 var expdateerror = document.getElementById("expdateerror");
 var cvv = document.getElementById("id_cvv");
 var cvverror = document.getElementById("cvverror");
 var stagethreebutton = document.getElementById("stagethreebutton");
 stagethreebutton.disabled = true;
  function checkAllInputs() {
    var isAllValid = true;

    if (cartnumber.value.length < 16) {
      cartnumbererror.innerText = "Geçerli bir kart numarası girin";
      isAllValid = false;
    } else {
      cartnumbererror.innerText = "";
    }

    if (cardholder.value.trim() === "") {
      cardholdererror.innerText = "Ad soyad girin";
      isAllValid = false;
    } else {
      cardholdererror.innerText = "";
    }

    var value = expirationdate.value;
    var regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(value)) {
      expdateerror.innerText = "Geçerli bir tarih girin";
      if (value.length === 2 && value.indexOf("/") === -1) {
        value += "/";
        expirationdate.value = value;
      }
      isAllValid = false;
    } else {
      expdateerror.innerText = "";
    }

    if (cvv.value.length < 3) {
      cvverror.innerText = "Geçerli bir güvenlik kodu girin";
      isAllValid = false;
    } else {
      cvverror.innerText = "";
    }

    stagethreebutton.disabled = !isAllValid;
  }

  // Input eventlerine checkAllInputs() fonksiyonunu bağlayın
  cartnumber.addEventListener("input", checkAllInputs);
  cardholder.addEventListener("input", checkAllInputs);
  expirationdate.addEventListener("input", checkAllInputs);
  cvv.addEventListener("input", checkAllInputs);
});

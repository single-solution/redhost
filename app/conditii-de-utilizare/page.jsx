/* eslint-disable react/no-unescaped-entities */
"use client";
import AOS from "aos";
import Link from "next/link";

export default function ConditiiDeUtilizare() {
	useEffect(() => {
		AOS.init({
			easing: "ease-in-out",
			duration: 800,
			once: true,
		});
	}, []);

	return (
		<>
			<section class="breadcrumb-area bg-primary-gradient">
				<div class="container">
					<div class="breadcrumb-content text-center">
						<h2 class="mb-3">Conditii de utilizare </h2>
						<nav>
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<Link href="/">Home</Link>
								</li>
								<li class="breadcrumb-item active">Conditii de utilizare </li>
							</ol>
						</nav>
					</div>
				</div>
			</section>
			<section class="ptb-120" style={{ backgroundColor: "#fff" }}>
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-10">
							<div class="content">
								<h1>Conditii de utilizare servicii RedHost</h1>
								(1) PREAMBUL
								<br />
								Conventia de mai jos (denumita in continuare "conventia") stabileste care sunt conditiile in care orice
								persoana poate accesa/vizita site-ul www.redhost.ro ori poate utiliza serviciile oferite de site-ul
								www.redhost.ro si are valoarea unei conventii incheiate intre SC EUROWEB SRL (identificata prin CUI
								22621599 si numarul de inregistrare la Registrul Comertului J17/1826/2007 denumita in continuare
								"furnizorul") in calitatea sa de proprietar si administrator al site-ului si orice persoana care viziteaza
								site-ul www.redhost.ro sau utilizeaza sau doreste sa utilizeze serviciile oferite de site-ul
								www.redhost.ro (denumit in continuare "utilizatorul").
								<br />
								<br />
								Neacceptarea oricarei prevederi din prezenta conventie atrage obligatia persoanei de a inceta imediat
								accesarea site-ului si/sau utilizarea serviciilor.
								<br />
								<br />
								Accesarea in continuare a site-ului precum si utilizarea serviciilor www.redhost.ro in orice mod,
								constituie o acceptare integrala a conventiei, inclusiv a oricaror modificari ulterioare efectuate fara
								nicio alta formalitate sau restrictie de catre furnizor.
								<br />
								<br />
								(2) CONDITIA DE LEGALITATE
								<br />
								Toate serviciile oferite de catre furnizor vor fi utilizate doar in mod legal. Responsabilitatea pentru
								utilizarea serviciilor in mod legal revine exclusiv utilizatorului.
								<br />
								<br />
								(3) SITE-URI / APLICATII INTERZISE
								<br />
								Urmatoarele tipuri de resurse / site-uri / aplicatii <b>NU</b> pot fi gazduite pe serverele noastre:
								<ul class="linie" style={{ paddingLeft: "15px" }}>
									<li>
										site-uri care incalca sau prejudiciaza in orice mod drepturile altor persoane (incluzand dar
										nelimitandu-se la drepturile de proprietate intelectuala)
									</li>
									<li>site-uri sau bloguri de propaganda politica, religioasa, sociala, rasiala</li>
									<li>
										site-urile de presa online nu pot fi gazduite pe pachetele de gazduire partajata (pachetele Promo
										pana la Pro)
									</li>
									<li>
										site-uri care contin sau trimit catre programe, muzica sau alte date piratate sau pentru care
										titularul contului nu detine un drept clar de proprietate intelectuala;
									</li>
									<li>
										<b>
											module sau scripturi care sunt exploatate frecvent pentru trimiterea de SPAM (tell a friend etc)
										</b>
									</li>
									<li>
										site-uri care induc publicul in eroare (replici ale unor site-uri cunoscute, denumiri sau adrese
										care pot crea confuzii legate de site-uri sau marci cunoscute)
									</li>
									<li>site-uri cu resurse piratate sau cu link-uri catre resurse piratate gazduite in alta parte</li>
									<li>resurse de orice tip legate de hacking/cracking</li>
									<li>
										site-uri care ofera resurse (gadget-uri, badge-uri, file sharing, curs valutar etc) pentru
										importarea acestora in timp real de catre alte site-uri sau aplicatii;
									</li>
									<li>
										radio-uri online sau site-uri cu feed-uri audio/video gazduite pe serverele noastre sau site-uri de
										tip "proxy" pentru feed-uri audio/video gazduite pe alte servere
									</li>
									<li>site-uri pentru banner-exchange, surf-bar, bit-torrent, trackere DC, file sharing, topuri</li>
									<li>site-uri promovate prin intermediul unor servicii de tip surf-bar</li>
									<li>
										site-uri rasiste, defaimatoare, calomnioase, care promoveaza sau instiga la ura sau la violenta sau
										la alte comportamente anti-sociale (incluzand dar nelimitandu-se la discriminare)
									</li>
									<li>aplicatii de tip IRC (boti, eggdrop), podcast, webcast, shoutcast, multicast, wap, YaBB</li>
									<li>
										jocuri online, servere de jocuri, site-uri de jocuri, forumuri, aplicatii legate in orice fel de
										jocurile online (redirecte CS etc)
									</li>
									<li>site-uri care violeaza in orice mod dreptul la viata privata (Yahoo status detector etc);</li>
									<li>
										site-urile cu un trafic preponderent viral nu pot fi gazduite in conturile standard (solicitati o
										oferta particularizata necesitatilor site-ului dvs);
									</li>
									<li>
										site-uri care supra-incarca serverul sau care folosesc intr-un mod necorespunzator resursele de
										retea si/sau server (PHP chat, scripturi care ruleaza non-stop)
									</li>
									<li>scripturi sau aplicatii de crypto mining</li>
									<li>
										<b>baze de date ale unor site-uri gazduite pe alte servere</b>
									</li>
									<li>
										aplicatii care necesita obtinerea de catre furnizor a unei autorizari sau licente specializate de la
										o autoritate sau de la un detinator al dreptului de copyright, dupa caz
									</li>
									<li>
										copii de siguranta partiale sau integrale ale datelor din cont sau din afara acestuia; furnizorul
										ofera un serviciu de backup pe servere separate; pastrarea de backupuri suplimentare in interiorul
										contului este inutila (compromiterea contului implica evident si pierderea backupului),
										contraproductiva (consuma resurse nedestinate acestui scop) si interzisa de prezenta conventie
									</li>
								</ul>
								<b>
									Site-urile de presa (scrisa si/sau online) nu pot fi gazduite in cadrul pachetelor de gazduire
									partajate. Vor putea fi gazduite doar in cadrul unor pachete personalizate si doar in cazul in care
									solutia de colaborare este agreata de ambele parti.
								</b>
								<br />
								<br />
								(4) MAILING
								<br />
								<b>SUNT STRICT INTERZISE ORICE FEL DE ACTIVITATI LEGATE DE SPAM</b>: COLECTARE DE ADRESE EMAIL PRIN
								HARVESTING, PASTRAREA DE BAZE DE DATE SAU FISIERE CU ADRESE DE EMAIL CARE AR PUTEA FI FOLOSITE PENTRU
								SPAM, TRIMITEREA DE SPAM IN MOD AUTOMAT SAU DE PE ADRESE DE EMAIL GAZDUITE PE SERVERELE NOASTRE,
								PROMOVAREA PRIN SPAM A UNOR SITE-URI SAU ADRESE EMAIL GAZDUITE PE SERVERELE NOASTRE. SPAMUL SE DEFINESTE
								CA ORICE TIP DE MAILING IN MASA SAU CORESPONDENTA DE TIP COMERCIAL PENTRU CARE NU S-A OBTINUT ACCEPTUL
								PREALABIL DIN PARTEA DESTINATARULUI SAU DESTINATARILOR. IN CAZUL IN CARE SE EFECTUEAZA MAILING IN MASA,
								CEL CARE LE TRIMITE TREBUIE SA PASTREZE SI SA NE OFERE NECONDITIONAT LA CERERE URMATOARELE DATE: NUMELE
								CELUI CARE A OFERIT ACCEPTUL, ADRESA DE EMAIL PENTRU CARE S-A OBTINUT ACCEPTUL, DATA SI ORA, IP-UL DE PE
								CARE S-A OBTINUT ACCEPTUL DESTINATARULUI SAU DESTINATARILOR IN CAZUL IN CARE SUNT MAI MULTI. CEL CARE
								TRIMITE MAILINGUL TREBUIE SA OFERE CAT MAI FACIL UN HYPERLINK FUNCTIONAL DE DEZABONARE DESTINATARILOR IAR
								ORICE CERERE IN ACEST SENS TREBUIE ONORATA PE LOC SAU IN MAXIM 2 ZILE CALENDARISTICE.
								<br />
								<br />
								<b>
									Atentie!
									<br />
									Ne rezervam dreptul de a restrictiona partial sau total trimiterile de mail din conturi de gazduire
									fata de care avem suspiciuni ca trimit mail fara acordul destinatarului (nesolicitat). In acest scop ne
									rezervam dreptul de a solicita clientului toate informatiile necesare pentru a ne putea forma o opinie
									cat mai informata cu privire la alinierea mailingului clientul la legile si regulile antispam. Vom
									putea continua sa servim clientul doar in masura in care primim un raspuns prompt (in maxim o zi
									calendaristica), complet si care se aliniaza complet la legile, regulile si practicile antispam. In
									cazul in care nu primim un asemenea raspuns ne rezervam dreptul de a rezilia contractul, la finalul
									celor 24 de ore, caz in care vom returna suma achitata in avans de catre client pentru gazduire,
									aferenta perioadei ramase din contractul reziliat.
								</b>
								<br />
								<br />
								Un caz similar este si cel in care clientul sufera o compromitere (compromitere parola cPanel,
								compromitere adresa email). In acest caz, pentru a proteja serverul ne rezervam dreptul de a reduce
								drastic sau complet numarul de mailuri care pot fi transmise din contul respectiv. La cererea clientului,
								numarul de mailuri care pot fi transmise va putea fi redresat progresiv pe o perioada lunga de timp doar
								daca nu intervin alte compromiteri. In cazul unor compromiteri repetate vom fi obligati sa restrictionam
								complet si definitiv transmiterea de mail din contul respectiv.
								<br />
								<br />
								Nu este permisa setarea de forwardere catre servicii externe de mail (Yahoo, GMail) pentru ca aceste
								servicii vor vedea SPAM-urile pe care le primiti pe adresele de pe serverul nostru si forwardate automat
								ca fiind spam-uri trimise de pe domeniul Dvs si de pe serverul nostru. Este deci necesar ca forwarding-ul
								sa se faca doar catre adrese interne.
								<br />
								<br />
								RedHost ofera servicii de gazduire web (site-uri web, aplicatii web) dar ofera si un serviciu atasat de
								mail. Totusi acest serviciu de mail este destinat unei comunicari normale si nu comunicarilor in masa.{" "}
								<b>
									Transmiterea de mail in masa este interzisa si ne rezervam dreptul a suspenda manual sau automat orice
									adresa sau cont de gazduire care transmite mail in masa.
								</b>{" "}
								Mailingul in masa se defineste ca orice mail care este transmis, de regula automat, in mod identic sau
								aproape identic, repetat si/sau catre un numar mare de destinatari. Transmiterea unor mailuri in urma
								utilizarii site-ului (mailuri de bun venit, comenzi online etc) nu se considera ca fiind mail in masa. In
								scopul comunicarilor in masa va recomandam sa utilizati serviciile unui serviciu specializat pe acest tip
								de servicii (denumit MSP). De exemplu <a href="https://mailchimp.com/">MailChimp</a> va ofera
								posibilitatea trimiterii de mailuri in masa de pana la 2000 de destinatari in mod gratuit. Desigur si
								aceste trimiteri se supun acelorasi reguli antispam la care facem referire si mai sus.
								<br />
								<br />
								In acelasi timp din motive tehnice serverul poate procesa doar o cantitate finita de mailuri (in special
								intr-un interval scurt de timp). Este obligatoriu sa va asigurati ca scriptul/programul dvs de mailing nu
								trimite mai mult de 250 de mailuri pe ora repartizate cat mai echilibrat pe perioada respectiva. In caz
								contrar, contul care depaseste limita de 250 de mailuri in oricare 60 de min consecutive va fi suspendat
								automat.
								<br />
								<br />
								Este interzisa redirectarea adreselor de mail catre servicii externe de mail (GMail, Yahoo) pentru a nu se
								redirecta de pe serverele noastre, odata cu mailurile normale si SPAM-ul pe care il primiti in mod
								inerent. Aceasta practica poate avea efecte extrem de daunatoare asupra livrabilitatii mesajelor trimise
								de pe domeniul Dvs dar si de pe server in intregime.
								<br />
								<br />
								In cazul in care chiar si accidental va puteti apropia de limita tehnica de 250 de mailuri / ora, sau
								transmiteti un volum mare de mailuri, este obligatoriu ca respectivul cont de gazduire sa beneficieze de
								un IP dedicat.
								<br />
								<br />
								<b>
									In nici un caz nu vor fi desfasurate campanii de mailing in favoarea unor site-uri care nu sunt
									gazduite de catre RedHost si nici nu vor fi trimise mailuri ca venind din partea unor site-uri
									inexistente sau negazduite de catre RedHost.
								</b>
								<br />
								<br />
								(5) UPTIME
								<br />
								<b>
									RedHost.ro nu este responsabil de eventualele daune cauzate de serviciile furnizate si nu ofera nici o
									alta garantie in afara de cea de uptime
								</b>{" "}
								(timp de disponibilitate). In cazul in care uptime-ul scade intr-o luna sub 99.90% clientului i se va
								restitui la cerere un procent din suma platita pentru luna respectiva. Procentele si conditiile de
								restituire sunt publicate in sectiunea de <Link href="/garantii-gazduire">garantii</Link>. In nici un caz,
								suma restituita nu va fi mai mare decat cea platita pentru gazduire de catre client pentru contul
								respectiv pe luna in curs.
								<br />
								<br />
								(6) NEPLATA
								<br /> In cazul in care plata pentru servicii intarzie mai multe de 5 zile de la data scadenta, ne
								rezervam dreptul suspendarii serviciilor respective.
								<br />
								<br />
								<b>
									NUME DE DOMENII
									<br />
									In cazul neplatii la timp pentru prelungirea domeniilor internationale acestea vor fi suspendate de
									catre registrar si in maxim 30 de zile vor fi introduse in carantina (perioada in care titularul
									anterior are prioritate la prelungire contra unei taxe suplimentare). Scoaterea domeniilor din
									carantina costa intre 80 si 120 de dolari (taxa de registru care depinde de extensie). Dupa expirarea
									perioadei de carantina (circa 6 saptamani) domeniului poate fi achizitionat de catre oricine (cu alte
									cuvinte titularul anterior isi pierde prioritatea). Societatea noastra nu-si asuma nicio
									responsabilitate in cazul in care din motive independente de vointa sa (neachitarea prelungirii de
									catre client sau achitarea cu intarziere, lipsa informatiilor suficiente pentru identificarea platii de
									pe extrasul bancar etc) domeniul intra in carantina sau este achizitionat de catre altcineva.
									<br />
									<br />
								</b>
								<b>Plata cu intarziere (in perioada de gratie)</b>
								<br />
								In cazul in care plata domeniului se face dupa expirare dar inainte de intrarea in carantina, vom percepe
								o taxa de 10 Euro + TVA / domeniu.
								<br />
								<br />
								(7) GARANTII
								<br />
								Garantia de uptime se refera strict la returnarea sumelor platite de client pentru luna (sau lunile) in
								care uptime-ul scade sub valoarea garantata.
								<br />
								FIRMA NOASTRA NU GARANTEAZA POTRIVIREA SERVICIILOR OFERITE CU NEVOILE CLIENTULUI. SERVICIILE SUNT OFERITE
								CA ATARE FARA NICI UN FEL DE ALTE GARANTII EXPLICITE SAU IMPLICITE.{" "}
								<b>
									IN MOD EXPLICIT SE EXCLUD DE COMUN ACORD PLATA ORICAROR DAUNE INTERESE BENEFICIARULUI DE CATRE FIRMA
									NOASTRA.
								</b>{" "}
								SINGURELE SUME PLATITE CLIENTULUI DE CATRE FIRMA NOASTRA VOR FI CELE INCASATE DE LA CLIENT IN SITUATIA IN
								CARE UPTIME-UL SCADE SUB VALOAREA GARANTATA (MINUS VALOAREA SERVICIILOR NERETURNABILE: DOMENII SI
								CERTIFICATE SSL).{" "}
								<b>
									IN CAZUL IN CARE NEFUNCTIONAREA SERVICIILOR POATE CONDUCE LA PREJUDICII DE ORICE FEL (FINANCIARE, DE
									IMAGINE ETC), AVETI NEVOIE DE O SOLUTIE DE TIP "MISSION CRITICAL". NU OFERIM SOLUTII "MISSION CRITICAL"
								</b>
								.
								<br />
								<br />
								RedHost ofera certificate SSL pentru toate domeniile si subdomeniile gazduite pe serverele noastre. Aceste
								certificate sunt emise automat de catre cPanel AutoSSL. In cazuri rare, emiterea acestor certificate poate
								esua. RedHost.ro nu isi asuma nicio raspundere vis-a-vis de eventuala emitere defectuoasa a certificatelor
								SSL de catre cPanel si eventualelor probleme de accesare care pot decurge din acest fapt. In cazurile
								site-urilor mission critical recomandam achizitionarea unor certificate SSL comerciale (care sunt
								instalate manual deci orice problema se observa pe loc).
								<br />
								<br />
								(8) NEMULTUMIRI
								<br /> In cazul unor nemultumiri, va rugam sa ne contactati. In cazul in care nu vom putea rezolva
								problemele respective, va vom restitui banii pentru perioada preplatita ramasa minus valoarea domeniilor
								deja inregistrate sau a certificatelor digitale cumparate. Restituirea sumelor platite va conduce la
								rezilierea implicita a contractului. Domeniile si/sau certificatele respective raman in posesia clientului
								pana la expirare.
								<br />
								<br />
								(9) INCHEIEREA PREMATURA A CONTRACTULUI
								<br />
								RedHost.ro isi rezerva dreptul de a incheia colaborarea la orice moment, caz in care veti fi instiintat in
								prealabil cu 7 zile (cu exceptia cazurilor de forta majora) si vi se va restitui suma corespunzatoare
								hostingului pentru perioada preplatita. In cazul in care sumele respective includ si domenii, din suma de
								restituit se va scadea valoarea domeniilor (valoare calculata la nivelul pretului de vanzare fara
								gazduire, pret exprimat pe site-ul www.redhost.ro, in pagina de nume de domenii) iar in cazul in care
								includ certificate se va scadea pretul platit pentru acestea. Atat domeniile cat si certificatele vor
								putea fi utilizate de catre client pana la expirarea acestora.
								<br />
								<br />
								(10) ASISENTA TEHNICA
								<br />
								RedHost.ro ofera asistenta tehnica limitata la functionarea serviciilor proprii si la oferirea
								informatiilor necesare pentru utilizarea acestora. Nu putem oferi asistenta asupra modului in care pot fi
								utilizate diverse tehnologii, limbaje de programare sau programe oferite de catre terti. In mod expres, nu
								putem oferi asistenta tehnica pentru programele instalate cu ajutorul Installatron. In general exista
								forumuri dedicate pentru fiecare dintre aceste aplicatii unde puteti gasi asistenta necesara (in limba
								engleza). De asemenea nu putem oferi asistenta pentru crearea site-urilor in general si nici pentru
								crearea site-urilor cu RVSiteBuilder in particular.
								<br />
								<br />
								Serviciul de asistenta trebuie utilizat intr-o maniera rezonabila si justificata. In cazul in care vom
								primi solicitari nejustificate (spre exemplu sesizari care nu se confirma) sau in cazul in care vom primi
								in mod repetat solicitari sau informari care nu ne privesc, ne rezervam dreptul de a incheia in mod
								unilateral colaborarea. Ne rezervam acelasi drept si in cazul in care comunicarea cu clientul nu se
								desfasoara corespunzator. Asemenea situatii includ dar nu se limiteaza la comunicare ineficienta,
								necooperanta, repetat defazata sau jignitoare. In toate aceste cazuri vom restitui suma platita de catre
								client aferenta perioadei care astfel va ramane neutilizata minus costul serviciilor personalizate care
								vor putea fi utilizate de catre client pana la expirare (nume de domenii, certificate SSL etc).
								<br />
								<br />
								Solicitarile de suport care nu au ca obiect o remediere efectuata de catre RedHost.ro a propriilor
								servicii vor fi in general taxate suplimentar. Asemenea solicitari includ dar nu se limiteaza la:
								<ul class="linie" style={{ paddingLeft: "15px" }}>
									<li>
										extragerea unor date din jurnalele serverului: 25 Euro + TVA (datele de acces si vizitare site se
										afla in cPanel in contul clientului si sunt disponibile gratuit)
									</li>
									<li>
										investigare compromitere site: 20 Euro/ora, minim 50 Euro / investigatie / site (doar in cazul in
										care identificam date utilizabile despre atac)
									</li>
									<li>
										extragere date in cazul unei logari considerata suspecta de catre client: 25 Euro + TVA / verificare
									</li>
									<li>verificare nefunctionare site: 25 Euro + TVA</li>
									<li>remediere nefunctionare site: 20 Euro + TVA / ora</li>
									<li>
										restore asistat din backup (clientul are acces oricand la backup si poate efectua in regim propriu
										oricate restaurari doreste direct din cPanel; aceasta prevedere se refera la efectuarea restore-ului
										de catre personalul RedHost in pofida disponibilitatii restore-ului in cPanel): 25 Euro + TVA
									</li>
									<li>
										in cazul in care este posibila o asemenea operatiune, restaurarea contului de gazduire dupa
										stergerea acestuia pentru neplata, se va taxa cu 20 Euro + TVA / cont / restaurare
									</li>
								</ul>
								(11) RESURSE CONSUMATE
								<br />
								<b>Resurse nelimitate</b>
								<br />
								RedHost ofera in prezent unele caracteristici nelimitate (in functie de pachetul de gazduire ales unele
								caracteristici pot fi indicate ca nelimitate precum traficul, adrese de mail sau nume de domenii). Aceasta
								indicatie trebuie luata in considerare in raport cu o utilizare uzuala intr-un mediu shared hosting.
								Ofertele de gazduire in regim de shared hosting (asa cum sunt toate pachetele prezentate pe prima pagina a
								site-ului nostru) implica gazduirea a sute de clienti pe un server fizic iar utilizarea indusa de fiecare
								client in parte trebuie sa fie rezonabila si echitabila in raport cu media de consum caracteristica
								majoritatii clientilor. Astfel daca un client inregistreaza un consum exagerat pe una dintre
								caracteristici vom fi nevoiti sa solicitam incheierea unui contract personalizat sau sa reziliem
								contractul de colaborare desigur cu restituirea platilor efectuate in avans de catre client. Nu putem
								indica un nivel pentru fiecare caracteristica in parte dar spre exemplu un singur cont de client nu poate
								genera terrabytes de trafic sau avea sute de domenii sau mii de adrese de mail pentru ca un asemenea nivel
								de consum este caracteristic unui intreg server dedicat si nu unui cont de shared hosting (care asa cum
								spuneam este unul dintre sutele de conturi de pe server).
								<br />
								<br />
								<b>Limite de resurse</b>
								<br />
								Pe prima pagina a site-ului www.redhost.ro, prezentam limite de procesor, memorie si procese. Aceste
								limite nu trebuie intelese ca niste alocari, ca niste resurse dedicate. Pe de o parte nu putem garanta ca
								in cazul unui varf de trafic pe site-ul dvs, acele resurse vor fi integral disponibile (de regula vor fi
								pentru ca serverul nu este utilizat practic niciodata la 100% din capacitate dar nu se pot oferi garantii
								in acest sens - pentru asa ceva este necesar un VPS KVM sau Xen sau un server dedicat). Pe de alta parte
								aceste limite sunt oferite pentru a acomoda varfuri ocazionale de trafic. In cazul in care contul de
								gazduire utilizeaza in mod prelungit sau constant un volum de resurse comparabil cu cel maxim, ne rezervam
								dreptul de a solicita negocierea unui pachet personalizat (de regula de tip semi-dedicat) sau rezilierea
								contractului (desigur cu restituirea sumei platite anticipat de catre client pentru gazduire pentru
								perioada care se reziliaza).
								<br />
								<br />
								Site-urile gazduite nu vor supraincarca serverul prin timpul de procesor consumat, memoria ocupata,
								interogari MySQL, accesari I/O etc.{" "}
								<b>
									In cazul in care un site afecteaza in mod negativ performantele sau stabilitatea de retea sau de server
									ne rezervam dreptul de a suspenda site-ul respectiv. In cazuri de consum foarte elevat suspendarea se
									poate efectua fara o notificare prealabila. Alternativ putem lua decizia mutarii unui cont care
									supraincarca serverul pe un alt server intr-o locatie alternativa fara notificare prealabila.
									<br />
									<br />
									Contul de gazduire este oferit pentru servicii de web hosting si email iar fisierele din cont trebuie
									sa reflecte acest scop. Cu alte cuvinte contul de gazduire nu poate fi folosite pentru filesharing,
									backup al altor resurse etc. De asemenea limita maxim admisa pentru orice fisier din cont este de
									512MB.
									<br />
									<br />
									Dimensiunea recomandata si acceptabila pentru o baza de date este 512MB (nearhivata) si 300.000 de
									randuri (in total). Nu limitam in mod fortat dimensiunea bazei de date (din motive de integritate a
									datelor) dar ne rezervam dreptul de a refuza gazduirea bazelor de date cu dimensiuni semnificativ mai
									mari pe pachetele de shared hosting.
									<br />
									<br />
									In acelasi sens pentru niciun cont de gazduire nu se vor programa prin cron executii de script mai
									frecvent decat odata la 15 minute (frecventa maxima de 4 programari pe ora - de exemplu daca trebuie sa
									programati rularea a 4 scripturi in cel mai scurt timp posibil, acestea trebuiesc programate in minim o
									ora tinand insa cont si de prevederea urmatoare). De asemenea clientul trebuie sa se asigure ca nu se
									vor programa prin cron procese intr-o maniera in care se poate ajunge ca mai multe scripturi sa ruleze
									simultan.
									<br />
									<br />
									Nu se vor trimite prin intermediul unor scripturi mai mult de 200 de mailuri pe ora. Exista o limita de
									250 de mailuri pe ora pe cont.
								</b>
								<br />
								<br />
								Conturile de gazduire nu pot fi utilizate pentru stocarea de backup-uri pentru date din cont sau din afara
								contului.
								<br />
								<br />
								(12) BACKUP
								<br />
								Firma noastra face backupuri zilnice (in general pe timpul noptii). Backupul acopera ultimele 15 zile.
								Desi facem eforturi deosebite pentru a asigura existenta si integritatea acestor backupuri, acest serviciu
								nu face obiectului unei garantii.
								<br />
								<br />
								Backup-ul este disponibil in cPanel, sectiunea JetBackup. Utilizarea functiei de restaurare este gratuita
								dar trebuie utilizata intr-o maniera rezonabila si justificata. De asemenea oferim asistenta si informatii
								in mod gratuit pentru utilizarea acestuia. In cazul in care clientul ne va solicita noua sa efectuam
								restore-ul aceasta operatiune va fi taxata cu 25 Euro + TVA / restaurare.
								<br />
								(13) SUSPENDARE / REVOCARE NUME DE DOMENII
								<br />
								In cazul in care registrarul sau registrul de nume de domenii, suspenda sau revoca un nume de domeniu
								(spre exemplu in urma unei reclamatii de copyright infringement), furnizorul nu va fi considerat
								responsabil de aceasta situatie si nici nu va obligat sa restituie utilizatorului sumele percepute pentru
								respectivul nume de domeniu. Utilizatorul declara ca intelege ca furnizorul nu poate exercita niciun
								control si nicio influenta asupra un registrar sau a unui registru de domenii.
								<br />
								<br />
								<b>
									ATENTIE: clientii ar trebui sa-si genereze propriile backupuri din cPanel -&gt; Backups -&gt; Download
									or Generate a Full Website Backup. In urma acestei operatiuni va rezulta un fisier (accesibil pe baza
									de link din pagina de "Download or generate a full website backup") care ar trebui descarcat de catre
									client pe calculatorul propriu si pastrat cu grija. Un asemenea backup ar trebui facut in prealabil de
									catre client ori de cate ori se efectueaza un update semnificativ la site. In cazul unei compromiteri,
									vom solicita fisierul de backup pe care il putem restaura.
								</b>
								<br />
								<br />
								ALTE PRECIZARI
								<br />
								<ul style={{ paddingLeft: "15px" }}>
									<li>
										Nu oferim acces remote MySQL. Conturile de gazduire beneficiaza de phpMyAdmin cu care va puteti
										structura, popula si administra baza de date.
									</li>
								</ul>
								INCALCAREA REGULILOR DE MAI SUS POATE CONDUCE LA SUSPENDAREA ACCESULUI LA SITE-UL RESPECTIV, LA
								SUSPENDAREA CONTULUI SAU LA INCETAREA IMEDIATA A COLABORARII. IN CAZUL SUSPENDARII SITE-ULUI/CONTULUI,
								ACESTA VA FI REACTIVAT DOAR DUPA INLATURAREA CAUZEI CARE A CONDUS LA SUSPENDARE SI DOAR LA PRIMA
								INCALCARE.
								<br />
								<br />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

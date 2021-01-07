import React from "react";
import bemCssModules from "bem-css-modules";

import { default as FAQStyles } from "./FAQ.module.scss";

const style = bemCssModules(FAQStyles);

export default function FAQ() {
  return (
    <section id="faq" className={style()}>
      <h1 className={style("title")}>
        ABC przyszłych nowożeńców <br /> Co powinniście wiedzieć na dobry
        początek współpracy z KC Wedding?
      </h1>
      <h3 className={style("description")}>
        Organizacja ślubu i wesela to ogromna ilość różnych pytań i wątpliwości.
        Zdecydowanie łatwiej jest przez to przejść, gdy mamy wsparcie w postaci
        doświadczenia i merytorycznej wiedzy specjalisty. Takim z całą pewnością
        jest właśnie konsultant ślubny. I tutaj również nasuwa się wiele pytań.
        Funkcja konsultanta ślubnego jest wciąż nie do końca oczywista dla wielu
        osób. Postanowiłam zebrać kilka najczęstszych pytań, które padają w moim
        pierwszym kontakcie z przyszłymi nowożeńcami – i odpowiedzieć na nie na
        tyle wyczerpująco, żebyście mieli pełen obraz sytuacji.
        <br />
        Powinno ułatwić to Wam decyzję o umówieniu się na spotkanie.
      </h3>
      <h2 className={style("question")}>
        1. Dla kogo dedykowana jest usługa konsultanta ślubnego?
      </h2>
      <h4 className={style("answer")}>
        W zasadzie: dla każdego. Nieprawdą jest, że tylko i wyłącznie dla osób
        zamożnych czy dla tych skrajnie zapracowanych. Konsultant ślubny to
        odciążenie i wsparcie dla tych z Was, którzy lubią mieć wszystko pod
        kontrolą ale niekoniecznie są zorganizowani. Również dla tych, którzy
        potrzebują merytorycznego wsparcia w tworzeniu swoich wizji.
        <br />
        Konsultant ślubny to rozwiązanie idealne, jeśli lubicie czuć się
        doskonale przygotowani na każdą sytuację. Taka współpraca ma zapewnić
        Wam błogi spokój, podczas gdy przedślubny harmonogram pęka w szwach.
        Zdejmuję z Was ciężar skrupulatnego planowania i przewidywania, zdając
        się na swoje doświadczenie i wiedzę.
      </h4>
      <h2 className={style("question")}>
        2. Na jakim etapie przedślubnych przygotowań – możecie zdecydować się na
        wsparcie konsultanta ślubnego?
      </h2>
      <h4 className={style("answer")}>
        {" "}
        Na każdym. Konsultant ślubny zajmuje się organizacją ślubu i/lub wesela
        – od każdego etapu przygotowań. Możemy podjąć współpracę na samym
        starcie, rozpoczynając od „zera”. Mogę również otoczyć Was wsparciem i
        opieką w nieco późniejszym momencie, gdy uznacie że zaszła taka
        potrzeba. Np. planujecie ślub i wesele, nie macie jeszcze poczynionych
        żadnych kroków. Rozpoczynamy współpracę i odtąd prowadzę organizację
        Waszego dnia od samiutkich podstaw, po drobniutkie detale. Zajmuję się
        wszystkimi Waszymi sprawami, do samego końca.
      </h4>
      <h2 className={style("question")}>
        3. W czym może wyręczyć Was konsultant ślubny podczas organizacji ślubu?
      </h2>
      <h4 className={style("answer")}>
        Tutaj nie ma jednoznacznej odpowiedzi. Nie istnieje również uniwersalna
        lista takich spraw czy tematów. Każda Para Młoda to zupełnie odrębny,
        niepowtarzalny przypadek. Taki przypadek rozpatruję naprawdę mocno
        indywidualnie, dostosowując potrzebne działania – do sytuacji i ludzi. W
        skrócie? Zajmuję się wszystkim tym, czym zająć się trzeba – a Wy nie
        macie czasu, ochoty lub kompetencji.
        <br />
        Np. odwiedzam w Waszym imieniu potencjalne miejsca na uroczystość i
        eliminuję te, które nie spełniają Waszych wymogów. Zajmuję się również
        zamówieniami papeterii, dodatków, kreowaniem wizji dekoracji i
        negocjowaniem jej z wykonawcami usługi. Jeśli zachodzi taka chęć i
        potrzeba – uczestniczę w przymiarkach sukni ślubnej, garnituru.
        Sprawdzam umowy z usługodawcami przed podpisaniem ich przez Was,
        negocjuję ich poprawki oraz spersonalizowaną ofertę.
      </h4>
      <h2 className={style("question")}>
        4. Czy konsultant ślubny współpracuje tylko ze „swoimi” usługodawcami?
      </h2>
      <h4 className={style("answer")}>
        To jeden z najczęściej krążących mitów. Owszem, każdy konsultant ślubny
        tworzy sobie coś na kształt bazy sprawdzonych usługodawców. Takich, z
        którymi miałam okazję już współpracować i uważam ich za godnych zaufania
        profesjonalistów. Równolegle jednak cały czas poznaję nowych, nierzadko
        bazuję na rekomendacjach innych – zawsze jednak za wyznacznik biorę
        sobie rzetelne podejście do klienta. Dlatego też jestem otwarta na nowe
        kontakty, nowe pomysły i nowe współprace.
      </h4>
      <h2 className={style("question")}>
        5. Na czym polega koordynacja dnia ślubu?
      </h2>
      <h4 className={style("answer")}>
        Konsultant ślubny osobiście czuwa nad przebiegiem każdego punktu
        ślubnego harmonogramu. Koordynuje montaż dekoracji, candy baru, rozkłada
        winietki czy inne elementy na życzenie Pary Młodej. Dzień ślubu to
        moment na tyle szczególny, że jeśli zabraknie tutaj właśnie trzymania
        ręki na pulsie przez kogoś doświadczonego – może wkraść się niepotrzebny
        nikomu chaos.
        <br />
        Istotną informacją jest z całą pewnością fakt, że koordynacja dnia ślubu
        to również usługa niezależna. Nie musi być integralna z kompleksową
        organizacją uroczystości. Może zostać wybrana również przez te Pary
        Młode, które samodzielnie zajmowały się organizacją a na samym finiszu –
        chcą skupić się już tylko i wyłącznie na emocjach. Dlatego powierzają
        zadania zdecydowanie bardziej przyziemne, profesjonalistom.
      </h4>
      <h2 className={style("question")}>
        6. Czy konsultant ślubny jest dla Was na wyłączność w dniu ślubu?
      </h2>
      <h4 className={style("answer")}>
        Nie wyobrażam sobie koordynować dwóch uroczystości w jeden dzień – lub
        nawet w jeden weekend. Daję Wam gwarancję, że w Waszym tygodniu ślubnym,
        jestem dla Was absolutnie na wyłączność, gotowa do działania na
        maksymalnych obrotach, w całkowitym skupieniu.
      </h4>
      <h2 className={style("question")}>
        7. Jak wygląda kontakt z konsultantem ślubnym? W jakiej formie odbywa
        się komunikacja?
      </h2>
      <h4 className={style("answer")}>
        To bardzo ważne pytanie. Odpowiedź na nie jest dość niejednoznaczna: to
        zależy od przyszłych nowożeńców, ich potrzeb i możliwości. Jeśli
        preferujecie kontakt e-mailowy, uzgodnimy właśnie taką drogę
        komunikacji. Jeśli zdecydowanie bliższa jest Wam forma telefoniczna –
        będziemy kontaktować się w ten sposób.
      </h4>
      <h2 className={style("question")}>
        8. Jak wygląda proces podjęcia współpracy z konsultantem ślubnym?
      </h2>
      <h4 className={style("answer")}>
        Najpierw mamy Wasz pierwszy kontakt. Piszecie do mnie wiadomość e-mail,
        w której opowiadacie o swoich planach i wizjach, o oczekiwaniach i
        wymogach. Jeśli jest już ustalony termin Waszej ceremonii – podajecie
        go, dzięki czemu mogę od razu zweryfikować swoją dostępność i przejść do
        propozycji spotkania zapoznawczego. W obecnych czasach nieoceniona
        okazuje się być również forma zdalna, na którą jestem jak najbardziej
        otwarta. Możemy spotkać się zarówno przy kawie w przyjemnych
        okolicznościach, jak i przed monitorem – wystarczy, że określicie swoje
        preferencje. Co najważniejsze: spotkanie jest niezobowiązujące.
        <br />
        Po nim możemy rozmawiać już nieco konkretniej. Przygotuję Wam konkretnie
        wycenioną ofertę. Jeśli ją zaakceptujecie - w następnej kolejności
        omawiamy zarówno samą umowę, transze płatności, jak również zarys
        naszych dalszych działań. Po dopięciu wszelkich formalności z umową –
        mogę przedstawić gotowy harmonogram organizacji i budżet całego
        przedsięwzięcia. Dalsza częstotliwość i formy spotkań oraz kontaktu –
        uzależnione będą od naszych ustaleń w tym temacie.
      </h4>
      <h2 className={style("question")}>
        9. Ile kosztuje usługa konsultanta ślubnego?
      </h2>
      <h4 className={style("answer")}>
        Być może Was rozczaruję: tutaj nie ma miejsca na konkretną cenę. Każda
        umowa to projekt szyty na miarę. Zakres moich obowiązków ustalamy
        wspólnie – to podstawa naszych dalszych działań. Zazwyczaj nie zdarzają
        się dwie identyczne umowy, tak samo jak nieczęsto powtarzają się
        dokładnie te same stawki. Mogę Was zapewnić z tego miejsca, że finalne
        wynagrodzenie dla mnie – będzie efektem dokładnych wyliczeń tego, co
        jest do zrobienia oraz Waszych osobistych oczekiwań w stosunku do mnie.
        Gwarantuję rzetelność w ocenie tego, ile czasu i pracy zajmie wspólne
        działanie na Waszą rzecz. I najważniejsze: zawsze uważnie Was słucham,
        finalna oferta to efekt rozmów i zrozumienia zarówno Waszych potrzeb,
        jak i możliwości. Również finansowych.
        <br />
        Mam nadzieję, że najważniejsze wątpliwości – zostały rozwiane!
        <br />
        Czekam teraz na Wasz kontakt.
        <br />
        (tutaj wpisz adres e-mail firmowy)
      </h4>
    </section>
  );
}

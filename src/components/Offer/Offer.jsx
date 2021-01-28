import React, { useState } from "react";
import bemCssModules from "bem-css-modules";

import CardItem from "./subComponent/CardItem";

import { default as OfferStyles } from "./Offer.module.scss";

import img1 from "../../assets/offer1.jpg";
import img1_2 from "../../assets/16_9.jpg";
import img2 from "../../assets/offer2.jpg";
import img3 from "../../assets/offer3.jpg";
import img4 from "../../assets/offer4.jpg";
import img5 from "../../assets/offer5.jpg";
import img6 from "../../assets/offer6.jpg";
import InstagramEmbed from "react-instagram-embed";


const style = bemCssModules(OfferStyles);


function Offer() {


  return (
    <div id="offer" className={style()}>

      <h1 className={style("title")}>
        Czym dokładnie się zajmuję? <br /> Co mogę dla Was zorganizować?
      </h1>
      <div className={style("container")}>
        <div className={style("wrapper")}>
          <ul className={style("items")}>
            <CardItem
              src={img1}
              src2={img1_2}
              title="Kompleksowa organizacja ślubu i wesela."
              path="/"
              clsName="item__pic-wrap"
              text="Kompleksowa organizacja ślubu i wesela. Zajmuję się organizacją uroczystości od
              pierwszych kroków – do samej koordynacji dnia ślubu i zakończenia imprezy. Jestem
              odpowiedzialna za każdy etap przedślubnych działań, współpracując ściśle z Parą Młodą i
              wybranymi usługodawcami. W tym przypadku możecie oddelegować dla mnie znakomitą
              większość okołoślubnych spraw, pozostając spokojni o ich przebieg. Podstawą mojej
              pracy jest ramowy budżet (zaakceptowany przez Was) oraz szczegółowa wizja (ustalana
              wspólnie), jak uroczystość ma wyglądać i przebiegać."
            />
            <CardItem
              src={img2}
              src2={img1_2}
              title="Częściowa organizacja ślubu i wesela."
              path="/"
              clsName="item__pic-wrap"
              text="Częściowa organizacja ślubu i wesela. Dotarliście do takiego momentu organizacji
              ślubu, w którym decyzja o zatrudnieniu specjalisty – okazuje się już być niezbędną.
              Powody mogą być różne. Niezależnie od nich, pozostaję do Waszej dyspozycji i jestem
              gotowa podjąć się kontynuacji Waszych dotychczasowych działań. Moje wsparcie
              możliwe jest w każdym momencie, niezależnie od wyznaczonego terminu uroczystości."

            />
            <CardItem
              src={img3}
              src2={img1_2}
              title="Koordynacja dnia ślubu i wesela."
              path="/"
              clsName="item__pic-wrap"
              text="Koordynacja dnia ślubu i wesela. To usługa zarówno integralna z usługą organizacji
              ślubu, jak i zupełnie niezależna. Skrojona na Waszą miarę, profesjonalna opieka w dniu
              uroczystości. Osobiście czuwam nad przygotowanym scenariuszem i dbam o to, żeby
              każdy z usługodawców spisał się na medal. Jestem wsparciem estetycznym, logistycznym,
              twórczym i nierzadko duchowym. Sprawuję pieczę nad wszystkim, co wówczas tego
              wymaga."
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src={img4}
              src2={img1_2}
              title="Ślub w plenerze. Ślub na plaży."
              path="/"
              clsName="item__pic-wrap"
              text="Ślub w plenerze. Ślub na plaży. Organizacja ceremonii ślubnej w plenerze – jest coraz
              częstszą praktyką. Przyszli nowożeńcy bardzo często stawiają na takie rozwiązanie,
              dokonując coraz bardziej śmiałych wyborów. Jestem zagorzałą zwolenniczką
              oryginalnych pomysłów. Dlatego z przyjemnością zarówno zorganizuję, jak i skoordynuję
              Wasze zaślubiny w plenerze. Niezależnie od tego, jaką macie wizję – jestem gotowa ją
              współtworzyć."
            />

            <CardItem
              src={img5}
              src2={img1_2}
              title="Ślub międzynarodowy."
              path="/"
              clsName="item__pic-wrap"
              text="Ślub międzynarodowy. Doskonale rozumiem, jak wiele pracy może kosztować
              organizacja ceremonii ślubnej, w której mają spotkać się dwie zupełnie różne kultury.
              Elastyczność i doświadczenie są tutaj kluczowe. To naturalne, że niezastąpione jest więc
              wsparcie profesjonalisty. Wtedy wkraczam ja i zajmuję się wszystkim tym, czym zająć się
              trzeba a Wy niekoniecznie możecie."
            />
            <CardItem
              src={img6}
              src2={img1_2}
              title="Przyjęcia okolicznościowe."
              path="/"
              clsName="item__pic-wrap"
              text="Przyjęcia okolicznościowe. Każda okazja wymaga odpowiedniej oprawy. Doskonale to
              rozumiem i wspieram! Zajmuję się również kompleksową oraz częściową organizacją
              przyjęć o charakterze nieślubnym. Urodziny, wieczór panieński, komunia, chrzest św.,
              jubileusz, baby shower a może impreza firmowa? Zależnie od potrzeb i pomysłów –
              stworzę możliwość celebrowania w doskonałej scenerii."
            />
          </ul>
        </div>
      </div>
      <InstagramEmbed
  clientAccessToken='<appId>|<clientToken>'
  url='https://instagr.am/p/Zw9o4/'
  maxWidth={375}
  hideCaption={false}
  containerTagName='div'
  injectScript
  protocol=''
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
    </div>
  );
}

export default Offer;





// import React, { useState } from "react";
// import bemCssModules from "bem-css-modules";

// import CardItem from "./subComponent/CardItem";

// import { default as OfferStyles } from "./Offer.module.scss";

// import img1 from "../../assets/square.jpg";
// import img2 from "../../assets/square.jpg";
// import img3 from "../../assets/square.jpg";
// import img4 from "../../assets/square2.jpg";
// import img5 from "../../assets/square2.jpg";
// import img6 from "../../assets/square2.jpg";


// const style = bemCssModules(OfferStyles);


// function Offer() {


//   return (
//     <div id="offer" className={style()}>

//       <h1 className={style("title")}>
//         Czym dokładnie się zajmuję? <br /> Co mogę dla Was zorganizować?
//       </h1>
//       <div className={style("container")}>
//         <div className={style("wrapper")}>
//           <ul className={style("items")}>
//             <CardItem
//               src={img1}
//               title="Kompleksowa organizacja ślubu i wesela."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Kompleksowa organizacja ślubu i wesela. Zajmuję się organizacją uroczystości od
//               pierwszych kroków – do samej koordynacji dnia ślubu i zakończenia imprezy. Jestem
//               odpowiedzialna za każdy etap przedślubnych działań, współpracując ściśle z Parą Młodą i
//               wybranymi usługodawcami. W tym przypadku możecie oddelegować dla mnie znakomitą
//               większość okołoślubnych spraw, pozostając spokojni o ich przebieg. Podstawą mojej
//               pracy jest ramowy budżet (zaakceptowany przez Was) oraz szczegółowa wizja (ustalana
//               wspólnie), jak uroczystość ma wyglądać i przebiegać."
//             />
//             <CardItem
//               src={img2}
//               title="Częściowa organizacja ślubu i wesela."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Częściowa organizacja ślubu i wesela. Dotarliście do takiego momentu organizacji
//               ślubu, w którym decyzja o zatrudnieniu specjalisty – okazuje się już być niezbędną.
//               Powody mogą być różne. Niezależnie od nich, pozostaję do Waszej dyspozycji i jestem
//               gotowa podjąć się kontynuacji Waszych dotychczasowych działań. Moje wsparcie
//               możliwe jest w każdym momencie, niezależnie od wyznaczonego terminu uroczystości."

//             />
//             <CardItem
//               src={img3}
//               title="Koordynacja dnia ślubu i wesela."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Koordynacja dnia ślubu i wesela. To usługa zarówno integralna z usługą organizacji
//               ślubu, jak i zupełnie niezależna. Skrojona na Waszą miarę, profesjonalna opieka w dniu
//               uroczystości. Osobiście czuwam nad przygotowanym scenariuszem i dbam o to, żeby
//               każdy z usługodawców spisał się na medal. Jestem wsparciem estetycznym, logistycznym,
//               twórczym i nierzadko duchowym. Sprawuję pieczę nad wszystkim, co wówczas tego
//               wymaga."
//             />
//           </ul>

//           <ul className="cards__items">
//             <CardItem
//               src={img4}
//               title="Ślub w plenerze. Ślub na plaży."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Ślub w plenerze. Ślub na plaży. Organizacja ceremonii ślubnej w plenerze – jest coraz
//               częstszą praktyką. Przyszli nowożeńcy bardzo często stawiają na takie rozwiązanie,
//               dokonując coraz bardziej śmiałych wyborów. Jestem zagorzałą zwolenniczką
//               oryginalnych pomysłów. Dlatego z przyjemnością zarówno zorganizuję, jak i skoordynuję
//               Wasze zaślubiny w plenerze. Niezależnie od tego, jaką macie wizję – jestem gotowa ją
//               współtworzyć."
//             />

//             <CardItem
//               src={img5}
//               title="Ślub międzynarodowy."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Ślub międzynarodowy. Doskonale rozumiem, jak wiele pracy może kosztować
//               organizacja ceremonii ślubnej, w której mają spotkać się dwie zupełnie różne kultury.
//               Elastyczność i doświadczenie są tutaj kluczowe. To naturalne, że niezastąpione jest więc
//               wsparcie profesjonalisty. Wtedy wkraczam ja i zajmuję się wszystkim tym, czym zająć się
//               trzeba a Wy niekoniecznie możecie."
//             />
//             <CardItem
//               src={img6}
//               title="Przyjęcia okolicznościowe."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Przyjęcia okolicznościowe. Każda okazja wymaga odpowiedniej oprawy. Doskonale to
//               rozumiem i wspieram! Zajmuję się również kompleksową oraz częściową organizacją
//               przyjęć o charakterze nieślubnym. Urodziny, wieczór panieński, komunia, chrzest św.,
//               jubileusz, baby shower a może impreza firmowa? Zależnie od potrzeb i pomysłów –
//               stworzę możliwość celebrowania w doskonałej scenerii."
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Offer;

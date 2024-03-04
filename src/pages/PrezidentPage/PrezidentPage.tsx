import { FC } from 'react';

import HorvathAttila from 'assets/images/horvathattila.jpg';

import './PrezidentPage.scss';

export const PrezidentPage: FC = () => (
  <div>
    <div className={'InMemoriam mb-5'}>
      <div className={'PageBorder'} />
      <h1>Horváth Attila</h1>
      <div>
        <img alt={'Horváth Attila'} src={HorvathAttila} />
      </div>
      <p>1960. május 1-jén született Fertőhomokon.</p>
      <p>
        Szülei otthon csak horvátul beszéltek, így az óvodában tanult meg magyarul. Az általános iskola alsó tagozatát
        Fertőhomokon végezte, a felső tagozatot a hegykői iskolában. A soproni Széchenyi István Gimnáziumban
        érettségizett 1978-ban. 1982-ben szerzett diplomát a Kertészeti Egyetem Kertészeti Főiskolai Karán,
        szőlész-borász szakon. A SOP-VIN Kft. egyik tulajdonosa volt, ahol borászként dolgozott. 1981-ben megnősült, két
        fia született. Ádám 1983-ban, Zsolt 1984-ben.
      </p>
      <p>
        Több mint harminc éven át, 1990-től haláláig Fertőhomok társadalmi megbízatású polgármestere volt, s mint a
        település vezetője számos beruházás kezdeményezőjeként és koordinátoraként járult hozzá Fertőhomok
        fejlesztéséhez.
      </p>
      <p>
        Kiemelkedő szerepet játszott a horvát hagyományok újraélesztésében és továbbvitelében. Így született meg a
        Tambura zenekar 1999-ben, majd 2003-ban a tánccsoport, 2004-ben pedig a Kajkavci Horvát Kulturális Egyesület.
        Kezdeményezte a horvát testvértelepülési kapcsolat kialakítását. 2000-2019 között minden évben személyes
        találkozásra is sor került az együttműködés keretében. 2006-ban és 2016-ban a helyi közösség bevonásával
        valósította meg a Fertőhomoki lakodalmast.
      </p>
      <p>
        Vezetőségi tagja volt a Fertő-táj Világörökség Magyar Tanácsa Egyesületnek, elnöke a Kajkavci Horvát Kulturális
        Egyesületnek, tagja a Megyei Horvát Önkormányzatnak. Nevéhez kötődik a Fertőhomoki tájház létrehozása és 2001-es
        megnyitása, majd a tájház gazdag programkínálatának kialakítása, és a ház későbbi fejlesztései. Az általa
        irányított Fertőhomoki Tájház 2004-ben a Magyarországi Tájházak Szövetsége első alkalommal meghirdetett
        pályázatán elnyerte Az Év Tájháza elismerést. Résztvevője volt a Tájházszövetség első országos találkozójának
        (Noszvaj, 2003.), ezt követően hamarosan elnökségi tagként, majd 2019-től tiszteletbeli elnökségi tagként
        végezte a munkáját a tájházas közösségekért.
      </p>
      <p>
        Közel két évtizeden át a fertőhomoki egyházközség vezetőjeként, majd tagjaként őrzője, továbbadója és támogatója
        volt a helyi hitéletnek. 2001-ben II. János Páltól pápai áldást kapott.
      </p>
      <p>
        A közösségért, embertársaiért végzett munkája elismeréséül 2002-ben Fertőhomok Község Díszpolgára lett. 2020-ban
        Fertő-tájért díjban részesült.
      </p>
      <p>2021. március 22-én hunyt el.</p>
      <div className={'text-end my-5'}>
        <i>
          <div>„Nem múlnak ők el, kik szívünkben élnek,</div>
          <div>Hiába szállnak árnyak, álmok, évek.</div>
          <div>Ők itt maradnak bennünk csöndesen még,</div>
          <div>Hiszen hazánk nekünk a végtelenség.”</div>
        </i>
        <div className={'mt-2'}>Juhász Gyula</div>
      </div>
    </div>
  </div>
);

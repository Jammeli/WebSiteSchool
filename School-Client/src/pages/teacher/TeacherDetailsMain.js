import React from "react";
import Breadcrumb from "../../components/Breadcrumb";


const TeacherDetailsMain = () => {
  return (
    <main>
      <Breadcrumb title="Mot de la direction" subTitle="Mot de la direction" />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    <h4>Chers parents et tuteurs,</h4>
                    <p>
                      Il nous fait grand plaisir de vous souhaiter la bienvenue
                      à l’École Canadienne de Sousse. Nous sommes fiers d’offrir
                      un enseignement de qualité en faisant appel à l’innovation
                      pédagogique provenant du Canada.
                    </p>
                    <p>
                      L’École Canadienne de Sousse a pour ambition première de
                      créer un milieu propice à l’épanouissement et au bien-être
                      de tous les élèves. C’est en offrant un environnement
                      d’apprentissage accueillant, sécuritaire, dynamique et
                      créatif que nous favorisons la participation active des
                      élèves dans leurs apprentissages. Nous développons et
                      encourageons la curiosité intellectuelle, l’esprit
                      critique et l’excellence scolaire de votre enfant en
                      faisant appel à une pédagogie différenciée qui met votre
                      enfant au centre de ses apprentissages.
                    </p>
                    <p>
                      C’est en croyant en nos élèves que nous élevons leur
                      motivation et leur permettons de réaliser leur plein
                      potentiel. Les difficultés qu’ils rencontrent sont celles
                      de toute l’équipe éducative qui collabore à transformer
                      ces difficultés en défis accessibles.
                    </p>
                    <p>
                      Le plein potentiel d’un enfant ne serait réalisable sans
                      le recours aux valeurs fondamentales et sociétales de
                      responsabilité, solidarité et engagement social. Nous
                      œuvrons à développer chez les élèves ces valeurs et bien
                      d’autres, en parallèle aux apprentissages scolaires et par
                      le biais de projets et d’actions variées.
                    </p>
                    <p>
                      Avec votre appui et l’appui de la communauté, nous
                      souhaitons amener les élèves à développer les compétences,
                      connaissances et attitudes nécessaires à relever les défis
                      de la société de demain.
                    </p>
                    <p>
                      Nous vous souhaitons à vous et à vos enfants une belle
                      année scolaire !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeacherDetailsMain;

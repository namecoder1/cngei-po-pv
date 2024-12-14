import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="my-10">
      <div className="pt-10">
        <h1 className="font-semibold text-3xl mb-1">Progressione Orizzontale</h1>
        <p>
          La Progressione Personale in Reparto è divisa in due differenti percorsi, denominati Progressione Orizzontale (PO) e Progressione Verticale (PV). 
          Questi percorsi, che ogni Esploratore segue individualmente, prevedono l’acquisizione delle competenze previste 
          dal presente regolamento ed il rilascio di brevetti e distintivi al raggiungimento delle tracce di PV e al conseguimento delle Specialità (PO).
        </p>
      </div>
      <div className="mt-16">
        <h2 className="font-semibold text-xl">Cosa è?</h2>
        <ul className="list-decimal ml-4">
          <li>
            <p>
              La Progressione Orizzontale (PO) è lo sviluppo curioso e attivo dei propri 
              saperi e delle proprie abilità, in accordo con le proprie inclinazioni e passioni
            </p>
          </li>
          <li>
            <p>
              La PO in Branca E si articola in una serie di specialità suddivise in tecniche scout
              (specialità a sfondo verde) e tecniche relative agli hobby e alle passioni dell’Esploratore 
              non strettamente legati alla vita scout (specialità a sfondo giallo). Ciascuna specialità è 
              poi suddivisa, in base al colore del bordo, nelle seguenti quattro aree tratte dal PEG: 
              <ul className="list-disc ml-4">
                  <li>
                    Impegno Civile (bordo rosso)
                  </li>
                  <li>
                    Carattere (bordo blu)                
                  </li>
                  <li>
                    Corporeità (bordo verde)
                  </li>
                  <li>
                    Creatività (bordo giallo)
                  </li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Al compimento delle prove previste per ciascuna specialità, l’Esploratore, durante una Cerimonia, 
              riceve il brevetto ed il distintivo corrispondenti.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-4 my-10">
        <Button>
          <Link href='/progressione-orizzontale'>Progressione Orizzontale</Link>
        </Button>
        <Button asChild>
          <Link href='/progressione-verticale'>Progressione Verticale</Link>
        </Button>
      </div>
    </section>
  );
}

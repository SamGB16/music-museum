import Link from "next/link";
import ExhibitHero from "@/components/content/ExhibitHero";
import ArtifactDisplay from "@/components/content/ArtifactDisplay";
import Panel from "@/components/ui/Panel";

export default function CdPage() {
  return (
    <main>
      <ExhibitHero
        era="CD & Discman"
        dateRange="1980s – 2000s"
        description="Digital audio arrived in a silver disc the size of your palm. No hiss, no warping, no side B — just perfect sound, on demand. The CD triggered the greatest consumer music boom in history and the Discman made it portable."
      />
      <Panel>
        <ArtifactDisplay
          name="Compact Disc / Sony Discman"
          keyFact="The compact disc was introduced commercially in 1982, co-developed by Sony and Philips. It could hold 74 minutes of audio — reportedly enough to fit Beethoven's Ninth Symphony."
          description="The CD rewrote the economics of music. Albums were repurchased in the new format, back catalogues surged, and record labels posted record profits. Then the Discman arrived and portable digital listening became possible. At its peak in 1999, the industry sold 2.4 billion CDs in a single year."
          stat="2.4B CDs sold in peak year 1999"
        />
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
          >
            ← Back to Exhibition
          </Link>
        </div>
      </Panel>
    </main>
  );
}

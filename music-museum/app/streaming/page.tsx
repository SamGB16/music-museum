import Link from "next/link";
import ExhibitHero from "@/components/content/ExhibitHero";
import ArtifactDisplay from "@/components/content/ArtifactDisplay";
import Panel from "@/components/ui/Panel";

export default function StreamingPage() {
  return (
    <main>
      <ExhibitHero
        era="Streaming"
        dateRange="2008 – Present"
        description="Every song ever recorded. Available everywhere. Instantly. Ownership gave way to access, the album gave way to the algorithm, and the collector gave way to the curator. We are still living this revolution — and its end is not yet in sight."
      />
      <Panel>
        <ArtifactDisplay
          name="Spotify"
          keyFact="Spotify launched on October 7, 2008 in Sweden, founded by Daniel Ek and Martin Lorentzon. It offered legal, free streaming supported by ads — a direct answer to piracy."
          description="Streaming did not just change how we listen. It changed what gets made, how artists are paid, and which songs the world hears. Algorithms surface the obscure and flatten the global. A bedroom producer in Lagos and a major label act in New York compete on the same playlist. The curator is now a machine — and it knows your taste better than you do."
          stat="600M+ Spotify users worldwide"
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

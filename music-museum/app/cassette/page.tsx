import Link from "next/link";
import ExhibitHero from "@/components/content/ExhibitHero";
import ArtifactDisplay from "@/components/content/ArtifactDisplay";
import Panel from "@/components/ui/Panel";

export default function CassettePage() {
  return (
    <main>
      <ExhibitHero
        era="Cassette & Walkman"
        dateRange="1963 – 1990s"
        description="Music escaped the living room. The compact cassette made recording and carrying music possible for everyone, and the Walkman turned listening into a personal, portable act. The mix tape became the most intimate form of communication a generation had ever known."
      />
      <Panel>
        <ArtifactDisplay
          name="Sony Walkman TPS-L2"
          keyFact="The Sony Walkman TPS-L2 was released on July 1, 1979 in Japan, forever changing how people experienced music in public spaces."
          description="The Walkman was an act of radical individualism. It gave listeners a private soundtrack to the world around them. Suddenly, commutes were concerts and city streets had a score. Over 400 million units later, the Walkman had permanently altered the relationship between people and music."
          stat="400M+ Walkmans sold worldwide"
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

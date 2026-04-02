import Link from "next/link";
import ExhibitHero from "@/components/content/ExhibitHero";
import ArtifactDisplay from "@/components/content/ArtifactDisplay";
import Panel from "@/components/ui/Panel";

export default function IpodPage() {
  return (
    <main>
      <ExhibitHero
        era="MP3 & iPod"
        dateRange="1990s – 2000s"
        description="A thousand songs in your pocket. The MP3 format compressed an album to megabytes and Napster proved the world was ready to share them all. Apple arrived and made the chaos elegant. The iPod did not just change music — it changed Apple."
      />
      <Panel>
        <ArtifactDisplay
          name="Apple iPod (1st Generation, 2001)"
          keyFact='"1,000 songs in your pocket" — Steve Jobs introduced the first iPod on October 23, 2001, with 5GB of storage and a mechanical scroll wheel.'
          description="The iPod was a design statement as much as a music player. Its scroll wheel, its white silhouette, its click — all iconic. But its deeper impact was cultural: it accelerated the unbundling of the album. When every song cost 99 cents, listeners built playlists instead of collections. The era of the single had returned."
          stat="450M+ iPods sold before discontinuation"
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

import Panel from "@/components/ui/Panel";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main>
      <Panel>
        <SectionHeading
          heading="Music Consumption Museum"
          subtitle="A journey through the technologies that changed how we listen."
        />
        <div className="grid grid-cols-1 gap-px border border-foreground/10 sm:grid-cols-3">
          <Card
            title="Vinyl"
            subtitle="1877 – 1970s"
            description="The phonograph and the long-playing record defined the first century of recorded music."
          />
          <Card
            title="Cassette"
            subtitle="1970s – 1990s"
            description="Portable, personal, and rebellious. The Walkman put music in your pocket."
          />
          <Card
            title="CD"
            subtitle="1980s – 2000s"
            description="Digital clarity and skip-proof playback made the compact disc the dominant format."
          />
        </div>
      </Panel>
    </main>
  );
}

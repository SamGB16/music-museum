interface ArtifactDisplayProps {
  name: string;
  keyFact: string;
  description: string;
  stat: string;
}

export default function ArtifactDisplay({ name, keyFact, description, stat }: ArtifactDisplayProps) {
  return (
    <div className="border border-foreground/10 p-8 flex flex-col gap-6">
      <div className="border-b border-foreground/10 pb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
          Key Artifact
        </p>
        <h2 className="text-2xl font-bold uppercase tracking-tight">{name}</h2>
      </div>
      <p className="text-base leading-relaxed text-foreground/70">{description}</p>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">
            Key Fact
          </p>
          <p className="text-sm leading-relaxed">{keyFact}</p>
        </div>
        <div className="border-t border-foreground/10 pt-4">
          <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">
            Social Proof
          </p>
          <p className="text-sm font-bold">{stat}</p>
        </div>
      </div>
    </div>
  );
}

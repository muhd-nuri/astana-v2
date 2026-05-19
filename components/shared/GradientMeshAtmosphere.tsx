export function GradientMeshAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 animate-mesh-drift-1"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, var(--color-brand-pale), transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 animate-mesh-drift-2 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, var(--color-brand-light), transparent 55%)',
        }}
      />
      <div
        className="absolute inset-0 animate-mesh-drift-3 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 50% 80%, var(--color-brand-mid), transparent 60%)',
        }}
      />
    </div>
  );
}

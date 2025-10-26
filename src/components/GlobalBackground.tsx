import Lightning from "./Lighting";

export function GlobalBackgroud(){
    return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
  <Lightning
    hue={220}
    xOffset={0}
    speed={1}
    intensity={1}
    size={1}
  />
  <div className="absolute inset-0 bg-black/70" />
    </div>
    )
}
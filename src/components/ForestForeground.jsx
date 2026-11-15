// Original SVG scenery, rendered as independent foreground layers.
export default function ForestForeground() {
  return <div className="forest-foreground" aria-hidden="true">
    {['left', 'right'].map((side) => <svg className={`forest-edge forest-${side}`} key={side} viewBox="0 0 520 1000" preserveAspectRatio="none">
      <defs><linearGradient id={`bark-${side}`} x1="0" x2="1"><stop stopColor="#020b0a"/><stop offset=".7" stopColor="#0b221b"/><stop offset="1" stopColor="#172c20"/></linearGradient></defs>
      <path d="M0 0H115Q80 135 140 270Q165 340 124 480Q92 620 145 805L230 1000H0Z" fill={`url(#bark-${side})`}/>
      <path d="M65 390Q158 100 420 45L520 0H380Q170 40 70 180ZM90 610Q190 425 320 400L400 345Q185 345 75 500Z" fill="#081a13"/>
      {Array.from({length:44},(_,i)=>{const x=(i*83)%490,y=(i*137)%320;return <ellipse key={`top-${i}`} cx={x} cy={y-80} rx={55+(i%4)*13} ry={21+(i%3)*9} transform={`rotate(${(i*37)%160} ${x} ${y-80})`} fill={['#06140e','#0b2116','#142c1b','#193422'][i%4]}/>;})}
      {Array.from({length:18},(_,i)=>{const x=(i*71)%360,y=810+(i*43)%210;return <g key={`fern-${i}`} transform={`translate(${x} ${y}) rotate(${-55+(i*17)%110})`}><path d="M0 130Q-20 45 0-70" stroke="#1b3b25" strokeWidth="4" fill="none"/>{Array.from({length:6},(_,j)=><g key={j} transform={`translate(0 ${j*24-55})`}><ellipse cx="-21" cy="-10" rx="30" ry="9" transform="rotate(30 -21 -10)" fill={i%2?'#163922':'#0b2619'}/><ellipse cx="21" cy="-10" rx="30" ry="9" transform="rotate(-30 21 -10)" fill={i%2?'#1c4028':'#10301e'}/></g>)}</g>;})}
    </svg>)}
  </div>;
}

import { useState } from 'react';
import { Mountain } from 'lucide-react';
import { profile } from '../data/profile';
const availablePhotos = import.meta.glob('/public/images/*', { eager: true, query: '?url', import: 'default' });
export default function Portrait({ small = false }) {
 const [missing, setMissing] = useState(!availablePhotos[`/public${profile.photo}`]);
 return <div className={`portrait ${small ? 'small' : ''}`}>{missing ? <div className="portrait-placeholder"><Mountain size={small ? 35 : 80} strokeWidth={0.7}/>{!small && <><span>A face to the ideas.</span><small>Your portrait belongs here</small></>}</div> : <img src={profile.photo} alt={profile.name ? `Portrait of ${profile.name}` : 'Portfolio owner portrait'} onError={() => setMissing(true)} loading="lazy"/>}<div className="portrait-caption"><span className="status-dot"/>Always curious. Always learning.</div></div>;
}

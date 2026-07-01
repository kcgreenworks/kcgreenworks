import { redirect } from 'next/navigation';

export default function SiembraPage() {
  // Cuando alguien entre a /siembra, lo enviará directo a julio
  redirect('/siembra/julio');
}
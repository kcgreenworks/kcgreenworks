import { redirect } from 'next/navigation';
import { getCurrentOrLatestMonthSlug } from './data';

export const dynamic = 'force-dynamic';

export default function SiembraPage() {
  redirect(`/siembra/${getCurrentOrLatestMonthSlug()}`);
}

import { redirect } from 'next/navigation';
import { getCurrentOrLatestMonthSlug } from '../../siembra/data';

export const dynamic = 'force-dynamic';

export default function SiembraPageEn() {
  redirect(`/en/siembra/${getCurrentOrLatestMonthSlug()}`);
}

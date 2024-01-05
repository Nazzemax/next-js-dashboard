import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function Customers({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers('')
    return <CustomersTable query={query} custome={customers} />
}
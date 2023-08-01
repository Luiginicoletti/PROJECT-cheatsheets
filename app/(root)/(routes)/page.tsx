import { Categories } from "@/components/catergoies";
import { SearchInput } from "@/components/search-input"
import { Category } from "@/components/Category"
import { Companions } from "@/components/companions";
import { Companion } from "@/components/Companion";
import Image from "next/image";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}


const RootPage = async ({
  searchParams
}: RootPageProps) => {
  // Instead of querying the database, use the mockData array directly
  const data = Companion.filter((item) => {
    return (
      item.categoryId.toLowerCase() === searchParams.categoryId ||
      item.name.toLowerCase().includes(searchParams.name)
    );
  });

  const categories = []; // Assuming you are not using mock data for categories

  return (
    <div className="h-full p-4 space-y-2 relative" style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", }} >
      <SearchInput />
      <Categories data={Category} />
      <Companions data={data} />
      </div>
    
  );
};

export default RootPage;
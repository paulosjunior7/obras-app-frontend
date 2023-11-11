import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";

interface IProdutoSearchInput {
  formik: any;
  handleProdutoSelect: (productId: number) => void;
}

const GET_PRODUTOS = gql`
  query getProdutos($pagination: PaginationDetailsType, $filter: ProductFilterByInputType, $sort: ProductByInputType ){
  products{
    findall(pagination: $pagination, filter: $filter, sort: $sort){
      items {
        id
        detail
        description
        changeDate
        active
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
`;


export interface IProdutos {
  value: string;
  label: string;
}

export default function ProdutoSearchInput({ formik, handleProdutoSelect }: IProdutoSearchInput) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [GetProdutos, { loading, error, refetch }] = useLazyQuery(GET_PRODUTOS, {
    fetchPolicy: "cache-and-network",
    variables: {
      filter: {
        description: searchTerm,
        active: true,
      },
    },
    onCompleted: (data) => {
      setSearchResults(
        data.products.findall.items.map((item: any) => ({
          value: item.id,
          label: item.description,
        }))
      );
    }
  });

  useEffect(() => {
    refetch();
  }, [searchTerm]);

  useEffect(() => {
    refetch();
  }, []);


  // useEffect(() => {
  //   if (searchTerm.length >= 3) {
  //     const filteredResults = products.filter((option: any) =>
  //       option.description.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setSearchResults(filteredResults as any);
  //   } else {
  //     setSearchResults([]);
  //   }
  // }, [searchTerm]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="w-full relative">
      <input
        type="text"
        id="id_produto"
        name="id_produto"
        value={formik.values.id_produto}
        onChange={(e) => {
          formik.handleChange(e);
          setSearchTerm(e.target.value);

        }}
        placeholder="Digite para pesquisar..."
        className="w-full"
      />
      <MagnifyingGlass size={22} className="absolute right-3 top-2.5 fill-slate-400 stroke-slate-300" />
      {searchResults.length > 0 && (<div className="absolute top-11 border border-gray-300 shadow-md w-full overflow-y-auto bg-white z-40 rounded-md">
        {searchResults.map((result: any) => (
          <div
            key={result.value}
            onClick={() => {
              handleProdutoSelect(result.value)
              setSearchTerm([] as any);
            }}
            className="p-2 cursor-pointer hover:bg-gray-100"
          >
            {result.label}
          </div>
        ))}
      </div>)}
    </div>

  );
}



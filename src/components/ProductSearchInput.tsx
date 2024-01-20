import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";

interface IProdutoSearchInput {
  formik: any;
  handleProdutoSelect: (productId: number) => void;
}

const GET_PRODUTOS = gql`
  query getProdutos(
    $pagination: PaginationDetailsType
    $filter: ProductFilterByInputType
    $sort: ProductByInputType
  ) {
    products {
      findall(pagination: $pagination, filter: $filter, sort: $sort) {
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

export default function ProdutoSearchInput({
  formik,
  handleProdutoSelect,
}: IProdutoSearchInput) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [GetProdutos, { loading, error, refetch }] = useLazyQuery(
    GET_PRODUTOS,
    {
      fetchPolicy: "cache-and-network",
      variables: {
        filter: {
          // description: searchTerm,
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
      },
    }
  );

  useEffect(() => {
    if (searchTerm.length >= 3) {
      GetProdutos();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

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

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <input
        className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <section className="relative">
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
          {searchResults.map((item: any) => (
            <li
              key={item.value}
              className="px-3 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                formik.setFieldValue("produto", item.label);
                handleProdutoSelect(item.value);
                setSearchTerm("");
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

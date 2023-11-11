import { useFormik } from "formik";
import { useState } from "react";
import LeftModal from "../../../components/LeftModal";
import { PencilSimple, Trash } from "phosphor-react";
import ProdutoSearchInput from "../../../components/ProductSearchInput";

export interface IMaterial {
  id: string;
  data_compra?: string;
  quantidade?: string;
  preco_unitario?: string;
  preco_total?: string;
  id_obra?: string;
  id_produto?: string;
  id_grupo?: string;
  id_unidade?: string;
  id_fornecedor?: string;
  id_marca?: string;
  id_investidor?: string;
  id_usuario_cadastro?: string;
  id_usuario_alteracao?: string;
  data_alteracao?: string;
  data_criacao?: string;
}

const grupoOptions = [
  { value: "grupo1", label: "Grupo 1" },
  { value: "grupo2", label: "Grupo 2" },
  { value: "grupo3", label: "Grupo 3" },
];

const unidadeOptions = [
  { value: "unidade1", label: "Unidade 1" },
  { value: "unidade2", label: "Unidade 2" },
  { value: "unidade3", label: "Unidade 3" },
];

const fornecedorOptions = [
  { value: "fornecedor1", label: "Fornecedor 1" },
  { value: "fornecedor2", label: "Fornecedor 2" },
  { value: "fornecedor3", label: "Fornecedor 3" },
];

const marcaOptions = [
  { value: "marca1", label: "Marca 1" },
  { value: "marca2", label: "Marca 2" },
  { value: "marca3", label: "Marca 3" },
];

const investidorOptions = [
  { value: "investidor1", label: "Investidor 1" },
  { value: "investidor2", label: "Investidor 2" },
  { value: "investidor3", label: "Investidor 3" },
];

export default function Materiais() {
  const [materiais, setMateriais] = useState<IMaterial[]>([]);
  const [showModalCadastro, setShowModalCadastro] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const formik = useFormik<IMaterial>({
    initialValues: {
      id: Date.now().toString(),
      data_compra: "",
      quantidade: "",
      preco_unitario: "",
      preco_total: "",
      id_obra: "",
      id_produto: "",
      id_grupo: "",
      id_unidade: "",
      id_fornecedor: "",
      id_marca: "",
      id_investidor: "",
      id_usuario_cadastro: "",
      id_usuario_alteracao: "",
      data_alteracao: "",
      data_criacao: "",
    },
    onSubmit: (values) => {
      if (isEditing) {
        const newMateriais = materiais.map((material) => {
          if (material.id === values.id) {
            return {
              ...material,
              ...values,
            };
          }
          return material;
        });
        setMateriais(newMateriais);
        setIsEditing(false);
      } else {
        let material = {
          id_usuario_cadastro: "1",
          id_usuario_alteracao: "1",
          data_alteracao: "2023-03-10",
          data_criacao: "2023-01-15",
          ...values,
        };
        setMateriais([...materiais, material]);
        setIsEditing(false);
      }

      setShowModalCadastro(false);
      formik.resetForm();
    },
  });

  const handleDelete = (e: any, id: string) => {
    e.preventDefault();
    const newMateriais = materiais.filter((material) => material.id !== id);
    setMateriais(newMateriais);
  };

  const handleEdit = (e: any, id: string) => {
    e.preventDefault();
    const material = materiais.find((material) => material.id === id);
    if (material) {
      formik.setValues(material);
      setIsEditing(true);
      setShowModalCadastro(true);
    }
  };

  const handleProdutoSelect = (productId: number) => {
    formik.setFieldValue("id_produto", productId);
    // setSearchResults();
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between w-full mt-5 bg-gradient-to-r from-gray-100 to-gray-50 p-2 rounded-md">
          <h4 className="text-lg font-normal">Materiais</h4>
          {!showModalCadastro ? (
            <button
              className="bg-[#003569] text-white px-4 py-2 rounded-md"
              onClick={() => {
                setShowModalCadastro(true);
              }}
            >
              Adicionar
            </button>
          ) : null}
        </div>
      </div>

      <LeftModal
        showleftModal={showModalCadastro}
        setShowLeftModal={setShowModalCadastro}
        title="Cadastrar Material"
      >
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="flex flex-col col-span-2">
            <label htmlFor="id_produto">Produto</label>
            <ProdutoSearchInput
              formik={formik}
              handleProdutoSelect={handleProdutoSelect}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="id_marca">Marca</label>
            <select
              id="id_marca"
              name="id_marca"
              onChange={formik.handleChange}
              value={formik.values.id_marca}
            >
              <option value="">Selecione uma marca</option>
              {marcaOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="id_grupo">Grupo</label>
            <select
              id="id_grupo"
              name="id_grupo"
              onChange={formik.handleChange}
              value={formik.values.id_grupo}
            >
              <option value="">Selecione um grupo</option>
              {grupoOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantidade">Quantidade</label>
            <input
              id="quantidade"
              name="quantidade"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");

                formik.setFieldValue("quantidade", inputValue);
              }}
              value={formik.values.quantidade}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="id_unidade">Unidade</label>
            <select
              id="id_unidade"
              name="id_unidade"
              onChange={formik.handleChange}
              value={formik.values.id_unidade}
            >
              <option value="">Selecione uma unidade</option>
              {unidadeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="preco_unitario">Preço Unitário</label>
            <input
              id="preco_unitario"
              name="preco_unitario"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");

                formik.setFieldValue("preco_unitario", inputValue);
              }}
              value={formik.values.preco_unitario}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="preco_total">Preço Total</label>
            <input
              id="preco_total"
              name="preco_total"
              type="text"
              disabled
              value={formik.values.preco_total}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="data_compra">Data da Compra</label>
            <input
              id="data_compra"
              name="data_compra"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.data_compra}
              placeholder="Ex: 2023-10-31"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="id_fornecedor">Fornecedor</label>
            <select
              id="id_fornecedor"
              name="id_fornecedor"
              onChange={formik.handleChange}
              value={formik.values.id_fornecedor}
            >
              <option value="">Selecione um fornecedor</option>
              {fornecedorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col col-span-2">
            <label htmlFor="id_investidor">Investidor</label>
            <select
              id="id_investidor"
              name="id_investidor"
              onChange={formik.handleChange}
              value={formik.values.id_investidor}
            >
              <option value="">Selecione um investidor</option>
              {investidorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end w-full gap-2 col-span-2">
            <button
              className="border-[#003569] text-[#003569] border px-4 py-2 rounded-md"
              onClick={() => {
                setShowModalCadastro(false);
                formik.resetForm();
              }}
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                formik.handleSubmit();
              }}
              className="bg-[#003569] text-white px-4 py-2 rounded-md w-[100px]"
            >
              Salvar
            </button>
          </div>
        </div >
      </LeftModal >

      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID do Produto
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Quantidade
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Preço Unitário
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Preço Total
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Data da Compra
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {materiais.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {item.id_produto}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {item.quantidade}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {item.preco_unitario}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {item.preco_total}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {item.data_compra}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center gap-3 flex justify-center">
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={(e) => {
                    handleEdit(e, item.id);
                  }}
                >
                  <PencilSimple size={20} />
                </button>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={(e) => {
                    handleDelete(e, item.id);
                  }}
                >
                  <Trash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

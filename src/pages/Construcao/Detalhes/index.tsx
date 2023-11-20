import { FormikProps } from 'formik';
import { ConstructionInputType } from '../../../graphql/generated';

interface DetalhesProps {
  formik: FormikProps<ConstructionInputType>;
}

export default function Detalhes({
  formik
}: DetalhesProps) {

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between w-full mt-5 bg-gradient-to-r from-gray-100 to-gray-50 p-2 rounded-md">
          <h4 className="text-lg font-normal">Detalhes da construção</h4>
        </div>
      </div>

      <form>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="flex flex-col">
            <label htmlFor="identificador">Identificador</label>
            <input
              id="identifier"
              name="identifier"
              placeholder='Ex: Casa 1'
              type="text"
              onChange={formik.handleChange}
              value={formik.values.identifier}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="status">Status</label>
            <select id="status" name="statusConstruction" onChange={formik.handleChange} value={formik.values.statusConstruction} >
              <option value="em andamento">Em andamento</option>
              <option value="concluido">Concluido</option>
              <option value="em construcao">Em construção</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="dataInicio">Data de Início</label>
            <input
              id="dataInicio"
              name="dateBegin"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dateBegin}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dataFim">Data de Fim</label>
            <input
              id="dataFim"
              name="dataFim"
              type="date"
              min={formik.values.dateEnd}
              onChange={formik.handleChange}
              value={formik.values.dateEnd}
            />
          </div>
        </div>

        <div className="flex justify-between w-full mt-5 bg-gradient-to-r from-gray-100 to-gray-50 p-2 rounded-md">
          <h4 className="text-lg font-normal">Endereço</h4>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="flex flex-col">
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              name="zipCode"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1-$2");
                formik.setFieldValue('zipCode', inputValue)
              }
              }
              value={formik.values.zipCode}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              name="address"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="numero">Número</label>
            <input
              id="numero"
              name="number"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.number}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bairro">Bairro</label>
            <input
              id="bairro"
              name="neighbourhood"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.neighbourhood}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              name="city"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="estado">Estado</label>
            <input
              id="estado"
              name="state"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.state}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="complemento">Complemento</label>
            <input
              id="complemento"
              name="complement"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.complement}
            />
          </div>
        </div>

        <div className="flex justify-between w-full mt-5 bg-gradient-to-r from-gray-100 to-gray-50 p-2 rounded-md">
          <h4 className="text-lg font-normal">Dados da Construçāo</h4>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">

          <div className="flex flex-col">
            <label htmlFor="areaLote">Área do Lote</label>
            <input
              id="areaLote"
              name="batchArea"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                formik.setFieldValue('batchArea', inputValue)
              }}
              value={formik.values.batchArea}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="areaConstruida">Área Construída</label>
            <input
              id="areaConstruida"
              name="buildingArea"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                formik.setFieldValue('buildingArea', inputValue)
              }}
              value={formik.values.buildingArea}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="inscricaoMunicipal">Inscrição Municipal</label>
            <input
              id="inscricaoMunicipal"
              name="municipalRegistration"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.municipalRegistration}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="alvara">Alvará</label>
            <input
              id="alvara"
              name="license"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.license}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="usoDeSolo">Uso de Solo</label>
            <input
              id="usoDeSolo"
              name="undergroundUse"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.undergroundUse}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="art">ART</label>
            <input
              id="art"
              name="art"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.art}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cno">CNO</label>
            <input
              id="cno"
              name="cno"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.cno}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="matriculaMae">Matrícula Mãe</label>
            <input
              id="matriculaMae"
              name="motherEnrollment"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.motherEnrollment}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="latitude">Latitude</label>
            <input
              id="latitude"
              name="latitude"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                formik.setFieldValue('latitude', inputValue)
              }
              }
              value={formik.values.latitude}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="longitude">Longitude</label>
            <input
              id="longitude"
              name="longitude"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                formik.setFieldValue('longitude', inputValue)
              }
              }
              value={formik.values.longitude}

            />

          </div>

          <div className="flex flex-col">
            <label htmlFor="valorVenda">Valor de Venda</label>
            <input
              id="valorVenda"
              name="saleValue"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                formik.setFieldValue('saleValue', inputValue)
              }
              }
              value={formik.values.saleValue}
            />
          </div>
        </div>
        <div className="flex justify-end w-full gap-2 col-span-2 ">
          <button className="border-[#003569] text-[#003569] border px-4 py-2 rounded-md"
          >Cancelar</button>
          <button type="submit" className="bg-[#003569] text-white px-4 py-2 rounded-md w-[100px]">Salvar</button>
        </div>
      </form></>
  )
}
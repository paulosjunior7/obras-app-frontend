import { FormikProps } from 'formik';
import { IConstrucao } from '..';

interface DetalhesProps {
  formik: FormikProps<IConstrucao>;
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
              id="identificador"
              name="identificador"
              placeholder='Ex: Casa 1'
              type="text"
              onChange={formik.handleChange}
              value={formik.values.identificador}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="status">Status</label>
            <select id="status" name="status" onChange={formik.handleChange} value={formik.values.status} >
              <option value="em andamento">Em andamento</option>
              <option value="concluido">Concluido</option>
              <option value="em construcao">Em construção</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="dataInicio">Data de Início</label>
            <input
              id="dataInicio"
              name="dataInicio"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dataInicio}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dataFim">Data de Fim</label>
            <input
              id="dataFim"
              name="dataFim"
              type="date"
              min={formik.values.dataInicio}
              onChange={formik.handleChange}
              value={formik.values.dataFim}
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
              name="cep"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1-$2");
                formik.setFieldValue('cep', inputValue)
              }
              }
              value={formik.values.cep}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              name="endereco"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.endereco}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="numero">Número</label>
            <input
              id="numero"
              name="numero"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.numero}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bairro">Bairro</label>
            <input
              id="bairro"
              name="bairro"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.bairro}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              name="cidade"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.cidade}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="estado">Estado</label>
            <input
              id="estado"
              name="estado"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.estado}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="complemento">Complemento</label>
            <input
              id="complemento"
              name="complemento"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.complemento}
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
              name="areaLote"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                formik.setFieldValue('areaLote', inputValue)
              }}
              value={formik.values.areaLote}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="areaConstruida">Área Construída</label>
            <input
              id="areaConstruida"
              name="areaConstruida"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                formik.setFieldValue('areaConstruida', inputValue)
              }}
              value={formik.values.areaConstruida}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="inscricaoMunicipal">Inscrição Municipal</label>
            <input
              id="inscricaoMunicipal"
              name="inscricaoMunicipal"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.inscricaoMunicipal}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="alvara">Alvará</label>
            <input
              id="alvara"
              name="alvara"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.alvara}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="usoDeSolo">Uso de Solo</label>
            <input
              id="usoDeSolo"
              name="usoDeSolo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.usoDeSolo}
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
              name="matriculaMae"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.matriculaMae}
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
              name="valorVenda"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                formik.setFieldValue('valorVenda', inputValue)
              }
              }
              value={formik.values.valorVenda}
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
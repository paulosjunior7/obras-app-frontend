// Este arquivo contem lista de Pure Functions comumente
// utilizado ao redor do projeto.

/**
 * Limitar o numero de caracteres em uma string.
 *
 * @return {String}
 * */
 export function quebrarTexto(
  value: string | null,
  limit: number
): string | null {
  if (typeof value === "string") {
    return value.length > limit ? value.substr(0, limit) : value;
  }
  return value;
}

/**
 * Array range creator.
 *
 * @see https://dev.to/namirsab/comment/2050
 *
 * @return {Array}
 * */
export const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

/**
 * Calcula o pagination offset a de acordo com a pagina atual.
 *
 * @param {Number} total      Total de registros a ser paginado
 * @param {Number} page       O numero da pagina atual ex: 2
 * @param {Number} pageSize   Correspondente ao numero de itens a serem exibidos
 *
 * @return {Number}
 * */
export const calculatePageOffset = (
  total: number,
  page: number,
  pageSize: number
): number => (page - 1) * pageSize;

/**
 * Vanilla JS function para manipular querystring onde não é
 * possível utilizar Hook. exemplo Class Component.
 *
 * Em Function Components utilize o hooks/useQuerystring()
 *
 * */
export const getSearchQuery = (value: string) => new URLSearchParams(value);

// TODO: Definir type
export function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

// TODO: Definir type
export function getComparator(order: any, orderBy: any) {
  return order === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

// TODO: Definir type
export function stableSort(array: any, comparator: any) {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
}

/**
 * Formate Time helper function.
 *
 * @return {String}
 * */
export const formatTime = (time: any): string => {
  if (!time) {
    return "0:00";
  }

  if (time.length >= 7) {
    if (time[1] === "0") {
      return time.slice(3);
    } else if (time[0] === "0") {
      return time.slice(1);
    }

    return "";
  } else {
    if (isNaN(time)) {
      return "-:--";
    }

    let hours: any = Math.floor(time / 3600);
    let minutes: any = Math.floor((time - hours * 3600) / 60);
    let seconds: any = Math.floor(time % 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let result = "";

    if (hours > 0) {
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      result = hours + ":" + minutes + ":" + seconds;
    } else {
      result = minutes + ":" + seconds;
    }

    return result;
  }
};

/**
 * Normaização de string para a mesma string, mas sem caracteres especiais
 * ou acentuação
 */
export const normalizeStr = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

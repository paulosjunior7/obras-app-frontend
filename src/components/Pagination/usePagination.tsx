import React from 'react';
import { range } from '../../helpers/common';

interface PaginationParams {
  boundaryCount?: number;
  count?: number;
  disabled?: boolean;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  onChange?: (
    event: React.MouseEventHandler<HTMLButtonElement>,
    value: number
  ) => void;
  page: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  siblingCount?: number;
}

interface PaginateItems {
  type: string;
  page: number;
  selected: boolean;
  disabled: boolean;
  onClick: (event: any, value: number) => void;
}

interface UsePagination {
  items: PaginateItems[];
}

// Este Hook é uma adaptação do https://material-ui.com/components/pagination/#pagination
export default function usePagination(props: PaginationParams): UsePagination {
  const {
    boundaryCount = 1,
    count = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props;

  const [page, setPageState] = React.useState(pageProp);

  // Este useEffect se faz necessário devido alguns casos em que ha necessidade
  // de exibir mais de um mesmo component na mesma tela, isso faz com que
  // um ou mais <Pagination> component mantenha os bullets ativos no evento onClick.
  React.useEffect(() => {
    if (pageProp !== page) {
      setPageState(pageProp);
    }
  }, [page, pageProp]);

  const handleClick = (
    event: React.MouseEventHandler<HTMLButtonElement>,
    value: number
  ) => {
    setPageState(value);
    if (onChange) {
      onChange(event, value);
    }
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count
  );

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [
    ...(showFirstButton ? ['first'] : []),
    ...(hidePrevButton ? [] : ['previous']),
    ...startPages,

    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),

    ...endPages,
    ...(hideNextButton ? [] : ['next']),
    ...(showLastButton ? ['last'] : []),
  ];

  // Map the button type to its page number
  const buttonPage: any = (type: any) => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map((item) => {
    return typeof item === 'number'
      ? {
          onClick: (event: React.MouseEventHandler<HTMLButtonElement>) => {
            handleClick(event, item);
          },
          type: 'page',
          page: item,
          selected: item === page,
          disabled: disabled || item === page,
          'aria-current': item === page ? 'true' : undefined,
        }
      : {
          onClick: (event: React.MouseEventHandler<HTMLButtonElement>) => {
            handleClick(event, buttonPage(item));
          },
          type: item,
          page: buttonPage(item),
          selected: false,
          disabled:
            disabled ||
            item.indexOf('ellipsis') !== -1 ||
            (item === 'next' || item === 'last' ? page >= count : page <= 1),
        };
  });

  return {
    items,
    ...other,
  };
}

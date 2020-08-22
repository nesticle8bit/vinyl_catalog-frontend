import { MatPaginatorIntl } from '@angular/material/paginator';

export class PaginationModel {
    selectItemsPerPage: number[] = [5, 25, 50, 100];
    pageSize = this.selectItemsPerPage[0];
    pageIndex = 1;
    allItemsLength = 0;
}

const spanishRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) { return `0 of ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} de ${length}`;
};

export function getSpanishPaginatorIntl(): MatPaginatorIntl {
    const paginatorIntl = new MatPaginatorIntl();

    paginatorIntl.itemsPerPageLabel = 'Publicaciones por página:';
    paginatorIntl.nextPageLabel = 'Siguiente página';
    paginatorIntl.previousPageLabel = 'Página anterior';
    paginatorIntl.getRangeLabel = spanishRangeLabel;

    return paginatorIntl;
}

export interface PaginationParams {
    page?: number;
    limit?: number;
    total: number;
  }
  
  export const getPagination = ({
    page = 1,
    limit = 10,
    total,
  }: PaginationParams) => {
    const offset = (page - 1) * limit;
    const totalPages = Math.ceil(total / limit);
  
    return {
      page,
      limit,
      offset,
      total,
      totalPages,
    };
  };
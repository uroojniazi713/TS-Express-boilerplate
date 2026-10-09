import { getRevenueByMonth , getTopCustomers } from "@/repositories/report.repository.js";
import { getPagination } from "@/utils/pagination.js";

export const revenueByMonth = async () => {
  return await getRevenueByMonth();
};

export const getTopCustomersReport = async (
    page: number,
    limit: number
  ) => {
    const { results, total } = await getTopCustomers(page, limit);
  
    const pagination = getPagination({
      page,
      limit,
      total,
    });
  
    return {
      results,
      pagination,
    };
  };
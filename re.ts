/** /biz/account/role/modifyRoleInfo */
namespace BizAccountRoleModifyRoleInfo {
  type RequestParamsType = {
    /** request */
    request?: ModifyAdminRoleInfoRequest;
    /** userId */
    userId?: string;
  };
  /** OK */
  type ResponseDataType = ResultVO;
  /** AdminRoleDelRequest */
  interface AdminRoleDelRequest {
    /** 主键id */
    roleId?: string;
  }
  /** ResultVO«Void» */
  interface ResultVO {
    /** 请求状态描述 */
    message?: string;
    /** 请求状态码，200-正确，其它-错误 */
    status?: number;
  }
  /** PageCoinTradListFrm */
  interface PageCoinTradArrayFrm {
    /** 社区id */
    communityId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  }
  /** PageVO«CoinTradVO» */
  interface PageVO<T = CoinTradVO> {
    /** 下一页页码，没有下一页返回 -1 */
    nextPageNum?: number;
    /** 页序数 */
    pageNum?: number;
    /** 当页记录数量 */
    pageSize?: number;
    /** 当前页元素 */
    rows?: Array<CoinTradVO>;
    /** 记录总数 */
    total?: number;
    /** 总页数 */
    totalPage?: number;
  }
  /** CoinTradVO */
  interface CoinTradVO {
    /** 可用金币 */
    availableCoins?: string;
    /** 交易金币 */
    coinTrad?: string;
    /** 冻结金币 */
    frozenCoins?: string;
    /** 主键ID */
    id?: string;
    /** 付款人 */
    payOrIncome?: string;
    /** 状态 */
    status?: string;
    /** 交易时间 */
    tradTime?: string;
    /** 交易类型 */
    tradType?: string;
  }
  /** ModifyAdminRoleInfoRequest */
  interface ModifyAdminRoleInfoRequest {
    /** 角色名称 */
    name?: string;
    /** 角色权限列表 */
    permission?: Array<Permission>;
    /** 角色id */
    roleId?: string;
  }
  /** Permission */
  interface Permission {
    /** 权限类型标签 */
    attr?: string;
    /** 权限类型 */
    permissionFlag?: string;
    /** 权限id */
    permissionId?: string;
  }
}

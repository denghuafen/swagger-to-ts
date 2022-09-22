/** /bizc/index/getNewAssetsOverviewData */
namespace BizcIndexGetNewAssetsOverviewData {
  type RequestParamsType = {
    /** request */
    request?: IndexMenuDataRequest;
  };
  /** OK */
  type ResponseDataType = IndexMenuDataResponse;
  /** String */
  interface String {}
  /** list */
  interface list {}
  /** InviteDoctorRequest */
  interface InviteDoctorRequest {
    /** 机构id */
    bId?: string;
    /** 社区ID */
    comtyId?: string;
    /** 手机号_医生名称,手机号_医生名称 */
    mobileList?: string;
  }
  /** ResultVO«string» */
  interface ResultVO<T = string> {
    /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
    data?: string;
    /** 请求状态描述 */
    message?: string;
    /** 请求状态码，200-正确，其它-错误 */
    status?: number;
  }
  /** IndexMenuDataRequest */
  interface IndexMenuDataRequest {
    /** 社区id */
    communityId?: string;
  }
  /** IndexMenuDataResponse */
  interface IndexMenuDataResponse {
    /** 医生总量 */
    doctorNum?: number;
    /** O2O预约订单总数 */
    orderNum?: number;
    /** 商品总量 */
    productNum?: number;
    /** 服务用户总量 */
    serviceUserNum?: number;
    /** 访问总量 */
    visitNum?: number;
  }
}

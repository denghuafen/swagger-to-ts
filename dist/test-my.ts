/** /biz/comtywhiteaccount/addWhiteAccount */
namespace BizComtywhiteaccountAddWhiteAccount {
  /** 添加社区白名单账号 */
  type RequestParamsType = {
    /** request */
    request?: AddWhiteAccountRequest;
    /** userId */
    userId?: string;
  };
  /** OK */
  type ResponseDataType = ResultVO;
  /** AddWhiteAccountRequest */
  interface AddWhiteAccountRequest {
    bcustomerId?: string;
    /** 手机号 */
    phone?: string;
  }
  /** ResultVO«Void» */
  interface ResultVO {
    /** 请求状态描述 */
    message?: string;
    /** 请求状态码，200-正确，其它-错误 */
    status?: number;
  }
}

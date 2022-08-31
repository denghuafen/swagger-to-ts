/** /biz/account/role/del */
namespace ddee {
  interface RequestParams {
    /** request */
    request?: AdminRoleDelRequest;
    /** userId */
    userId?: string;
  }

  interface ResponseParams {
    /** OK */
    response1?: ResultVO<AdminRoleMenusVo>;
  }
  interface AdminRoleMenusVo {
    /** 角色ID */
    id?: string;
    /** 角色权限菜单id */
    menuIds?: Array<string>;
    /** 角色说明 */
    remark?: string;
    /** 角色名称 */
    roleName?: string;
  }
  interface ResultVO<T = unknown> {
    /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
    data?: T;
    /** 请求状态描述 */
    message?: string;
    /** 请求状态码，200-正确，其它-错误 */
    status?: number;
  }
}

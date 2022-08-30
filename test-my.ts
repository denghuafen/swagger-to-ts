/** /biz/account/role/del */
interface BizAccountRoleDel { 
  paramInterface: { 
    /** request */
    request?: AdminRoleDelRequest;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response1: ResultVO<Void>;
  }
}
/** /biz/account/role/getRoleById */
interface BizAccountRoleGetRoleById { 
  paramInterface: { 
    /** 角色Id */
    roleId?: String;
  } 
  responseInterface: { 
    /** OK */
    response2: ResultVO<AdminRoleMenusVo>;
  }
}
/** /biz/account/role/modifyRoleInfo */
interface BizAccountRoleModifyRoleInfo { 
  paramInterface: { 
    /** request */
    request?: ModifyAdminRoleInfoRequest;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response3: ResultVO<Void>;
  }
}
/** /biz/account/role/queryList */
interface BizAccountRoleQueryList { 
  paramInterface: { 
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response4: ResultVO<PageVO<PageAdminRoleVo>>;
  }
}
/** /biz/activity/marketing/detail */
interface BizActivityMarketingDetail { 
  paramInterface: { 
    /** frm */
    frm?: 活动请求参数;
  } 
  responseInterface: { 
    /** OK */
    response5: 营销活动详情;
  }
}
/** /biz/activity/marketing/detailForApply */
interface BizActivityMarketingDetailForApply { 
  paramInterface: { 
    /** frm */
    frm?: 营销活动社区报名详情查询参数;
  } 
  responseInterface: { 
    /** OK */
    response6: PageVO<活动分发社区报名信息>;
  }
}
/** /biz/activity/marketing/distribution */
interface BizActivityMarketingDistribution { 
  paramInterface: { 
    /** frm */
    frm?: 活动请求参数;
  } 
  responseInterface: { 
    /** OK */
    response7: boolean;
  }
}
/** /biz/activity/marketing/exportDetailForApply */
interface BizActivityMarketingExportDetailForApply { 
  paramInterface: { 
    /** frm */
    frm?: 营销活动社区报名详情查询参数;
  } 
  responseInterface: { 
    /** OK */
    response8: ResultVO<boolean>;
  }
}
/** /biz/activity/marketing/list */
interface BizActivityMarketingList { 
  paramInterface: { 
    /** frm */
    frm?: 活动分发列表查询参数;
  } 
  responseInterface: { 
    /** OK */
    response9: PageVO<活动分发列表>;
  }
}
/** /biz/activity/marketing/listForDistCommunity */
interface BizActivityMarketingListForDistCommunity { 
  paramInterface: { 
    /** frm */
    frm?: 活动分发列表查询;
  } 
  responseInterface: { 
    /** OK */
    response10: 活动分发社区列表信息;
  }
}
/** /biz/activity/marketing/listProductForCommunity */
interface BizActivityMarketingListProductForCommunity { 
  paramInterface: { 
    /** frm */
    frm?: 社区请求参数;
  } 
  responseInterface: { 
    /** OK */
    response11: Array<社区符合活动商品信息>;
  }
}
/** /biz/application/applicationOverview */
interface BizApplicationApplicationOverview { 
  responseInterface: { 
    /** OK */
    response12: Array<ApplicationManagementVO>;
  }
}
/** /biz/application/findActivityPromotionList */
interface BizApplicationFindActivityPromotionList { 
  paramInterface: { 
    /** findActivityPromotionListFrm */
    findActivityPromotionListFrm?: FindActivityPromotionListFrm;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response13: PageVO<CommunityGeneralizeVO>;
  }
}
/** /biz/application/findContentList */
interface BizApplicationFindContentList { 
  paramInterface: { 
    /** findContentListFrm */
    findContentListFrm?: FindContentListFrm;
  } 
  responseInterface: { 
    /** OK */
    response14: PageVO<CommunityContentVO>;
  }
}
/** /biz/application/findFunctionIntroduction */
interface BizApplicationFindFunctionIntroduction { 
  paramInterface: { 
    /** findFunctionIntroductionFrm */
    findFunctionIntroductionFrm?: FindFunctionIntroductionFrm;
  } 
  responseInterface: { 
    /** OK */
    response15: ApplicationManagementVO;
  }
}
/** /biz/application/findPostBarList */
interface BizApplicationFindPostBarList { 
  paramInterface: { 
    /** frm */
    frm?: FindPostbarListFrm;
  } 
  responseInterface: { 
    /** OK */
    response16: PageVO<PagePostBarVO>;
  }
}
/** /biz/application/findSpecialTopicActivityList */
interface BizApplicationFindSpecialTopicActivityList { 
  paramInterface: { 
    /** findSpecialTopicActivityListFrm */
    findSpecialTopicActivityListFrm?: 标准分页请求体;
  } 
  responseInterface: { 
    /** OK */
    response17: PageVO<SpecialTopicActivityVO>;
  }
}
/** /biz/application/pageCoinTradList */
interface BizApplicationPageCoinTradList { 
  paramInterface: { 
    /** pageCoinTradListFrm */
    pageCoinTradListFrm?: PageCoinTradListFrm;
  } 
  responseInterface: { 
    /** OK */
    response18: PageVO<CoinTradVO>;
  }
}
/** /biz/application/saveFunctionIntroduction */
interface BizApplicationSaveFunctionIntroduction { 
  paramInterface: { 
    /** saveFunctionIntroductionFrm */
    saveFunctionIntroductionFrm?: SaveFunctionIntroductionFrm;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response19: ApplicationManagementVO;
  }
}
/** /biz/bUser/add */
interface BizBUserAdd { 
  paramInterface: { 
    /** request */
    request?: UpdateMessageRequest;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response20: ResultVO<Void>;
  }
}
/** /biz/bUser/del */
interface BizBUserDel { 
  paramInterface: { 
    /** request */
    request?: DelMessageRequest;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response21: ResultVO<Void>;
  }
}
/** /biz/bUser/queryList */
interface BizBUserQueryList { 
  paramInterface: { 
    /** pageMessageFrm */
    pageMessageFrm?: PageMessageFrm;
  } 
  responseInterface: { 
    /** OK */
    response22: ResultVO<PageVO<PageMessageVo>>;
  }
}
/** /biz/community/applyRechargeCoins */
interface BizCommunityApplyRechargeCoins { 
  paramInterface: { 
    /** frm */
    frm?: ApplyRechargeCoinsRequest;
  } 
  responseInterface: { 
    /** OK */
    response23: ResultVO<object>;
  }
}
/** /biz/community/findCommunityDetail */
interface BizCommunityFindCommunityDetail { 
  paramInterface: { 
    /** communityId */
    communityId?: string;
  } 
  responseInterface: { 
    /** OK */
    response24: CommunityDetailNewVO;
  }
}
/** /biz/community/getBaseInfo */
interface BizCommunityGetBaseInfo { 
  paramInterface: { 
    /** communityId */
    communityId?: string;
  } 
  responseInterface: { 
    /** OK */
    response25: CommunityBaseInfoResponse;
  }
}
/** /biz/community/getCommunityBindWeiboList */
interface BizCommunityGetCommunityBindWeiboList { 
  paramInterface: { 
    /** frm */
    frm?: GetCommunityBindWeiboListFrm;
  } 
  responseInterface: { 
    /** OK */
    response26: Array<社区绑定信息>;
  }
}
/** /biz/community/getDetail */
interface BizCommunityGetDetail { 
  paramInterface: { 
    /** communityId */
    communityId?: string;
  } 
  responseInterface: { 
    /** OK */
    response27: CommunityDetailResponse;
  }
}
/** /biz/community/getDoctorDetail */
interface BizCommunityGetDoctorDetail { 
  paramInterface: { 
    /** doctorId */
    doctorId?: string;
  } 
  responseInterface: { 
    /** OK */
    response28: unknown;
  }
}
/** /biz/community/getFundInfo */
interface BizCommunityGetFundInfo { 
  paramInterface: { 
    /** communityId */
    communityId?: string;
  } 
  responseInterface: { 
    /** OK */
    response29: GetFundInfoVO;
  }
}
/** /biz/community/getWeChatDetails */
interface BizCommunityGetWeChatDetails { 
  paramInterface: { 
    /** frm */
    frm?: GetWeChatDetailsFrm;
  } 
  responseInterface: { 
    /** OK */
    response30: Array<WeChatDetailsVO>;
  }
}
/** /biz/community/operateAdmin */
interface BizCommunityOperateAdmin { 
  paramInterface: { 
    /** request */
    request?: ComtyAdminOperateRequest;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response31: ResultVO<Void>;
  }
}
/** /biz/community/pageActivities */
interface BizCommunityPageActivities { 
  paramInterface: { 
    /** 社区id */
    communityId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response32: PageVO<PageActivitiesResponse>;
  }
}
/** /biz/community/pageArticles */
interface BizCommunityPageArticles { 
  paramInterface: { 
    /** 文章查询 */
    articleInfo?: string;
    /** 文章类型 */
    articleType?: string;
    /** 社区id */
    communityId?: string;
    /** 关联科室 */
    deptId?: string;
    /** 医生信息 */
    doctorInfo?: string;
    /** 结束时间 */
    endTime?: string;
    /** 内容发布状态（0下线；1上线） */
    onlineStatus?: number;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
    /** praiseSort */
    praiseSort?: string;
    /** 发布时间 */
    publishTime?: string;
    /** readSort */
    readSort?: string;
    /** 文章来源 */
    sourceType?: string;
    /** 开始时间 */
    startTime?: string;
    /** 文章状态 */
    status?: string;
    /** timeSort */
    timeSort?: string;
    /** trueReadSort */
    trueReadSort?: string;
  } 
  responseInterface: { 
    /** OK */
    response33: PageVO<PageArticlesResponse>;
  }
}
/** /biz/community/pageBindingInfos */
interface BizCommunityPageBindingInfos { 
  paramInterface: { 
    /** 社区id */
    communityId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response34: unknown;
  }
}
/** /biz/community/pageCommunities */
interface BizCommunityPageCommunities { 
  paramInterface: { 
    /** 认证时间 */
    auditDate?: string;
    /** 认证时间 */
    auditDateEnd?: string;
    /** 认证时间 */
    auditDateStart?: string;
    /** 资质审核状态 */
    auditStatus?: string;
    /** 城市id */
    cityId?: string;
    /** 社区id */
    communityId?: string;
    /** 社区名称 */
    comtyName?: string;
    /** 区县id */
    districtId?: string;
    /** 查询关键词 */
    keyword?: string;
    /** 机构id */
    orgId?: string;
    /** 机构名称 */
    orgName?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 省份id */
    provinceId?: string;
    /** 社区来源，【PC：PC注册   H5: H5注册   DH：牙医管家注册】 */
    sourceType?: string;
    /** 社区状态 */
    status?: string;
    /** 社区类型 */
    type?: string;
  } 
  responseInterface: { 
    /** OK */
    response35: PageVO<PageCommunitiesResponse>;
  }
}
/** /biz/community/pageCommunityAdmin */
interface BizCommunityPageCommunityAdmin { 
  paramInterface: { 
    /** 社区id */
    communityId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response36: PageVO<PageCommunityAdminResponse>;
  }
}
/** /biz/community/pageCommunityByOrgId */
interface BizCommunityPageCommunityByOrgId { 
  paramInterface: { 
    /** 来源 */
    from?: string;
    /** 机构id */
    orgId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response37: PageVO<PageCommunityByOrgIdVO>;
  }
}
/** /biz/community/pageDoctors */
interface BizCommunityPageDoctors { 
  paramInterface: { 
    /** 社区id */
    communityId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response38: PageVO<PageDoctorsResponse>;
  }
}
/** /biz/community/pageFunds */
interface BizCommunityPageFunds { 
  paramInterface: { 
    /** 社区id */
    communityId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response39: PageVO<PageFundsResponse>;
  }
}
/** /biz/community/pageNews */
interface BizCommunityPageNews { 
  paramInterface: { 
    /** 社区id */
    communityId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response40: PageVO<PageNewsResponse>;
  }
}
/** /biz/community/pageOperatingRecord */
interface BizCommunityPageOperatingRecord { 
  paramInterface: { 
    /** 社区id */
    communityId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response41: PageVO<PageOperatingRecordResponse>;
  }
}
/** /biz/community/pageShareRecords */
interface BizCommunityPageShareRecords { 
  paramInterface: { 
    /** 渠道 */
    channel?: string;
    /** 社区id */
    communityId?: string;
    /** 结束时间 */
    endTime?: string;
    /** 用户昵称或id */
    nickOrId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 开始时间 */
    startTime?: string;
    /** 用户类型 */
    userType?: string;
  } 
  responseInterface: { 
    /** OK */
    response42: PageVO;
  }
}
/** /biz/community/resetAdminPwd */
interface BizCommunityResetAdminPwd { 
  paramInterface: { 
    /** request */
    request?: ComtyAdminPwdResetRequest;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response43: ResultVO<Void>;
  }
}
/** /biz/community/role/comtyMenuTree */
interface BizCommunityRoleComtyMenuTree { 
  responseInterface: { 
    /** OK */
    response44: ResultVO<List<ComtyMenuTreeVo>>;
  }
}
/** /biz/community/role/findRoleAndMenus */
interface BizCommunityRoleFindRoleAndMenus { 
  paramInterface: { 
    /** 角色Id */
    roleId?: String;
  } 
  responseInterface: { 
    /** OK */
    response45: ResultVO<List<CommunityRoleAndMenusVo>>;
  }
}
/** /biz/community/role/modifyInfo */
interface BizCommunityRoleModifyInfo { 
  paramInterface: { 
    /** request */
    request?: CommunityRoleModifyRequest;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response46: ResultVO<Void>;
  }
}
/** /biz/community/role/querylist */
interface BizCommunityRoleQuerylist { 
  paramInterface: { 
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response47: ResultVO<PageVO<CommunityRoleVo>>;
  }
}
/** /biz/community/updateAuditInfo */
interface BizCommunityUpdateAuditInfo { 
  paramInterface: { 
    /** request */
    request?: UpdateAuditInfoRequest;
  } 
  responseInterface: { 
    /** OK */
    response48: ResultVO<Void>;
  }
}
/** /biz/community/updateAuditStatus */
interface BizCommunityUpdateAuditStatus { 
  paramInterface: { 
    /** request */
    request?: UpdateAuditStatusRequest;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response49: ResultVO<Void>;
  }
}
/** /biz/community/updateRelationInfo */
interface BizCommunityUpdateRelationInfo { 
  paramInterface: { 
    /** frm */
    frm?: UpdateHospitalRequest;
  } 
  responseInterface: { 
    /** OK */
    response50: ResultVO;
  }
}
/** /biz/comtywhiteaccount/addWhiteAccount */
interface BizComtywhiteaccountAddWhiteAccount { 
  /** 添加社区白名单账号 */
  paramInterface: { 
    /** request */
    request?: AddWhiteAccountRequest;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response51: ResultVO<Void>;
  }
}
/** /biz/comtywhiteaccount/delWhiteAccount */
interface BizComtywhiteaccountDelWhiteAccount { 
  paramInterface: { 
    /** 记录id */
    id?: String;
  } 
  responseInterface: { 
    /** OK */
    response52: ResultVO<int>;
  }
}
/** /biz/comtywhiteaccount/page */
interface BizComtywhiteaccountPage { 
  paramInterface: { 
    /** frm */
    frm?: PageComtyWhiteAccountFrm;
  } 
  responseInterface: { 
    /** OK */
    response53: ResultVO<PageVO<CommunityWhiteAccount>>;
  }
}
/** /biz/comtywhiteaccount/searchAccountByPhone */
interface BizComtywhiteaccountSearchAccountByPhone { 
  /** 根据手机号搜索社区账号 */
  paramInterface: { 
    /** frm */
    frm?: PageSearchAccountByPhoneFrm;
  } 
  responseInterface: { 
    /** OK */
    response54: ResultVO<List<B端客户实体>>;
  }
}
/** /biz/customer/abdUser */
interface BizCustomerAbdUser { 
  paramInterface: { 
    /** msg */
    msg?: string;
  } 
  responseInterface: { 
    /** OK */
  }
}
/** /biz/customer/pageOrganizationUser */
interface BizCustomerPageOrganizationUser { 
  paramInterface: { 
    /** 机构用户id */
    id?: string;
    /** 机构用户名 */
    name?: string;
    /** 机构名 */
    orgName?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 手机 */
    phone?: string;
  } 
  responseInterface: { 
    /** OK */
    response55: PageVO<PageOrganizationUserVO>;
  }
}
/** /biz/customer/pageOrganizationUserByOrgId */
interface BizCustomerPageOrganizationUserByOrgId { 
  paramInterface: { 
    /** 机构id */
    orgId?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
  } 
  responseInterface: { 
    /** OK */
    response56: PageVO<PageOrganizationUserByOrgIdVO>;
  }
}
/** /biz/customer/resetOrganizationUserPwd */
interface BizCustomerResetOrganizationUserPwd { 
  paramInterface: { 
    /** frm */
    frm?: ResetOrganizationUserPwdFrm;
  } 
  responseInterface: { 
    /** OK */
  }
}
/** /biz/excel/exportCommunities */
interface BizExcelExportCommunities { 
  paramInterface: { 
    /** 认证时间 */
    auditDate?: string;
    /** 认证时间 */
    auditDateEnd?: string;
    /** 认证时间 */
    auditDateStart?: string;
    /** 资质审核状态 */
    auditStatus?: string;
    /** 城市id */
    cityId?: string;
    /** 社区id */
    communityId?: string;
    /** 社区名称 */
    comtyName?: string;
    /** 区县id */
    districtId?: string;
    /** 查询关键词 */
    keyword?: string;
    /** 机构id */
    orgId?: string;
    /** 机构名称 */
    orgName?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 省份id */
    provinceId?: string;
    /** 社区来源，【PC：PC注册   H5: H5注册   DH：牙医管家注册】 */
    sourceType?: string;
    /** 社区状态 */
    status?: string;
    /** 社区类型 */
    type?: string;
  } 
  responseInterface: { 
    /** OK */
    response57: string;
  }
}
/** /biz/excel/exportFailShopData */
interface BizExcelExportFailShopData { 
  paramInterface: { 
    /** frm */
    frm?: 通用ID为String的查询Frm;
  } 
  responseInterface: { 
    /** OK */
    response58: string;
  }
}
/** /biz/excel/exportShop */
interface BizExcelExportShop { 
  paramInterface: { 
    /** request */
    request?: ShopPageRequest;
  } 
  responseInterface: { 
    /** OK */
    response59: string;
  }
}
/** /biz/mb/product/auditPass */
interface BizMbProductAuditPass { 
  paramInterface: { 
    /** frm */
    frm?: 表(product_manage_audit_record)实体类Frm;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response60: boolean;
  }
}
/** /biz/mb/product/auditRefuse */
interface BizMbProductAuditRefuse { 
  paramInterface: { 
    /** frm */
    frm?: 表(product_manage_audit_record)实体类Frm;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
    response61: boolean;
  }
}
/** /biz/mb/product/getDetail */
interface BizMbProductGetDetail { 
  paramInterface: { 
    /** frm */
    frm?: 通用ID为Long的查询Frm;
  } 
  responseInterface: { 
    /** OK */
    response62: 表(product_manage)实体类VO;
  }
}
/** /biz/mb/product/pageProductManage */
interface BizMbProductPageProductManage { 
  paramInterface: { 
    /** frm */
    frm?: 标准分页请求体;
  } 
  responseInterface: { 
    /** OK */
    response63: PageVO<表(product_manage)实体类VO>;
  }
}
/** /biz/medicalbeauty/order/export */
interface BizMedicalbeautyOrderExport { 
  paramInterface: { 
    /** request */
    request?: PageOrderRequest;
  } 
  responseInterface: { 
    /** OK */
  }
}
/** /biz/medicalbeauty/order/page */
interface BizMedicalbeautyOrderPage { 
  paramInterface: { 
    /** request */
    request?: PageOrderRequest;
  } 
  responseInterface: { 
    /** OK */
    response64: 医美订单分页VO;
  }
}
/** /biz/organization/createOrganization */
interface BizOrganizationCreateOrganization { 
  paramInterface: { 
    /** frm */
    frm?: CreateOrganizationFrm;
  } 
  responseInterface: { 
    /** OK */
  }
}
/** /biz/organization/getOranizationDetail */
interface BizOrganizationGetOranizationDetail { 
  paramInterface: { 
    /** 机构id */
    id?: string;
  } 
  responseInterface: { 
    /** OK */
    response65: GetOrganizationDetailVO;
  }
}
/** /biz/organization/pageOrganization */
interface BizOrganizationPageOrganization { 
  paramInterface: { 
    /** 超管账号 */
    creatorPhone?: string;
    /** 机构id */
    id?: string;
    /** 机构名称 */
    orgName?: string;
    /** 页码，从 1 开始 */
    pageNum?: number;
    /** 每页大小 */
    pageSize?: number;
    /** 机构状态(1-使用中，2-已停用，-1已注销) */
    status?: string;
  } 
  responseInterface: { 
    /** OK */
    response66: PageVO<PageOrganizationVO>;
  }
}
/** /biz/organization/updateOrganizationName */
interface BizOrganizationUpdateOrganizationName { 
  paramInterface: { 
    /** frm */
    frm?: UpdateOrganizationNameFrm;
    /** userId */
    userId?: string;
  } 
  responseInterface: { 
    /** OK */
  }
}
/** /biz/shop/add */
interface BizShopAdd { 
  paramInterface: { 
    /** request */
    request?: ShopAddRequest;
  } 
  responseInterface: { 
    /** OK */
    response67: ResultVO<实体类VO>;
  }
}
/** /biz/shop/bindCommunity */
interface BizShopBindCommunity { 
  paramInterface: { 
    /** frm */
    frm?: BindCommunityFrm;
  } 
  responseInterface: { 
    /** OK */
    response68: boolean;
  }
}
/** /biz/shop/detail */
interface BizShopDetail { 
  paramInterface: { 
    /** frm */
    frm?: 通用ID为Long的查询Frm;
  } 
  responseInterface: { 
    /** OK */
    response69: ResultVO<实体类VO>;
  }
}
/** /biz/shop/disableOrEnable */
interface BizShopDisableOrEnable { 
  paramInterface: { 
    /** request */
    request?: IsVisibleRequest;
  } 
  responseInterface: { 
    /** OK */
    response70: ResultVO;
  }
}
/** /biz/shop/findCommunityInfo */
interface BizShopFindCommunityInfo { 
  paramInterface: { 
    /** request */
    request?: 通用ID为String的查询Frm;
  } 
  responseInterface: { 
    /** OK */
    response71: ResultVO<ShopVO>;
  }
}
/** /biz/shop/findShopByCondition */
interface BizShopFindShopByCondition { 
  paramInterface: { 
    /** request */
    request?: FindShopRequest;
  } 
  responseInterface: { 
    /** OK */
    response72: ResultVO<List<ShopH5VO>>;
  }
}
/** /biz/shop/importShops */
interface BizShopImportShops { 
  paramInterface: { 
    /** file */
    file?: unknown;
  } 
  responseInterface: { 
    /** OK */
    response73: ImportShopDataVo;
  }
}
/** /biz/shop/page */
interface BizShopPage { 
  paramInterface: { 
    /** request */
    request?: ShopPageRequest;
  } 
  responseInterface: { 
    /** OK */
    response74: ResultVO<PageVO<实体类VO>>;
  }
}
/** /biz/shop/update */
interface BizShopUpdate { 
  paramInterface: { 
    /** request */
    request?: ShopUpdateRequest;
  } 
  responseInterface: { 
    /** OK */
    response75: ResultVO<实体类VO>;
  }
}
/** /biz/shop/updateOperatitonField */
interface BizShopUpdateOperatitonField { 
  paramInterface: { 
    /** request */
    request?: ShopUpdateOperationFieldRequest;
  } 
  responseInterface: { 
    /** OK */
    response76: ResultVO<实体类VO>;
  }
}
/** /biz/system/getSystemMenu */
interface BizSystemGetSystemMenu { 
  responseInterface: { 
    /** OK */
    response77: Array<GetSystemMenuVO>;
  }
}
/** /biz/work/weixin/auth/binding */
interface BizWorkWeixinAuthBinding { 
  paramInterface: { 
    /** bindFrm */
    bindFrm?: WorkWeixinBindFrm;
  } 
  responseInterface: { 
    /** OK */
    response78: ResultVO;
  }
}
/** /biz/work/weixin/auth/queryBind */
interface BizWorkWeixinAuthQueryBind { 
  paramInterface: { 
    /** frm */
    frm?: QueryBindFrm;
  } 
  responseInterface: { 
    /** OK */
    response79: ResultVO;
  }
}
/** /biz/work/weixin/auth/syncThirdUser */
interface BizWorkWeixinAuthSyncThirdUser { 
  paramInterface: { 
    /** frm */
    frm?: SyncThirdUserFrm;
  } 
  responseInterface: { 
    /** OK */
    response80: ResultVO;
  }
}
/** /error */
interface Error { 
  responseInterface: { 
    /** OK */
    response81: ResultVO<object>;
  }
  responseInterface: { 
    /** OK */
    response82: ResultVO<object>;
  }
  responseInterface: { 
    /** OK */
    response83: ResultVO<object>;
  }
  responseInterface: { 
    /** OK */
    response84: ResultVO<object>;
  }
  responseInterface: { 
    /** OK */
    response85: ResultVO<object>;
  }
  responseInterface: { 
    /** OK */
    response86: ResultVO<object>;
  }
  responseInterface: { 
    /** OK */
    response87: ResultVO<object>;
  }
}
/** /heartbeat */
interface Heartbeat { 
  responseInterface: { 
    /** OK */
    response88: ResultVO<object>;
  }
}
interface AddWhiteAccountRequest { 
  bcustomerId?: string;
  /** 手机号 */
  phone?: string;
}
interface AdminRoleDelRequest { 
  /** 主键id */
  roleId?: string;
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
interface ApplicationManagementVO { 
  /** 应用别名 */
  appAlias?: string;
  /** 使用教程 */
  appCourse?: string;
  /** 应用介绍 */
  appInfo?: string;
  /** 使用限定 */
  appLimit?: Array<string>;
  /** 应用开启状态(0:关闭 、1:开启) */
  appOpenStatus?: string;
  /** 价格 */
  appPrice?: number;
  /** 使用期限 */
  appTerm?: string;
  /** 使用期限修改时间 */
  appTermUpdateTime?: string;
  /** 类型 */
  appType?: string;
  burl?: string;
  /** 是否可关闭 */
  close?: boolean;
  /** 关闭后应用图标 */
  closeIcon?: 图片实体; 
  /** 社区数量 */
  comtyCount?: number;
  /** 创建人ID */
  createId?: string;
  /** 创建人 */
  createName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 附加属性 */
  extraList?: Array<string>;
  /** 菜单标识 */
  flag?: string;
  /** C端url */
  h5Url?: string;
  /** icon图标 */
  icon?: string;
  /** 图片url */
  iconUrl?: string;
  /** 主键ID */
  id?: string;
  /** 是否收费 */
  isCharge?: string;
  /** 小程序url */
  miniUrl?: string;
  /** 名称 */
  name?: string;
  /** 应用开通标识 */
  openAppFlag?: string;
  /** 开通后应用图标 */
  openIcon?: 图片实体; 
  /** 展示类型 */
  posType?: string;
  /** 可见范围 */
  showStatus?: string;
  /** 状态 */
  status?: string;
  /** 简介 */
  synopsis?: string;
  /** 应用子级菜单 */
  tabMenus?: Array<TabMenu>;
  /** 更新人ID */
  updateId?: string;
  /** 更新人 */
  updateName?: string;
  /** 更新时间 */
  updateTime?: string;
  /** 关联路径 */
  url?: string;
}
interface ApplyMap { 
  /** 申请理由 */
  operateReason?: string;
  /** 申请时间 */
  operateTime?: string;
  /** 操作类型 admin：爱问后台；saas B端 */
  operateType?: string;
  /** 申请人 */
  operator?: string;
}
interface ApplyRechargeCoinsRequest { 
  /** 金额 */
  coinCount?: string;
  /** 社区id */
  communityId?: string;
  /** isBilling */
  isBilling?: string;
}
interface BindCommunityFrm { 
  /** 社区id */
  communityId?: string;
  /** 商家id */
  shopId?: number;
}
interface BusinessHours { 
  /** 开始时间 */
  beginTime?: string;
  /** 结束日期 */
  endDate?: string;
  /** 截止时间 */
  endTime?: string;
  /** 起始日期 */
  startDate?: string;
}
interface B端客户实体 { 
  btype?: string;
  /** 我的社区数 */
  communityCount?: number;
  /** 创建者Id */
  createId?: string;
  /** 创建者名称 */
  createName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 头像 */
  faceimage?: string;
  /** 主键ID */
  id?: string;
  /** 加入机构的时间 */
  joinOrgTime?: string;
  /** 姓名 */
  name?: string;
  /** 所属账号ID */
  orgId?: string;
  /** 登录的手机号 */
  phone?: string;
  /** 注销/停用原因 */
  reason?: string;
  /** 账号所属角色 */
  roleId?: string;
  /** 账号所属角色名称 */
  roleName?: string;
  /** 账号状态 */
  status?: string;
}
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
interface CommunityBaseInfoResponse { 
  /** 社区id */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** 社区状态 */
  status?: string;
}
interface CommunityContentVO { 
  /** 文章分类(10002:诊间日记;20001科普视频;10001健康科普;10003:患者自述;10004：热点追踪;10005病例分析；10006:文章咨询(医院);10007:集团资讯;10008:媒体文章;10009:医药文章;) */
  articleType?: string;
  /** 文章作者 */
  articleUserId?: string;
  /** 文章作者 */
  articleUserName?: string;
  /** 分类名称 */
  className?: string;
  /** 阅读人数 */
  commentCount?: string;
  /** 社区id */
  comtyId?: string;
  /** 社区名称 */
  comtyName?: string;
  /** 文章状态 */
  contentStatus?: string;
  /** 科室名称 */
  deptName?: string;
  /** 主键id */
  id?: string;
  /** 点赞数 */
  praisePoints?: number;
  /** 发布时间 */
  publishTime?: string;
  /** 阅读数 */
  readCount?: string;
  /** pv */
  readCount_pv?: string;
  /** uv */
  readCount_uv?: number;
  /** 来源 */
  source?: string;
  /** 状态 */
  status?: string;
  /** 文章标题 */
  title?: string;
  /** 分类名称 */
  typeName?: string;
}
interface CommunityCustomer { 
  /** 是否签署社区活动协议 */
  activitySign?: boolean;
  /** 所属城市 */
  address?: string;
  /** 文章贡献数 */
  articlesNumber?: string;
  /** 提交资质审核申请时间 */
  auditApplyTime?: string;
  /** 医生审核状态，需要医端同步 */
  auditStatus?: string;
  /** 审核时间 配合status判断是什么类型的审核时间 */
  auditTime?: string;
  bid?: string;
  /** 城市id */
  cityId?: string;
  /** 社区审核申请时间 */
  communityAuditApplyTime?: string;
  /** 社区审核时间 */
  communityAuditDate?: string;
  /** 所属社区ID */
  comtyId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 客户属性 */
  customerAttribute?: string;
  /** 客户ID */
  customerId?: string;
  /** 客户名称 */
  customerName?: string;
  /** 来源 */
  customerSource?: string;
  /** 客户类型 */
  customerType?: string;
  /** 所属科室 */
  depId?: string;
  /** 科室名称 */
  depName?: string;
  /** 擅长领域 */
  expertiseArea?: string;
  headPicUrl?: string;
  /** 任职医院 */
  hospital?: string;
  /** 所属城市 */
  hospitalCity?: string;
  /** 主键id */
  id?: string;
  /** 是否已采集信息 0-否 1-是 */
  infoCollectFlag?: number;
  /** 邀请者Id */
  inviterId?: string;
  /** 邀请者type */
  inviterType?: string;
  /** 是否为预约医生 0:不是 1:是 */
  isAppointment?: string;
  /** 加入社区时间 */
  joinTime?: string;
  /** 标签 */
  labels?: Array<CommunityLabel>;
  /** 是否签署直播邀约社区活动协议 */
  liveInvitationSign?: boolean;
  /** 客户手机号码 */
  phone?: string;
  /** 发帖数 */
  postNumber?: string;
  /** 省份id */
  provinceId?: string;
  /** 所属省份 */
  provinceName?: string;
  /** 社区审核拒绝原因 */
  reason?: string;
  /** 客户注册时间 */
  registerTime?: string;
  /** 回帖数 */
  repliesNumber?: string;
  /** 客户状态 */
  status?: string;
  /** 职称 */
  title?: string;
}
interface CommunityDetailNewVO { 
  /** 社区简称 */
  abbreviation?: string;
  /** 地址 */
  address?: string;
  /** 认证审核状态  [未认证:-1、不通过:0 、通过:1 、待审核:2] */
  auditStatus?: string;
  /** 社区id */
  communityId?: string;
  /** 社区类型(1:医院 2:机构/集团 3:医生团队 4:项目型 5-药企、6-医生集团) */
  communityType?: string;
  /** 社区名称 */
  comtyName?: string;
  /** 企业名称(项目社区专有) */
  corporateName?: string;
  /** 科室 */
  deparements?: Array<DepartmentSimpleVO>;
  /** 擅长疾病标签 */
  departmentLabels?: Array<DepartmentLabel>;
  /** 主体类型/医院类型  医院、诊所、门诊、卫生所、社区卫生服务中心 */
  hospitalType?: string;
  /** 社区简介 */
  introduce?: string;
  /** 许可证 */
  licenses?: LicensesVO; 
  /** 联系人 */
  linkman?: string;
  /** 社区logo */
  logo?: string;
  /** 联系方式 */
  phone?: string;
  /** 项目介绍(项目社区专有) */
  programIntro?: string;
  /** 医院类型社区经营性质（[0：私立、1：公立] */
  property?: string;
  status?: string;
}
interface CommunityDetailResponse { 
  /** 社区简称 */
  abbreviation?: string;
  /** 地址 */
  address?: string;
  /** adminUser? */
  adminUsers?: string;
  /** 申请上线记录id */
  applyId?: string;
  /** 预约次数【冗余设计不保存数据，H5展示用】 */
  appointmentCount?: number;
  /** articleNum? */
  articleNum?: number;
  /** [未认证:-1、不通过:0 、通过:1 、待审核:2] */
  auditStatus?: string;
  /** 城市名称 */
  cityName?: string;
  /** coin */
  coin?: string;
  /** 社区id */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** 纬度 */
  coordinateX?: number;
  /** 经度 */
  coordinateY?: number;
  /** 企业名称 */
  corporateName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 社区资质 */
  credentials?: Array<Map<string,string>>;
  /** 社区科室信息 */
  deparements?: Array<Department>;
  doctorInfoList?: Array<社区医生实体>;
  /** 社区医生列表【冗余设计不保存数据，H5展示用】 */
  doctorList?: Array<CommunityCustomer>;
  /** 医生评价分【冗余设计不保存数据，H5展示用】 */
  doctorScore?: number;
  /** 医院库医院主键id */
  hospitalId?: string;
  /** 医院名称 */
  hospitalName?: string;
  /** 医院类型【0：诊所、1：卫生所、2：社区卫生服务中心、3：医院】 */
  hospitalType?: string;
  /** 社区简介 */
  introduce?: string;
  /** 宣传语 */
  introduction?: string;
  /** 科室标签信息 */
  labels?: Array<DepartmentLabel>;
  /** 联系人 */
  linkman?: string;
  /** 社区logo图片 */
  logo?: string;
  /** 机构id */
  originId?: string;
  /** 机构名称 */
  originName?: string;
  /** 联系方式 */
  phone?: string;
  /** articleNum? */
  postNum?: number;
  /** 经营性质 [0：私立、1：公立 ] */
  property?: string;
  /** roleId? */
  roleId?: string;
  /** （0：已下线、1：已上线、2：已注销、3：未上线、4：上线审核中、5：上线审核失败、6：违规下架） */
  status?: string;
  /** totalUser? */
  totalUser?: number;
  /** 社区类型v1.5.6版本(1:医院 2:机构/集团 3:医生团队 4:项目型 5-药企、6-医生集团) */
  type?: string;
  /** 社区类型名称 */
  typeName?: string;
  /** 用户数量 */
  userCount?: number;
}
interface CommunityGeneralizeVO { 
  /** 投放渠道(0:微博官方矩阵 1:微博热门话题 2:微博顶部广告位3:微信公众号) */
  channel?: string;
  /** 点击量 */
  clickCount?: number;
  /** 社区id */
  comtyId?: string;
  /** 社区名称 */
  comtyName?: string;
  /** 投放内容 */
  content?: string;
  /** 创建时间 */
  createTime?: string;
  /** 期望投放时段 */
  dateTimeOne?: string;
  /** 期望投放时段 */
  dateTimeTwo?: string;
  /** 曝光量 */
  exposureCount?: number;
  /** 主键id */
  id?: string;
  /** 投放图片对象 */
  imgs?: Array<Image>;
  /** 操作人id */
  operatorId?: string;
  /** 操作人名称 */
  operatorName?: string;
  /** 实际投放时间 */
  pushTime?: string;
  /** 投放类型(0:普通博文 1:九宫格 2:大card) */
  pushType?: string;
  /** 投放后的地址 */
  pushUrl?: Array<string>;
  /** 拒绝投放原因 */
  reason?: string;
  /** 备注 */
  remark?: string;
  /** 投放状态(0:待投放 1:已投放 2:投放中 3:拒绝) */
  status?: string;
  /** 投放链接 */
  url?: string;
}
interface CommunityLabel { 
  /** 社区id */
  comtyId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 主键id */
  id?: string;
  /** 标签名称 */
  labelName?: string;
  /** 标签类型[0:手动标签 1:福利社任务专题标签] */
  labelType?: string;
  /** 用户数[辅助字段] */
  useCount?: number;
  /** 标签所属用户类型  doctor:医生， user:用户,  aiwen:爱问后台 */
  userType?: string;
}
interface CommunityRoleAndMenusVo { 
  /** 菜单ID */
  menuId?: string;
  /** 权限标识 */
  permissionFlag?: string;
}
interface CommunityRoleModifyRequest { 
  /** 角色权限列表 */
  permission?: Array<Permission>;
  /** 描述 */
  remark?: string;
  /** 角色id：有id视为修改，无id为新增 */
  roleId?: string;
  /** 角色名称 */
  roleName?: string;
}
interface CommunityRoleVo { 
  /** 社区id    爱问为0 */
  communityId?: string;
  /** 创建用户 */
  createBy?: string;
  /** 创建时间 */
  createtime?: string;
  /** 数据范围:1:所有数据，2：所在公司及以下数据 3：所在公司的数据，4：所在部门 5：所在部门及以下数据，6 ：本人数据   7：按明细设置,可以跨机构授权 */
  dataScope?: string;
  /** 角色编号 */
  id?: string;
  /** 删除标志 */
  isDeleted?: number;
  /** 启用状态 */
  isEnable?: string;
  /** 备注 */
  remark?: string;
  /** 角色名称 */
  roleName?: string;
  /** 角色类型 */
  roleType?: number;
  /** 所属机构  爱问为0 */
  tenantId?: string;
  /** 更新用户 */
  updateby?: string;
  /** 更新时间 */
  updatetime?: string;
  /** 用户数 */
  userCount?: number;
}
interface CommunityWhiteAccount { 
  bcustomerId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 主键id */
  id?: string;
  /** 操作人 */
  operator?: string;
  /** 操作人id */
  operatorId?: string;
  /** B端登录手机号 */
  phone?: string;
  /** 0 删除 、1 正常 */
  status?: string;
  /** 名单类型 [黑 black、白 white] */
  type?: string;
  /** 更新时间 */
  updateTime?: string;
}
interface ComtyAdminOperateRequest { 
  /** 社区id */
  comtyId?: string;
  /** 管理员id */
  id?: string;
  /** 状态：0:停用 1:启用 3：注销 */
  status?: string;
}
interface ComtyAdminPwdResetRequest { 
  /** 使用登录的手机号 */
  accounts?: string;
  /** 管理员id */
  adminId?: string;
  /** 社区id */
  comtyId?: string;
}
interface ComtyMenuTreeVo { 
  /** 子菜单 */
  children?: Array<ComtyMenuTreeVo>;
  /** 启用状态 false启用，true 禁用 */
  enable?: boolean;
  /** 展开状态(1:展开;0:收缩) */
  expandStatus?: string;
  /** 节点图标CSS类名 */
  iconcls?: string;
  /** 菜单id */
  id?: string;
  /** 是否隐藏 true 是；false 否 */
  isHidden?: boolean;
  /** 叶子节点(0:树枝节点;1:叶子节点) */
  isShow?: string;
  /** 菜单名称 */
  menuName?: string;
  /** 上级菜单编号 */
  parentId?: string;
  /** 权限标识 */
  permissionFlag?: string;
  /** 备注 */
  remark?: string;
  /** 请求地址 */
  requestAddr?: string;
  /** 排序号 */
  sortNo?: number;
  /** 菜单类型 menu、button */
  type?: string;
}
interface CreateOrganizationFrm { 
  /** 渠道号 */
  channel?: string;
  /** 机构名 */
  orgName?: string;
  /** 创建机构的手机号 */
  phone?: string;
  /** 来源 */
  sourceType?: string;
}
interface Credential { 
  /** 图片ID */
  id?: string;
  /** 图片URL */
  imageUrl?: string;
  /** 图片类型 */
  modeType?: string;
}
interface DelMessageRequest { 
  /** 消息主键id */
  messageId?: string;
}
interface Department { 
  /** 创建人id */
  createId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 创建时间戳--辅助属性 */
  createTimestamp?: number;
  /** 创建人 */
  creater?: string;
  /** 主键ID */
  id?: string;
  /** 科室名称 */
  name?: string;
  /** 父级科室id */
  parentId?: string;
  /** 父级科室名称 */
  parentName?: string;
  /** 排序值 */
  sort?: number;
  /** 状态（禁用：off、启用：on） */
  status?: string;
}
interface DepartmentLabel { 
  /** 疾病别名 */
  alias?: string;
  /** 疾病代号 */
  code?: string;
  /** 创建人id */
  createId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 创建人 */
  creater?: string;
  /** 科室ID */
  departmentId?: string;
  /** 科室名称 */
  departmentName?: string;
  /** 主键ID */
  id?: string;
  /** 标签名称 */
  labelName?: string;
  /** 标签类型 */
  labelType?: string;
  /** 描述 */
  remark?: string;
  /** 更新时间 */
  updateTime?: string;
  /** 更新人名称 */
  updater?: string;
  /** 更新人id */
  updaterId?: string;
}
interface DepartmentSimpleVO { 
  /** 科室ID */
  id?: number;
  /** 科室名称 */
  name?: string;
}
interface DepartmentVO { 
  /** 科室ID */
  id?: number;
  /** 科室名称 */
  name?: string;
}
interface DistCommunityList { 
  /** 机构ID */
  businessId?: string;
  /** 机构名称 */
  businessName?: string;
  /** 社区ID */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
}
interface DoctorInfo { 
  /** 社区id */
  comtyId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 医端医生主键id（非平台医生无doctorId） */
  doctorId?: string;
  /** 医生头像 */
  headImg?: 图片实体; 
  /** 医院名称 */
  hospitalName?: string;
  /** 主键ID */
  id?: string;
  /** 医生身份证反面照 */
  idCardBackImg?: 图片实体; 
  /** 医生身份证正面照 */
  idCardFrontImg?: 图片实体; 
  /** 是否爱问平台医生（0：否 1：是） */
  isPlatformDoctor?: string;
  /** 医生执业照 */
  licenseImg?: 图片实体; 
  /** 医生姓名 */
  name?: string;
  /** 职称 */
  title?: string;
  /** 更新时间 */
  updateTime?: string;
}
interface FindActivityPromotionListFrm { 
  /** 投放渠道 */
  channel?: string;
  /** 投放结束时间 */
  endTime?: string;
  /** 页码 */
  page?: number;
  /** 页大小 */
  size?: number;
  /** 投放开始时间 */
  startTime?: string;
  /** 状态 */
  status?: string;
  /** 推广URL */
  url?: string;
  /** 用户id */
  userId?: string;
}
interface FindContentListFrm { 
  /** 文章id */
  articleId?: string;
  /** 文章标题/文章id */
  articleInfo?: string;
  /** 文章类型 */
  articleType?: string;
  /** 分类id */
  classId?: string;
  /** 社区id */
  communityId?: string;
  /** 社区名称/社区id */
  communityInfo?: string;
  /** 科室ID */
  departmentId?: string;
  /** 医生id */
  doctorId?: string;
  /** 医生名称/医生id */
  doctorInfo?: string;
  /** 发布结束时间 */
  endTime?: string;
  /** 查询关键字 */
  keyword?: string;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 评论数排序 */
  praiseSort?: string;
  /** 阅读数排序 */
  readSort?: string;
  /** 文章来源 */
  source?: string;
  /** 专题id */
  specialId?: string;
  /** 发布开始时间 */
  startTime?: string;
  /** 状态 */
  status?: string;
  /** 发布时间排序asc/desc */
  timeSort?: string;
  /** 标题 */
  title?: string;
  /** 真实阅读数排序 */
  trueReadSort?: string;
}
interface FindFunctionIntroductionFrm { 
  /** 应用标识 */
  flag?: string;
  /** 主键id */
  id?: string;
}
interface FindPostbarListFrm { 
  /** 社区id */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
}
interface FindShopRequest { 
  /** id */
  id?: number;
  /** 指定机构id */
  ids?: Array<number>;
}
interface GetCommunityBindWeiboListFrm { 
  /** 社区id */
  communityId?: string;
}
interface GetFundInfoVO { 
  countCoins?: number;
  expendCountCoins?: number;
  frozenCoins?: number;
}
interface GetOrganizationDetailVO { 
  /** 创建人姓名 */
  adminName?: string;
  /** 渠道号 */
  channel?: string;
  /** 创建时间 */
  createTime?: string;
  /** 创建人id */
  creatorId?: string;
  /** 超管账号 */
  creatorPhone?: string;
  /** 主键id */
  id?: string;
  /** 邀请链接开关状态[true 开；false 关] */
  inviteUrlStatus?: boolean;
  /** 机构名称 */
  orgName?: string;
  /** 注册来源 */
  sourceType?: string;
  /** 机构状态(1-使用中，2-已停用，-1已注销) */
  status?: string;
  /** 更新时间 */
  updateTime?: string;
}
interface GetSystemMenuVO { 
  children?: Array<GetSystemMenuVO>;
  enable?: string;
  expandStatus?: string;
  iconcls?: string;
  id?: string;
  isShow?: string;
  name?: string;
  parentId?: string;
  permissionStr?: string;
  remark?: string;
  requestAddr?: string;
  sortNo?: string;
}
interface GetWeChatDetailsFrm { 
  /** 社区id */
  communityId?: string;
}
interface Image { 
  /** 图片链接 */
  url?: string;
}
interface ImportShopDataVo { 
  /** 匹配失败的信息缓存key,有效时间一个小时 */
  exportFailDataKey?: string;
  /** 导入失败的数量 */
  failNum?: number;
  /** 导入成功的数量 */
  successNum?: number;
}
interface IsVisibleRequest { 
  ids?: Array<number>;
  /** 是否启用：false 禁用，true启用 */
  isVisible?: boolean;
  /** 修改人 */
  updateBy?: string;
}
interface License { 
  /** 统一社会代码/编号/登记号 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 图片url */
  url?: string;
  /** 有效期 */
  validityTerm?: string;
}
interface LicensesVO { 
  businessLicense?: License; 
  industryLicense?: License; 
  otherCertificates?: Array<License>;
  practiceLicense?: License; 
}
interface Map<string,string> { 
}
interface ModifyAdminRoleInfoRequest { 
  /** 角色名称 */
  name?: string;
  /** 角色权限列表 */
  permission?: Array<Permission>;
  /** 角色id */
  roleId?: string;
}
interface Mongo坐标实体 { 
  /** 坐标 */
  coordinates?: Array<number>;
  /** 类型 */
  type?: string;
}
interface PageActivitiesResponse { 
  /** 邀约活动结束时间 */
  actEndTime?: string;
  /** 邀约介绍 */
  actIntroduce?: string;
  /** 邀约名称 */
  actName?: string;
  /** 邀约图片 */
  actPic?: string;
  /** 邀约类型（科普文章：0、专题活动：1） */
  actType?: string;
  /** 采纳的文章数量 */
  adoptNum?: string;
  /** 应用ID */
  appId?: string;
  /** 审核状态 一期默认审核通过审核 【不通过:0 通过:1 待审核:2】 */
  auditStatus?: string;
  bid?: string;
  /** 文章、专题分类Id */
  classId?: string;
  /** 文章、专题分类名称 */
  className?: string;
  /** 所属社区ID */
  comtyId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 邀约发起人Id */
  customerId?: string;
  /** 邀约发起人（社区用户名称） */
  customerName?: string;
  /** 邀约客户类型（本社区医生：0、爱问医生：1、批量导入：2） */
  customerType?: string;
  /** 文章、专题科室Id */
  depId?: string;
  /** 文章、专题科室名称 */
  depName?: string;
  /** 邀约科室（多个） */
  departments?: Array<string>;
  /** 邀约有效结束时间 */
  endTime?: string;
  /** 计划总支出 */
  expends?: number;
  /** 邀约ID */
  id?: string;
  /** 邀请产出内容是否原创(原创:0、非原创：1） */
  isOriginal?: string;
  /** 每个医生限制投稿数 */
  limitArticleCount?: number;
  /** 要求数量 */
  number?: number;
  /** 报价类型 1等额；2职称报价 */
  priceType?: number;
  /** 拒绝文章数 */
  refusedArticleNum?: number;
  /** 每篇奖励 */
  reward?: number;
  /** 邀约有效开始时间 */
  startTime?: string;
  /** 邀约状态（待邀约:0、进行中:1、已结束:2） */
  status?: string;
  /** 专题封面图 */
  subjectCoverimg?: string;
  /** 专题ID */
  subjectId?: string;
  /** 专题介绍 */
  subjectInstro?: string;
  /** 专题名称 */
  subjectName?: string;
  /** 职称报价 */
  titlePrice?: Array<TitleInfo>;
  /** 邀约话题词 */
  topic?: string;
  /** 待筛选 */
  waitAdoptNum?: string;
}
interface PageAdminRoleVo { 
  /** 角色创建人id */
  createBy?: string;
  /** 角色创建人名称 */
  createName?: string;
  /** 角色创建时间 */
  createtime?: string;
  /** 角色ID */
  id?: string;
  /** 删除标志 */
  isDeleted?: number;
  /** 角色说明 */
  remark?: string;
  /** 角色名称 */
  roleName?: string;
}
interface PageArticlesResponse { 
  /** 采纳金币 */
  acceptCoins?: number;
  /** 采纳时间 */
  acceptTime?: string;
  /** 邀约ID */
  actId?: string;
  /** 邀约名称 */
  actName?: string;
  /** 访问路径 */
  address?: string;
  /** 文章唯一Id,对应医生端数据,用于去重 */
  articleId?: string;
  /** 同医端文章分类(目前同步的:1 健康科普;2 诊间日记; 5 病例分析;) */
  articleType?: string;
  /** 作者ID */
  authorId?: string;
  /** 作者 */
  authorName?: string;
  /** 作者手机 */
  authorPhone?: string;
  /** 作者类型（医生：0 */
  authorType?: string;
  bid?: string;
  /** 是否可以下发奖励 */
  canDistrReward?: boolean;
  /** 内容分类ID */
  classId?: string;
  /** 分类名称 */
  className?: string;
  /** 评论数 */
  comments?: number;
  /** 所属社区ID */
  comtyId?: string;
  /** 社区pv */
  comtyPv?: number;
  /** 文章内容 */
  content?: string;
  /** 内容ID（文章ID/视频ID） */
  contentId?: string;
  /** 内容类型（文章:0,视频:1) */
  contentType?: string;
  /** 封面 */
  cover?: string;
  /** 创建时间 */
  createTime?: string;
  /** 科室Id */
  depId?: string;
  /** 科室名称 */
  depName?: string;
  /** 疾病标签名称集合(同步医端的) */
  diseaseTagName?: Array<string>;
  /** 下发奖励时间（用于列表倒计时） */
  distrRewardTime?: string;
  /** 医生科室名称 */
  doctorDepName?: string;
  /** 执业类型 */
  doctorProfession?: string;
  /** 医生pv */
  doctorPv?: number;
  /** 职称 */
  doctorTitle?: string;
  /** 首发社区id */
  firstPublishComtyId?: string;
  /** 首发社区名称 */
  firstPublishComtyName?: string;
  /** 作者/医生头像 */
  headPic?: string;
  /** 医生所属医院 */
  hospital?: string;
  /** 主键ID */
  id?: string;
  /** 医端文章初始发布时间 */
  initPublishTime?: string;
  /** 是否置顶（0:不顶置 1:顶置 */
  isStick?: number;
  /** 文章标签ID */
  lables?: Array<string>;
  /** 点赞数（视频文章专属） */
  likeCount?: number;
  /** 内容发布状态（0下线；1上线） */
  onlineStatus?: number;
  /** 点赞数 */
  praisePoints?: number;
  /** 浏览数 */
  pv?: number;
  /** 奖励金币 */
  rewardCoins?: number;
  /** 奖励状态 0 没奖励； 1 下发中；2已奖励； */
  rewardStatus?: number;
  /** 来源（0：专题邀约，1：文章邀约，2：诊室投稿，3：其它） */
  sourceType?: string;
  /** 采纳状态（-1:删除、0:待采纳、1:采纳、2:丢弃） */
  status?: string;
  /** 专题ID */
  subjectId?: string;
  /** 专题名称 */
  subjectName?: string;
  /** 标题 */
  title?: string;
  /** 内容链接 */
  url?: string;
  /** 访问用户数 */
  uv?: number;
  /** 虚拟阅读数 */
  virtualPv?: number;
  /** 微博用户浏览数 */
  wbPv?: number;
  /** 微博访问用户数 */
  wbUv?: number;
  /** 微信用户浏览数 */
  wxPv?: number;
  /** clinicDoctor/getClinicDoctorList微信访问用户数 */
  wxUv?: number;
}
interface PageCoinTradListFrm { 
  /** 社区id */
  communityId?: string;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
}
interface PageCommunitiesResponse { 
  /** 社区简称 */
  abbreviation?: string;
  /** appNames */
  appNames?: Array<string>;
  /** 申请资质审核时间 */
  applyAuditTime?: string;
  /** 开通的应用 */
  apps?: string;
  /** 认证时间 */
  auditDate?: string;
  /** 审核理由 */
  auditReason?: string;
  /** 认证审核状态 未认证:-1、不通过:0 、通过:1 、待审核:2 */
  auditStatus?: string;
  bid?: string;
  bphone?: string;
  /** channel值【冗余设计不保存数据】 */
  channel?: string;
  /** 城市id */
  cityId?: string;
  /** 城市名称 */
  cityName?: string;
  /** 社区名称 */
  comtyName?: string;
  /** 社区总的咨询数 */
  consultCount?: number;
  /** 坐标 */
  coordinate?: Mongo坐标实体; 
  /** 企业名称 */
  corporateName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 社区当前类型 (1:医院 2:机构/集团 3:医生团体 4:项目型) */
  currentType?: string;
  /** 医院科室 */
  departmentIds?: Array<string>;
  /** 区县id */
  districtId?: string;
  /** 区县名称 */
  districtName?: string;
  /** 社区医生数量 */
  doctorCount?: number;
  /** 社区id */
  id?: string;
  /** h5社区介绍图片展示 */
  introductImages?: Array<Image>;
  /** 社区slogan */
  introduction?: string;
  /** 上线原因(v1.5.4 新增) */
  onlineReason?: string;
  /** 上线审核状态(v1.5.4 新增)[待审核:-1、不通过:0 、通过:1 ] */
  onlineStatus?: string;
  /** 社区标识（prd:正式,test:测试） */
  openStatus?: string;
  /** 社区患者数量 */
  patientCount?: number;
  /** 发帖数 */
  postNumber?: string;
  /** 省份id */
  provinceId?: string;
  /** 省份名称 */
  provinceName?: string;
  /** 社区来源，【PC：PC注册   H5: H5注册   DH：牙医管家注册】 */
  sourceType?: string;
  /** 社区状态 0：已下架、1：已上线、2：已注销、3：未上线、4：上线审核中、5：上线审核失败、6：违规下架 */
  status?: string;
  /** 社区类型 (1:医院 2:机构/集团 3:医生团体 4:项目型) */
  type?: string;
  /** 社区权重 */
  weightResult?: number;
}
interface PageCommunityAdminResponse { 
  btype?: string;
  /** 创建人id */
  createId?: string;
  /** 创建者名称 */
  createName?: string;
  /** 创建时间 */
  createTime?: string;
  /** id */
  id?: string;
  /** 加入机构时间 */
  joinOrgTime?: string;
  /** 名称 */
  name?: string;
  /** 机构id */
  orgId?: string;
  /** 手机号 */
  phone?: string;
  /** 角色名称 */
  roleName?: string;
  /** 状态 */
  status?: string;
}
interface PageCommunityByOrgIdVO { 
  /** 社区简称 */
  abbreviation?: string;
  /** 地址 */
  address?: string;
  appNames?: Array<string>;
  /** 申请资质审核时间 */
  applyAuditTime?: string;
  /** 申请上线记录id */
  applyOnlineId?: string;
  /** 下架再次申请上线原因(v1.5.4 新增) */
  applyOnlineReason?: string;
  /** 申请上线时间 */
  applyOnlineTime?: string;
  /** 开通的应用 */
  apps?: string;
  /** 文章数 */
  articleNum?: number;
  /** 认证时间 */
  auditDate?: string;
  /** 审核不通原因(v1.5.3 新增) */
  auditReason?: string;
  /** 认证审核状态 */
  auditStatus?: string;
  /** 所属机构ID */
  bId?: string;
  bname?: string;
  /** 营业时间 */
  businessHours?: Array<BusinessHours>;
  /** 城市id */
  cityId?: string;
  /** 机构代码 */
  companyCode?: string;
  /** 社区层级（1：A级、2：B级 、3：C级） */
  comtyLevel?: number;
  /** 社区名称 */
  comtyName?: string;
  /** 社区总的预约量 */
  consultCount?: number;
  /** 坐标 */
  coordinate?: SaasCoordinate; 
  /** 纬度 */
  coordinateX?: number;
  /** 经度 */
  coordinateY?: number;
  /** 企业名称 */
  corporateName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 医院科室 */
  departmentIds?: Array<string>;
  /** 距离 单位;KM【冗余设计不保存数据，H5展示用】 */
  distance?: number;
  /** 行政区id */
  districtId?: string;
  /** 医生数 */
  doctorNum?: number;
  /** 粉丝数 */
  fansNum?: number;
  /** 医院库医院主键id（与医院库做关联，非医院类型社区无此字段） */
  hospitalId?: string;
  /** 医院名称 */
  hospitalName?: string;
  /** 医院类型[0：诊所、1：卫生所、2：社区卫生服务中心、3：医院] */
  hospitalType?: string;
  /** 社区id */
  id?: string;
  /** 社区信息完整度（10%为10，20%为20...） */
  infoComplete?: number;
  /** 社区简介 */
  introduce?: string;
  /** h5社区介绍图片展示 */
  introductImages?: Array<Image>;
  /** 社区slogan */
  introduction?: string;
  /** 用户是否加入社区 */
  isFollow?: boolean;
  /** 社区标签 */
  labelName?: Array<string>;
  /** 科室标签信息 */
  labels?: Array<DepartmentLabel>;
  /** 联系人 */
  linkman?: string;
  /** 社区logo */
  logo?: Image; 
  /** 社区log地址 */
  logoUrl?: string;
  /** 用户数 */
  normalUserNum?: number;
  /** 上线审核不通原因(v1.5.4 新增) */
  onlineReason?: string;
  /** 上线审核状态(v1.5.4 新增)[待审核:-1、不通过:0 、通过:1 ] */
  onlineStatus?: string;
  /** 社区标识（prd:正式,test:测试） */
  openStatus?: string;
  /** 社区装修配置营业时间 */
  openingHours?: string;
  /** 社区迁移之前的类型 */
  originType?: string;
  /** 联系方式 */
  phone?: string;
  /** 项目介绍（非项目类型社区无此字段） */
  programIntro?: string;
  /** 经营性质 [0：私立、1：公立 ] */
  property?: string;
  /** 省份id */
  provinceId?: string;
  /** 二维码 */
  qrCode?: string;
  /** 注销原因 */
  reason?: string;
  /** 客服电话 */
  servicePhone?: string;
  /** 客服URL */
  serviceUrl?: string;
  /** 社区来源，【PC：PC注册   H5: H5注册   DH：牙医管家注册】 */
  sourceType?: string;
  /** 社区状态 */
  status?: string;
  /** 社区类型 */
  type?: string;
  /** 微博名称 */
  weiboName?: string;
  /** 微博二维码url */
  weiboUrl?: string;
  /** 社区权重 */
  weightResult?: number;
  /** 微信名称 */
  weixinName?: string;
  /** 微信二维码图片url */
  weixinUrl?: string;
  /** wxAuthorizerAppId */
  wxAuthorizerAppId?: string;
  /** 公众号业务ID */
  wxBusinessId?: string;
  /** 微信公众号名称 */
  wxOAName?: string;
  /** 微信公众号二维码图片url */
  wxOAUrl?: string;
}
interface PageComtyWhiteAccountFrm { 
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 手机号码 */
  phone?: string;
}
interface PageDoctorsResponse { 
  /** 活动数量 */
  activesNumber?: number;
  /** 所属城市 */
  address?: string;
  /** 文章贡献数 */
  articlesNumber?: string;
  bid?: string;
  /** 城市id */
  cityId?: string;
  /** 所属城市 */
  cityName?: string;
  /** 所属社区ID */
  comtyId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 客户属性 */
  customerAttribute?: string;
  /** 客户ID */
  customerId?: string;
  /** 客户名称 */
  customerName?: string;
  /** 来源 */
  customerSource?: string;
  /** 客户类型 */
  customerType?: string;
  /** 所属科室 */
  depId?: string;
  /** 科室名称 */
  depName?: string;
  /** 擅长领域 */
  expertiseArea?: string;
  /** 头像 */
  headPicUrl?: string;
  /** 任职医院 */
  hospital?: string;
  /** 主键id */
  id?: string;
  /** 邀请人 */
  inviter?: string;
  /** 邀请者Id */
  inviterId?: string;
  /** 邀请者type */
  inviterType?: string;
  /** 是否为预约医生 0:不是 1:是 */
  isAppointment?: string;
  /** 加入社区时间 */
  joinTime?: string;
  /** 标签 */
  labels?: Array<CommunityLabel>;
  /** 客户手机号码 */
  phone?: string;
  /** 发帖数 */
  postNumber?: string;
  /** 省份id */
  provinceId?: string;
  /** 所属省份 */
  provinceName?: string;
  /** 客户注册时间 */
  registerTime?: string;
  /** 回帖数 */
  repliesNumber?: string;
  /** 客户状态 */
  status?: string;
  /** 职称 */
  title?: string;
}
interface PageFundsResponse { 
  applyTime?: string;
  confirmTime?: string;
  id?: number;
  rechargeAmount?: number;
  rechargeState?: number;
  thirdId?: string;
}
interface PageMessageFrm { 
  bid?: string;
  /** 社区id */
  comtyId?: string;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 读取标识 */
  readFlag?: string;
  /** 消息类型（0:系统消息:,1:公告消息） */
  type?: string;
}
interface PageMessageVo { 
  bid?: string;
  /** 社区id */
  comtyId?: string;
  /** 内容 */
  content?: string;
  /** 创建人 */
  createBy?: string;
  /** 创建时间 */
  createTime?: string;
  /** 主键ID */
  id?: string;
  /** 发送时间 */
  pushTime?: string;
  /** 读取标识 */
  readFlag?: string;
  /** 更新人 */
  reviseName?: string;
  /** 更新时间 */
  reviseTime?: string;
  /** 状态 */
  status?: string;
  /** 标题 */
  title?: string;
  /** 类型 */
  type?: string;
  /** 版本 */
  version?: string;
}
interface PageNewsResponse { 
  communityId?: string;
  content?: string;
  coverUrl?: string;
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  id?: string;
  isTop?: number;
  orgId?: string;
  publishTime?: string;
  status?: string;
  title?: string;
  updateTime?: string;
  updateUserId?: string;
}
interface PageOperatingRecordResponse { 
  /** 对应的申请上线记录id */
  applyId?: string;
  /** 申请记录信息[辅助信息] */
  applyMap?: ApplyMap; 
  /** 社区id */
  comtyId?: string;
  /** 主键ID */
  id?: string;
  /** 操作/申请理由 */
  operateReason?: string;
  /** 操作状态 0：不通过 1：通过 */
  operateStatus?: string;
  /** 操作/申请时间 */
  operateTime?: string;
  /** 操作类型 admin：爱问后台操作；saas B端后台 */
  operateType?: string;
  /** 操作/申请人 */
  operator?: string;
  /** 操作/申请人id */
  operatorId?: string;
  /** 记录类型 0：社区认证 、1：上线审核、2：申请上线 */
  type?: string;
}
interface PageOrderRequest { 
  /** 活动ID */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /** 客户手机号 */
  buyerMobile?: string;
  /** 社区id */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** 商品名称 */
  goodName?: string;
  /** 下单结束时间 */
  orderEndTime?: string;
  /** 订单编号 */
  orderId?: string;
  /** 下单开始时间 */
  orderStartTime?: string;
  /** 订单状态：1.待到店 2.已到店 3.已完成 4.已关闭 */
  orderStatus?: string;
  /** 机构ID */
  orgId?: string;
  /** 机构名称 */
  orgName?: string;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 核销状态：1.未核销 2.已核销 */
  writeOffStatus?: string;
}
interface PageOrganizationUserByOrgIdVO { 
  /** 账号类型 */
  bType?: string;
  /** 我的社区数 */
  communityCount?: number;
  /** 创建者Id */
  createId?: string;
  /** 创建者名称 */
  createName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 头像 */
  faceimage?: string;
  /** 主键ID */
  id?: string;
  /** 加入机构的时间 */
  joinOrgTime?: string;
  /** 姓名 */
  name?: string;
  /** 所属账号ID */
  orgId?: string;
  /** 登录的手机号 */
  phone?: string;
  /** 注销/停用原因 */
  reason?: string;
  /** 账号所属角色 */
  roleId?: string;
  /** 账号所属角色名称 */
  roleName?: string;
  /** 账号状态 */
  status?: string;
}
interface PageOrganizationUserVO { 
  /** 账号类型 */
  bType?: string;
  /** 我的社区数 */
  communityCount?: number;
  /** 创建者Id */
  createId?: string;
  /** 创建者名称 */
  createName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 头像 */
  faceimage?: string;
  /** 主键ID */
  id?: string;
  /** 加入机构的时间 */
  joinOrgTime?: string;
  /** 姓名 */
  name?: string;
  /** 所属账号ID */
  orgId?: string;
  /** 机构名称 */
  orgName?: string;
  /** 登录的手机号 */
  phone?: string;
  /** 注销/停用原因 */
  reason?: string;
  /** 账号所属角色 */
  roleId?: string;
  /** 账号所属角色名称 */
  roleName?: string;
  /** 账号状态 */
  status?: string;
}
interface PageOrganizationVO { 
  /** 渠道号 */
  channel?: string;
  /** 创建时间 */
  createTime?: string;
  /** 创建人id */
  creatorId?: string;
  /** 超管账号 */
  creatorPhone?: string;
  /** 主键id */
  id?: string;
  /** 邀请链接开关状态[true 开；false 关] */
  inviteUrlStatus?: boolean;
  /** 机构名称 */
  orgName?: string;
  /** 注册来源 */
  sourceType?: string;
  /** 机构状态(1-使用中，2-已停用，-1已注销) */
  status?: string;
  /** 更新时间 */
  updateTime?: string;
}
interface PagePostBarVO { 
  /** 社区id */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** id */
  id?: string;
  /** 发送数量 */
  postNumber?: number;
  /** 状态 */
  status?: string;
  /** 社区类型 */
  type?: string;
}
interface PageSearchAccountByPhoneFrm { 
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 手机号 */
  phone?: string;
}
interface PageVO { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<unknown>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<CoinTradVO> { 
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
interface PageVO<CommunityContentVO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<CommunityContentVO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<CommunityGeneralizeVO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<CommunityGeneralizeVO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<CommunityRoleVo> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<CommunityRoleVo>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<CommunityWhiteAccount> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<CommunityWhiteAccount>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<DistCommunityList> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<DistCommunityList>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageActivitiesResponse> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageActivitiesResponse>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageAdminRoleVo> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageAdminRoleVo>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageArticlesResponse> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageArticlesResponse>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageCommunitiesResponse> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageCommunitiesResponse>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageCommunityAdminResponse> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageCommunityAdminResponse>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageCommunityByOrgIdVO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageCommunityByOrgIdVO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageDoctorsResponse> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageDoctorsResponse>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageFundsResponse> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageFundsResponse>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageMessageVo> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageMessageVo>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageNewsResponse> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageNewsResponse>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageOperatingRecordResponse> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageOperatingRecordResponse>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageOrganizationUserByOrgIdVO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageOrganizationUserByOrgIdVO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageOrganizationUserVO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageOrganizationUserVO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PageOrganizationVO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PageOrganizationVO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<PagePostBarVO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<PagePostBarVO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<SpecialTopicActivityVO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<SpecialTopicActivityVO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<医美订单VO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<医美订单VO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<实体类VO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<实体类VO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<活动分发列表> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<活动分发列表>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<活动分发社区报名信息> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<活动分发社区报名信息>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface PageVO<表(product_manage)实体类VO> { 
  /** 下一页页码，没有下一页返回 -1 */
  nextPageNum?: number;
  /** 页序数 */
  pageNum?: number;
  /** 当页记录数量 */
  pageSize?: number;
  /** 当前页元素 */
  rows?: Array<表(product_manage)实体类VO>;
  /** 记录总数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
}
interface Permission { 
  /** 权限类型标签 */
  attr?: string;
  /** 权限类型 */
  permissionFlag?: string;
  /** 权限id */
  permissionId?: string;
}
interface PictureFrm { 
  /** 图片链接 */
  picUrl?: string;
  /** 图片排序（0表示主图） */
  sort?: number;
  /** 图片状态：W待审核、Y审核通过、N审核拒绝 */
  status?: string;
}
interface PictureVO { 
  /** 主键(自增) */
  id?: number;
  /** 图片链接 */
  picUrl?: string;
  /** 图片排序（0表示主图） */
  sort?: number;
  /** 图片状态：W待审核、Y审核通过、N审核拒绝 */
  status?: string;
}
interface QueryBindFrm { 
  /** 用户来源：0 爱问大后台 1 社区SaaS */
  source?: string;
  /** 社区ID(爱问大后台:0) */
  sourceId?: string;
}
interface ResetOrganizationUserPwdFrm { 
  /** 用户手机 */
  phone?: string;
}
interface ResultVO { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: unknown;
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<AdminRoleMenusVo> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: AdminRoleMenusVo; 
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<List<B端客户实体>> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: Array<B端客户实体>;
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<List<CommunityRoleAndMenusVo>> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: Array<CommunityRoleAndMenusVo>;
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<List<ComtyMenuTreeVo>> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: Array<ComtyMenuTreeVo>;
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<List<ShopH5VO>> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: Array<ShopH5VO>;
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<PageVO<CommunityRoleVo>> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: PageVO«CommunityRoleVo»; 
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<PageVO<CommunityWhiteAccount>> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: PageVO«CommunityWhiteAccount»; 
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<PageVO<PageAdminRoleVo>> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: PageVO«PageAdminRoleVo»; 
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<PageVO<PageMessageVo>> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: PageVO«PageMessageVo»; 
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<PageVO<实体类VO>> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: PageVO«实体类VO»; 
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<ShopVO> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: ShopVO; 
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<Void> { 
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<boolean> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: boolean;
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<int> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: number;
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<object> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: unknown;
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface ResultVO<实体类VO> { 
  /** 响应数据：成功时返回需要的数据，失败时返回详细原因或为null */
  data?: 实体类VO; 
  /** 请求状态描述 */
  message?: string;
  /** 请求状态码，200-正确，其它-错误 */
  status?: number;
}
interface SaasCoordinate { 
  /** 坐标 */
  coordinates?: Array<number>;
  /** 类型 */
  type?: string;
}
interface SaveFunctionIntroductionFrm { 
  /** 使用限定 */
  appLimit?: Array<string>;
  /** 应用价格 */
  appPrice?: string;
  /** 使用期限 */
  appTerm?: string;
  /** 应用类型 */
  appType?: string;
  /** icon图标 */
  icon?: string;
  /** 应用id */
  id?: string;
  /** 是否收费（0：不收费；1：收费） */
  isCharge?: string;
  /** 应用名称 */
  name?: string;
  /** 应用简介 */
  synopsis?: string;
  /** 关联路径 */
  url?: string;
  /** 用户id */
  userId?: string;
}
interface ShopAddRequest { 
  /** 商铺地址 */
  address?: string;
  /** 擅长 */
  advantage?: string;
  /** 评分 */
  avgScore?: number;
  /** 品牌成立时间 */
  brandDateTime?: string;
  /** 营业时间数据 */
  businessHoursData?: string;
  /** 营业结束时间 */
  businessHoursEnd?: string;
  /** 营业开始时间 */
  businessHoursStart?: string;
  /** 营业执照图片 */
  businessLicensePics?: Array<PictureFrm>;
  /** 城市Id */
  cityId?: string;
  /** 社区Id */
  communityId?: string;
  /** 合作方式 */
  cooperateType?: string;
  /** 坐标类型（Point） */
  coordinateType?: string;
  /** 横坐标 */
  coordinateX?: number;
  /** 纵坐标 */
  coordinateY?: number;
  /** 科室 */
  department?: string;
  /** 科室ids */
  departmentIds?: Array<Array<number>>;
  /** 区域Id */
  districtId?: string;
  /** 效果分 */
  effectScore?: number;
  /** 医院环境图片 */
  envPics?: Array<PictureFrm>;
  /** 环境分 */
  environmentScore?: number;
  /** 粉丝数 */
  fansNum?: string;
  /** 成立时间 */
  foundingTime?: string;
  /** 荣誉展示（医生）图片 */
  honorDoctorPics?: Array<PictureFrm>;
  /** 荣誉展示（机构）图片 */
  honorOrgPics?: Array<PictureFrm>;
  /** 医院面积 */
  hospitalArea?: string;
  /** 主键(自增) */
  id?: number;
  /** 机构简介 */
  introduction?: string;
  /** 合作状态true：合作  false：非合作 */
  isCooperate?: boolean;
  /** 当前登录用户名 */
  loginUserName?: string;
  /** 商铺名称 */
  name?: string;
  /** 手术室数量 */
  operatingRooms?: number;
  /** 商铺电话 */
  phone?: string;
  /** 商铺图片 */
  pics?: Array<PictureFrm>;
  /** 商详长图 (前端机构介绍图片) */
  productLongPics?: Array<PictureFrm>;
  /** 省份id */
  provinceId?: string;
  /** 执业资格图片 */
  qualificationPics?: Array<PictureFrm>;
  /** 服务分 */
  serviceScore?: number;
  /** 结算方式 */
  settlementType?: string;
  /** 机构类别 多个逗号分隔（MOUTH:口腔; MEDICAL_BEAUTY:医美;） */
  shopCategory?: string;
  /** 连锁店城市数量 */
  shopCityCount?: number;
  /** 连锁店数量 */
  shopCount?: number;
  /** 主体机构 */
  shopMain?: string;
  /** 来源类型 0：爱问大后台 1：社区添加 */
  sourceType?: number;
  /** 特色服务 */
  specialService?: string;
  /** 治疗室数量 */
  treatmentRooms?: number;
}
interface ShopH5VO { 
  /** 商铺地址 */
  address?: string;
  /** 擅长 */
  advantage?: string;
  /** 评分 */
  avgScore?: number;
  /** 品牌成立时间 */
  brandDateTime?: string;
  /** 营业时间数据 */
  businessHoursData?: string;
  /** 营业结束时间 */
  businessHoursEnd?: string;
  /** 营业开始时间 */
  businessHoursStart?: string;
  /** business_hours_type */
  businessHoursType?: number;
  /** 营业执照图片 */
  businessLicensePics?: Array<PictureVO>;
  /** 城市Id */
  cityId?: string;
  /** 社区Id */
  communityId?: string;
  /** 坐标类型 */
  coordinateType?: string;
  /** 横坐标 */
  coordinateX?: number;
  /** 纵坐标 */
  coordinateY?: number;
  /** 科室 */
  department?: string;
  /** 距离（km） */
  distance?: number;
  /** 区域Id */
  districtId?: string;
  /** 效果分 */
  effectScore?: number;
  /** 医院环境图片 */
  envPics?: Array<PictureVO>;
  /** 环境分 */
  environmentScore?: number;
  /** 粉丝数 */
  fansNum?: string;
  /** 成立时间 */
  foundingTime?: string;
  /** 荣誉展示（医生）图片 */
  honorDoctorPics?: Array<PictureVO>;
  /** 荣誉展示（机构）图片 */
  honorOrgPics?: Array<PictureVO>;
  /** 医院面积 */
  hospitalArea?: string;
  /** 主键(自增) */
  id?: number;
  /** 机构简介 */
  introduction?: string;
  /** 机构小标签 多个逗号分隔（十大名院, ..） */
  label?: string;
  /** 右上角标签文本 */
  marketingText?: string;
  /** 商铺名称 */
  name?: string;
  /** 手术室数量 */
  operatingRooms?: number;
  /** 机构ID */
  orgId?: string;
  /** 机构名称 */
  orgName?: string;
  /** 商铺电话 */
  phone?: string;
  /** 商铺logo图片 */
  pic?: Array<PictureVO>;
  /** 商详长图 (前端机构介绍图片) */
  productLongPics?: Array<PictureVO>;
  /** 省份id */
  provinceId?: string;
  /** 执业资格图片 */
  qualificationPics?: Array<PictureVO>;
  /** 推荐文案 */
  recommendText?: string;
  /** 服务分 */
  serviceScore?: number;
  /** 机构类别 多个逗号分隔（MOUTH:口腔; MEDICAL_BEAUTY:医美;） */
  shopCategory?: string;
  /** 主体机构 */
  shopMain?: string;
  /** 商铺类型（口腔医院MOUTH_HOSPITAL；连锁门诊部CHAIN_OUTPAITENT；口腔门诊部MOUTH_OUTPAITENT；口腔诊所MOUTH_CLINIC；公立医院PUBLIC_HOSPITAL ；民营医院PRIVATE_HOSPITAL） */
  shopType?: string;
  /** 特色服务 */
  specialService?: string;
  /** 治疗室数量 */
  treatmentRooms?: number;
  /** 评价文本 */
  valuationText?: string;
}
interface ShopPageRequest { 
  /** 创建时间 */
  beginTime?: string;
  /** 社区id */
  communityId?: string;
  /** 社区名称（支持模糊搜索） */
  communityName?: string;
  /** 创建时间 */
  endTime?: string;
  /** 商铺Id */
  id?: number;
  /** 合作状态true：合作  false：非合作 */
  isCooperate?: boolean;
  /** 是否上架商铺：false下架，true上架 */
  isVisible?: boolean;
  /** 商家名称（支持模糊搜索） */
  name?: string;
  /** 机构id */
  orgId?: string;
  /** 机构名称（支持模糊搜索） */
  orgName?: string;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 机构类别 多个逗号分隔（MOUTH:口腔; MEDICAL_BEAUTY:医美;） */
  shopCategory?: string;
  /** 主体机构 */
  shopMain?: string;
}
interface ShopUpdateOperationFieldRequest { 
  /** 评分 */
  avgScore?: number;
  /** 合作方式 */
  cooperateType?: string;
  /** 效果分 */
  effectScore?: number;
  /** 环境分 */
  environmentScore?: number;
  /** 粉丝数 */
  fansNum?: string;
  /** 主键(自增) */
  id?: number;
  /** 当前登录用户名 */
  loginUserName?: string;
  /** 服务分 */
  serviceScore?: number;
  /** 结算方式 */
  settlementType?: string;
  /** 连锁店城市数量 */
  shopCityCount?: number;
  /** 连锁店数量 */
  shopCount?: number;
}
interface ShopUpdateRequest { 
  /** 商铺地址 */
  address?: string;
  /** 擅长 */
  advantage?: string;
  /** 评分 */
  avgScore?: number;
  /** 社区Id */
  baseId?: string;
  /** 品牌成立时间 */
  brandDateTime?: string;
  /** 营业时间数据 */
  businessHoursData?: string;
  /** 营业执照图片 */
  businessLicensePics?: Array<PictureFrm>;
  /** 城市Id */
  cityId?: string;
  /** 社区Id */
  communityId?: string;
  /** 合作方式 */
  cooperateType?: string;
  /** 坐标类型（Point） */
  coordinateType?: string;
  /** 横坐标 */
  coordinateX?: number;
  /** 纵坐标 */
  coordinateY?: number;
  /** 科室 */
  department?: string;
  /** 科室ids */
  departmentIds?: Array<Array<number>>;
  /** 区域Id */
  districtId?: string;
  /** 效果分 */
  effectScore?: number;
  /** 医院环境图片 */
  envPics?: Array<PictureFrm>;
  /** 环境分 */
  environmentScore?: number;
  /** 粉丝数 */
  fansNum?: string;
  /** 成立时间 */
  foundingTime?: string;
  /** 荣誉展示（医生）图片 */
  honorDoctorPics?: Array<PictureFrm>;
  /** 荣誉展示（机构）图片 */
  honorOrgPics?: Array<PictureFrm>;
  /** 医院面积 */
  hospitalArea?: string;
  /** 主键(自增) */
  id?: number;
  /** 机构简介 */
  introduction?: string;
  /** 合作状态true：合作  false：非合作 */
  isCooperate?: boolean;
  /** 店铺等级 */
  level?: number;
  /** 当前登录用户名 */
  loginUserName?: string;
  /** 商铺名称 */
  name?: string;
  /** 手术室数量 */
  operatingRooms?: number;
  /** 商铺电话 */
  phone?: string;
  /** 商铺图片 */
  pics?: Array<PictureFrm>;
  /** 商详长图 (前端机构介绍图片) */
  productLongPics?: Array<PictureFrm>;
  /** 省份id */
  provinceId?: string;
  /** 执业资格图片 */
  qualificationPics?: Array<PictureFrm>;
  /** 服务分 */
  serviceScore?: number;
  /** 结算方式 */
  settlementType?: string;
  /** 机构类别 多个逗号分隔（MOUTH:口腔; MEDICAL_BEAUTY:医美;） */
  shopCategory?: string;
  /** 连锁店城市数量 */
  shopCityCount?: number;
  /** 连锁店数量 */
  shopCount?: number;
  /** 主体机构 */
  shopMain?: string;
  /** 商铺类型（口腔医院；连锁门诊部；口腔门诊部；口腔诊所；公立医院 ；民营医院） */
  shopType?: string;
  /** 来源类型 0：爱问大后台 1：社区添加 */
  sourceType?: number;
  /** 特色服务 */
  specialService?: string;
  /** 社区状态 0：已下架、1：已上线、2：已注销、3：未上线、4：上线审核中、5：上线审核失败、6：违规下架 */
  status?: number;
  /** 治疗室数量 */
  treatmentRooms?: number;
}
interface ShopVO { 
  /** 商铺地址 */
  address?: string;
  /** 擅长 */
  advantage?: string;
  /** 到店礼内容 */
  arriverShopText?: string;
  /** 商户审核状态 0:未提交审核 1：审核中 2：审核通过 3:审核拒绝 */
  auditStatus?: number;
  /** 评分 */
  avgScore?: number;
  /** 社区Id */
  baseId?: string;
  /** 品牌成立时间 */
  brandDateTime?: string;
  /** 营业时间数据 */
  businessHoursData?: string;
  /** 营业执照图片 */
  businessLicensePics?: Array<PictureVO>;
  /** 城市Id */
  cityId?: string;
  /** 社区id */
  communityId?: string;
  /** 社区名称（支持模糊搜索） */
  communityName?: string;
  /** 咨询礼内容 */
  consultText?: string;
  /** 合作方式 可用值:BUSINESS,NOT_BUSINESS    说明：商业合作 BUSINESS, 非商业合作 NOT_BUSINESS */
  cooperateType?: string;
  /** 坐标类型 */
  coordinateType?: string;
  /** 横坐标 */
  coordinateX?: number;
  /** 纵坐标 */
  coordinateY?: number;
  /** 创建人 */
  createBy?: string;
  /** 创建时间 */
  createTime?: string;
  /** 科室 */
  department?: string;
  /** 科室id集合 */
  departmentIds?: Array<Array<number>>;
  /** 科室信息 */
  departments?: Array<DepartmentVO>;
  /** 区域Id */
  districtId?: string;
  /** 效果分 */
  effectScore?: number;
  /** 医院环境图片 */
  envPics?: Array<PictureVO>;
  /** 环境分 */
  environmentScore?: number;
  /** 粉丝数 */
  fansNum?: string;
  /** 成立时间 */
  foundingTime?: string;
  /** 荣誉展示（医生）图片 */
  honorDoctorPics?: Array<PictureVO>;
  /** 荣誉展示（机构）图片 */
  honorOrgPics?: Array<PictureVO>;
  /** 医院面积 */
  hospitalArea?: string;
  /** 主键(自增) */
  id?: number;
  /** 保险服务内容 */
  insuranceContent?: string;
  /** 机构简介 */
  introduction?: string;
  /** 合作状态1：合作  0：非合作 */
  isCooperate?: boolean;
  /** 是否删除 */
  isDeleted?: boolean;
  /** 是否入驻社区 true入驻 false未入驻 */
  isEnterCommunity?: boolean;
  /** 是否入驻社区 入驻 未入驻 */
  isEnterCommunityName?: string;
  /** 是否报销路费 */
  isFreeTaxi?: boolean;
  /** 是否医保定点 */
  isMedicare?: boolean;
  /** 机构小标签 多个逗号分隔（十大名院, ..） */
  label?: string;
  /** 店铺等级 */
  level?: number;
  /** 右上角标签文本 */
  marketingText?: string;
  /** 牙椅数量 */
  mouthChairCount?: number;
  /** 商家名称（支持模糊搜索） */
  name?: string;
  /** 手术室数量 */
  operatingRooms?: number;
  /** 运营图片 */
  operationPics?: Array<PictureVO>;
  /** 机构id */
  orgId?: string;
  /** 机构名称（支持模糊搜索） */
  orgName?: string;
  /** 商铺电话 */
  phone?: string;
  /** 商铺图片 */
  pic?: Array<PictureVO>;
  /** 商详长图 (前端机构介绍图片) */
  productLongPics?: Array<PictureVO>;
  /** 省份id */
  provinceId?: string;
  /** 执业资格图片 */
  qualificationPics?: Array<PictureVO>;
  /** 推荐文案 */
  recommendText?: string;
  /** 拒绝原因 */
  rejectReason?: string;
  /** 服务分 */
  serviceScore?: number;
  /** 结算方式 CPS  CPA */
  settlementType?: string;
  /** 强制下架原因 */
  shelfOffReason?: string;
  /** 机构类别 多个逗号分隔（MOUTH:口腔; MEDICAL_BEAUTY:医美;） */
  shopCategory?: string;
  /** 连锁店城市数量 */
  shopCityCount?: number;
  /** 连锁店数量 */
  shopCount?: number;
  /** 主体机构 */
  shopMain?: string;
  /** 商铺类型（口腔医院MOUTH_HOSPITAL；连锁门诊部CHAIN_OUTPAITENT；口腔门诊部MOUTH_OUTPAITENT；口腔诊所MOUTH_CLINIC；公立医院PUBLIC_HOSPITAL ；民营医院PRIVATE_HOSPITAL） */
  shopType?: string;
  /** 商户链接 */
  shopUrl?: string;
  /** 特色服务 */
  specialService?: string;
  /** 社区状态 0：已下线、1：已上线、2：已注销、3：未上线、4：上线审核中、5：上线审核失败、6：违规下线 */
  status?: number;
  /** 成交礼文案 */
  successPayText?: string;
  /** 关联医生 */
  tempDoctors?: Array<TempDoctorRelationVO>;
  /** 治疗室数量 */
  treatmentRooms?: number;
  /** 修改人 */
  updateBy?: string;
  /** 最后更新时间 */
  updateTime?: string;
  /** 评价文本 */
  valuationText?: string;
}
interface SpecialTopicActivityVO { 
  /** 文章数 */
  articleCount?: string;
  /** 专题id */
  classifyId?: string;
  /** 专题名称 */
  classifyName?: string;
  /** 社区id */
  communityId?: string;
  /** 掩码地址 */
  coverUrl?: string;
  /** 创建时间 */
  createTime?: string;
  /** 创建者id */
  createUserId?: string;
  /** 部门id */
  departIds?: Array<string>;
  /** 主键id */
  id?: string;
  /** 专题介绍 */
  introduce?: string;
  /** 订单号 */
  orderNum?: number;
  /** 机构id */
  orgId?: string;
  /** 发布时间 */
  publishTime?: string;
  /** 发布者ID */
  publishUserId?: string;
  /** 发布者名称 */
  publishUserName?: string;
  /** pv */
  pv?: string;
  recommend?: boolean;
  /** 来源平台 */
  sourcePlatform?: string;
  /** 状态 */
  status?: string;
  /** 标题 */
  title?: string;
  top?: boolean;
  /** 更新时间 */
  updateTime?: string;
  /** 更新者id */
  updateUserId?: string;
  /** pv */
  uv?: string;
}
interface SyncThirdUserFrm { 
  /** 头像 */
  avatar?: string;
  /** 名字 */
  name?: string;
  /** 密码(不传默认:123456) */
  password?: string;
  /** 手机号 */
  phone?: string;
  /** 用户来源：0 爱问大后台 1 社区SaaS */
  source?: string;
  /** 社区ID(爱问大后台:0) */
  sourceId?: string;
  /** 第三方用户ID */
  thirdUserId?: string;
  /** 用户名 */
  username?: string;
}
interface TabMenu { 
  /** 备注 */
  info?: string;
  /** 名称 */
  name?: string;
  /** 排序 */
  sort?: number;
  /** 子级url */
  url?: string;
}
interface TempDoctorRelationVO { 
  /** 擅长项目 多个逗号分割 */
  catalogOfExpertise?: string;
  /** 社区id */
  communityId?: string;
  /** 医端医生id */
  doctorId?: string;
  /** id */
  id?: number;
  /** introduce 医生简介 */
  introduce?: string;
  /** 医生名称 */
  name?: string;
  /** 查询商品的关联医生才会有 商品Id */
  productId?: number;
  /** 医生职称 */
  profession?: string;
  /** 店铺Id */
  shopId?: number;
  /** 从业年限 */
  workingYears?: string;
}
interface TitleInfo { 
  /** 职称报价集合 */
  titlePriceInfos?: Array<TitlePriceInfo>;
  /** 执业类型 */
  titleType?: string;
}
interface TitlePriceInfo { 
  /** 医生数 */
  docNum?: number;
  /** 每场直播奖励 */
  liveReward?: number;
  /** 要求数量 */
  number?: number;
  /** 每篇文章奖励 */
  reward?: number;
  /** 职称等级 */
  titleLevel?: string;
  /** 每篇视频奖励 */
  videoReward?: number;
}
interface UpdateAuditInfoRequest { 
  /** 不通过原因 */
  auditReason?: string;
  /** 审核状态 */
  auditStatus?: number;
  bid?: string;
  /** 社区id */
  communityId?: string;
  /** 申请上线记录id */
  companyCode?: string;
  /** 企业名称 */
  corporateName?: string;
  /** 社区资质 */
  credentials?: Array<Credential>;
  doctorInfo?: Array<DoctorInfo>;
  /** 联系人 */
  linkman?: string;
  /** 旧的认证资料 */
  oldModeType?: Array<Credential>;
  /** 联系电话 */
  phone?: string;
  /** 审核类型 */
  type?: number;
}
interface UpdateAuditStatusRequest { 
  /** 申请上线记录id */
  applyId?: string;
  /** 原因 */
  auditReason?: string;
  /** 社区认证审核(不通过:0,通过:1), 社区状态(0：已下线、1：已上线、2：已注销、3：未上线、4：上线审核中、5：上线审核失败、6：违规下架) */
  auditStatus?: string;
  /** 社区id */
  communityId?: string;
  token?: string;
  /** 审核类型 0：社区认证审核 1：申请上线审核 */
  type?: number;
}
interface UpdateHospitalRequest { 
  /** 医院地址 */
  address?: string;
  /** 区域 */
  area?: string;
  /** 城市 */
  city?: string;
  /** 社区id */
  communityId?: string;
  /** 纬度 */
  latitude?: number;
  /** 经度 */
  longitude?: number;
  /** 医院名称 */
  name?: string;
  /** 体制类型 [0：私立、1：公立 ] */
  property?: string;
  /** 省 */
  province?: string;
  /** 医院类别 [3：医院、2：社区卫生服务中心、1：卫生所、0：诊所] */
  type?: string;
}
interface UpdateMessageRequest { 
  bid?: string;
  /** 社区id */
  comtyId?: string;
  /** 消息内容 */
  content?: string;
  /** 主键id(不传为新增，否则修改) */
  messageId?: string;
  /** 读取标识 */
  readFlag?: string;
  /** 标题 */
  title?: string;
  /** 消息类型（0:系统消息:,1:公告消息） */
  type?: string;
  /** 消息版本 */
  version?: string;
}
interface UpdateOrganizationNameFrm { 
  /** 机构id */
  id?: string;
  /** 新的机构名 */
  orgName?: string;
  /** 用户id */
  userId?: string;
}
interface WeChatDetailsVO { 
  /** id */
  id?: string;
  /** 授权方式：0=第三方开放平台方式授权（扫码），1=appId+appSecrect方式授权 */
  oauthType?: string;
  /** 绑定公众号的用户子类型（业务方自定义） */
  subUserType?: string;
  /** 获取数据成功：true-成功，false-失败 */
  success?: boolean;
  /** 绑定公众号的用户ID */
  userId?: string;
  /** 绑定公众号的用户类型：doctor-医端; business-商业; biz-社区; patient-患端 */
  userType?: string;
  /** 授权方公众号所设置的微信号，可能为空 */
  wxAlias?: string;
  /** 授权方appId */
  wxAuthorizationAppid?: string;
  /** 操作公众号的唯一id */
  wxBusinessId?: string;
  /** 用以了解以下功能的开通状况（0代表未开通，1代表已开通）open_store:是否开通微信门店功能 open_scan:是否开通微信扫商品功能 open_pay:是否开通微信支付功能 open_card:是否开通微信卡券功能 open_shake:是否开通微信摇一摇功能 */
  wxBusinessInfo?: string;
  /** 公众号授权给开发者的权限集列表 */
  wxFuncInfo?: string;
  /** 授权方头像 */
  wxHeadImg?: string;
  /** 授权方昵称 */
  wxNickName?: string;
  /** 公众号的主体名称 */
  wxPrincipalName?: string;
  /** 二维码图片的URL */
  wxQrcodeUrl?: string;
  /** { "id": 2 }授权方公众号类型，0代表订阅号，1代表由历史老帐号升级后的订阅号，2代表服务号 */
  wxServiceTypeInfo?: string;
  /** 授权方公众号的原始ID */
  wxUserName?: string;
  /** { "id": 0 }授权方认证类型 */
  wxVerifyTypeInfo?: string;
}
interface WorkWeixinBindFrm { 
  /** 应用Id */
  agentId?: number;
  /** 应用名称 */
  agentName?: string;
  /** 头像 */
  avatar?: string;
  /** 企业Id */
  corpId?: string;
  /** 企业名称 */
  corpName?: string;
  /** 企业应用的secret,用于生成accessToken */
  corpSecret?: string;
  /** 名字 */
  name?: string;
  /** 手机号 */
  phone?: string;
  /** 用户来源：0 爱问大后台 1 社区SaaS */
  source?: string;
  /** 来源ID：社区ID(爱问大后台:0) */
  sourceId?: string;
  /** 第三方用户ID */
  thirdUserId?: string;
  /** 用户名 */
  username?: string;
}
interface 医美订单VO { 
  /** 所属活动ID */
  activityId?: number;
  /** 所属活动名称 */
  activityName?: string;
  /** 品牌名称 */
  brandName?: string;
  /** 下单客户名字 */
  buyer?: string;
  /** 下单客户ID */
  buyerId?: string;
  /** 下单客户手机号 */
  buyerMobile?: string;
  /** 社区id */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** 确认到店时间 */
  confirmArriveTime?: string;
  /** 规格ID */
  cspuId?: string;
  /** 规格名称 */
  cspuName?: string;
  /** 商品ID */
  goodId?: string;
  /** 商品图片 */
  goodImage?: string;
  /** 商品名称 */
  goodName?: string;
  /** 商品价格 */
  goodPrice?: string;
  /** 下单时间 */
  orderCreateTime?: string;
  /** 订单ID */
  orderId?: string;
  /** 订单状态：1.待到店 2.已到店 3.已完成 4.已关闭 */
  orderStatus?: string;
  /** 订单状态描述：待到店 已到店 已完成 已关闭 */
  orderStatusDesc?: string;
  /** 机构ID */
  orgId?: string;
  /** 机构名称 */
  orgName?: string;
  /** 预到店时间 */
  preArriveTime?: string;
  /** 实付金额 */
  realPayAmount?: string;
  /** 核销券码 */
  writeOffCode?: string;
  /** 核销状态：1.未核销 2.已核销 */
  writeOffStatus?: string;
  /** 核销状态描述：未核销 已核销 */
  writeOffStatusDesc?: string;
  /** 核销时间 */
  writeOffTime?: string;
  /** 核销员工userId */
  writeOffUserId?: string;
  /** 核销员工 */
  writeOffUserName?: string;
}
interface 医美订单分页VO { 
  /** 订单分页对象 */
  pageVO?: PageVO«医美订单VO»; 
  /** 实付款总金额 */
  realPayTotalAmount?: string;
}
interface 图片实体 { 
  /** 图片id */
  id?: string;
  /** 图片链接 */
  url?: string;
}
interface 实体类VO { 
  /** 商铺地址 */
  address?: string;
  /** 擅长 */
  advantage?: string;
  /** 评分 */
  avgScore?: number;
  /** 品牌成立时间 */
  brandDateTime?: string;
  /** 营业时间数据 */
  businessHoursData?: string;
  /** 营业执照图片 */
  businessLicensePics?: Array<PictureVO>;
  /** 城市Id */
  cityId?: string;
  /** 社区Id */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** 合作状态 */
  cooperateStatusName?: string;
  /** 合作方式 可用值:BUSINESS,NOT_BUSINESS    说明：商业合作 BUSINESS, 非商业合作 NOT_BUSINESS */
  cooperateType?: string;
  /** 坐标类型 */
  coordinateType?: string;
  /** 横坐标 */
  coordinateX?: number;
  /** 纵坐标 */
  coordinateY?: number;
  /** 创建人 */
  createBy?: string;
  /** 创建时间 */
  createTime?: string;
  /** 科室 */
  department?: string;
  /** 科室id集合 */
  departmentIds?: Array<Array<number>>;
  /** 区域Id */
  districtId?: string;
  /** 效果分 */
  effectScore?: number;
  /** 医院环境图片 */
  envPics?: Array<PictureVO>;
  /** 环境分 */
  environmentScore?: number;
  /** 粉丝数 */
  fansNum?: string;
  /** 成立时间 */
  foundingTime?: string;
  /** 荣誉展示（医生）图片 */
  honorDoctorPics?: Array<PictureVO>;
  /** 荣誉展示（机构）图片 */
  honorOrgPics?: Array<PictureVO>;
  /** 医院面积 */
  hospitalArea?: string;
  /** 主键(自增) */
  id?: number;
  /** 机构简介 */
  introduction?: string;
  /** 合作状态true：合作  false：非合作 */
  isCooperate?: boolean;
  /** 是否删除 */
  isDeleted?: boolean;
  /** 店铺等级 */
  level?: number;
  /** 商铺名称 */
  name?: string;
  /** 手术室数量 */
  operatingRooms?: number;
  /** 机构id */
  orgId?: string;
  /** 机构名称 */
  orgName?: string;
  /** 商铺电话 */
  phone?: string;
  /** 商铺图片 */
  pics?: Array<PictureVO>;
  /** 商详长图 (前端机构介绍图片) */
  productLongPics?: Array<PictureVO>;
  /** 省份id */
  provinceId?: string;
  /** 执业资格图片 */
  qualificationPics?: Array<PictureVO>;
  /** 服务分 */
  serviceScore?: number;
  /** 结算方式 CPS  CPA */
  settlementType?: string;
  /** 机构类别 多个逗号分隔（MOUTH:口腔; MEDICAL_BEAUTY:医美;） */
  shopCategory?: string;
  /** 机构类别名称 多个逗号分隔（MOUTH:口腔; MEDICAL_BEAUTY:医美;） */
  shopCategoryName?: string;
  /** 连锁店城市数量 */
  shopCityCount?: number;
  /** 连锁店数量 */
  shopCount?: number;
  /** 主体机构 */
  shopMain?: string;
  /** 商铺类型（口腔医院MOUTH_HOSPITAL；连锁门诊部CHAIN_OUTPAITENT；口腔门诊部MOUTH_OUTPAITENT；口腔诊所MOUTH_CLINIC；公立医院PUBLIC_HOSPITAL ；民营医院PRIVATE_HOSPITAL） */
  shopType?: string;
  /** 商铺类型名称（口腔医院MOUTH_HOSPITAL；连锁门诊部CHAIN_OUTPAITENT；口腔门诊部MOUTH_OUTPAITENT；口腔诊所MOUTH_CLINIC；公立医院PUBLIC_HOSPITAL ；民营医院PRIVATE_HOSPITAL） */
  shopTypeName?: string;
  /** 特色服务 */
  specialService?: string;
  /** 社区状态 0：已下架、1：已上线、2：已注销、3：未上线、4：上线审核中、5：上线审核失败、6：违规下架 */
  status?: number;
  /** 治疗室数量 */
  treatmentRooms?: number;
  /** 修改人 */
  updateBy?: string;
  /** 最后更新时间 */
  updateTime?: string;
  /** 链接 */
  url?: string;
  /** 上架状态 */
  visibleStatusName?: string;
}
interface 标准分页请求体 { 
  /** 审核状态 0：待审核 1：已通过 2：已拒绝 */
  auditStatus?: string;
  /** 审核时间End */
  auditTimeEnd?: string;
  /** 审核时间start */
  auditTimeStart?: string;
  /** 品牌id */
  brandId?: number;
  /** 类目1 */
  catelog1?: number;
  /** 类目2 */
  catelog2?: number;
  /** 类目3 */
  catelog3?: number;
  /** 类目4 */
  catelog4?: number;
  /** 社区id */
  communityId?: string;
  /** 社区id */
  communityName?: string;
  /** 机构id */
  orgId?: string;
  /** 机构名称 */
  orgName?: string;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 商品id */
  productId?: number;
  /** 产品名称 */
  productName?: string;
  /** 提交时间End */
  submitTimeEnd?: string;
  /** 提交时间start */
  submitTimeStart?: string;
}
interface 活动分发列表 { 
  /** 活动ID */
  activityId?: number;
  /** 活动链接 */
  activityLink?: string;
  /** 活动名称 */
  activityName?: string;
  /** 活动状态 */
  activityStatus?: number;
  /** 报名社区数量 */
  applyCommunityNum?: number;
  /** 报名截止时间 */
  applyDeadlineTime?: string;
  /** 分发社区数量 */
  distCommunityNum?: number;
  /** 分发状态 */
  distStatus?: number;
  /** 活动结束时间 */
  endTime?: string;
  /** 活动商品 */
  productName?: string;
  /** 活动接收时间 */
  receptionTime?: string;
  /** 活动开始时间 */
  startTime?: string;
}
interface 活动分发列表查询 { 
  /** 活动ID */
  activityId?: number;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
}
interface 活动分发列表查询参数 { 
  /** 活动结束时间 */
  activityEndTime?: string;
  /** 活动ID */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /** 活动开始时间 */
  activityStartTime?: string;
  /** 活动状态 0-未开始 1-进行中 2-已结束 */
  activityStatus?: number;
  /** 分发状态 0-待分发 1-分发中(已分发) */
  distributionStatus?: number;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 活动商品 */
  productName?: string;
  /** 活动接收结束时间 */
  receptionEndTime?: string;
  /** 活动接收开始时间 */
  receptionStartTime?: string;
}
interface 活动分发社区列表信息 { 
  /** 分发社区列表 */
  distCommunityListPage?: PageVO«DistCommunityList»; 
  /** 分发状态 0-待分发 1-已分发 */
  distStatus?: number;
}
interface 活动分发社区报名信息 { 
  /** 报名状态 0-待报名 1-部分已报名 2-已报名 3-未报名 4-无报名资格 */
  applyStatus?: number;
  /** 报名时间 */
  applyTime?: string;
  /** 商品品牌 */
  brand?: string;
  /** 机构ID */
  businessId?: string;
  /** 机构名称 */
  businessName?: string;
  /** 社区ID */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** 图片地址 */
  imgUrl?: string;
  /** 商品报价 */
  price?: string;
  /** 商品ID */
  produceId?: number;
  /** 商品名称 */
  produceName?: string;
  /** skuId */
  skuId?: number;
  /** 商品规格 */
  spec?: string;
  /** 商品库存 */
  stock?: number;
}
interface 活动请求参数 { 
  /** 活动ID */
  activityId?: number;
}
interface 社区医生实体 { 
  /** 社区id */
  comtyId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 医端医生主键id（非平台医生无doctorId） */
  doctorId?: string;
  /** 医生头像 */
  headImg?: 图片实体; 
  /** 医院名称 */
  hospitalName?: string;
  /** 主键ID */
  id?: string;
  /** 医生身份证反面照 */
  idCardBackImg?: 图片实体; 
  /** 医生身份证正面照 */
  idCardFrontImg?: 图片实体; 
  /** 是否爱问平台医生（0：否 1：是） */
  isPlatformDoctor?: string;
  /** 医生执业照 */
  licenseImg?: 图片实体; 
  /** 医生姓名 */
  name?: string;
  /** 职称 */
  title?: string;
  /** 更新时间 */
  updateTime?: string;
}
interface 社区符合活动商品信息 { 
  /** 商品品牌 */
  brand?: string;
  /** 商品类目 */
  category?: string;
  /** 图片地址 */
  imgUrl?: string;
  /** 报价区间高值 */
  priceMax?: string;
  /** 报价区间低值 */
  priceMin?: string;
  /** 商品ID */
  productId?: number;
  /** 商品名称 */
  productName?: string;
  /** skuId */
  skuId?: number;
  /** 商品规格 */
  spec?: string;
}
interface 社区绑定信息 { 
  /** appKey */
  appKey?: string;
  /** 绑定类型 */
  bindType?: string;
  /** 博文数 */
  blogCount?: number;
  /** 认证 */
  color?: string;
  /** 社区id */
  comtyId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 粉丝数 */
  fansCount?: number;
  /** 头像 */
  headImg?: string;
  /** 主键id */
  id?: string;
  /** 是否为主账号 */
  mainAccount?: boolean;
  /** 昵称 */
  nickname?: string;
  /** 状态 */
  status?: string;
  /** uid */
  uid?: string;
  /** 更新时间 */
  updateTime?: string;
  /** url */
  url?: string;
  /** 有效期 */
  usefulTime?: string;
}
interface 社区请求参数 { 
  /** 活动ID */
  activityId?: number;
  /** 社区ID */
  communityId?: string;
}
interface 营销活动社区报名详情查询参数 { 
  /** 活动ID */
  activityId?: number;
  /** 报名结束时间 */
  applyEndTime?: string;
  /** 报名开始时间 */
  applyStartTime?: string;
  /** 机构ID */
  businessId?: string;
  /** 机构名称 */
  businessName?: string;
  /** 社区ID */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** 页码，从 1 开始 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 商品ID */
  productId?: number;
  /** 商品名称 */
  productName?: string;
}
interface 营销活动详情 { 
  /** 活动说明 */
  activityDesc?: string;
  /** 活动ID */
  activityId?: number;
  /** 活动链接 */
  activityLink?: string;
  /** 活动名称 */
  activityName?: string;
  /** 报名商品 */
  activityProducts?: Array<社区符合活动商品信息>;
  /** 活动状态 */
  activityStatus?: number;
  /** 报名截止时间 */
  applyDeadlineTime?: string;
  /** 券码有效期 */
  couponCodeValidPeriod?: number;
  /** 活动结束时间 */
  endTime?: string;
  /** 活动商品 */
  productName?: string;
  /** 活动接收时间 */
  receptionTime?: string;
  /** 活动开始时间 */
  startTime?: string;
}
interface 表(product_manage)实体类VO { 
  /** 审核状态 0：待审核 1：已通过 2：已拒绝 */
  auditStatus?: string;
  /** 审核时间 */
  auditTime?: string;
  /** 审核人Id */
  auditUserId?: string;
  /** 审核人名称 */
  auditUserName?: string;
  /** 品牌id */
  brandId?: number;
  /** 品牌名称 */
  brandName?: string;
  /** 类目1 */
  catalog1?: number;
  /** 类目1名称 */
  catalog1Name?: string;
  /** 类目2 */
  catalog2?: number;
  /** 类目2名称 */
  catalog2Name?: string;
  /** 类目3 */
  catalog3?: number;
  /** 类目3名称 */
  catalog3Name?: string;
  /** 社区id */
  communityId?: string;
  /** 社区名称 */
  communityName?: string;
  /** 产品封面 */
  cover?: string;
  /** 创建时间 */
  createTime?: string;
  /** 创建人id */
  creatorId?: string;
  /** 创建人名称 */
  creatorName?: string;
  /** 主键id */
  id?: number;
  /** 机构id */
  orgId?: string;
  /** 机构名称 */
  orgName?: string;
  /** 产品id */
  productId?: number;
  /** 产品图片 */
  productImg?: Array<PictureVO>;
  /** 产品名称 */
  productName?: string;
  /** 原因 */
  reason?: string;
  /** 更新时间 */
  updateTime?: string;
}
interface 表(product_manage_audit_record)实体类Frm { 
  /** 审核状态 */
  auditStatus?: string;
  /** 审核人id */
  auditUserId?: string;
  /** 产品管理id */
  id?: number;
  /** 审核原因 */
  reason?: string;
}
interface 通用ID为Long的查询Frm { 
  /** 根据ID操作 */
  id?: number;
}
interface 通用ID为String的查询Frm { 
  /** 根据ID操作 */
  id?: string;
}

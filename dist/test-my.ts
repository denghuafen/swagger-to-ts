/** /biz/community/getDetail */
namespace BizCommunityGetDetail { 
type RequestParamsType = {
    /** communityId */
    communityId?: string;
}
    /** OK */
type ResponseDataType = CommunityDetailResponse;
interface CommunityDetailResponse {
/** 社区简称 */
  abbreviation?: string
/** 地址 */
  address?: string
/** adminUser? */
  adminUsers?: string
/** 申请上线记录id */
  applyId?: string
/** 预约次数【冗余设计不保存数据，H5展示用】 */
  appointmentCount?: number
/** articleNum? */
  articleNum?: number
/** [未认证:-1、不通过:0 、通过:1 、待审核:2] */
  auditStatus?: string
/** 城市名称 */
  cityName?: string
/** coin */
  coin?: string
/** 社区id */
  communityId?: string
/** 社区名称 */
  communityName?: string
/** 纬度 */
  coordinateX?: number
/** 经度 */
  coordinateY?: number
/** 企业名称 */
  corporateName?: string
/** 创建时间 */
  createTime?: string
/** 社区资质 */
  credentials?: Array<Record<string,string>>
/** 社区科室信息 */
  deparements?: Array<Department>
  doctorInfoList?: Array<Custom1>
/** 社区医生列表【冗余设计不保存数据，H5展示用】 */
  doctorList?: Array<CommunityCustomer>
/** 医生评价分【冗余设计不保存数据，H5展示用】 */
  doctorScore?: number
/** 医院库医院主键id */
  hospitalId?: string
/** 医院名称 */
  hospitalName?: string
/** 医院类型【0：诊所、1：卫生所、2：社区卫生服务中心、3：医院】 */
  hospitalType?: string
/** 社区简介 */
  introduce?: string
/** 宣传语 */
  introduction?: string
/** 科室标签信息 */
  labels?: Array<DepartmentLabel>
/** 联系人 */
  linkman?: string
/** 社区logo图片 */
  logo?: string
/** 机构id */
  originId?: string
/** 机构名称 */
  originName?: string
/** 联系方式 */
  phone?: string
/** articleNum? */
  postNum?: number
/** 经营性质 [0：私立、1：公立 ] */
  property?: string
/** roleId? */
  roleId?: string
/** （0：已下线、1：已上线、2：已注销、3：未上线、4：上线审核中、5：上线审核失败、6：违规下架） */
  status?: string
/** totalUser? */
  totalUser?: number
/** 社区类型v1.5.6版本(1:医院 2:机构/集团 3:医生团队 4:项目型 5-药企、6-医生集团) */
  type?: string
/** 社区类型名称 */
  typeName?: string
/** 用户数量 */
  userCount?: number

 }; 
interface Record<T = string,string> {
unknown
 }; 
interface Department {
/** 创建人id */
  createId?: string
/** 创建时间 */
  createTime?: string
/** 创建时间戳--辅助属性 */
  createTimestamp?: number
/** 创建人 */
  creater?: string
/** 主键ID */
  id?: string
/** 科室名称 */
  name?: string
/** 父级科室id */
  parentId?: string
/** 父级科室名称 */
  parentName?: string
/** 排序值 */
  sort?: number
/** 状态（禁用：off、启用：on） */
  status?: string

 }; 
interface Custom1 {
/** 社区id */
  comtyId?: string
/** 创建时间 */
  createTime?: string
/** 医端医生主键id（非平台医生无doctorId） */
  doctorId?: string
/** 医生头像 */
  headImg?: Custom2
/** 医院名称 */
  hospitalName?: string
/** 主键ID */
  id?: string
/** 医生身份证反面照 */
  idCardBackImg?: Custom2
/** 医生身份证正面照 */
  idCardFrontImg?: Custom2
/** 是否爱问平台医生（0：否 1：是） */
  isPlatformDoctor?: string
/** 医生执业照 */
  licenseImg?: Custom2
/** 医生姓名 */
  name?: string
/** 职称 */
  title?: string
/** 更新时间 */
  updateTime?: string

 }; 
interface CommunityCustomer {
/** 是否签署社区活动协议 */
  activitySign?: boolean
/** 所属城市 */
  address?: string
/** 文章贡献数 */
  articlesNumber?: string
/** 提交资质审核申请时间 */
  auditApplyTime?: string
/** 医生审核状态，需要医端同步 */
  auditStatus?: "Y"|"N"|"W"|"I"|"X"|"A"|"Z"
/** 审核时间 配合status判断是什么类型的审核时间 */
  auditTime?: string
  bid?: string
/** 城市id */
  cityId?: string
/** 社区审核申请时间 */
  communityAuditApplyTime?: string
/** 社区审核时间 */
  communityAuditDate?: string
/** 所属社区ID */
  comtyId?: string
/** 创建时间 */
  createTime?: string
/** 客户属性 */
  customerAttribute?: string
/** 客户ID */
  customerId?: string
/** 客户名称 */
  customerName?: string
/** 来源 */
  customerSource?: string
/** 客户类型 */
  customerType?: string
/** 所属科室 */
  depId?: string
/** 科室名称 */
  depName?: string
/** 擅长领域 */
  expertiseArea?: string
  headPicUrl?: string
/** 任职医院 */
  hospital?: string
/** 所属城市 */
  hospitalCity?: string
/** 主键id */
  id?: string
/** 是否已采集信息 0-否 1-是 */
  infoCollectFlag?: number
/** 邀请者Id */
  inviterId?: string
/** 邀请者type */
  inviterType?: string
/** 是否为预约医生 0:不是 1:是 */
  isAppointment?: string
/** 加入社区时间 */
  joinTime?: string
/** 标签 */
  labels?: Array<CommunityLabel>
/** 是否签署直播邀约社区活动协议 */
  liveInvitationSign?: boolean
/** 客户手机号码 */
  phone?: string
/** 发帖数 */
  postNumber?: string
/** 省份id */
  provinceId?: string
/** 所属省份 */
  provinceName?: string
/** 社区审核拒绝原因 */
  reason?: string
/** 客户注册时间 */
  registerTime?: string
/** 回帖数 */
  repliesNumber?: string
/** 客户状态 */
  status?: string
/** 职称 */
  title?: string

 }; 
interface DepartmentLabel {
/** 疾病别名 */
  alias?: string
/** 疾病代号 */
  code?: string
/** 创建人id */
  createId?: string
/** 创建时间 */
  createTime?: string
/** 创建人 */
  creater?: string
/** 科室ID */
  departmentId?: string
/** 科室名称 */
  departmentName?: string
/** 主键ID */
  id?: string
/** 标签名称 */
  labelName?: string
/** 标签类型 */
  labelType?: string
/** 描述 */
  remark?: string
/** 更新时间 */
  updateTime?: string
/** 更新人名称 */
  updater?: string
/** 更新人id */
  updaterId?: string

 }; 
interface Custom2 {
/** 图片id */
  id?: string
/** 图片链接 */
  url?: string

 }; 
interface CommunityLabel {
/** 社区id */
  comtyId?: string
/** 创建时间 */
  createTime?: string
/** 主键id */
  id?: string
/** 标签名称 */
  labelName?: string
/** 标签类型[0:手动标签 1:福利社任务专题标签] */
  labelType?: string
/** 用户数[辅助字段] */
  useCount?: number
/** 标签所属用户类型  doctor:医生， user:用户,  aiwen:爱问后台 */
  userType?: string

 }; 

}
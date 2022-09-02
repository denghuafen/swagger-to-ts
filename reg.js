// let aim = "ResultVO<List<表(t_patient_content_operation_channel_activity)实体类VO>>";
// let aim = "ResultVO<List<表(t_patient_content_operation_channel_activity)实体类VO<实体类VB>>>";
// let aim = "ResultVO";
let aim = "ResultVO<表(t_patient_content_operation_channel_carrier)实体类VO>";
let reg = /((?!\<).*?)\<((?!\>).*?)\>$/

// reg.test(aim);
aim.match(reg);
// let res = aim.match(reg);



let aimStr ="zz发士大夫";
let chiReg = /[\u4e00-\u9fa5]/;
chiReg.test(aim);
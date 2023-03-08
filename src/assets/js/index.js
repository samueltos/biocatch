csid = "443344442KJL";
let context = "Home Page";
window.onload = setCustomerID(csid, context);

function setCustomerID(csid, context){
    cdApi.changeContext(context);
    cdApi.setCustomerSessionId(csid);
}

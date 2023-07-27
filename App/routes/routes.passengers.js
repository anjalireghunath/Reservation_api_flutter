const controler = require("../controller/passenger.controler");

module.exports=function(App){

    App.post("/passenger/createRecord",controler.createRecord);

    App.post("/passenger/updateRecord", controler.updateRecord);

    App.post("/passenger/getList", controler.getList);

    App.post("/passenger/deleteRecord", controler.deleteRecord);

}
function doGet(e){

// Url cua Bang tinh
var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Zy7xh3PLNdwaOCzJs4eftDBDqi2ibMiUL5VbhQqtp7I/edit#gid=0");

// Thay doi ten Trang tinh tai day
var sheet = ss.getSheetByName("users");
  
 return getUsers(sheet); 
  
}

function getUsers(sheet){
  var jo = {};
  var dataArray = [];

// Lay cac hang tu trang tinh va doi ten trong ban ghi
  var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  
  for(var i = 0, l= rows.length; i<l ; i++){
    var dataRow = rows[i];
    var record = {};
    record['id'] = dataRow[1];
    record['code'] = dataRow[2];
    
    dataArray.push(record);
    
  }  
  
  jo.user = dataArray;
  
  var result = JSON.stringify(jo);
  
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  
}

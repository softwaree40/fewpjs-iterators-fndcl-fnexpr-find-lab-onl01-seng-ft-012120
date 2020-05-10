const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record){
  let wonRecord = record.find(function(e){
  return e.result === "W"
   
  });
  return wonRecord ? wonRecord.year : undefined
}


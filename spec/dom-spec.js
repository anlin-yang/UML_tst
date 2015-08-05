
describe("Dom Test", function() {
  var form;
  var testContainer;

  beforeEach(function() {
    var testContainerDiv = document.createElement("div");
    testContainerDiv.id = "test-container";
    document.body.appendChild(testContainerDiv);

    testContainer = document.getElementById('test-container');

    testContainer.innerHTML = "<form>" +
      "1.填空题：<br />" +
      "<input type='text' name='test-1-1' value='啊哈'/><br />" +
      "<input type='text' name='test-1-2' value='无哈'/><br />" +
      "<input type='text' name='test-1-2' value='哈哈'/><br />" +
      "<input type='text' name='test-1-2' value='呵呵'/><br />" +
      "2.单选题：<br />" +
      "<input type='radio' name='test-2-1' value='A' checked='true' /><br />" +
      "<input type='radio' name='test-2-1' value='B' /><br />" +
      "3.多选题：<br />" +
      "<input type='checkbox' name='test-3-1' value='A' checked='true' /><br />" +
      "<input type='checkbox' name='test-3-1' value='B' checked='true' /><br />" +
      "<input type='checkbox' name='test-3-1' value='C' /><br />" +
      "4.判断题：<br />" +
      "<input type='radio' name='test-4-1' value='true'  checked='true' /><br />" +
      "<input type='radio' name='test-4-1' value='false' /><br />" +
      "5.简答题：<br />" +
      "<textarea name='test-5-1' rows='4' cols='20' >你是不是不好</textarea>" +
      "</form>";
    form = document.getElementsByTagName('form')[0];
  });

  afterEach(function() {
    testContainer.innerHTML = "";
  });

  it("should return corrent tag name", function() {
    var theFormAnalyser = new FormAnalyser();
    var result = theFormAnalyser.formSerializer(form);
      expect(result).toEqual([
        {name:"test-1-1",type:"text",value:["啊哈"]},
        {name:"test-1-2",type:"text",value:["无哈","哈哈","呵呵"]},
        {name:"test-2-1",type:"radio",value:"A"},
        {name:"test-3-1",type:"checkbox",value:"AB"},
        {name:"test-4-1",type:"radio",value:"true"}
        ]
      );
  });
});

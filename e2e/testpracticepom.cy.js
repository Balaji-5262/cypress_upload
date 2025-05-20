import TestAutomation from "../fixtures/sawglabs"

describe('test case scenarioPom',()=>{
  it('test casesPOM',()=>{

    const login=new TestAutomation();

    login.visitpage()
    login.usernamefield()
    login.passwordfield()
    login.clickbutton()
    login.assertion()
  })
})



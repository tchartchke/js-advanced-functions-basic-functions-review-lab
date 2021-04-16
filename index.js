function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flare="*"){
  return function(param="special"){
    return `You are ${flare + param + flare}!`
  }
}

const Calculator = {
  add : function(){
    return 1 + 3
  },
  subtract : function(){
    return 1 - 3
  },
  multiply : function (){
    return 1 * 3
  },
  divide : function (){
    return 10/5
  }
}

function actionApplyer(a, funcs){
  let ret = a
  for (let i = 0; i < funcs.length; i++){
    ret = funcs[i](ret)
  }
  return ret
}
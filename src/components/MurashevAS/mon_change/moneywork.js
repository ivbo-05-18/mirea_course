function money(rub,type){
  if(type == 'dol'){
    if(!isNaN(rub) && rub>0){
      return (rub/73.53).toFixed(2)+"$";
    }else{
      return 'Доллары'
    }
  }else if(type == 'eur'){
    if(!isNaN(rub) && rub>0){
      return (rub/79.8).toFixed(2)+"€";
    }else{
      return 'Евро'
    }
  }else{
      return ' '
  }
}

module.exports = money;
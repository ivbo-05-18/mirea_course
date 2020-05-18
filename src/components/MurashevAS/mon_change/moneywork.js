function money(rub,type,course){
  if(type == 'dol'){
    if(!isNaN(rub) && rub>0 && !isNaN(course) && course >0){
      return (rub/course).toFixed(2)+"$";
    }else{
      return 'Доллары'
    }
  }else if(type == 'eur'){
    if(!isNaN(rub) && rub>0 && !isNaN(course) && course >0){
      return (rub/course).toFixed(2)+"€";
    }else{
      return 'Евро'
    }
  }else{
      return ' '
  }
}

module.exports = money;
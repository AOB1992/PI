const howmanypages = (array) => {
    if (!array) {return 0}
    if (array.length == 0) {return 0}
    if(array.length <= 9){ return 1}
    if( array.length >= 10){
        let cut = array.slice(9)
        let quantity = cut.length / 10
        quantity = Math.ceil(quantity)
        return quantity + 1
    }
    return "not found"
}

module.exports = {
    howmanypages
  };
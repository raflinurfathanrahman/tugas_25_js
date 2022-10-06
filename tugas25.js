function tampung (){
    const angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    hasil = angka.join(',')
    console.log('Sebelumnya :',hasil);
    var data = angka.sort()
    console.log('Ascending :',data.join(','));
    var result = data.reverse()
    console.log('Descending :',result.join(','));
    var besar = angka.filter(check1)
    function check1 (element){
        return element > 10;
    }
    console.log('Filter > 10 : '+ besar.join(','));

}
tampung()
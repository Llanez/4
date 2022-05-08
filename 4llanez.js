//Llanez
function equilibrium(arreglo, x){
    var  i, j;
    var left, right;

    for(i = 0; i < n; ++i){

        left = 0;
         for(let j = 0; j < i; j++)
         left += arreglo[j];

         right = 0;
         for(let j = i + 1; j < x; j++)
         right += arreglo[j];

         if(left == right)
            return i;
    }
       return -1;
}
var arreglo = new Array(-7,1,5,2,-4,3,0);
x = arreglo.length;
 console.log(equilibrium(arreglo,x));
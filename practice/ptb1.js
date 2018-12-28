/* 1.Giai phuong trinh bac nhat
step 1 : Chia ra cac truong hop cua a va b 
Neu a = 0 va b = 0 thi phuong trinh vo nghiem
Neu a !=0 va b = 0 thi phuong trinh co nghiem x = 0
Neu a == 0 va b!=0 thi phuong trinh vo nghiem
Con lai thi phuong trinh co nghiem x = -b/a
*/
function giai_phuong_trinh_bac_1(a,b){
    var a;
    var b;
    debugger;
    if(a == 0 && b == 0){
        console.log("Phuong trinh vo so nghiem");
    }else if(a != 0 && b == 0){
        console.log("Phuong trinh co nghiem x= 0 ");
    }else if(a ==0 && b!= 0 ){
        console.log("Phuong trinh vo nghiem");
    }
    else{
        console.log('Phương trình có nghiệm x la ' +(-b/a));
    }
}
giai_phuong_trinh_bac_1(2,6);
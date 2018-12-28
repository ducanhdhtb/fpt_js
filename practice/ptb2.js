/*
 tuonng 
Phuong trinh ax^2 +bx +c = 0 co cong thuc tinh la delta = b^2 -4ac;
Neu delta < 0 thi phuong trinh vo nghiem
Neu delta = 0 thi phuong trinh co nghiem kep la x1 = x2 = -b/2a;
Neu delta > 0 thi phuong trinh co 2 nghiem phan biet x1= +-b+sqrt (2a)
*/
function giai_phuong_trinh_bac_2(a,b,c){
    var a;
    var b;
    var c;
    var delta;
    var x1;
    var x2;
    delta = b*b-4*a*c;
    if(delta < 0){
        document.write("Phuong trinh vo nghiem");
    }else if(delta == 0){
        document.write("Phuong trinh co  nghiem kep x1,x2 la "+ -b/(2*a));
    }else{
        document.write("Phuong trinh co 2 nghiem phan biet x1  la "+ (-b -Math.sqrt(delta))/(2*a));
        document.write("<br>");
        document.write("Phuong trinh co 2 nghiem phan biet x2  la "+ (-b +Math.sqrt(delta))/(2*a));
    }
}

giai_phuong_trinh_bac_2(2,-7,3);
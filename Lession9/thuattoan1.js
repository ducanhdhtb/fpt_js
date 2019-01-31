/**
Given a sorted array and a target value,
 return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array
 */
//  Xét đoạn mảng arr[left…right] cần tìm kiếm phần tử x. Ta so sánh x với phần tử ở vị trí giữa của mảng(mid = (left + right)/2). Nếu:
// Nếu phần tử arr[mid] = x. Kết luận và thoát chương trình.
// Nếu arr[mid] < x. Chỉ thực hiện tìm kiếm trên đoạn arr[mid+1…right].
// Nếu arr[mid] > x. Chỉ thực hiện tìm kiếm trên đoạn arr[left…mid-1].
var searchInsert = function(nums, target) {
    debugger;
    var start = 0;
    var end = nums.length - 1;
    var index = Math.floor((end - start) / 2) + start;
    
    if (target > nums[end]) { // If target > value of last index
        // The target is beyond the end of this array.
        index = nums.length;
    }
    else {
        // Start in middle, divide and conquer.
        while (start < end) {
            // Get value at current index.
            var value = nums[index];
            
            if (value === target) {
                // Found our target.
                result = index;
                break;
            }
            else if (target < value) {
                // Target is lower in array, move the index halfway down.
                end = index;
            }
            else {
                // Target is higher in array, move the index halfway up.
                start = index + 1;
            }
            
            // Get next mid-point.
            index = Math.floor((end - start) / 2) + start;
        }
    }
    
    return index;
};
console.log(searchInsert([1,4,5,6],4));


// int binarySearch(int A[], int key, int left, int right)
// {
//     int mid;

//     while(l < r) // Tìm đến khi chỉ còn 1 số duy nhất
//     {
//         mid = (l + r) / 2;

//         if(A[mid] == key)
//             break;
//         else if(A[mid] > key)    // Khi cái Key nằm bên trái thằng mid
//             r = mid - 1;
//         else                     // Khi cái key năm bên phải
//             l = mid + 1;
//     }

//     if(a[l] == key) return l;   // Nếu tìm được Key
//     else -1;                    // Nếu như Key không tồn tại trong mảng
// }


// Không đệ qui
// int BinarySearch(int a[], int n, int x)
// { 
//     int left = 0;
//     int right = n - 1;
    
//     while (left <= right) {
//         int mid = (left + right) / 2;
//         if (x == a[mid]) 
//             return mid;
//         else if (x < a[mid]) 
//             right = mid - 1;
//         else if (x > a[mid]) 
//             left = mid + 1;
//     } 
//     return -1;
// }
function BinarySearch(arr,target){
    debugger;
    var left = 0;
    var right = arr.length - 1;
    while(left <= right){
        var mid = (left + right) / 2;
        if(target == arr[mid]){
            return true;
        }
        else if(arr[mid] > target){
            right = arr[mid] - 1;
        }
        else if(arr[mid] < target){
            left = arr[mid] + 1;

        }
    }
    return false;

}
console.log(BinarySearch([1,3,5,7],3));
